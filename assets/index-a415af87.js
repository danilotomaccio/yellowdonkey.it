(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pd(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Pe={},Ci=[],en=()=>{},T0=()=>!1,I0=/^on[^a-z]/,Xl=t=>I0.test(t),gd=t=>t.startsWith("onUpdate:"),We=Object.assign,_d=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w0=Object.prototype.hasOwnProperty,de=(t,e)=>w0.call(t,e),G=Array.isArray,Si=t=>Vo(t)==="[object Map]",Jl=t=>Vo(t)==="[object Set]",xp=t=>Vo(t)==="[object Date]",se=t=>typeof t=="function",Fe=t=>typeof t=="string",io=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",ay=t=>Ce(t)&&se(t.then)&&se(t.catch),ly=Object.prototype.toString,Vo=t=>ly.call(t),A0=t=>Vo(t).slice(8,-1),cy=t=>Vo(t)==="[object Object]",md=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ba=pd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R0=/-(\w)/g,Tn=Zl(t=>t.replace(R0,(e,n)=>n?n.toUpperCase():"")),C0=/\B([A-Z])/g,rr=Zl(t=>t.replace(C0,"-$1").toLowerCase()),ec=Zl(t=>t.charAt(0).toUpperCase()+t.slice(1)),nu=Zl(t=>t?`on${ec(t)}`:""),ro=(t,e)=>!Object.is(t,e),ja=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},nl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uy=t=>{const e=parseFloat(t);return isNaN(e)?t:e},S0=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Mp;const Qu=()=>Mp||(Mp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yd(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?N0(s):yd(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Ce(t))return t}}const b0=/;(?![^(]*\))/g,P0=/:([^]+)/,k0=/\/\*[^]*?\*\//g;function N0(t){const e={};return t.replace(k0,"").split(b0).forEach(n=>{if(n){const s=n.split(P0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vd(t){let e="";if(Fe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=vd(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",D0=pd(O0);function hy(t){return!!t||t===""}function x0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=tc(t[s],e[s]);return n}function tc(t,e){if(t===e)return!0;let n=xp(t),s=xp(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=io(t),s=io(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?x0(t,e):!1;if(n=Ce(t),s=Ce(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tc(t[o],e[o]))return!1}}return String(t)===String(e)}function M0(t,e){return t.findIndex(n=>tc(n,e))}const RF=t=>Fe(t)?t:t==null?"":G(t)||Ce(t)&&(t.toString===ly||!se(t.toString))?JSON.stringify(t,dy,2):String(t),dy=(t,e)=>e&&e.__v_isRef?dy(t,e.value):Si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Jl(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!G(e)&&!cy(e)?String(e):e;let Nt;class fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function py(t){return new fy(t)}function L0(t,e=Nt){e&&e.active&&e.effects.push(t)}function gy(){return Nt}function V0(t){Nt&&Nt.cleanups.push(t)}const Ed=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_y=t=>(t.w&gs)>0,my=t=>(t.n&gs)>0,F0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gs},U0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];_y(i)&&!my(i)?i.delete(t):e[n++]=i,i.w&=~gs,i.n&=~gs}e.length=n}},Yu=new WeakMap;let Dr=0,gs=1;const Xu=30;let Gt;const Hs=Symbol(""),Ju=Symbol("");class Td{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,L0(this,s)}run(){if(!this.active)return this.fn();let e=Gt,n=ls;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,ls=!0,gs=1<<++Dr,Dr<=Xu?F0(this):Lp(this),this.fn()}finally{Dr<=Xu&&U0(this),gs=1<<--Dr,Gt=this.parent,ls=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Lp(this),this.onStop&&this.onStop(),this.active=!1)}}function Lp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ls=!0;const yy=[];function or(){yy.push(ls),ls=!1}function ar(){const t=yy.pop();ls=t===void 0?!0:t}function Pt(t,e,n){if(ls&&Gt){let s=Yu.get(t);s||Yu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ed()),vy(i)}}function vy(t,e){let n=!1;Dr<=Xu?my(t)||(t.n|=gs,n=!_y(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function Un(t,e,n,s,i,r){const o=Yu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?md(n)&&a.push(o.get("length")):(a.push(o.get(Hs)),Si(t)&&a.push(o.get(Ju)));break;case"delete":G(t)||(a.push(o.get(Hs)),Si(t)&&a.push(o.get(Ju)));break;case"set":Si(t)&&a.push(o.get(Hs));break}if(a.length===1)a[0]&&Zu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Zu(Ed(l))}}function Zu(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Vp(s);for(const s of n)s.computed||Vp(s)}function Vp(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const $0=pd("__proto__,__v_isRef,__isVue"),Ey=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(io)),B0=Id(),j0=Id(!1,!0),H0=Id(!0),Fp=W0();function W0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)Pt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){or();const s=pe(this)[e].apply(this,n);return ar(),s}}),t}function q0(t){const e=pe(this);return Pt(e,"has",t),e.hasOwnProperty(t)}function Id(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?aA:Ry:e?Ay:wy).get(s))return s;const o=G(s);if(!t){if(o&&de(Fp,i))return Reflect.get(Fp,i,r);if(i==="hasOwnProperty")return q0}const a=Reflect.get(s,i,r);return(io(i)?Ey.has(i):$0(i))||(t||Pt(s,"get",i),e)?a:rt(a)?o&&md(i)?a:a.value:Ce(a)?t?Sy(a):sc(a):a}}const K0=Ty(),z0=Ty(!0);function Ty(t=!1){return function(n,s,i,r){let o=n[s];if(Ui(o)&&rt(o)&&!rt(i))return!1;if(!t&&(!sl(i)&&!Ui(i)&&(o=pe(o),i=pe(i)),!G(n)&&rt(o)&&!rt(i)))return o.value=i,!0;const a=G(n)&&md(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?ro(i,o)&&Un(n,"set",s,i):Un(n,"add",s,i)),l}}function G0(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Un(t,"delete",e,void 0),s}function Q0(t,e){const n=Reflect.has(t,e);return(!io(e)||!Ey.has(e))&&Pt(t,"has",e),n}function Y0(t){return Pt(t,"iterate",G(t)?"length":Hs),Reflect.ownKeys(t)}const Iy={get:B0,set:K0,deleteProperty:G0,has:Q0,ownKeys:Y0},X0={get:H0,set(t,e){return!0},deleteProperty(t,e){return!0}},J0=We({},Iy,{get:j0,set:z0}),wd=t=>t,nc=t=>Reflect.getPrototypeOf(t);function ma(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&Pt(i,"get",e),Pt(i,"get",r));const{has:o}=nc(i),a=s?wd:n?Sd:oo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ya(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&Pt(s,"has",t),Pt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function va(t,e=!1){return t=t.__v_raw,!e&&Pt(pe(t),"iterate",Hs),Reflect.get(t,"size",t)}function Up(t){t=pe(t);const e=pe(this);return nc(e).has.call(e,t)||(e.add(t),Un(e,"add",t,t)),this}function $p(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=nc(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ro(e,o)&&Un(n,"set",t,e):Un(n,"add",t,e),this}function Bp(t){const e=pe(this),{has:n,get:s}=nc(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Un(e,"delete",t,void 0),r}function jp(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Un(t,"clear",void 0,void 0),n}function Ea(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?wd:t?Sd:oo;return!t&&Pt(a,"iterate",Hs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ta(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=Si(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?wd:e?Sd:oo;return!e&&Pt(r,"iterate",l?Ju:Hs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Gn(t){return function(...e){return t==="delete"?!1:this}}function Z0(){const t={get(r){return ma(this,r)},get size(){return va(this)},has:ya,add:Up,set:$p,delete:Bp,clear:jp,forEach:Ea(!1,!1)},e={get(r){return ma(this,r,!1,!0)},get size(){return va(this)},has:ya,add:Up,set:$p,delete:Bp,clear:jp,forEach:Ea(!1,!0)},n={get(r){return ma(this,r,!0)},get size(){return va(this,!0)},has(r){return ya.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Ea(!0,!1)},s={get(r){return ma(this,r,!0,!0)},get size(){return va(this,!0)},has(r){return ya.call(this,r,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ta(r,!1,!1),n[r]=Ta(r,!0,!1),e[r]=Ta(r,!1,!0),s[r]=Ta(r,!0,!0)}),[t,n,e,s]}const[eA,tA,nA,sA]=Z0();function Ad(t,e){const n=e?t?sA:nA:t?tA:eA;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const iA={get:Ad(!1,!1)},rA={get:Ad(!1,!0)},oA={get:Ad(!0,!1)},wy=new WeakMap,Ay=new WeakMap,Ry=new WeakMap,aA=new WeakMap;function lA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cA(t){return t.__v_skip||!Object.isExtensible(t)?0:lA(A0(t))}function sc(t){return Ui(t)?t:Rd(t,!1,Iy,iA,wy)}function Cy(t){return Rd(t,!1,J0,rA,Ay)}function Sy(t){return Rd(t,!0,X0,oA,Ry)}function Rd(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=cA(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function bi(t){return Ui(t)?bi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ui(t){return!!(t&&t.__v_isReadonly)}function sl(t){return!!(t&&t.__v_isShallow)}function by(t){return bi(t)||Ui(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Cd(t){return nl(t,"__v_skip",!0),t}const oo=t=>Ce(t)?sc(t):t,Sd=t=>Ce(t)?Sy(t):t;function Py(t){ls&&Gt&&(t=pe(t),vy(t.dep||(t.dep=Ed())))}function ky(t,e){t=pe(t);const n=t.dep;n&&Zu(n)}function rt(t){return!!(t&&t.__v_isRef===!0)}function Vn(t){return Oy(t,!1)}function Ny(t){return Oy(t,!0)}function Oy(t,e){return rt(t)?t:new uA(t,e)}class uA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:oo(e)}get value(){return Py(this),this._value}set value(e){const n=this.__v_isShallow||sl(e)||Ui(e);e=n?e:pe(e),ro(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oo(e),ky(this))}}function nt(t){return rt(t)?t.value:t}const hA={get:(t,e,n)=>nt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return rt(i)&&!rt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dy(t){return bi(t)?t:new Proxy(t,hA)}class dA{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Td(e,()=>{this._dirty||(this._dirty=!0,ky(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return Py(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fA(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=en):(s=t.get,i=t.set),new dA(s,i,r||!i,n)}function cs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ic(r,e,n)}return i}function Wt(t,e,n,s){if(se(t)){const r=cs(t,e,n,s);return r&&ay(r)&&r.catch(o=>{ic(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Wt(t[r],e,n,s));return i}function ic(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){cs(l,null,10,[t,o,a]);return}}pA(t,n,i,s)}function pA(t,e,n,s=!0){console.error(t)}let ao=!1,eh=!1;const ft=[];let hn=0;const Pi=[];let On=null,Ds=0;const xy=Promise.resolve();let bd=null;function My(t){const e=bd||xy;return t?e.then(this?t.bind(this):t):e}function gA(t){let e=hn+1,n=ft.length;for(;e<n;){const s=e+n>>>1;lo(ft[s])<t?e=s+1:n=s}return e}function Pd(t){(!ft.length||!ft.includes(t,ao&&t.allowRecurse?hn+1:hn))&&(t.id==null?ft.push(t):ft.splice(gA(t.id),0,t),Ly())}function Ly(){!ao&&!eh&&(eh=!0,bd=xy.then(Fy))}function _A(t){const e=ft.indexOf(t);e>hn&&ft.splice(e,1)}function mA(t){G(t)?Pi.push(...t):(!On||!On.includes(t,t.allowRecurse?Ds+1:Ds))&&Pi.push(t),Ly()}function Hp(t,e=ao?hn+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function Vy(t){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,On){On.push(...e);return}for(On=e,On.sort((n,s)=>lo(n)-lo(s)),Ds=0;Ds<On.length;Ds++)On[Ds]();On=null,Ds=0}}const lo=t=>t.id==null?1/0:t.id,yA=(t,e)=>{const n=lo(t)-lo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fy(t){eh=!1,ao=!0,ft.sort(yA);const e=en;try{for(hn=0;hn<ft.length;hn++){const n=ft[hn];n&&n.active!==!1&&cs(n,null,14)}}finally{hn=0,ft.length=0,Vy(),ao=!1,bd=null,(ft.length||Pi.length)&&Fy()}}function vA(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Pe;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(uy))}let a,l=s[a=nu(e)]||s[a=nu(Tn(e))];!l&&r&&(l=s[a=nu(rr(e))]),l&&Wt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(c,t,6,i)}}function Uy(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=Uy(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ce(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):We(o,r),Ce(t)&&s.set(t,o),o)}function rc(t,e){return!t||!Xl(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,rr(e))||de(t,e))}let ot=null,oc=null;function il(t){const e=ot;return ot=t,oc=t&&t.type.__scopeId||null,e}function kd(t){oc=t}function Nd(){oc=null}function ts(t,e=ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ng(-1);const r=il(e);let o;try{o=t(...i)}finally{il(r),s._d&&ng(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function su(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:m}=t;let v,T;const C=il(t);try{if(n.shapeFlag&4){const w=i||s;v=un(u.call(w,w,h,r,f,d,_)),T=l}else{const w=e;v=un(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),T=e.props?l:EA(l)}}catch(w){Wr.length=0,ic(w,t,1),v=je(qt)}let S=v;if(T&&m!==!1){const w=Object.keys(T),{shapeFlag:B}=S;w.length&&B&7&&(o&&w.some(gd)&&(T=TA(T,o)),S=_s(S,T))}return n.dirs&&(S=_s(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),v=S,il(C),v}const EA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xl(n))&&((e||(e={}))[n]=t[n]);return e},TA=(t,e)=>{const n={};for(const s in t)(!gd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function IA(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!rc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wp(s,o,c):!0:!!o;return!1}function Wp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!rc(n,r))return!0}return!1}function wA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const AA=t=>t.__isSuspense;function RA(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):mA(t)}const Ia={};function ki(t,e,n){return $y(t,e,n)}function $y(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Pe){var a;const l=gy()===((a=Ye)==null?void 0:a.scope)?Ye:null;let c,u=!1,h=!1;if(rt(t)?(c=()=>t.value,u=sl(t)):bi(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(w=>bi(w)||sl(w)),c=()=>t.map(w=>{if(rt(w))return w.value;if(bi(w))return Ls(w);if(se(w))return cs(w,l,2)})):se(t)?e?c=()=>cs(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Wt(t,l,3,[f])}:c=en,e&&s){const w=c;c=()=>Ls(w())}let d,f=w=>{d=C.onStop=()=>{cs(w,l,4)}},_;if(ho)if(f=en,e?n&&Wt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const w=TR();_=w.__watcherHandles||(w.__watcherHandles=[])}else return en;let m=h?new Array(t.length).fill(Ia):Ia;const v=()=>{if(C.active)if(e){const w=C.run();(s||u||(h?w.some((B,H)=>ro(B,m[H])):ro(w,m)))&&(d&&d(),Wt(e,l,3,[w,m===Ia?void 0:h&&m[0]===Ia?[]:m,f]),m=w)}else C.run()};v.allowRecurse=!!e;let T;i==="sync"?T=v:i==="post"?T=()=>bt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>Pd(v));const C=new Td(c,T);e?n?v():m=C.run():i==="post"?bt(C.run.bind(C),l&&l.suspense):C.run();const S=()=>{C.stop(),l&&l.scope&&_d(l.scope.effects,C)};return _&&_.push(S),S}function CA(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?By(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=Ye;$i(this);const a=$y(i,r.bind(s),n);return o?$i(o):Ws(),a}function By(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ls(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))Ls(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Ls(t[n],e);else if(Jl(t)||Si(t))t.forEach(n=>{Ls(n,e)});else if(cy(t))for(const n in t)Ls(t[n],e);return t}function CF(t,e){const n=ot;if(n===null)return t;const s=hc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Pe]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Ls(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Cs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(or(),Wt(l,n,8,[t.el,a,t,e]),ar())}}function SA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ky(()=>{t.isMounted=!0}),zy(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],jy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},bA={name:"BaseTransition",props:jy,setup(t,{slots:e}){const n=Vd(),s=SA();let i;return()=>{const r=e.default&&Wy(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==qt){o=m;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return iu(o);const c=qp(o);if(!c)return iu(o);const u=th(c,a,s,n);nh(c,u);const h=n.subTree,d=h&&qp(h);let f=!1;const{getTransitionKey:_}=c.type;if(_){const m=_();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(d&&d.type!==qt&&(!xs(c,d)||f)){const m=th(d,a,s,n);if(nh(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},iu(o);l==="in-out"&&c.type!==qt&&(m.delayLeave=(v,T,C)=>{const S=Hy(s,d);S[String(d.key)]=d,v._leaveCb=()=>{T(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},PA=bA;function Hy(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function th(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:_,onBeforeAppear:m,onAppear:v,onAfterAppear:T,onAppearCancelled:C}=e,S=String(t.key),w=Hy(n,t),B=(F,ie)=>{F&&Wt(F,s,9,ie)},H=(F,ie)=>{const re=ie[1];B(F,ie),G(F)?F.every(De=>De.length<=1)&&re():F.length<=1&&re()},ne={mode:r,persisted:o,beforeEnter(F){let ie=a;if(!n.isMounted)if(i)ie=m||a;else return;F._leaveCb&&F._leaveCb(!0);const re=w[S];re&&xs(t,re)&&re.el._leaveCb&&re.el._leaveCb(),B(ie,[F])},enter(F){let ie=l,re=c,De=u;if(!n.isMounted)if(i)ie=v||l,re=T||c,De=C||u;else return;let W=!1;const ve=F._enterCb=It=>{W||(W=!0,It?B(De,[F]):B(re,[F]),ne.delayedLeave&&ne.delayedLeave(),F._enterCb=void 0)};ie?H(ie,[F,ve]):ve()},leave(F,ie){const re=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ie();B(h,[F]);let De=!1;const W=F._leaveCb=ve=>{De||(De=!0,ie(),ve?B(_,[F]):B(f,[F]),F._leaveCb=void 0,w[re]===t&&delete w[re])};w[re]=t,d?H(d,[F,W]):W()},clone(F){return th(F,e,n,s)}};return ne}function iu(t){if(ac(t))return t=_s(t),t.children=null,t}function qp(t){return ac(t)?t.children?t.children[0]:void 0:t}function nh(t,e){t.shapeFlag&6&&t.component?nh(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wy(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Bt?(o.patchFlag&128&&i++,s=s.concat(Wy(o.children,e,a))):(e||o.type!==qt)&&s.push(a!=null?_s(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function lr(t,e){return se(t)?(()=>We({name:t.name},e,{setup:t}))():t}const Br=t=>!!t.type.__asyncLoader,ac=t=>t.type.__isKeepAlive;function kA(t,e){qy(t,"a",e)}function NA(t,e){qy(t,"da",e)}function qy(t,e,n=Ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(lc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ac(i.parent.vnode)&&OA(s,e,n,i),i=i.parent}}function OA(t,e,n,s){const i=lc(e,t,s,!0);Gy(()=>{_d(s[e],i)},n)}function lc(t,e,n=Ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;or(),$i(n);const a=Wt(e,n,t,o);return Ws(),ar(),a});return s?i.unshift(r):i.push(r),r}}const qn=t=>(e,n=Ye)=>(!ho||t==="sp")&&lc(t,(...s)=>e(...s),n),DA=qn("bm"),Ky=qn("m"),xA=qn("bu"),MA=qn("u"),zy=qn("bum"),Gy=qn("um"),Qy=qn("sp"),LA=qn("rtg"),VA=qn("rtc");function FA(t,e=Ye){lc("ec",t,e)}const Yy="components";function Xy(t,e){return $A(Yy,t,!0,e)||t}const UA=Symbol.for("v-ndc");function $A(t,e,n=!0,s=!1){const i=ot||Ye;if(i){const r=i.type;if(t===Yy){const a=yR(r,!1);if(a&&(a===e||a===Tn(e)||a===ec(Tn(e))))return r}const o=Kp(i[t]||r[t],e)||Kp(i.appContext[t],e);return!o&&s?r:o}}function Kp(t,e){return t&&(t[e]||t[Tn(e)]||t[ec(Tn(e))])}function SF(t,e,n,s){let i;const r=n&&n[s];if(G(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function BA(t,e,n={},s,i){if(ot.isCE||ot.parent&&Br(ot.parent)&&ot.parent.isCE)return e!=="default"&&(n.name=e),je("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),us();const o=r&&Jy(r(n)),a=uo(Bt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Jy(t){return t.some(e=>al(e)?!(e.type===qt||e.type===Bt&&!Jy(e.children)):!0)?t:null}const sh=t=>t?cv(t)?hc(t)||t.proxy:sh(t.parent):null,jr=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sh(t.parent),$root:t=>sh(t.root),$emit:t=>t.emit,$options:t=>Od(t),$forceUpdate:t=>t.f||(t.f=()=>Pd(t.update)),$nextTick:t=>t.n||(t.n=My.bind(t.proxy)),$watch:t=>CA.bind(t)}),ru=(t,e)=>t!==Pe&&!t.__isScriptSetup&&de(t,e),jA={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ru(s,e))return o[e]=1,s[e];if(i!==Pe&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==Pe&&de(n,e))return o[e]=4,n[e];ih&&(o[e]=0)}}const u=jr[e];let h,d;if(u)return e==="$attrs"&&Pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&de(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ru(i,e)?(i[e]=n,!0):s!==Pe&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&de(t,o)||ru(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(jr,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zp(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ih=!0;function HA(t){const e=Od(t),n=t.proxy,s=t.ctx;ih=!1,e.beforeCreate&&Gp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:m,deactivated:v,beforeDestroy:T,beforeUnmount:C,destroyed:S,unmounted:w,render:B,renderTracked:H,renderTriggered:ne,errorCaptured:F,serverPrefetch:ie,expose:re,inheritAttrs:De,components:W,directives:ve,filters:It}=e;if(c&&WA(c,s,null),o)for(const Re in o){const _e=o[Re];se(_e)&&(s[Re]=_e.bind(n))}if(i){const Re=i.call(n,n);Ce(Re)&&(t.data=sc(Re))}if(ih=!0,r)for(const Re in r){const _e=r[Re],kn=se(_e)?_e.bind(n,n):se(_e.get)?_e.get.bind(n,n):en,zn=!se(_e)&&se(_e.set)?_e.set.bind(n):en,an=Qt({get:kn,set:zn});Object.defineProperty(s,Re,{enumerable:!0,configurable:!0,get:()=>an.value,set:St=>an.value=St})}if(a)for(const Re in a)Zy(a[Re],s,n,Re);if(l){const Re=se(l)?l.call(n):l;Reflect.ownKeys(Re).forEach(_e=>{Ha(_e,Re[_e])})}u&&Gp(u,t,"c");function Ve(Re,_e){G(_e)?_e.forEach(kn=>Re(kn.bind(n))):_e&&Re(_e.bind(n))}if(Ve(DA,h),Ve(Ky,d),Ve(xA,f),Ve(MA,_),Ve(kA,m),Ve(NA,v),Ve(FA,F),Ve(VA,H),Ve(LA,ne),Ve(zy,C),Ve(Gy,w),Ve(Qy,ie),G(re))if(re.length){const Re=t.exposed||(t.exposed={});re.forEach(_e=>{Object.defineProperty(Re,_e,{get:()=>n[_e],set:kn=>n[_e]=kn})})}else t.exposed||(t.exposed={});B&&t.render===en&&(t.render=B),De!=null&&(t.inheritAttrs=De),W&&(t.components=W),ve&&(t.directives=ve)}function WA(t,e,n=en){G(t)&&(t=rh(t));for(const s in t){const i=t[s];let r;Ce(i)?"default"in i?r=xt(i.from||s,i.default,!0):r=xt(i.from||s):r=xt(i),rt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Gp(t,e,n){Wt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zy(t,e,n,s){const i=s.includes(".")?By(n,s):()=>n[s];if(Fe(t)){const r=e[t];se(r)&&ki(i,r)}else if(se(t))ki(i,t.bind(n));else if(Ce(t))if(G(t))t.forEach(r=>Zy(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&ki(i,r,t)}}function Od(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>rl(l,c,o,!0)),rl(l,e,o)),Ce(e)&&r.set(e,l),l}function rl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&rl(t,r,n,!0),i&&i.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qA={data:Qp,props:Yp,emits:Yp,methods:xr,computed:xr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:xr,directives:xr,watch:zA,provide:Qp,inject:KA};function Qp(t,e){return e?t?function(){return We(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function KA(t,e){return xr(rh(t),rh(e))}function rh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?We(Object.create(null),t,e):e}function Yp(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:We(Object.create(null),zp(t),zp(e??{})):e}function zA(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=wt(t[s],e[s]);return n}function ev(){return{app:null,config:{isNativeTag:T0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GA=0;function QA(t,e){return function(s,i=null){se(s)||(s=We({},s)),i!=null&&!Ce(i)&&(i=null);const r=ev(),o=new Set;let a=!1;const l=r.app={_uid:GA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:IR,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=je(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,hc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){ol=l;try{return c()}finally{ol=null}}};return l}}let ol=null;function Ha(t,e){if(Ye){let n=Ye.provides;const s=Ye.parent&&Ye.parent.provides;s===n&&(n=Ye.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Ye||ot;if(s||ol){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ol._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function YA(t,e,n,s=!1){const i={},r={};nl(r,uc,1),t.propsDefaults=Object.create(null),tv(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Cy(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function XA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rc(t.emitsOptions,d))continue;const f=e[d];if(l)if(de(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=Tn(d);i[_]=oh(l,a,_,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{tv(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=rr(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=oh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],c=!0)}c&&Un(t,"set","$attrs")}function tv(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ba(l))continue;const c=e[l];let u;i&&de(i,u=Tn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:rc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=oh(i,l,h,c[h],t,!de(c,h))}}return o}function oh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=i;n in c?s=c[n]:($i(i),s=c[n]=l.call(null,e),Ws())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===rr(n))&&(s=!0))}return s}function nv(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=nv(h,e,!0);We(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ce(t)&&s.set(t,Ci),Ci;if(G(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);Xp(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=Tn(u);if(Xp(h)){const d=r[u],f=o[h]=G(d)||se(d)?{type:d}:We({},d);if(f){const _=eg(Boolean,f.type),m=eg(String,f.type);f[0]=_>-1,f[1]=m<0||_<m,(_>-1||de(f,"default"))&&a.push(h)}}}const c=[o,a];return Ce(t)&&s.set(t,c),c}function Xp(t){return t[0]!=="$"}function Jp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zp(t,e){return Jp(t)===Jp(e)}function eg(t,e){return G(e)?e.findIndex(n=>Zp(n,t)):se(e)&&Zp(e,t)?0:-1}const sv=t=>t[0]==="_"||t==="$stable",Dd=t=>G(t)?t.map(un):[un(t)],JA=(t,e,n)=>{if(e._n)return e;const s=ts((...i)=>Dd(e(...i)),n);return s._c=!1,s},iv=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sv(i))continue;const r=t[i];if(se(r))e[i]=JA(i,r,s);else if(r!=null){const o=Dd(r);e[i]=()=>o}}},rv=(t,e)=>{const n=Dd(e);t.slots.default=()=>n},ZA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),nl(e,"_",n)):iv(e,t.slots={})}else t.slots={},e&&rv(t,e);nl(t.slots,uc,1)},eR=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(We(i,e),!n&&a===1&&delete i._):(r=!e.$stable,iv(e,i)),o=e}else e&&(rv(t,e),o={default:1});if(r)for(const a in i)!sv(a)&&!(a in o)&&delete i[a]};function ah(t,e,n,s,i=!1){if(G(t)){t.forEach((d,f)=>ah(d,e&&(G(e)?e[f]:e),n,s,i));return}if(Br(s)&&!i)return;const r=s.shapeFlag&4?hc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,de(h,c)&&(h[c]=null)):rt(c)&&(c.value=null)),se(l))cs(l,a,12,[o,u]);else{const d=Fe(l),f=rt(l);if(d||f){const _=()=>{if(t.f){const m=d?de(h,l)?h[l]:u[l]:l.value;i?G(m)&&_d(m,r):G(m)?m.includes(r)||m.push(r):d?(u[l]=[r],de(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,bt(_,n)):_()}}}const bt=RA;function tR(t){return nR(t)}function nR(t,e){const n=Qu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=en,insertStaticContent:_}=t,m=(p,g,y,E=null,A=null,b=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!xs(p,g)&&(E=I(p),St(p,A,b,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:K,shapeFlag:$}=g;switch(P){case cc:v(p,g,y,E);break;case qt:T(p,g,y,E);break;case ou:p==null&&C(g,y,E,L);break;case Bt:W(p,g,y,E,A,b,L,N,O);break;default:$&1?B(p,g,y,E,A,b,L,N,O):$&6?ve(p,g,y,E,A,b,L,N,O):($&64||$&128)&&P.process(p,g,y,E,A,b,L,N,O,D)}K!=null&&A&&ah(K,p&&p.ref,b,g||p,!g)},v=(p,g,y,E)=>{if(p==null)s(g.el=a(g.children),y,E);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},T=(p,g,y,E)=>{p==null?s(g.el=l(g.children||""),y,E):g.el=p.el},C=(p,g,y,E)=>{[p.el,p.anchor]=_(p.children,g,y,E,p.el,p.anchor)},S=({el:p,anchor:g},y,E)=>{let A;for(;p&&p!==g;)A=d(p),s(p,y,E),p=A;s(g,y,E)},w=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=d(p),i(p),p=y;i(g)},B=(p,g,y,E,A,b,L,N,O)=>{L=L||g.type==="svg",p==null?H(g,y,E,A,b,L,N,O):ie(p,g,A,b,L,N,O)},H=(p,g,y,E,A,b,L,N)=>{let O,P;const{type:K,props:$,shapeFlag:z,transition:Z,dirs:oe}=p;if(O=p.el=o(p.type,b,$&&$.is,$),z&8?u(O,p.children):z&16&&F(p.children,O,null,E,A,b&&K!=="foreignObject",L,N),oe&&Cs(p,null,E,"created"),ne(O,p,p.scopeId,L,E),$){for(const we in $)we!=="value"&&!Ba(we)&&r(O,we,null,$[we],b,p.children,E,A,lt);"value"in $&&r(O,"value",null,$.value),(P=$.onVnodeBeforeMount)&&cn(P,E,p)}oe&&Cs(p,null,E,"beforeMount");const Se=(!A||A&&!A.pendingBranch)&&Z&&!Z.persisted;Se&&Z.beforeEnter(O),s(O,g,y),((P=$&&$.onVnodeMounted)||Se||oe)&&bt(()=>{P&&cn(P,E,p),Se&&Z.enter(O),oe&&Cs(p,null,E,"mounted")},A)},ne=(p,g,y,E,A)=>{if(y&&f(p,y),E)for(let b=0;b<E.length;b++)f(p,E[b]);if(A){let b=A.subTree;if(g===b){const L=A.vnode;ne(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,y,E,A,b,L,N,O=0)=>{for(let P=O;P<p.length;P++){const K=p[P]=N?Zn(p[P]):un(p[P]);m(null,K,g,y,E,A,b,L,N)}},ie=(p,g,y,E,A,b,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:P,dirs:K}=g;O|=p.patchFlag&16;const $=p.props||Pe,z=g.props||Pe;let Z;y&&Ss(y,!1),(Z=z.onVnodeBeforeUpdate)&&cn(Z,y,g,p),K&&Cs(g,p,y,"beforeUpdate"),y&&Ss(y,!0);const oe=A&&g.type!=="foreignObject";if(P?re(p.dynamicChildren,P,N,y,E,oe,b):L||_e(p,g,N,null,y,E,oe,b,!1),O>0){if(O&16)De(N,g,$,z,y,E,A);else if(O&2&&$.class!==z.class&&r(N,"class",null,z.class,A),O&4&&r(N,"style",$.style,z.style,A),O&8){const Se=g.dynamicProps;for(let we=0;we<Se.length;we++){const Ue=Se[we],zt=$[Ue],pi=z[Ue];(pi!==zt||Ue==="value")&&r(N,Ue,zt,pi,A,p.children,y,E,lt)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&P==null&&De(N,g,$,z,y,E,A);((Z=z.onVnodeUpdated)||K)&&bt(()=>{Z&&cn(Z,y,g,p),K&&Cs(g,p,y,"updated")},E)},re=(p,g,y,E,A,b,L)=>{for(let N=0;N<g.length;N++){const O=p[N],P=g[N],K=O.el&&(O.type===Bt||!xs(O,P)||O.shapeFlag&70)?h(O.el):y;m(O,P,K,null,E,A,b,L,!0)}},De=(p,g,y,E,A,b,L)=>{if(y!==E){if(y!==Pe)for(const N in y)!Ba(N)&&!(N in E)&&r(p,N,y[N],null,L,g.children,A,b,lt);for(const N in E){if(Ba(N))continue;const O=E[N],P=y[N];O!==P&&N!=="value"&&r(p,N,P,O,L,g.children,A,b,lt)}"value"in E&&r(p,"value",y.value,E.value)}},W=(p,g,y,E,A,b,L,N,O)=>{const P=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:Z}=g;Z&&(N=N?N.concat(Z):Z),p==null?(s(P,y,E),s(K,y,E),F(g.children,y,K,A,b,L,N,O)):$>0&&$&64&&z&&p.dynamicChildren?(re(p.dynamicChildren,z,y,A,b,L,N),(g.key!=null||A&&g===A.subTree)&&xd(p,g,!0)):_e(p,g,y,K,A,b,L,N,O)},ve=(p,g,y,E,A,b,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?A.ctx.activate(g,y,E,L,O):It(g,y,E,A,b,L,O):Pn(p,g,O)},It=(p,g,y,E,A,b,L)=>{const N=p.component=fR(p,E,A);if(ac(p)&&(N.ctx.renderer=D),pR(N),N.asyncDep){if(A&&A.registerDep(N,Ve),!p.el){const O=N.subTree=je(qt);T(null,O,g,y)}return}Ve(N,p,g,y,A,b,L)},Pn=(p,g,y)=>{const E=g.component=p.component;if(IA(p,g,y))if(E.asyncDep&&!E.asyncResolved){Re(E,g,y);return}else E.next=g,_A(E.update),E.update();else g.el=p.el,E.vnode=g},Ve=(p,g,y,E,A,b,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:z,parent:Z,vnode:oe}=p,Se=K,we;Ss(p,!1),K?(K.el=oe.el,Re(p,K,L)):K=oe,$&&ja($),(we=K.props&&K.props.onVnodeBeforeUpdate)&&cn(we,Z,K,oe),Ss(p,!0);const Ue=su(p),zt=p.subTree;p.subTree=Ue,m(zt,Ue,h(zt.el),I(zt),p,A,b),K.el=Ue.el,Se===null&&wA(p,Ue.el),z&&bt(z,A),(we=K.props&&K.props.onVnodeUpdated)&&bt(()=>cn(we,Z,K,oe),A)}else{let K;const{el:$,props:z}=g,{bm:Z,m:oe,parent:Se}=p,we=Br(g);if(Ss(p,!1),Z&&ja(Z),!we&&(K=z&&z.onVnodeBeforeMount)&&cn(K,Se,g),Ss(p,!0),$&&me){const Ue=()=>{p.subTree=su(p),me($,p.subTree,p,A,null)};we?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=su(p);m(null,Ue,y,E,p,A,b),g.el=Ue.el}if(oe&&bt(oe,A),!we&&(K=z&&z.onVnodeMounted)){const Ue=g;bt(()=>cn(K,Se,Ue),A)}(g.shapeFlag&256||Se&&Br(Se.vnode)&&Se.vnode.shapeFlag&256)&&p.a&&bt(p.a,A),p.isMounted=!0,g=y=E=null}},O=p.effect=new Td(N,()=>Pd(P),p.scope),P=p.update=()=>O.run();P.id=p.uid,Ss(p,!0),P()},Re=(p,g,y)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,XA(p,g.props,E,y),eR(p,g.children,y),or(),Hp(),ar()},_e=(p,g,y,E,A,b,L,N,O=!1)=>{const P=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:z,shapeFlag:Z}=g;if(z>0){if(z&128){zn(P,$,y,E,A,b,L,N,O);return}else if(z&256){kn(P,$,y,E,A,b,L,N,O);return}}Z&8?(K&16&&lt(P,A,b),$!==P&&u(y,$)):K&16?Z&16?zn(P,$,y,E,A,b,L,N,O):lt(P,A,b,!0):(K&8&&u(y,""),Z&16&&F($,y,E,A,b,L,N,O))},kn=(p,g,y,E,A,b,L,N,O)=>{p=p||Ci,g=g||Ci;const P=p.length,K=g.length,$=Math.min(P,K);let z;for(z=0;z<$;z++){const Z=g[z]=O?Zn(g[z]):un(g[z]);m(p[z],Z,y,null,A,b,L,N,O)}P>K?lt(p,A,b,!0,!1,$):F(g,y,E,A,b,L,N,O,$)},zn=(p,g,y,E,A,b,L,N,O)=>{let P=0;const K=g.length;let $=p.length-1,z=K-1;for(;P<=$&&P<=z;){const Z=p[P],oe=g[P]=O?Zn(g[P]):un(g[P]);if(xs(Z,oe))m(Z,oe,y,null,A,b,L,N,O);else break;P++}for(;P<=$&&P<=z;){const Z=p[$],oe=g[z]=O?Zn(g[z]):un(g[z]);if(xs(Z,oe))m(Z,oe,y,null,A,b,L,N,O);else break;$--,z--}if(P>$){if(P<=z){const Z=z+1,oe=Z<K?g[Z].el:E;for(;P<=z;)m(null,g[P]=O?Zn(g[P]):un(g[P]),y,oe,A,b,L,N,O),P++}}else if(P>z)for(;P<=$;)St(p[P],A,b,!0),P++;else{const Z=P,oe=P,Se=new Map;for(P=oe;P<=z;P++){const kt=g[P]=O?Zn(g[P]):un(g[P]);kt.key!=null&&Se.set(kt.key,P)}let we,Ue=0;const zt=z-oe+1;let pi=!1,Np=0;const Ir=new Array(zt);for(P=0;P<zt;P++)Ir[P]=0;for(P=Z;P<=$;P++){const kt=p[P];if(Ue>=zt){St(kt,A,b,!0);continue}let ln;if(kt.key!=null)ln=Se.get(kt.key);else for(we=oe;we<=z;we++)if(Ir[we-oe]===0&&xs(kt,g[we])){ln=we;break}ln===void 0?St(kt,A,b,!0):(Ir[ln-oe]=P+1,ln>=Np?Np=ln:pi=!0,m(kt,g[ln],y,null,A,b,L,N,O),Ue++)}const Op=pi?sR(Ir):Ci;for(we=Op.length-1,P=zt-1;P>=0;P--){const kt=oe+P,ln=g[kt],Dp=kt+1<K?g[kt+1].el:E;Ir[P]===0?m(null,ln,y,Dp,A,b,L,N,O):pi&&(we<0||P!==Op[we]?an(ln,y,Dp,2):we--)}}},an=(p,g,y,E,A=null)=>{const{el:b,type:L,transition:N,children:O,shapeFlag:P}=p;if(P&6){an(p.component.subTree,g,y,E);return}if(P&128){p.suspense.move(g,y,E);return}if(P&64){L.move(p,g,y,D);return}if(L===Bt){s(b,g,y);for(let $=0;$<O.length;$++)an(O[$],g,y,E);s(p.anchor,g,y);return}if(L===ou){S(p,g,y);return}if(E!==2&&P&1&&N)if(E===0)N.beforeEnter(b),s(b,g,y),bt(()=>N.enter(b),A);else{const{leave:$,delayLeave:z,afterLeave:Z}=N,oe=()=>s(b,g,y),Se=()=>{$(b,()=>{oe(),Z&&Z()})};z?z(b,oe,Se):Se()}else s(b,g,y)},St=(p,g,y,E=!1,A=!1)=>{const{type:b,props:L,ref:N,children:O,dynamicChildren:P,shapeFlag:K,patchFlag:$,dirs:z}=p;if(N!=null&&ah(N,null,y,p,!0),K&256){g.ctx.deactivate(p);return}const Z=K&1&&z,oe=!Br(p);let Se;if(oe&&(Se=L&&L.onVnodeBeforeUnmount)&&cn(Se,g,p),K&6)_a(p.component,y,E);else{if(K&128){p.suspense.unmount(y,E);return}Z&&Cs(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,y,A,D,E):P&&(b!==Bt||$>0&&$&64)?lt(P,g,y,!1,!0):(b===Bt&&$&384||!A&&K&16)&&lt(O,g,y),E&&di(p)}(oe&&(Se=L&&L.onVnodeUnmounted)||Z)&&bt(()=>{Se&&cn(Se,g,p),Z&&Cs(p,null,g,"unmounted")},y)},di=p=>{const{type:g,el:y,anchor:E,transition:A}=p;if(g===Bt){fi(y,E);return}if(g===ou){w(p);return}const b=()=>{i(y),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:N}=A,O=()=>L(y,b);N?N(p.el,b,O):O()}else b()},fi=(p,g)=>{let y;for(;p!==g;)y=d(p),i(p),p=y;i(g)},_a=(p,g,y)=>{const{bum:E,scope:A,update:b,subTree:L,um:N}=p;E&&ja(E),A.stop(),b&&(b.active=!1,St(L,p,g,y)),N&&bt(N,g),bt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},lt=(p,g,y,E=!1,A=!1,b=0)=>{for(let L=b;L<p.length;L++)St(p[L],g,y,E,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,y)=>{p==null?g._vnode&&St(g._vnode,null,null,!0):m(g._vnode||null,p,g,null,null,null,y),Hp(),Vy(),g._vnode=p},D={p:m,um:St,m:an,r:di,mt:It,mc:F,pc:_e,pbc:re,n:I,o:t};let q,me;return e&&([q,me]=e(D)),{render:V,hydrate:q,createApp:QA(V,q)}}function Ss({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xd(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Zn(i[r]),a.el=o.el),n||xd(o,a)),a.type===cc&&(a.el=o.el)}}function sR(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const iR=t=>t.__isTeleport,Hr=t=>t&&(t.disabled||t.disabled===""),tg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,lh=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},rR={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:_,createText:m,createComment:v}}=c,T=Hr(e.props);let{shapeFlag:C,children:S,dynamicChildren:w}=e;if(t==null){const B=e.el=m(""),H=e.anchor=m("");f(B,n,s),f(H,n,s);const ne=e.target=lh(e.props,_),F=e.targetAnchor=m("");ne&&(f(F,ne),o=o||tg(ne));const ie=(re,De)=>{C&16&&u(S,re,De,i,r,o,a,l)};T?ie(n,H):ne&&ie(ne,F)}else{e.el=t.el;const B=e.anchor=t.anchor,H=e.target=t.target,ne=e.targetAnchor=t.targetAnchor,F=Hr(t.props),ie=F?n:H,re=F?B:ne;if(o=o||tg(H),w?(d(t.dynamicChildren,w,ie,i,r,o,a),xd(t,e,!0)):l||h(t,e,ie,re,i,r,o,a,!1),T)F||wa(e,n,B,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=lh(e.props,_);De&&wa(e,De,null,c,0)}else F&&wa(e,H,ne,c,1)}ov(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!Hr(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const _=l[f];i(_,e,n,!0,!!_.dynamicChildren)}},move:wa,hydrate:oR};function wa(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Hr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function oR(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=lh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Hr(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}ov(e)}return e.anchor&&o(e.anchor)}const bF=rR;function ov(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Bt=Symbol.for("v-fgt"),cc=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),ou=Symbol.for("v-stc"),Wr=[];let Xt=null;function us(t=!1){Wr.push(Xt=t?null:[])}function aR(){Wr.pop(),Xt=Wr[Wr.length-1]||null}let co=1;function ng(t){co+=t}function av(t){return t.dynamicChildren=co>0?Xt||Ci:null,aR(),co>0&&Xt&&Xt.push(t),t}function Md(t,e,n,s,i,r){return av(ri(t,e,n,s,i,r,!0))}function uo(t,e,n,s,i){return av(je(t,e,n,s,i,!0))}function al(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const uc="__vInternal",lv=({key:t})=>t??null,Wa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||rt(t)||se(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function ri(t,e=null,n=null,s=0,i=null,r=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lv(e),ref:e&&Wa(e),scopeId:oc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return a?(Ld(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),co>0&&!o&&Xt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Xt.push(l),l}const je=lR;function lR(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===UA)&&(t=qt),al(t)){const a=_s(t,e,!0);return n&&Ld(a,n),co>0&&!r&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(vR(t)&&(t=t.__vccOpts),e){e=cR(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=vd(a)),Ce(l)&&(by(l)&&!G(l)&&(l=We({},l)),e.style=yd(l))}const o=Fe(t)?1:AA(t)?128:iR(t)?64:Ce(t)?4:se(t)?2:0;return ri(t,e,n,s,i,o,r,!0)}function cR(t){return t?by(t)||uc in t?We({},t):t:null}function _s(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?uR(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lv(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Wa(e)):[i,Wa(e)]:Wa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qa(t=" ",e=0){return je(cc,null,t,e)}function PF(t="",e=!1){return e?(us(),uo(qt,null,t)):je(qt,null,t)}function un(t){return t==null||typeof t=="boolean"?je(qt):G(t)?je(Bt,null,t.slice()):typeof t=="object"?Zn(t):je(cc,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_s(t)}function Ld(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ld(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(uc in e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[qa(e)]):n=8);t.children=e,t.shapeFlag|=n}function uR(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=vd([e.class,s.class]));else if(i==="style")e.style=yd([e.style,s.style]);else if(Xl(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function cn(t,e,n,s=null){Wt(t,e,7,[n,s])}const hR=ev();let dR=0;function fR(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hR,r={uid:dR++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nv(s,i),emitsOptions:Uy(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vA.bind(null,r),t.ce&&t.ce(r),r}let Ye=null;const Vd=()=>Ye||ot;let Fd,gi,sg="__VUE_INSTANCE_SETTERS__";(gi=Qu()[sg])||(gi=Qu()[sg]=[]),gi.push(t=>Ye=t),Fd=t=>{gi.length>1?gi.forEach(e=>e(t)):gi[0](t)};const $i=t=>{Fd(t),t.scope.on()},Ws=()=>{Ye&&Ye.scope.off(),Fd(null)};function cv(t){return t.vnode.shapeFlag&4}let ho=!1;function pR(t,e=!1){ho=e;const{props:n,children:s}=t.vnode,i=cv(t);YA(t,n,i,e),ZA(t,s);const r=i?gR(t,e):void 0;return ho=!1,r}function gR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cd(new Proxy(t.ctx,jA));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?mR(t):null;$i(t),or();const r=cs(s,t,0,[t.props,i]);if(ar(),Ws(),ay(r)){if(r.then(Ws,Ws),e)return r.then(o=>{ig(t,o,e)}).catch(o=>{ic(o,t,0)});t.asyncDep=r}else ig(t,r,e)}else uv(t,e)}function ig(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Dy(e)),uv(t,n)}let rg;function uv(t,e,n){const s=t.type;if(!t.render){if(!e&&rg&&!s.render){const i=s.template||Od(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=We(We({isCustomElement:r,delimiters:a},o),l);s.render=rg(i,c)}}t.render=s.render||en}$i(t),or(),HA(t),ar(),Ws()}function _R(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pt(t,"get","$attrs"),e[n]}}))}function mR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return _R(t)},slots:t.slots,emit:t.emit,expose:e}}function hc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dy(Cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}}))}function yR(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function vR(t){return se(t)&&"__vccOpts"in t}const Qt=(t,e)=>fA(t,e,ho);function Ud(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!G(e)?al(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&al(n)&&(n=[n]),je(t,e,n))}const ER=Symbol.for("v-scx"),TR=()=>xt(ER),IR="3.3.4",wR="http://www.w3.org/2000/svg",Ms=typeof document<"u"?document:null,og=Ms&&Ms.createElement("template"),AR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ms.createElementNS(wR,t):Ms.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ms.createTextNode(t),createComment:t=>Ms.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ms.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{og.innerHTML=s?`<svg>${t}</svg>`:t;const a=og.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function RR(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function CR(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&ch(s,r,"");for(const r in n)ch(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ag=/\s*!important$/;function ch(t,e,n){if(G(n))n.forEach(s=>ch(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=SR(t,e);ag.test(n)?t.setProperty(rr(s),n.replace(ag,""),"important"):t[s]=n}}const lg=["Webkit","Moz","ms"],au={};function SR(t,e){const n=au[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return au[e]=s;s=ec(s);for(let i=0;i<lg.length;i++){const r=lg[i]+s;if(r in t)return au[e]=r}return e}const cg="http://www.w3.org/1999/xlink";function bR(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cg,e.slice(6,e.length)):t.setAttributeNS(cg,e,n);else{const r=D0(e);n==null||r&&!hy(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function PR(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hy(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function hv(t,e,n,s){t.addEventListener(e,n,s)}function kR(t,e,n,s){t.removeEventListener(e,n,s)}function NR(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=OR(e);if(s){const c=r[e]=MR(s,i);hv(t,a,c,l)}else o&&(kR(t,a,o,l),r[e]=void 0)}}const ug=/(?:Once|Passive|Capture)$/;function OR(t){let e;if(ug.test(t)){e={};let s;for(;s=t.match(ug);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let lu=0;const DR=Promise.resolve(),xR=()=>lu||(DR.then(()=>lu=0),lu=Date.now());function MR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wt(LR(s,n.value),e,5,[s])};return n.value=t,n.attached=xR(),n}function LR(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const hg=/^on[a-z]/,VR=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?RR(t,s,i):e==="style"?CR(t,n,s):Xl(e)?gd(e)||NR(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FR(t,e,s,i))?PR(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bR(t,e,s,i))};function FR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hg.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hg.test(e)&&Fe(n)?!1:e in t}const Qn="transition",wr="animation",dv=(t,{slots:e})=>Ud(PA,UR(t),e);dv.displayName="Transition";const fv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dv.props=We({},jy,fv);const bs=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},dg=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function UR(t){const e={};for(const W in t)W in fv||(e[W]=t[W]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=$R(i),m=_&&_[0],v=_&&_[1],{onBeforeEnter:T,onEnter:C,onEnterCancelled:S,onLeave:w,onLeaveCancelled:B,onBeforeAppear:H=T,onAppear:ne=C,onAppearCancelled:F=S}=e,ie=(W,ve,It)=>{Ps(W,ve?u:a),Ps(W,ve?c:o),It&&It()},re=(W,ve)=>{W._isLeaving=!1,Ps(W,h),Ps(W,f),Ps(W,d),ve&&ve()},De=W=>(ve,It)=>{const Pn=W?ne:C,Ve=()=>ie(ve,W,It);bs(Pn,[ve,Ve]),fg(()=>{Ps(ve,W?l:r),Yn(ve,W?u:a),dg(Pn)||pg(ve,s,m,Ve)})};return We(e,{onBeforeEnter(W){bs(T,[W]),Yn(W,r),Yn(W,o)},onBeforeAppear(W){bs(H,[W]),Yn(W,l),Yn(W,c)},onEnter:De(!1),onAppear:De(!0),onLeave(W,ve){W._isLeaving=!0;const It=()=>re(W,ve);Yn(W,h),HR(),Yn(W,d),fg(()=>{W._isLeaving&&(Ps(W,h),Yn(W,f),dg(w)||pg(W,s,v,It))}),bs(w,[W,It])},onEnterCancelled(W){ie(W,!1),bs(S,[W])},onAppearCancelled(W){ie(W,!0),bs(F,[W])},onLeaveCancelled(W){re(W),bs(B,[W])}})}function $R(t){if(t==null)return null;if(Ce(t))return[cu(t.enter),cu(t.leave)];{const e=cu(t);return[e,e]}}function cu(t){return S0(t)}function Yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ps(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function fg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let BR=0;function pg(t,e,n,s){const i=t._endId=++BR,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=jR(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function jR(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${Qn}Delay`),r=s(`${Qn}Duration`),o=gg(i,r),a=s(`${wr}Delay`),l=s(`${wr}Duration`),c=gg(a,l);let u=null,h=0,d=0;e===Qn?o>0&&(u=Qn,h=o,d=r.length):e===wr?c>0&&(u=wr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Qn:wr:null,d=u?u===Qn?r.length:l.length:0);const f=u===Qn&&/\b(transform|all)(,|$)/.test(s(`${Qn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function gg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>_g(n)+_g(t[s])))}function _g(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function HR(){return document.body.offsetHeight}const mg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ja(e,n):e},kF={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Jl(e);hv(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?uy(ll(o)):ll(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=mg(s)},mounted(t,{value:e}){yg(t,e)},beforeUpdate(t,e,n){t._assign=mg(n)},updated(t,{value:e}){yg(t,e)}};function yg(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Jl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=ll(r);if(n)G(e)?r.selected=M0(e,o)>-1:r.selected=e.has(o);else if(tc(ll(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ll(t){return"_value"in t?t._value:t.value}const WR=["ctrl","shift","alt","meta"],qR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>WR.some(n=>t[`${n}Key`]&&!e.includes(n))},NF=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=qR[e[i]];if(r&&r(n,e))return}return t(n,...s)},KR=We({patchProp:VR},AR);let vg;function zR(){return vg||(vg=tR(KR))}const GR=(...t)=>{const e=zR().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=QR(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function QR(t){return Fe(t)?document.querySelector(t):t}/**
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
 */const pv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw cr(e)},cr=function(t){return new Error("Firebase Database ("+pv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const gv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new XR;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(t){const e=gv(t);return dc.encodeByteArray(e,!0)},cl=function(t){return _v(t).replace(/\./g,"")},ul=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JR(t){return mv(void 0,t)}function mv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZR(n)||(t[n]=mv(t[n],e[n]));return t}function ZR(t){return t!=="__proto__"}/**
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
 */function eC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tC=()=>eC().__FIREBASE_DEFAULTS__,nC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},$d=()=>{try{return tC()||nC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yv=t=>{var e,n;return(n=(e=$d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iC=t=>{const e=yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vv=()=>{var t;return(t=$d())===null||t===void 0?void 0:t.config},Ev=t=>{var e;return(e=$d())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),a].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function oC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aC(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iv(){return pv.NODE_ADMIN===!0}function wv(){try{return typeof indexedDB=="object"}catch{return!1}}function lC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const cC="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cC,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function uC(t,e){return t.replace(hC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hC=/\{\$([^}]+)}/g;/**
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
 */function po(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
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
 */const Av=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=po(ul(r[0])||""),n=po(ul(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},dC=function(t){const e=Av(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fC=function(t){const e=Av(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Eg(r)&&Eg(o)){if(!dl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Eg(t){return t!==null&&typeof t=="object"}/**
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
 */function hr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class pC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function gC(t,e){const n=new _C(t,e);return n.subscribe.bind(n)}class _C{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uu(){}function yC(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ns="[DEFAULT]";/**
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
 */class EC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IC(e))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ns){return this.instances.has(e)}getOptions(e=Ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:TC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ns){return this.component?this.component.multipleInstances?e:Ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TC(t){return t===Ns?void 0:t}function IC(t){return t.instantiationMode==="EAGER"}/**
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
 */class wC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const AC={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},RC=fe.INFO,CC={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},SC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=CC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=SC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const bC=(t,e)=>e.some(n=>t instanceof n);let Tg,Ig;function PC(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kC(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rv=new WeakMap,hh=new WeakMap,Cv=new WeakMap,hu=new WeakMap,jd=new WeakMap;function NC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(hs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rv.set(n,t)}).catch(()=>{}),jd.set(e,t),e}function OC(t){if(hh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DC(t){dh=t(dh)}function xC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(du(this),e,...n);return Cv.set(s,e.sort?e.sort():[e]),hs(s)}:kC().includes(t)?function(...e){return t.apply(du(this),e),hs(Rv.get(this))}:function(...e){return hs(t.apply(du(this),e))}}function MC(t){return typeof t=="function"?xC(t):(t instanceof IDBTransaction&&OC(t),bC(t,PC())?new Proxy(t,dh):t)}function hs(t){if(t instanceof IDBRequest)return NC(t);if(hu.has(t))return hu.get(t);const e=MC(t);return e!==t&&(hu.set(t,e),jd.set(e,t)),e}const du=t=>jd.get(t);function LC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=hs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(hs(o.result),l.oldVersion,l.newVersion,hs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VC=["get","getKey","getAll","getAllKeys","count"],FC=["put","add","delete","clear"],fu=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=FC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||VC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fu.set(e,r),r}DC(t=>({...t,get:(e,n,s)=>wg(e,n)||t.get(e,n,s),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
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
 */class UC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($C(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fh="@firebase/app",Ag="0.9.15";/**
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
 */const Gs=new Fo("@firebase/app"),BC="@firebase/app-compat",jC="@firebase/analytics-compat",HC="@firebase/analytics",WC="@firebase/app-check-compat",qC="@firebase/app-check",KC="@firebase/auth",zC="@firebase/auth-compat",GC="@firebase/database",QC="@firebase/database-compat",YC="@firebase/functions",XC="@firebase/functions-compat",JC="@firebase/installations",ZC="@firebase/installations-compat",eS="@firebase/messaging",tS="@firebase/messaging-compat",nS="@firebase/performance",sS="@firebase/performance-compat",iS="@firebase/remote-config",rS="@firebase/remote-config-compat",oS="@firebase/storage",aS="@firebase/storage-compat",lS="@firebase/firestore",cS="@firebase/firestore-compat",uS="firebase",hS="10.1.0";/**
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
 */const ph="[DEFAULT]",dS={[fh]:"fire-core",[BC]:"fire-core-compat",[HC]:"fire-analytics",[jC]:"fire-analytics-compat",[qC]:"fire-app-check",[WC]:"fire-app-check-compat",[KC]:"fire-auth",[zC]:"fire-auth-compat",[GC]:"fire-rtdb",[QC]:"fire-rtdb-compat",[YC]:"fire-fn",[XC]:"fire-fn-compat",[JC]:"fire-iid",[ZC]:"fire-iid-compat",[eS]:"fire-fcm",[tS]:"fire-fcm-compat",[nS]:"fire-perf",[sS]:"fire-perf-compat",[iS]:"fire-rc",[rS]:"fire-rc-compat",[oS]:"fire-gcs",[aS]:"fire-gcs-compat",[lS]:"fire-fst",[cS]:"fire-fst-compat","fire-js":"fire-js",[uS]:"fire-js-all"};/**
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
 */const fl=new Map,gh=new Map;function fS(t,e){try{t.container.addComponent(e)}catch(n){Gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(gh.has(e))return Gs.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of fl.values())fS(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ds=new ur("app","Firebase",pS);/**
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
 */class gS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=hS;function Sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ph,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ds.create("bad-app-name",{appName:String(i)});if(n||(n=vv()),!n)throw ds.create("no-options");const r=fl.get(i);if(r){if(dl(n,r.options)&&dl(s,r.config))return r;throw ds.create("duplicate-app",{appName:i})}const o=new wC(i);for(const l of gh.values())o.addComponent(l);const a=new gS(n,s,o);return fl.set(i,a),a}function Wd(t=ph){const e=fl.get(t);if(!e&&t===ph&&vv())return Sv();if(!e)throw ds.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=dS[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gs.warn(a.join(" "));return}In(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _S="firebase-heartbeat-database",mS=1,go="firebase-heartbeat-store";let pu=null;function bv(){return pu||(pu=LC(_S,mS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(go)}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),pu}async function yS(t){try{return await(await bv()).transaction(go).objectStore(go).get(Pv(t))}catch(e){if(e instanceof Sn)Gs.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gs.warn(n.message)}}}async function Rg(t,e){try{const s=(await bv()).transaction(go,"readwrite");await s.objectStore(go).put(e,Pv(t)),await s.done}catch(n){if(n instanceof Sn)Gs.warn(n.message);else{const s=ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gs.warn(s.message)}}}function Pv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vS=1024,ES=30*24*60*60*1e3;class TS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ES}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cg(),{heartbeatsToSend:n,unsentEntries:s}=IS(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cg(){return new Date().toISOString().substring(0,10)}function IS(t,e=vS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sg(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wv()?lC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sg(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AS(t){In(new nn("platform-logger",e=>new UC(e),"PRIVATE")),In(new nn("heartbeat",e=>new TS(e),"PRIVATE")),Mt(fh,Ag,t),Mt(fh,Ag,"esm2017"),Mt("fire-js","")}AS("");function qd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=kv,Nv=new ur("auth","Firebase",kv());/**
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
 */const pl=new Fo("@firebase/auth");function CS(t,...e){pl.logLevel<=fe.WARN&&pl.warn(`Auth (${Is}): ${t}`,...e)}function Ka(t,...e){pl.logLevel<=fe.ERROR&&pl.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Kd(t,...e)}function yn(t,...e){return Kd(t,...e)}function Ov(t,e,n){const s=Object.assign(Object.assign({},RS()),{[e]:n});return new ur("auth","Firebase",s).create(e,{appName:t.name})}function SS(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&wn(t,"argument-error"),Ov(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nv.create(t,...e)}function ee(t,e,...n){if(!t)throw Kd(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ka(e),new Error(e)}function $n(t,e){t||Dn(e)}/**
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
 */function _h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bS(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bS()||oC()||"connection"in navigator)?navigator.onLine:!0}function kS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Bd()||Tv()}get(){return PS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zd(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OS=new Uo(3e4,6e4);function xv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $o(t,e,n,s,i={}){return Mv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dv.fetch()(Lv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Mv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NS),e);try{const i=new xS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Aa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ov(t,u,c);wn(t,u)}}catch(i){if(i instanceof Sn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function DS(t,e,n,s,i={}){const r=await $o(t,e,n,s,i);return"mfaPendingCredential"in r&&wn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Lv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?zd(t.config,i):`${t.config.apiScheme}://${i}`}class xS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),OS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=yn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function MS(t,e){return $o(t,"POST","/v1/accounts:delete",e)}async function LS(t,e){return $o(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=Je(t),s=await n.getIdToken(e),i=Gd(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qr(gu(i.auth_time)),issuedAtTime:qr(gu(i.iat)),expirationTime:qr(gu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gu(t){return Number(t)*1e3}function Gd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=ul(n);return i?JSON.parse(i):(Ka("Failed to decode base64 JWT payload"),null)}catch(i){return Ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FS(t){const e=Gd(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&US(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function US({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $S{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qr(this.lastLoginAt),this.creationTime=qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _o(t,LS(n,{idToken:s}));ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?HS(r.providerUserInfo):[],a=jS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function BS(t){const e=Je(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function HS(t){return t.map(e=>{var{providerId:n}=e,s=qd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function WS(t,e){const n=await Mv(t,{},async()=>{const s=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Lv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await WS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mo;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Xn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $S(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return BS(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _o(this,MS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:w,isAnonymous:B,providerData:H,stsTokenManager:ne}=n;ee(S&&ne,e,"internal-error");const F=mo.fromJSON(this.name,ne);ee(typeof S=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),ee(typeof w=="boolean",e,"internal-error"),ee(typeof B=="boolean",e,"internal-error"),Xn(f,e.name),Xn(_,e.name),Xn(m,e.name),Xn(v,e.name),Xn(T,e.name),Xn(C,e.name);const ie=new qs({uid:S,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:B,photoURL:_,phoneNumber:f,tenantId:m,stsTokenManager:F,createdAt:T,lastLoginAt:C});return H&&Array.isArray(H)&&(ie.providerData=H.map(re=>Object.assign({},re))),v&&(ie._redirectEventId=v),ie}static async _fromIdTokenResponse(e,n,s=!1){const i=new mo;i.updateFromServerResponse(n);const r=new qs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await gl(r),r}}/**
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
 */const Pg=new Map;function xn(t){$n(t instanceof Function,"Expected a class definition");let e=Pg.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pg.set(t,e),e)}/**
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
 */class Fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fv.type="NONE";const kg=Fv;/**
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
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,r),this.fullPersistenceKey=za("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ni(xn(kg),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||xn(kg);const o=za(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=qs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ni(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ni(r,e,s))}}/**
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
 */function Ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(Wv(e))return"Webos";if(Qd(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(jv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uv(t=Et()){return/firefox\//i.test(t)}function Qd(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=Et()){return/crios\//i.test(t)}function Bv(t=Et()){return/iemobile/i.test(t)}function jv(t=Et()){return/android/i.test(t)}function Hv(t=Et()){return/blackberry/i.test(t)}function Wv(t=Et()){return/webos/i.test(t)}function pc(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qS(t=Et()){var e;return pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KS(){return aC()&&document.documentMode===10}function qv(t=Et()){return pc(t)||jv(t)||Wv(t)||Hv(t)||/windows phone/i.test(t)||Bv(t)}function zS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=Ng(Et());break;case"Worker":n=`${Ng(Et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}async function zv(t,e){return $o(t,"GET","/v2/recaptchaConfig",xv(t,e))}function Og(t){return t!==void 0&&t.enterprise!==void 0}class Gv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function GS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=yn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",GS().appendChild(s)})}function QS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YS="https://www.google.com/recaptcha/enterprise.js?render=",XS="recaptcha-enterprise",JS="NO_RECAPTCHA";class ZS{constructor(e){this.type=XS,this.auth=dr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{zv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Og(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(JS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Og(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qv(YS+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class tb{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}async initializeRecaptchaConfig(){const e=await zv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Gv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ZS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return Je(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function nb(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(dl(r,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function sb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ib(t,e,n){const s=dr(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Yv(e),{host:o,port:a}=rb(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ob()}function Yv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rb(t){const e=Yv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xg(o)}}}function xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function Oi(t,e){return DS(t,"POST","/v1/accounts:signInWithIdp",xv(t,e))}/**
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
 */const ab="http://localhost";class Qs extends Xv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=qd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Oi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hr(n)}return e}}/**
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
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ns extends Bo{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";ns.PROVIDER_ID="facebook.com";/**
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
 */class ss extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ss.credential(n,s)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
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
 */class is extends Bo{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.GITHUB_SIGN_IN_METHOD="github.com";is.PROVIDER_ID="github.com";/**
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
 */class rs extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
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
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await qs._fromIdTokenResponse(e,s,i),o=Mg(s);return new ji({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Mg(s);return new ji({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _l extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new _l(e,n,s,i)}}function Jv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(t,r,e,s):r})}async function lb(t,e,n=!1){const s=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",s)}/**
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
 */async function cb(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await _o(t,Jv(s,i,e,t),n);ee(r.idToken,s,"internal-error");const o=Gd(r.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),ji._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),r}}/**
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
 */async function ub(t,e,n=!1){const s="signIn",i=await Jv(t,s,e),r=await ji._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Zv(t,e,n,s){return Je(t).onIdTokenChanged(e,n,s)}function hb(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}const ml="__sak";/**
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
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function db(){const t=Et();return Qd(t)||pc(t)}const fb=1e3,pb=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=db()&&zS(),this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);KS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pb):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const gb=tE;/**
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
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const sE=nE;/**
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
 */function _b(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new gc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await _b(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function Xd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Xd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function yb(t){vn().location.href=t}/**
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
 */function iE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return iE()?self:null}/**
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
 */const rE="firebaseLocalStorageDb",Ib=1,yl="firebaseLocalStorage",oE="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function wb(){const t=indexedDB.deleteDatabase(rE);return new jo(t).toPromise()}function mh(){const t=indexedDB.open(rE,Ib);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yl,{keyPath:oE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yl)?e(s):(s.close(),await wb(),e(await mh()))})})}async function Lg(t,e,n){const s=_c(t,!0).put({[oE]:e,value:n});return new jo(s).toPromise()}async function Ab(t,e){const n=_c(t,!1).get(e),s=await new jo(n).toPromise();return s===void 0?null:s.value}function Vg(t,e){const n=_c(t,!0).delete(e);return new jo(n).toPromise()}const Rb=800,Cb=3;class aE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Cb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mh();return await Lg(e,ml,"1"),await Vg(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ab(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_c(i,!1).getAll();return new jo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aE.type="LOCAL";const Sb=aE;new Uo(3e4,6e4);/**
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
 */function lE(t,e){return e?xn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jd extends Xv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bb(t){return ub(t.auth,new Jd(t),t.bypassAuthState)}function Pb(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),cb(n,new Jd(t),t.bypassAuthState)}async function kb(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),lb(n,new Jd(t),t.bypassAuthState)}/**
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
 */class cE{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bb;case"linkViaPopup":case"linkViaRedirect":return kb;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:wn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nb=new Uo(2e3,1e4);async function OF(t,e,n){const s=dr(t);SS(t,e,Yd);const i=lE(s,n);return new Vs(s,"signInViaPopup",e,i).executeNotNull()}class Vs extends cE{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nb.get())};e()}}Vs.currentPopupAction=null;/**
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
 */const Ob="pendingRedirect",Ga=new Map;class Db extends cE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const s=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(t,e){const n=Vb(e),s=Lb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Mb(t,e){Ga.set(t._key(),e)}function Lb(t){return xn(t._redirectPersistence)}function Vb(t){return za(Ob,t.config.apiKey,t.name)}async function DF(t,e){return await dr(t)._initializationPromise,uE(t,e,!1)}async function uE(t,e,n=!1){const s=dr(t),i=lE(s,e),o=await new Db(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Fb=10*60*1e3;class Ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hE(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fg(e))}saveEventToCache(e){this.cachedEventUids.add(Fg(e)),this.lastProcessedEventTime=Date.now()}}function Fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hE(t);default:return!1}}/**
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
 */async function Bb(t,e={}){return $o(t,"GET","/v1/projects",e)}/**
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
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function Wb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bb(t);for(const n of e)try{if(qb(n))return}catch{}wn(t,"unauthorized-domain")}function qb(t){const e=_h(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hb.test(n))return!1;if(jb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Kb=new Uo(3e4,6e4);function Ug(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zb(t){return new Promise((e,n)=>{var s,i,r;function o(){Ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ug(),n(yn(t,"network-request-failed"))},timeout:Kb.get()})}if(!((i=(s=vn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=vn().gapi)===null||r===void 0)&&r.load)o();else{const a=QS("iframefcb");return vn()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},Qv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function Gb(t){return Qa=Qa||zb(t),Qa}/**
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
 */const Qb=new Uo(5e3,15e3),Yb="__/auth/iframe",Xb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zd(e,Xb):`https://${t.config.authDomain}/${Yb}`,s={apiKey:e.apiKey,appName:t.name,v:Is},i=Zb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hr(s).slice(1)}`}async function tP(t){const e=await Gb(t),n=vn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:eP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=vn().setTimeout(()=>{r(o)},Qb.get());function l(){vn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sP=500,iP=600,rP="_blank",oP="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aP(t,e,n,s=sP,i=iP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nP),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Et().toLowerCase();n&&(a=$v(c)?rP:n),Uv(c)&&(e=e||oP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(qS(c)&&a!=="_self")return lP(e||"",a),new $g(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new $g(h)}function lP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cP="__/auth/handler",uP="emulator/auth/handler",hP=encodeURIComponent("fac");async function Bg(t,e,n,s,i,r){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Is,eventId:i};if(e instanceof Yd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Bo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${hP}=${encodeURIComponent(l)}`:"";return`${dP(t)}?${hr(a).slice(1)}${c}`}function dP({config:t}){return t.emulator?zd(t,uP):`https://${t.authDomain}/${cP}`}/**
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
 */const _u="webStorageSupport";class fP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sE,this._completeRedirectFn=uE,this._overrideRedirectResult=Mb}async _openPopup(e,n,s,i){var r;$n((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Bg(e,n,s,_h(),i);return aP(e,o,Xd())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Bg(e,n,s,_h(),i);return yb(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):($n(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tP(e),s=new Ub(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_u];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qv()||Qd()||pc()}}const pP=fP;var jg="@firebase/auth",Hg="1.1.0";/**
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
 */class gP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mP(t){In(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},c=new tb(s,i,r,l);return sb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),In(new nn("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(s=>new gP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(jg,Hg,_P(t)),Mt(jg,Hg,"esm2017")}/**
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
 */const yP=5*60,vP=Ev("authIdTokenMaxAge")||yP;let Wg=null;const EP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vP)return;const i=n==null?void 0:n.token;Wg!==i&&(Wg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dE(t=Wd()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nb(t,{popupRedirectResolver:pP,persistence:[Sb,gb,sE]}),s=Ev("authTokenSyncURL");if(s){const r=EP(s);hb(n,r,()=>r(n.currentUser)),Zv(n,o=>r(o))}const i=yv("auth");return i&&ib(n,`http://${i}`),n}mP("Browser");var TP=!1;/**
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
 */const IP=new Map,wP={activated:!1,tokenObservers:[]};function sn(t){return IP.get(t)||Object.assign({},wP)}const qg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class AP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new fo,await RP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new fo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function RP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const CP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},vl=new ur("appCheck","AppCheck",CP);function fE(t){if(!sn(t).activated)throw vl.create("use-before-activation",{appName:t.name})}/**
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
 */const SP="firebase-app-check-database",bP=1,yh="firebase-app-check-store";let Ra=null;function PP(){return Ra||(Ra=new Promise((t,e)=>{try{const n=indexedDB.open(SP,bP);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(vl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(yh,{keyPath:"compositeKey"})}}}catch(n){e(vl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ra)}function kP(t,e){return NP(OP(t),e)}async function NP(t,e){const s=(await PP()).transaction(yh,"readwrite"),r=s.objectStore(yh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(vl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function OP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const vh=new Fo("@firebase/app-check");function Kg(t,e){return wv()?kP(t,e).catch(n=>{vh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const DP={error:"UNKNOWN_ERROR"};function xP(t){return dc.encodeString(JSON.stringify(t),!1)}async function Eh(t,e=!1){const n=t.app;fE(n);const s=sn(n);let i=s.token,r;if(i&&!Mr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Mr(l)?i=l:await Kg(n,void 0))}if(!e&&i&&Mr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await sn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?vh.warn(l.message):vh.error(l),r=l}let a;return i?r?Mr(i)?a={token:i.token,internalError:r}:a=Gg(r):(a={token:i.token},s.token=i,await Kg(n,i)):a=Gg(r),o&&FP(n,a),a}async function MP(t){const e=t.app;fE(e);const{provider:n}=sn(e);{const{token:s}=await n.getToken();return{token:s}}}function LP(t,e,n,s){const{app:i}=t,r=sn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Mr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),zg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>zg(t))}function pE(t,e){const n=sn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function zg(t){const{app:e}=t,n=sn(e);let s=n.tokenRefresher;s||(s=VP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function VP(t){const{app:e}=t;return new AP(async()=>{const n=sn(e);let s;if(n.token?s=await Eh(t,!0):s=await Eh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=sn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},qg.RETRIAL_MIN_WAIT,qg.RETRIAL_MAX_WAIT)}function FP(t,e){const n=sn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Mr(t){return t.expireTimeMillis-Date.now()>0}function Gg(t){return{token:xP(DP),error:t}}/**
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
 */class UP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=sn(this.app);for(const n of e)pE(this.app,n.next);return Promise.resolve()}}function $P(t,e){return new UP(t,e)}function BP(t){return{getToken:e=>Eh(t,e),getLimitedUseToken:()=>MP(t),addTokenListener:e=>LP(t,"INTERNAL",e),removeTokenListener:e=>pE(t.app,e)}}const jP="@firebase/app-check",HP="0.8.0",WP="app-check",Qg="app-check-internal";function qP(){In(new nn(WP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return $P(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Qg).initialize()})),In(new nn(Qg,t=>{const e=t.getProvider("app-check").getImmediate();return BP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Mt(jP,HP)}qP();var KP="firebase",zP="10.1.0";/**
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
 */Mt(KP,zP,"app");const gE=Symbol("firebaseApp");function Ho(t){return Vd()&&xt(gE,null)||Wd(t)}const fn=()=>{},GP=typeof window<"u";function Zd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function QP(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function oi(t){return!!t&&typeof t=="object"}const YP=Object.prototype;function XP(t){return oi(t)&&Object.getPrototypeOf(t)===YP}function ef(t){return oi(t)&&t.type==="document"}function JP(t){return oi(t)&&t.type==="collection"}function ZP(t){return ef(t)||JP(t)}function ek(t){return oi(t)&&t.type==="query"}function tk(t){return oi(t)&&"ref"in t}function nk(t){return oi(t)&&typeof t.bucket=="string"}function sk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const ik=Symbol.for("v-scx");function rk(){return!!xt(ik,0)}const Ca=new WeakMap;function ok(t,e){if(!Ca.has(t)){const n=py(!0);Ca.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ca.delete(t)}}return Ca.get(t)}const _E=new WeakMap;function mE(t){return _E.get(Ho(t))}const Sa=new WeakMap;function yE(t){const e=Ho(t);if(!Sa.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Sa.set(e,r),n(r.value)}];Sa.set(e,i)}return Sa.get(e)}function ak(t){const e=yE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function lk(t,e){const n=dE(e);Zv(n,s=>{const i=yE();t.value=s,Array.isArray(i)&&i[1](t)})}const Yg="@firebase/database",Xg="1.0.1";/**
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
 */let vE="";function ck(t){vE=t}/**
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
 */class uk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const EE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uk(e)}}catch{}return new hk},Fs=EE("localStorage"),Th=EE("sessionStorage");/**
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
 */const Di=new Fo("@firebase/database"),dk=function(){let t=1;return function(){return t++}}(),TE=function(t){const e=vC(t),n=new pC;n.update(e);const s=n.digest();return dc.encodeByteArray(s)},Wo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Wo.apply(null,s):typeof s=="object"?e+=it(s):e+=s,e+=" "}return e};let Ks=null,Jg=!0;const fk=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Di.logLevel=fe.VERBOSE,Ks=Di.log.bind(Di),e&&Th.set("logging_enabled",!0)):typeof t=="function"?Ks=t:(Ks=null,Th.remove("logging_enabled"))},ht=function(...t){if(Jg===!0&&(Jg=!1,Ks===null&&Th.get("logging_enabled")===!0&&fk(!0)),Ks){const e=Wo.apply(null,t);Ks(e)}},qo=function(t){return function(...e){ht(t,...e)}},Ih=function(...t){const e="FIREBASE INTERNAL ERROR: "+Wo(...t);Di.error(e)},Ys=function(...t){const e=`FIREBASE FATAL ERROR: ${Wo(...t)}`;throw Di.error(e),new Error(e)},Lt=function(...t){const e="FIREBASE WARNING: "+Wo(...t);Di.warn(e)},pk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hi="[MIN_NAME]",Xs="[MAX_NAME]",fr=function(t,e){if(t===e)return 0;if(t===Hi||e===Xs)return-1;if(e===Hi||t===Xs)return 1;{const n=Zg(t),s=Zg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},_k=function(t,e){return t===e?0:t<e?-1:1},Ar=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},tf=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=it(e[s]),n+=":",n+=tf(t[e[s]]);return n+="}",n},wE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const AE=function(t){x(!IE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},mk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vk=new RegExp("^-?(0*)\\d{1,10}$"),Ek=-2147483648,Tk=2147483647,Zg=function(t){if(vk.test(t)){const e=Number(t);if(e>=Ek&&e<=Tk)return e}return null},Ko=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ik=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ak{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class wh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wh.OWNER="owner";/**
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
 */const nf="5",RE="v",CE="s",SE="r",bE="f",PE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kE="ls",NE="p",Ah="ac",OE="websocket",DE="long_polling";/**
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
 */class Rk{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ck(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xE(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===OE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===DE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ck(t)&&(n.ns=t.namespace);const i=[];return Kt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Sk{constructor(){this.counters_={}}incrementCounter(e,n=1){Kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JR(this.counters_)}}/**
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
 */const mu={},yu={};function sf(t){const e=t.toString();return mu[e]||(mu[e]=new Sk),mu[e]}function bk(t,e){const n=t.toString();return yu[n]||(yu[n]=e()),yu[n]}/**
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
 */class Pk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ko(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const e_="start",kk="close",Nk="pLPCommand",Ok="pRTLPCB",ME="id",LE="pw",VE="ser",Dk="cb",xk="seg",Mk="ts",Lk="d",Vk="dframe",FE=1870,UE=30,Fk=FE-UE,Uk=25e3,$k=3e4;class Ii{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=sf(n),this.urlFn=l=>(this.appCheckToken&&(l[Ah]=this.appCheckToken),xE(n,DE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($k)),gk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===e_)this.id=a,this.password=l;else if(o===kk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[e_]="t",s[VE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Dk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[RE]=nf,this.transportSessionId&&(s[CE]=this.transportSessionId),this.lastSessionId&&(s[kE]=this.lastSessionId),this.applicationId&&(s[NE]=this.applicationId),this.appCheckToken&&(s[Ah]=this.appCheckToken),typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(s[SE]=bE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ii.forceAllow_=!0}static forceDisallow(){Ii.forceDisallow_=!0}static isAvailable(){return Ii.forceAllow_?!0:!Ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mk()&&!yk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_v(n),i=wE(s,Fk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Vk]="t",s[ME]=e,s[LE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dk(),window[Nk+this.uniqueCallbackIdentifier]=e,window[Ok+this.uniqueCallbackIdentifier]=n,this.myIFrame=rf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ME]=this.myID,e[LE]=this.myPW,e[VE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UE+s.length<=FE;){const o=this.pendingSegs.shift();s=s+"&"+xk+i+"="+o.seg+"&"+Mk+i+"="+o.ts+"&"+Lk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Uk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Bk=16384,jk=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class Yt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=sf(n),this.connURL=Yt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[RE]=nf,typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(o[SE]=bE),n&&(o[CE]=n),s&&(o[kE]=s),i&&(o[Ah]=i),r&&(o[NE]=r),xE(e,OE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fs.set("previous_websocket_failure",!0);try{let s;Iv(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!Yt.forceDisallow_}static previouslyFailed(){return Fs.isInMemoryStorage||Fs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=po(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wE(n,Bk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
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
 */class yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ii,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Yt&&Yt.isAvailable();let s=n&&!Yt.previouslyFailed();if(e.webSocketOnly&&(n||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Yt];else{const i=this.transports_=[];for(const r of yo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
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
 */const Hk=6e4,Wk=5e3,qk=10*1024,Kk=100*1024,vu="t",t_="d",zk="s",n_="r",Gk="e",s_="o",i_="a",r_="n",o_="p",Qk="h";class Yk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Kr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vu in e){const n=e[vu];n===i_?this.upgradeIfSecondaryHealthy_():n===n_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===s_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ar("t",e),s=Ar("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:o_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ar("t",e),s=Ar("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ar(vu,e);if(t_ in e){const s=e[t_];if(n===Qk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===r_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zk?this.onConnectionShutdown_(s):n===n_?this.onReset_(s):n===Gk?Ih("Server Error: "+s):n===s_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ih("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nf!==s&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Kr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:o_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class $E{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class BE{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Tl extends BE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const a_=32,l_=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new Oe("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ms(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function jE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Xk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function HE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Oe(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Ht(t,e){const n=ue(t),s=ue(e);if(n===null)return e;if(n===s)return Ht(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qE(t,e){if(ms(t)!==ms(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ms(t)>ms(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Jk{constructor(e,n){this.errorPrefix_=n,this.parts_=HE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fc(this.parts_[s]);KE(this)}}function Zk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fc(e),KE(t)}function eN(t){const e=t.parts_.pop();t.byteLength_-=fc(e),t.parts_.length>0&&(t.byteLength_-=1)}function KE(t){if(t.byteLength_>l_)throw new Error(t.errorPrefix_+"has a key path longer than "+l_+" bytes ("+t.byteLength_+").");if(t.parts_.length>a_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+a_+") or object contains a cycle "+Os(t))}function Os(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class of extends BE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new of}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rr=1e3,tN=60*5*1e3,c_=30*1e3,nN=1.3,sN=3e4,iN="server_kill",u_=3;class Fn extends $E{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rr,this.maxReconnectDelay_=tN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Iv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");of.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(it(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new fo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kn(e,"w")){const s=Bi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=c_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ih("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sN&&(this.reconnectDelay_=Rr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Yk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Lt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(iN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Lt(h),l())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uh(this.interruptReasons_)&&(this.reconnectDelay_=Rr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>tf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=u_&&(this.reconnectDelay_=c_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=u_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vE.replace(/\./g,"-")]=1,Bd()?e["framework.cordova"]=1:Tv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tl.getInstance().currentlyOnline();return uh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class mc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(Hi,e),i=new he(Hi,n);return this.compare(s,i)!==0}minPost(){return he.MIN}}/**
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
 */let ba;class zE extends mc{static get __EMPTY_NODE(){return ba}static set __EMPTY_NODE(e){ba=e}compare(e,n){return fr(e.name,n.name)}isDefinedOn(e){throw cr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Xs,ba)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,ba)}toString(){return".key"}}const xi=new zE;/**
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
 */let Pa=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ot=class Lr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Lr.RED,this.left=i??pn.EMPTY_NODE,this.right=r??pn.EMPTY_NODE}copy(e,n,s,i,r){return new Lr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ot.RED=!0;Ot.BLACK=!1;class rN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let pn=class Ya{constructor(e,n=Ya.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ya(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ot.BLACK,null,null))}remove(e){return new Ya(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ot.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pa(this.root_,null,this.comparator_,!0,e)}};pn.EMPTY_NODE=new rN;/**
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
 */function oN(t,e){return fr(t.name,e.name)}function af(t,e){return fr(t,e)}/**
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
 */let Rh;function aN(t){Rh=t}const GE=function(t){return typeof t=="number"?"number:"+AE(t):"string:"+t},QE=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kn(e,".sv"),"Priority must be a string or number.")}else x(t===Rh||t.isEmpty(),"priority of unexpected type.");x(t===Rh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let h_;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QE(this.priorityNode_)}static set __childrenNodeConstructor(e){h_=e}static get __childrenNodeConstructor(){return h_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ue(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||ms(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=AE(this.value_):e+=this.value_,this.lazyHash_=TE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let YE,XE;function lN(t){YE=t}function cN(t){XE=t}class uN extends mc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Xs,new Ke("[PRIORITY-POST]",XE))}makePost(e,n){const s=YE(e);return new he(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const gt=new uN;/**
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
 */const hN=Math.log(2);class dN{constructor(e){const n=r=>parseInt(Math.log(r)/hN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ot(d,h.node,Ot.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new Ot(d,h.node,Ot.BLACK,_,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,m){const v=h-_,T=h;h-=_;const C=i(v+1,T),S=t[v],w=n?n(S):S;f(new Ot(w,S.node,m,null,C))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(_+1));m?d(v,Ot.BLACK):(d(v,Ot.BLACK),d(v,Ot.RED))}return u},o=new dN(t.length),a=r(o);return new pn(s||e,a)};/**
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
 */let Eu;const _i={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(_i&&gt,"ChildrenNode.ts has not been loaded"),Eu=Eu||new Mn({".priority":_i},{".priority":gt}),Eu}get(e){const n=Bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pn?n:null}hasIndex(e){return Kn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(he.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Il(s,e.getCompare()):a=_i;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mn(u,c)}addToIndexes(e,n){const s=hl(this.indexes_,(i,r)=>{const o=Bi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Il(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,i=>{if(i===_i)return i;{const r=n.get(e.name);return r?i.remove(new he(e.name,r)):i}});return new Mn(s,this.indexSet_)}}/**
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
 */let Cr;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&QE(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cr||(Cr=new ye(new pn(af),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cr}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Cr:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Cr:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{x(ue(e)!==".priority"||ms(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(gt,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GE(this.getPriority().val())+":"),this.forEachChild(gt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":TE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new he(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(gt),i=n.getIterator(gt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fN extends ye{constructor(){super(new pn(af),ye.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const zo=new fN;Object.defineProperties(he,{MIN:{value:new he(Hi,ye.EMPTY_NODE)},MAX:{value:new he(Xs,zo)}});zE.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;aN(zo);cN(zo);/**
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
 */const pN=!0;function dt(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,dt(e))}if(!(t instanceof Array)&&pN){const n=[];let s=!1;if(Kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=dt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=Il(n,oN,o=>o.name,af);if(s){const o=Il(n,gt.getCompare());return new ye(r,dt(e),new Mn({".priority":o},{".priority":gt}))}else return new ye(r,dt(e),Mn.Default)}else{let n=ye.EMPTY_NODE;return Kt(t,(s,i)=>{if(Kn(t,s)&&s.substring(0,1)!=="."){const r=dt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(dt(e))}}lN(dt);/**
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
 */class gN extends mc{constructor(e){super(),this.indexPath_=e,x(!le(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}makePost(e,n){const s=dt(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,zo);return new he(Xs,e)}toString(){return HE(this.indexPath_,0).join("/")}}/**
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
 */class _N extends mc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=dt(e);return new he(n,s)}toString(){return".value"}}const mN=new _N;/**
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
 */function yN(t){return{type:"value",snapshotNode:t}}function vN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function EN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function d_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new lf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function f_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gt?n="$priority":t.index_===mN?n="$value":t.index_===xi?n="$key":(x(t.index_ instanceof gN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=it(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+it(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=it(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function p_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gt&&(e.i=t.index_.toString()),e}/**
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
 */class wl extends $E{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wl.getListenId_(e,s),a={};this.listens_[o]=a;const l=f_(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Bi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=wl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=f_(e._queryParams),s=e._path.toString(),i=new fo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=po(a.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class IN{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Al(){return{value:null,children:new Map}}function JE(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ue(e);t.children.has(s)||t.children.set(s,Al());const i=t.children.get(s);e=ke(e),JE(i,e,n)}}function Ch(t,e,n){t.value!==null?n(e,t.value):wN(t,(s,i)=>{const r=new Oe(e.toString()+"/"+s);Ch(i,r,n)})}function wN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class AN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Kt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const g_=10*1e3,RN=30*1e3,CN=5*60*1e3;class SN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AN(e);const s=g_+(RN-g_)*Math.random();Kr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Kt(e,(i,r)=>{r>0&&Kn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Kr(this.reportStats_.bind(this),Math.floor(Math.random()*2*CN))}}/**
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
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function ZE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=gn.ACK_USER_WRITE,this.source=ZE()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new Rl(Ae(),n,this.revert)}}else return x(ue(this.path)===e,"operationForChild called for unrelated child."),new Rl(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Js{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=gn.OVERWRITE}operationForChild(e){return le(this.path)?new Js(this.source,Ae(),this.snap.getImmediateChild(e)):new Js(this.source,ke(this.path),this.snap)}}/**
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
 */class vo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=gn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new Js(this.source,Ae(),n.value):new vo(this.source,Ae(),n)}else return x(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vo(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class cf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function bN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(TN(o.childName,o.snapshotNode))}),Sr(t,i,"child_removed",e,s,n),Sr(t,i,"child_added",e,s,n),Sr(t,i,"child_moved",r,s,n),Sr(t,i,"child_changed",e,s,n),Sr(t,i,"value",e,s,n),i}function Sr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>kN(t,a,l)),o.forEach(a=>{const l=PN(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function PN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kN(t,e,n){if(e.childName==null||n.childName==null)throw cr("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function nT(t,e){return{eventCache:t,serverCache:e}}function zr(t,e,n,s){return nT(new cf(e,n,s),t.serverCache)}function sT(t,e,n,s){return nT(t.eventCache,new cf(e,n,s))}function Sh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tu;const NN=()=>(Tu||(Tu=new pn(_k)),Tu);class be{constructor(e,n=NN()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Kt(e,(s,i)=>{n=n.set(new Oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(le(e))return null;{const s=ue(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ke(e),n);return r!=null?{path:Xe(new Oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new be(null)}}set(e,n){if(le(e))return new be(n,this.children);{const s=ue(e),r=(this.children.get(s)||new be(null)).set(ke(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const i=s.remove(ke(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(le(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(le(e))return n;{const s=ue(e),r=(this.children.get(s)||new be(null)).setTree(ke(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(le(e))return null;{const r=ue(e),o=this.children.get(r);return o?o.findOnPath_(ke(e),Xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const i=ue(e),r=this.children.get(i);return r?r.foreachOnPath_(ke(e),Xe(n,i),s):new be(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new be(null))}}function Gr(t,e,n){if(le(e))return new tn(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ht(i,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new tn(r)}}}function __(t,e,n){let s=t;return Kt(n,(i,r)=>{s=Gr(s,Xe(e,i),r)}),s}function m_(t,e){if(le(e))return tn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new tn(n)}}function bh(t,e){return ai(t,e)!=null}function ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ht(n.path,e)):null}function y_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gt,(s,i)=>{e.push(new he(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new he(s,i.value))}),e}function fs(t,e){if(le(e))return t;{const n=ai(t,e);return n!=null?new tn(new be(n)):new tn(t.writeTree_.subtree(e))}}function Ph(t){return t.writeTree_.isEmpty()}function Wi(t,e){return iT(Ae(),t.writeTree_,e)}function iT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=iT(Xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Xe(t,".priority"),s)),n}}/**
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
 */function rT(t,e){return uT(e,t)}function ON(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gr(t.visibleWrites,e,n)),t.lastWriteId=s}function DN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function xN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MN(a,s.path)?i=!1:Jt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return LN(t),!0;if(s.snap)t.visibleWrites=m_(t.visibleWrites,s.path);else{const a=s.children;Kt(a,l=>{t.visibleWrites=m_(t.visibleWrites,Xe(s.path,l))})}return!0}else return!1}function MN(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(Xe(t.path,n),e))return!0;return!1}function LN(t){t.visibleWrites=oT(t.allWrites,VN,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VN(t){return t.visible}function oT(t,e,n){let s=tn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Jt(n,o)?(a=Ht(n,o),s=Gr(s,a,r.snap)):Jt(o,n)&&(a=Ht(o,n),s=Gr(s,Ae(),r.snap.getChild(a)));else if(r.children){if(Jt(n,o))a=Ht(n,o),s=__(s,a,r.children);else if(Jt(o,n))if(a=Ht(o,n),le(a))s=__(s,Ae(),r.children);else{const l=Bi(r.children,ue(a));if(l){const c=l.getChild(ke(a));s=Gr(s,Ae(),c)}}}else throw cr("WriteRecord should have .snap or .children")}}return s}function aT(t,e,n,s,i){if(!s&&!i){const r=ai(t.visibleWrites,e);if(r!=null)return r;{const o=fs(t.visibleWrites,e);if(Ph(o))return n;if(n==null&&!bh(o,Ae()))return null;{const a=n||ye.EMPTY_NODE;return Wi(o,a)}}}else{const r=fs(t.visibleWrites,e);if(!i&&Ph(r))return n;if(!i&&n==null&&!bh(r,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},a=oT(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return Wi(a,l)}}}function FN(t,e,n){let s=ye.EMPTY_NODE;const i=ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fs(t.visibleWrites,e);return n.forEachChild(gt,(o,a)=>{const l=Wi(fs(r,new Oe(o)),a);s=s.updateImmediateChild(o,l)}),y_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fs(t.visibleWrites,e);return y_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function UN(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Xe(e,n);if(bh(t.visibleWrites,r))return null;{const o=fs(t.visibleWrites,r);return Ph(o)?i.getChild(n):Wi(o,i.getChild(n))}}function $N(t,e,n,s){const i=Xe(e,n),r=ai(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fs(t.visibleWrites,i);return Wi(o,s.getNode().getImmediateChild(n))}else return null}function BN(t,e){return ai(t.visibleWrites,e)}function jN(t,e,n,s,i,r,o){let a;const l=fs(t.visibleWrites,e),c=ai(l,Ae());if(c!=null)a=c;else if(n!=null)a=Wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function HN(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function kh(t,e,n,s){return aT(t.writeTree,t.treePath,e,n,s)}function lT(t,e){return FN(t.writeTree,t.treePath,e)}function v_(t,e,n,s){return UN(t.writeTree,t.treePath,e,n,s)}function Cl(t,e){return BN(t.writeTree,Xe(t.treePath,e))}function WN(t,e,n,s,i,r){return jN(t.writeTree,t.treePath,e,n,s,i,r)}function uf(t,e,n){return $N(t.writeTree,t.treePath,e,n)}function cT(t,e){return uT(Xe(t.treePath,e),t.writeTree)}function uT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,d_(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,EN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,d_(s,e.snapshotNode,i.oldSnap));else throw cr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hT=new KN;class hf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new cf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zs(this.viewCache_),r=WN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function zN(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GN(t,e,n,s,i){const r=new qN;let o,a;if(n.type===gn.OVERWRITE){const c=n;c.source.fromUser?o=Nh(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Sl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===gn.MERGE){const c=n;c.source.fromUser?o=YN(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Oh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===gn.ACK_USER_WRITE){const c=n;c.revert?o=ZN(t,e,c.path,s,i,r):o=XN(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===gn.LISTEN_COMPLETE)o=JN(t,e,n.path,s,r);else throw cr("Unknown operation type: "+n.type);const l=r.getChanges();return QN(e,o,l),{viewCache:o,changes:l}}function QN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Sh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yN(Sh(e)))}}function dT(t,e,n,s,i,r){const o=e.eventCache;if(Cl(s,n)!=null)return e;{let a,l;if(le(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zs(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=lT(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=kh(s,Zs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ue(n);if(c===".priority"){x(ms(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=v_(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ke(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=v_(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=uf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return zr(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Sl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ue(n);if(!l.isCompleteForPath(n)&&ms(n)>1)return e;const _=ke(n),v=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,_,hT,null)}const h=sT(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),d=new hf(i,h,r);return dT(t,h,n,i,d,a)}function Nh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new hf(i,e,r);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=zr(e,c,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=zr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ke(n),f=a.getNode().getImmediateChild(h);let _;if(le(d))_=s;else{const m=u.getCompleteChild(h);m!=null?jE(d)===".priority"&&m.getChild(WE(d)).isEmpty()?_=m:_=m.updateChild(d,s):_=ye.EMPTY_NODE}if(f.equals(_))l=e;else{const m=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=zr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function E_(t,e){return t.eventCache.isCompleteForChild(e)}function YN(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Xe(n,l);E_(e,ue(u))&&(a=Nh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Xe(n,l);E_(e,ue(u))||(a=Nh(t,a,u,c,i,r,o))}),a}function T_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Oh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=T_(t,f,d);l=Sl(t,l,new Oe(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),m=T_(t,_,d);l=Sl(t,l,new Oe(h),m,i,r,o,a)}}),l}function XN(t,e,n,s,i,r,o){if(Cl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(le(n)){let c=new be(null);return l.getNode().forEachChild(xi,(u,h)=>{c=c.set(new Oe(u),h)}),Oh(t,e,n,c,i,r,a,o)}else return e}else{let c=new be(null);return s.foreach((u,h)=>{const d=Xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Oh(t,e,n,c,i,r,a,o)}}function JN(t,e,n,s,i){const r=e.serverCache,o=sT(e,r.getNode(),r.isFullyInitialized()||le(n),r.isFiltered());return dT(t,o,n,s,hT,i)}function ZN(t,e,n,s,i,r){let o;if(Cl(s,n)!=null)return e;{const a=new hf(s,e,i),l=e.eventCache.getNode();let c;if(le(n)||ue(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=kh(s,Zs(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=lT(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ue(n);let h=uf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ke(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,ke(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kh(s,Zs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Cl(s,Ae())!=null,zr(e,c,o,t.filter.filtersNodes())}}function e1(t,e){const n=Zs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function I_(t,e,n,s){e.type===gn.MERGE&&e.source.queryId!==null&&(x(Zs(t.viewCache_),"We should always have a full cache before handling merges"),x(Sh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=GN(t.processor_,i,e,n,s);return zN(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,t1(t,r.changes,r.viewCache.eventCache.getNode(),null)}function t1(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return bN(t.eventGenerator_,e,n,i)}/**
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
 */let w_;function n1(t){x(!w_,"__referenceConstructor has already been defined"),w_=t}function df(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),I_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(I_(o,e,n,s));return r}}function ff(t,e){let n=null;for(const s of t.views.values())n=n||e1(s,e);return n}/**
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
 */let A_;function s1(t){x(!A_,"__referenceConstructor has already been defined"),A_=t}class R_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=HN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i1(t,e,n,s,i){return ON(t.pendingWriteTree_,e,n,s,i),i?vc(t,new Js(ZE(),e,n)):[]}function wi(t,e,n=!1){const s=DN(t.pendingWriteTree_,e);if(xN(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(Ae(),!0):Kt(s.children,o=>{r=r.set(new Oe(o),!0)}),vc(t,new Rl(s.path,r,n))}else return[]}function yc(t,e,n){return vc(t,new Js(eT(),e,n))}function r1(t,e,n){const s=be.fromObject(n);return vc(t,new vo(eT(),e,s))}function o1(t,e,n,s){const i=_T(t,s);if(i!=null){const r=mT(i),o=r.path,a=r.queryId,l=Ht(o,e),c=new Js(tT(a),l,n);return yT(t,o,c)}else return[]}function a1(t,e,n,s){const i=_T(t,s);if(i){const r=mT(i),o=r.path,a=r.queryId,l=Ht(o,e),c=be.fromObject(n),u=new vo(tT(a),l,c);return yT(t,o,u)}else return[]}function fT(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ht(o,e),c=ff(a,l);if(c)return c});return aT(i,e,r,n,!0)}function vc(t,e){return pT(e,t.syncPointTree_,null,rT(t.pendingWriteTree_,Ae()))}function pT(t,e,n,s){if(le(t.path))return gT(t,e,n,s);{const i=e.get(Ae());n==null&&i!=null&&(n=ff(i,Ae()));let r=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cT(s,o);r=r.concat(pT(a,l,c,u))}return i&&(r=r.concat(df(i,t,s,n))),r}}function gT(t,e,n,s){const i=e.get(Ae());n==null&&i!=null&&(n=ff(i,Ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cT(s,o),u=t.operationForChild(o);u&&(r=r.concat(gT(u,a,l,c)))}),i&&(r=r.concat(df(i,t,s,n))),r}function _T(t,e){return t.tagToQueryMap.get(e)}function mT(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function yT(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=rT(t.pendingWriteTree_,e);return df(s,n,i,null)}/**
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
 */class pf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pf(n)}node(){return this.node_}}class gf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new gf(this.syncTree_,n)}node(){return fT(this.syncTree_,this.path_)}}const l1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},C_=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return u1(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},u1=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},h1=function(t,e,n,s){return _f(e,new gf(n,t),s)},d1=function(t,e,n){return _f(t,new pf(e),n)};function _f(t,e,n){const s=t.getPriority().val(),i=C_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=C_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,dt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(gt,(a,l)=>{const c=_f(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class mf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yf(t,e){let n=e instanceof Oe?e:new Oe(e),s=t,i=ue(n);for(;i!==null;){const r=Bi(s.node.children,i)||{children:{},childCount:0};s=new mf(i,s,r),n=ke(n),i=ue(n)}return s}function pr(t){return t.node.value}function vT(t,e){t.node.value=e,Dh(t)}function ET(t){return t.node.childCount>0}function f1(t){return pr(t)===void 0&&!ET(t)}function Ec(t,e){Kt(t.node.children,(n,s)=>{e(new mf(n,t,s))})}function TT(t,e,n,s){n&&!s&&e(t),Ec(t,i=>{TT(i,e,!0,s)}),n&&s&&e(t)}function p1(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Go(t){return new Oe(t.parent===null?t.name:Go(t.parent)+"/"+t.name)}function Dh(t){t.parent!==null&&g1(t.parent,t.name,t)}function g1(t,e,n){const s=f1(n),i=Kn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Dh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dh(t))}/**
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
 */const _1=/[\[\].#$\/\u0000-\u001F\u007F]/,m1=/[\[\].#$\u0000-\u001F\u007F]/,Iu=10*1024*1024,IT=function(t){return typeof t=="string"&&t.length!==0&&!_1.test(t)},y1=function(t){return typeof t=="string"&&t.length!==0&&!m1.test(t)},v1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),y1(t)},wT=function(t,e,n){const s=n instanceof Oe?new Jk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Os(s));if(typeof e=="function")throw new Error(t+"contains a function "+Os(s)+" with contents = "+e.toString());if(IE(e))throw new Error(t+"contains "+e.toString()+" "+Os(s));if(typeof e=="string"&&e.length>Iu/3&&fc(e)>Iu)throw new Error(t+"contains a string greater than "+Iu+" utf8 bytes "+Os(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!IT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Os(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zk(s,o),wT(t,a,s),eN(s)}),i&&r)throw new Error(t+' contains ".value" child '+Os(s)+" in addition to actual children.")}},E1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!IT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!v1(n))throw new Error(yC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function I1(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!qE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function li(t,e,n){I1(t,n),w1(t,s=>Jt(s,e)||Jt(e,s))}function w1(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(A1(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function A1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ks&&ht("event: "+n.toString()),Ko(s)}}}/**
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
 */const R1="repo_interrupt",C1=25;class S1{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Al(),this.transactionQueueTree_=new mf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function b1(t,e,n){if(t.stats_=sf(t.repoInfo_),t.forceRestClient_||Ik())t.server_=new wl(t.repoInfo_,(s,i,r,o)=>{S_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>b_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(s,i,r,o)=>{S_(t,s,i,r,o)},s=>{b_(t,s)},s=>{k1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=bk(t.repoInfo_,()=>new SN(t.stats_,t.server_)),t.infoData_=new IN,t.infoSyncTree_=new R_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=yc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vf(t,"connected",!1),t.serverSyncTree_=new R_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);li(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function P1(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AT(t){return l1({timestamp:P1(t)})}function S_(t,e,n,s,i){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=hl(n,c=>dt(c));o=a1(t.serverSyncTree_,r,l,i)}else{const l=dt(n);o=o1(t.serverSyncTree_,r,l,i)}else if(s){const l=hl(n,c=>dt(c));o=r1(t.serverSyncTree_,r,l)}else{const l=dt(n);o=yc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Tf(t,r)),li(t.eventQueue_,a,o)}function b_(t,e){vf(t,"connected",e),e===!1&&O1(t)}function k1(t,e){Kt(e,(n,s)=>{vf(t,n,s)})}function vf(t,e,n){const s=new Oe("/.info/"+e),i=dt(n);t.infoData_.updateSnapshot(s,i);const r=yc(t.infoSyncTree_,s,i);li(t.eventQueue_,s,r)}function N1(t){return t.nextWriteId_++}function O1(t){RT(t,"onDisconnectEvents");const e=AT(t),n=Al();Ch(t.onDisconnect_,Ae(),(i,r)=>{const o=h1(i,r,t.serverSyncTree_,e);JE(n,i,o)});let s=[];Ch(n,Ae(),(i,r)=>{s=s.concat(yc(t.serverSyncTree_,i,r));const o=L1(t,i);Tf(t,o)}),t.onDisconnect_=Al(),li(t.eventQueue_,Ae(),s)}function D1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(R1)}function RT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function CT(t,e,n){return fT(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Ef(t,e=t.transactionQueueTree_){if(e||Tc(t,e),pr(e)){const n=bT(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&x1(t,Go(e),n)}else ET(e)&&Ec(e,n=>{Ef(t,n)})}function x1(t,e,n){const s=n.map(c=>c.currentWriteId),i=CT(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ht(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{RT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(wi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Tc(t,yf(t.transactionQueueTree_,e)),Ef(t,t.transactionQueueTree_),li(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ko(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Lt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Tf(t,e)}},o)}function Tf(t,e){const n=ST(t,e),s=Go(n),i=bT(t,n);return M1(t,i,s),s}function M1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ht(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=C1)u=!0,h="maxretry",i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=CT(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){wT("transaction failed: Data returned ",f,l.path);let _=dt(f);typeof f=="object"&&f!=null&&Kn(f,".priority")||(_=_.updatePriority(d.getPriority()));const v=l.currentWriteId,T=AT(t),C=d1(_,d,T);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=N1(t),o.splice(o.indexOf(v),1),i=i.concat(i1(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(wi(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0))}li(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Tc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ko(s[a]);Ef(t,t.transactionQueueTree_)}function ST(t,e){let n,s=t.transactionQueueTree_;for(n=ue(e);n!==null&&pr(s)===void 0;)s=yf(s,n),e=ke(e),n=ue(e);return s}function bT(t,e){const n=[];return PT(t,e,n),n.sort((s,i)=>s.order-i.order),n}function PT(t,e,n){const s=pr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ec(e,i=>{PT(t,i,n)})}function Tc(t,e){const n=pr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,vT(e,n.length>0?n:void 0)}Ec(e,s=>{Tc(t,s)})}function L1(t,e){const n=Go(ST(t,e)),s=yf(t.transactionQueueTree_,e);return p1(s,i=>{wu(t,i)}),wu(t,s),TT(s,i=>{wu(t,i)}),n}function wu(t,e){const n=pr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vT(e,void 0):n.length=r+1,li(t.eventQueue_,Go(e),i);for(let o=0;o<s.length;o++)Ko(s[o])}}/**
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
 */function V1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function F1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const P_=function(t,e){const n=U1(t),s=n.namespace;n.domain==="firebase.com"&&Ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Oe(n.pathString)}},U1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=V1(t.substring(u,h)));const d=F1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class If{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return le(this._path)?null:jE(this._path)}get ref(){return new gr(this._repo,this._path)}get _queryIdentifier(){const e=p_(this._queryParams),n=tf(e);return n==="{}"?"default":n}get _queryObject(){return p_(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof If))return!1;const n=this._repo===e._repo,s=qE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xk(this._path)}}class gr extends If{constructor(e,n){super(e,n,new lf,!1)}get parent(){const e=WE(this._path);return e===null?null:new gr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}n1(gr);s1(gr);/**
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
 */const $1="FIREBASE_DATABASE_EMULATOR_HOST",xh={};let B1=!1;function j1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=P_(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[$1]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=P_(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new wh(wh.OWNER):new Ak(t.name,t.options,e);E1("Invalid Firebase Database URL",o),le(o.path)||Ys("Database URL must point to the root of a Firebase Database (not including a child path).");const h=W1(a,t,u,new wk(t.name,n));return new q1(h,t)}function H1(t,e){const n=xh[e];(!n||n[t.key]!==t)&&Ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),D1(t),delete n[t.key]}function W1(t,e,n,s){let i=xh[e.name];i||(i={},xh[e.name]=i);let r=i[t.toURLString()];return r&&Ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new S1(t,B1,n,s),i[t.toURLString()]=r,r}class q1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(b1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gr(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(H1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function K1(t){ck(Is),In(new nn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return j1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Mt(Yg,Xg,t),Mt(Yg,Xg,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};K1();var z1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,wf=wf||{},J=z1||self;function Ic(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G1(t){return Object.prototype.hasOwnProperty.call(t,Au)&&t[Au]||(t[Au]=++Q1)}var Au="closure_uid_"+(1e9*Math.random()>>>0),Q1=0;function Y1(t,e,n){return t.call.apply(t.bind,arguments)}function X1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=Y1:_t=X1,_t.apply(null,arguments)}function ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ws(){this.s=this.s,this.o=this.o}var J1=0;ws.prototype.s=!1;ws.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),J1!=0)&&G1(this)};ws.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Af(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function k_(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ic(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Z1=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Eo(t){return/^[\s\xa0]*$/.test(t)}function wc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return wc().indexOf(t)!=-1}function Rf(t){return Rf[" "](t),t}Rf[" "]=function(){};function eO(t,e){var n=KO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tO=dn("Opera"),qi=dn("Trident")||dn("MSIE"),NT=dn("Edge"),Mh=NT||qi,OT=dn("Gecko")&&!(wc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),nO=wc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function DT(){var t=J.document;return t?t.documentMode:void 0}var Lh;e:{var Ru="",Cu=function(){var t=wc();if(OT)return/rv:([^\);]+)(\)|;)/.exec(t);if(NT)return/Edge\/([\d\.]+)/.exec(t);if(qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nO)return/WebKit\/(\S+)/.exec(t);if(tO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cu&&(Ru=Cu?Cu[1]:""),qi){var Su=DT();if(Su!=null&&Su>parseFloat(Ru)){Lh=String(Su);break e}}Lh=Ru}var Vh;if(J.document&&qi){var N_=DT();Vh=N_||parseInt(Lh,10)||void 0}else Vh=void 0;var sO=Vh;function To(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OT){e:{try{Rf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&To.$.h.call(this)}}et(To,mt);var iO={2:"touch",3:"pen",4:"mouse"};To.prototype.h=function(){To.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),rO=0;function oO(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++rO,this.fa=this.ia=!1}function Ac(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function aO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xT(t){const e={};for(const n in t)e[n]=t[n];return e}const O_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function MT(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<O_.length;r++)n=O_[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Rc(t){this.src=t,this.g={},this.h=0}Rc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Uh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oO(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Fh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=kT(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ac(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Sf="closure_lm_"+(1e6*Math.random()|0),bu={};function LT(t,e,n,s,i){if(s&&s.once)return FT(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)LT(t,e[r],n,s,i);return null}return n=kf(n),t&&t[Yo]?t.O(e,n,Qo(s)?!!s.capture:!!s,i):VT(t,e,n,!1,s,i)}function VT(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=Pf(t);if(a||(t[Sf]=a=new Rc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=lO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Z1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent($T(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lO(){function t(n){return e.call(t.src,t.listener,n)}const e=cO;return t}function FT(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)FT(t,e[r],n,s,i);return null}return n=kf(n),t&&t[Yo]?t.P(e,n,Qo(s)?!!s.capture:!!s,i):VT(t,e,n,!0,s,i)}function UT(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)UT(t,e[r],n,s,i);else s=Qo(s)?!!s.capture:!!s,n=kf(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Uh(r,n,s,i),-1<n&&(Ac(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uh(e,n,s,i)),(n=-1<t?e[t]:null)&&bf(n))}function bf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yo])Fh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent($T(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Pf(e))?(Fh(n,t),n.h==0&&(n.src=null,e[Sf]=null)):Ac(t)}}}function $T(t){return t in bu?bu[t]:bu[t]="on"+t}function cO(t,e){if(t.fa)t=!0;else{e=new To(e,this);var n=t.listener,s=t.la||t.src;t.ia&&bf(t),t=n.call(s,e)}return t}function Pf(t){return t=t[Sf],t instanceof Rc?t:null}var Pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(t){return typeof t=="function"?t:(t[Pu]||(t[Pu]=function(e){return t.handleEvent(e)}),t[Pu])}function Ze(){ws.call(this),this.i=new Rc(this),this.S=this,this.J=null}et(Ze,ws);Ze.prototype[Yo]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){UT(this,t,e,n,s)};function at(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(s,t),MT(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Na(o,s,!0,e)&&i}if(o=e.g=t,i=Na(o,s,!0,e)&&i,i=Na(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Na(o,s,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ac(n[s]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Na(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Fh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Nf=J.JSON.stringify;class uO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hO(){var t=Of;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dO{constructor(){this.h=this.g=null}add(e,n){const s=BT.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var BT=new uO(()=>new fO,t=>t.reset());class fO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gO(t){J.setTimeout(()=>{throw t},0)}let Io,wo=!1,Of=new dO,jT=()=>{const t=J.Promise.resolve(void 0);Io=()=>{t.then(_O)}};var _O=()=>{for(var t;t=hO();){try{t.h.call(t.g)}catch(n){gO(n)}var e=BT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wo=!1};function Cc(t,e){Ze.call(this),this.h=t||1,this.g=e||J,this.j=_t(this.qb,this),this.l=Date.now()}et(Cc,Ze);M=Cc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Df(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Df(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Cc.$.N.call(this),Df(this),delete this.g};function xf(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function HT(t){t.g=xf(()=>{t.g=null,t.i&&(t.i=!1,HT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mO extends ws{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HT(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ao(t){ws.call(this),this.h=t,this.g={}}et(Ao,ws);var D_=[];function WT(t,e,n,s){Array.isArray(n)||(n&&(D_[0]=n.toString()),n=D_);for(var i=0;i<n.length;i++){var r=LT(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function qT(t){Cf(t.g,function(e,n){this.g.hasOwnProperty(n)&&bf(e)},t),t.g={}}Ao.prototype.N=function(){Ao.$.N.call(this),qT(this)};Ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sc(){this.g=!0}Sc.prototype.Ea=function(){this.g=!1};function yO(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function vO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ai(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TO(t,n)+(s?" "+s:"")})}function EO(t,e){t.info(function(){return"TIMEOUT: "+e})}Sc.prototype.info=function(){};function TO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Nf(n)}catch{return e}}var ci={},x_=null;function bc(){return x_=x_||new Ze}ci.Ta="serverreachability";function KT(t){mt.call(this,ci.Ta,t)}et(KT,mt);function Ro(t){const e=bc();at(e,new KT(e))}ci.STAT_EVENT="statevent";function zT(t,e){mt.call(this,ci.STAT_EVENT,t),this.stat=e}et(zT,mt);function Ct(t){const e=bc();at(e,new zT(e,t))}ci.Ua="timingevent";function GT(t,e){mt.call(this,ci.Ua,t),this.size=e}et(GT,mt);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},QT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mf(){}Mf.prototype.h=null;function M_(t){return t.h||(t.h=t.i())}function YT(){}var Jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lf(){mt.call(this,"d")}et(Lf,mt);function Vf(){mt.call(this,"c")}et(Vf,mt);var $h;function kc(){}et(kc,Mf);kc.prototype.g=function(){return new XMLHttpRequest};kc.prototype.i=function(){return{}};$h=new kc;function Zo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ao(this),this.P=IO,t=Mh?125:void 0,this.V=new Cc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new XT}function XT(){this.i=null,this.g="",this.h=!1}var IO=45e3,Bh={},bl={};M=Zo.prototype;M.setTimeout=function(t){this.P=t};function jh(t,e,n){t.L=1,t.v=Oc(Bn(e)),t.s=n,t.S=!0,JT(t,null)}function JT(t,e){t.G=Date.now(),ea(t),t.A=Bn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),oI(n.i,"t",s),t.C=0,n=t.l.J,t.h=new XT,t.g=SI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new mO(_t(t.Pa,t,t.g),t.O)),WT(t.U,t.g,"readystatechange",t.nb),e=t.I?xT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ro(),yO(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Mh||this.g&&(this.h.h||this.g.ja()||U_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ro(3):Ro(2)),Nc(this);var n=this.g.da();this.ca=n;t:if(ZT(this)){var s=U_(this.g);t="";var i=s.length,r=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Us(this),Qr(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eo(a)){var c=a;break t}}c=null}if(n=c)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hh(this,n);else{this.i=!1,this.o=3,Ct(12),Us(this),Qr(this);break e}}this.S?(eI(this,u,o),Mh&&this.i&&u==3&&(WT(this.U,this.V,"tick",this.mb),this.V.start())):(Ai(this.j,this.m,o,null),Hh(this,o)),u==4&&Us(this),this.i&&!this.J&&(u==4?wI(this.l,this):(this.i=!1,ea(this)))}else HO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Us(this),Qr(this)}}}catch{}finally{}};function ZT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function eI(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=wO(t,n),i==bl){e==4&&(t.o=4,Ct(14),s=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bh){t.o=4,Ct(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ai(t.j,t.m,i,null),Hh(t,i);ZT(t)&&i!=bl&&i!=Bh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hf(e),e.M=!0,Ct(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),Us(t),Qr(t))}M.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(Nc(this),eI(this,t,e),this.i&&t!=4&&ea(this))}};function wO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?bl:(n=Number(e.substring(n,s)),isNaN(n)?Bh:(s+=1,s+n>e.length?bl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Us(this)};function ea(t){t.Y=Date.now()+t.P,tI(t,t.P)}function tI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xo(_t(t.lb,t),e)}function Nc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(EO(this.j,this.A),this.L!=2&&(Ro(),Ct(17)),Us(this),this.o=2,Qr(this)):tI(this,this.Y-t)};function Qr(t){t.l.H==0||t.J||wI(t.l,t)}function Us(t){Nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Df(t.V),qT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wh(n.i,t))){if(!t.K&&Wh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Nl(n),Mc(n);else break e;jf(n),Ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xo(_t(n.ib,n),6e3));if(1>=cI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $s(n,11)}else if((t.K||n.g==t)&&Nl(n),!Eo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ff(r,r.h),r.h=null))}if(s.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,Ne(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=CI(s,s.J?s.pa:null,s.Y),o.K){uI(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Nc(a),ea(a)),s.g=o}else TI(s);0<n.j.length&&Lc(n)}else c[0]!="stop"&&c[0]!="close"||$s(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?$s(n,7):Bf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ro(4)}catch{}}function AO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ic(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function RO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ic(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function nI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ic(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RO(t),s=AO(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var sI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zs){this.h=t.h,Pl(this,t.j),this.s=t.s,this.g=t.g,kl(this,t.m),this.l=t.l;var e=t.i,n=new Co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),L_(this,n),this.o=t.o}else t&&(e=String(t).match(sI))?(this.h=!1,Pl(this,e[1]||"",!0),this.s=Vr(e[2]||""),this.g=Vr(e[3]||"",!0),kl(this,e[4]),this.l=Vr(e[5]||"",!0),L_(this,e[6]||"",!0),this.o=Vr(e[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}zs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fr(e,V_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fr(e,V_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fr(n,n.charAt(0)=="/"?PO:bO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fr(n,NO)),t.join("")};function Bn(t){return new zs(t)}function Pl(t,e,n){t.j=n?Vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function L_(t,e,n){e instanceof Co?(t.i=e,OO(t.i,t.h)):(n||(e=Fr(e,kO)),t.i=new Co(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Oc(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var V_=/[#\/\?@]/g,bO=/[#\?:]/g,PO=/[#\?]/g,kO=/[#\?@]/g,NO=/#/g;function Co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function As(t){t.g||(t.g=new Map,t.h=0,t.i&&CO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Co.prototype;M.add=function(t,e){As(this),this.i=null,t=_r(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iI(t,e){As(t),e=_r(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rI(t,e){return As(t),e=_r(t,e),t.g.has(e)}M.forEach=function(t,e){As(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){As(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){As(this);let e=[];if(typeof t=="string")rI(this,t)&&(e=e.concat(this.g.get(_r(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return As(this),this.i=null,t=_r(this,t),rI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function oI(t,e,n){iI(t,e),0<n.length&&(t.i=null,t.g.set(_r(t,e),Af(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function _r(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OO(t,e){e&&!t.j&&(As(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(iI(this,s),oI(this,i,n))},t)),t.j=e}var DO=class{constructor(t,e){this.g=t,this.map=e}};function aI(t){this.l=t||xO,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xO=10;function lI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cI(t){return t.h?1:t.g?t.g.size:0}function Wh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ff(t,e){t.g?t.g.add(e):t.h=e}function uI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aI.prototype.cancel=function(){if(this.i=hI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Af(t.i)}var MO=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function LO(){this.g=new MO}function VO(t,e,n){const s=n||"";try{nI(t,function(i,r){let o=i;Qo(i)&&(o=Nf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function FO(t,e){const n=new Sc;if(J.Image){const s=new Image;s.onload=ka(Oa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ka(Oa,n,s,"TestLoadImage: error",!1,e),s.onabort=ka(Oa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ka(Oa,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Oa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ta(t){this.l=t.fc||null,this.j=t.ob||!1}et(ta,Mf);ta.prototype.g=function(){return new Dc(this.l,this.j)};ta.prototype.i=function(t){return function(){return t}}({});function Dc(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Dc,Ze);var Uf=0;M=Dc.prototype;M.open=function(t,e){if(this.readyState!=Uf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,So(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=Uf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?na(this):So(this),this.readyState==3&&dI(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,na(this))};M.Ya=function(t){this.g&&(this.response=t,na(this))};M.ka=function(){this.g&&na(this)};function na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,So(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function So(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UO=J.JSON.parse;function Le(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fI,this.L=this.M=!1}et(Le,Ze);var fI="",$O=/^https?$/i,BO=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$h.g(),this.C=this.u?M_(this.u):M_($h),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){F_(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=kT(BO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_I(this),0<this.B&&((this.L=jO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=xf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){F_(this,r)}};function jO(t){return qi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof wf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function F_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pI(t),xc(t)}function pI(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),xc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?gI(this):this.kb())};M.kb=function(){gI(this)};function gI(t){if(t.h&&typeof wf<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)xf(t.La,0,t);else if(at(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(sI)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),s=!$O.test(i?i.toLowerCase():"")}n=s}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var r=2<_n(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",pI(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){_I(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=s}catch{}}}function _I(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UO(e)}};function U_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HO(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Eo(t[s]))continue;var n=pO(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}aO(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mI(t){let e="";return Cf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function $f(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yI(t){this.Ga=0,this.j=[],this.l=new Sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=br("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=br("baseRetryDelayMs",5e3,t),this.hb=br("retryDelaySeedMs",1e4,t),this.eb=br("forwardChannelMaxRetries",2,t),this.xa=br("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new aI(t&&t.concurrentRequestLimit),this.Ja=new LO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=yI.prototype;M.ra=8;M.H=1;function Bf(t){if(vI(t),t.H==3){var e=t.W++,n=Bn(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),sa(t,n),e=new Zo(t,t.l,e),e.L=2,e.v=Oc(Bn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=SI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ea(e)}RI(t)}function Mc(t){t.g&&(Hf(t),t.g.cancel(),t.g=null)}function vI(t){Mc(t),t.u&&(J.clearTimeout(t.u),t.u=null),Nl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Lc(t){if(!lI(t.i)&&!t.m){t.m=!0;var e=t.Na;Io||jT(),wo||(Io(),wo=!0),Of.add(e,t),t.C=0}}function WO(t,e){return cI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xo(_t(t.Na,t,e),AI(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=xT(r),MT(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=EI(this,i,e),n=Bn(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),sa(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(mI(r)))+"&"+e:this.o&&$f(n,this.o,r)),Ff(this.i,i),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),i.aa=!0,jh(i,n,null)):jh(i,n,e),this.H=2}}else this.H==3&&(t?$_(this,t):this.j.length==0||lI(this.i)||$_(this))};function $_(t,e){var n;e?n=e.m:n=t.W++;const s=Bn(t.I);Ne(s,"SID",t.K),Ne(s,"RID",n),Ne(s,"AID",t.V),sa(t,s),t.o&&t.s&&$f(s,t.o,t.s),n=new Zo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=EI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ff(t.i,n),jh(n,s,e)}function sa(t,e){t.na&&Cf(t.na,function(n,s){Ne(e,s,n)}),t.h&&nI({},function(n,s){Ne(e,s,n)})}function EI(t,e,n){n=Math.min(t.j.length,n);var s=t.h?_t(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{VO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function TI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Io||jT(),wo||(Io(),wo=!0),Of.add(e,t),t.A=0}}function jf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xo(_t(t.Ma,t),AI(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,II(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xo(_t(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),Mc(this),II(this))};function Hf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function II(t){t.g=new Zo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Bn(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),sa(t,e),t.o&&t.s&&$f(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Oc(Bn(e)),n.s=null,n.S=!0,JT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Mc(this),jf(this),Ct(19))};function Nl(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function wI(t,e){var n=null;if(t.g==e){Nl(t),Hf(t),t.g=null;var s=2}else if(Wh(t.i,e))n=e.F,uI(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=bc(),at(s,new GT(s,n)),Lc(t)}else TI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&WO(t,e)||s==2&&jf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:$s(t,5);break;case 4:$s(t,10);break;case 3:$s(t,6);break;default:$s(t,2)}}}function AI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function $s(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=_t(t.pb,t);n||(n=new zs("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Pl(n,"https"),Oc(n)),FO(n.toString(),s)}else Ct(2);t.H=0,t.h&&t.h.za(e),RI(t),vI(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function RI(t){if(t.H=0,t.ma=[],t.h){const e=hI(t.i);(e.length!=0||t.j.length!=0)&&(k_(t.ma,e),k_(t.ma,t.j),t.i.i.length=0,Af(t.j),t.j.length=0),t.h.ya()}}function CI(t,e,n){var s=n instanceof zs?Bn(n):new zs(n);if(s.g!="")e&&(s.g=e+"."+s.g),kl(s,s.m);else{var i=J.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new zs(null);s&&Pl(r,s),e&&(r.g=e),i&&kl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ra),sa(t,s),s}function SI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new ta({ob:!0})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function bI(){}M=bI.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Ol(){if(qi&&!(10<=Number(sO)))throw Error("Environmental error: no available transport.")}Ol.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){Ze.call(this),this.g=new yI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}et(Ut,Ze);Ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=CI(t,null,t.Y),Lc(t)};Ut.prototype.close=function(){Bf(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nf(t),t=n);e.j.push(new DO(e.fb++,t)),e.H==3&&Lc(e)};Ut.prototype.N=function(){this.g.h=null,delete this.j,Bf(this.g),delete this.g,Ut.$.N.call(this)};function PI(t){Lf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(PI,Lf);function kI(){Vf.call(this),this.status=1}et(kI,Vf);function mr(t){this.g=t}et(mr,bI);mr.prototype.Ba=function(){at(this.g,"a")};mr.prototype.Aa=function(t){at(this.g,new PI(t))};mr.prototype.za=function(t){at(this.g,new kI)};mr.prototype.ya=function(){at(this.g,"b")};function qO(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(rn,qO);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ku(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)ku(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){ku(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){ku(this,s),i=0;break}}this.h=i,this.i+=e};rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ie(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var KO={};function Wf(t){return-128<=t&&128>t?eO(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function mn(t){if(isNaN(t)||!isFinite(t))return Mi;if(0>t)return st(mn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=qh;return new Ie(e,0)}function NI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(NI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mn(Math.pow(e,8)),s=Mi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=mn(Math.pow(e,r)),s=s.R(r).add(mn(o))):(s=s.R(n),s=s.add(mn(o)))}return s}var qh=4294967296,Mi=Wf(0),Kh=Wf(1),B_=Wf(16777216);M=Ie.prototype;M.ea=function(){if(jt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:qh+s)*e,e*=qh}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ln(this))return"0";if(jt(this))return"-"+st(this).toString(t);for(var e=mn(Math.pow(t,6)),n=this,s="";;){var i=xl(n,e).g;n=Dl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ln(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function jt(t){return t.h==-1}M.X=function(t){return t=Dl(this,t),jt(t)?-1:Ln(t)?0:1};function st(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ie(n,~t.h).add(Kh)}M.abs=function(){return jt(this)?st(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Dl(t,e){return t.add(st(e))}M.R=function(t){if(Ln(this)||Ln(t))return Mi;if(jt(this))return jt(t)?st(this).R(st(t)):st(st(this).R(t));if(jt(t))return st(this.R(st(t)));if(0>this.X(B_)&&0>t.X(B_))return mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Da(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Da(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Da(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Da(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ie(n,0)};function Da(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Pr(t,e){this.g=t,this.h=e}function xl(t,e){if(Ln(e))throw Error("division by zero");if(Ln(t))return new Pr(Mi,Mi);if(jt(t))return e=xl(st(t),e),new Pr(st(e.g),st(e.h));if(jt(e))return e=xl(t,st(e)),new Pr(st(e.g),e.h);if(30<t.g.length){if(jt(t)||jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Kh,s=e;0>=s.X(t);)n=j_(n),s=j_(s);var i=mi(n,1),r=mi(s,1);for(s=mi(s,2),n=mi(n,2);!Ln(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=mi(s,1),n=mi(n,1)}return e=Dl(t,i.R(e)),new Pr(i,e)}for(i=Mi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=mn(n),o=r.R(e);jt(o)||0<o.X(t);)n-=s,r=mn(n),o=r.R(e);Ln(r)&&(r=Kh),i=i.add(r),t=Dl(t,o)}return new Pr(i,t)}M.gb=function(t){return xl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ie(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ie(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ie(n,this.h^t.h)};function j_(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ie(n,t.h)}function mi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ie(i,t.h)}Ol.prototype.createWebChannel=Ol.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Pc.NO_ERROR=0;Pc.TIMEOUT=8;Pc.HTTP_ERROR=6;QT.COMPLETE="complete";YT.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=mn;Ie.fromString=NI;var zO=function(){return new Ol},GO=function(){return bc()},Nu=Pc,QO=QT,YO=ci,H_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},XO=ta,xa=YT,JO=Le,ZO=rn,Li=Ie;const W_="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let yr="10.1.0";/**
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
 */const ei=new Fo("@firebase/firestore");function q_(){return ei.logLevel}function j(t,...e){if(ei.logLevel<=fe.DEBUG){const n=e.map(qf);ei.debug(`Firestore (${yr}): ${t}`,...n)}}function jn(t,...e){if(ei.logLevel<=fe.ERROR){const n=e.map(qf);ei.error(`Firestore (${yr}): ${t}`,...n)}}function Ki(t,...e){if(ei.logLevel<=fe.WARN){const n=e.map(qf);ei.warn(`Firestore (${yr}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Te(t,e){t||Y()}function te(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class OI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class tD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nD{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new En;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new En,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new OI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new ut(e)}}class sD{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iD{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new sD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new rD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class DI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=aD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new He(0,0))}static max(){return new X(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bo{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends bo{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const lD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends bo{construct(e,n,s){return new pt(e,n,s)}static isValidIdentifier(e){return lD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(xe.fromString(e))}static fromName(e){return new Q(xe.fromString(e).popFirst(5))}static empty(){return new Q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new xe(e.slice()))}}function cD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new ys(i,Q.empty(),e)}function uD(t){return new ys(t.readTime,t.key,-1)}class ys{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ys(X.min(),Q.empty(),-1)}static max(){return new ys(X.max(),Q.empty(),-1)}}function hD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const dD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ia(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==dD)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ra(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Kf.ae=-1;function oa(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function pD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function K_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??tt.RED,this.left=i??tt.EMPTY,this.right=r??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,s,i,r){return this}insert(e,n,s){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new z_(this.data.getIterator())}getIteratorFrom(e){return new z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new yt(pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class MI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new MI("Invalid base64 string: "+r):r}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const gD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(Te(!!t),typeof t=="string"){let e=0;const n=gD.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gf(t){const e=t.mapValue.fields.__previous_value__;return zf(e)?Gf(e):e}function Po(t){const e=vs(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class _D{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const La={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zf(t)?4:mD(t)?9007199254740991:10:Y()}function An(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=vs(i.timestampValue),a=vs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return ti(i.bytesValue).isEqual(ti(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Be(i.geoPointValue.latitude)===Be(r.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Be(i.integerValue)===Be(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Be(i.doubleValue),a=Be(r.doubleValue);return o===a?Ml(o)===Ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(K_(o)!==K_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!An(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function No(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=ni(t),s=ni(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Be(r.integerValue||r.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return G_(t.timestampValue,e.timestampValue);case 4:return G_(Po(t),Po(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,o){const a=ti(r),l=ti(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ge(Be(r.latitude),Be(o.latitude));return a!==0?a:ge(Be(r.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Gi(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===La.mapValue&&o===La.mapValue)return 0;if(r===La.mapValue)return 1;if(o===La.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const f=Gi(a[l[h]],c[u[h]]);if(f!==0)return f}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function G_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=vs(t),s=vs(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function Qi(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=vs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=zh(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${zh(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Gh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Q_(t){return!!t&&"nullValue"in t}function Y_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xa(t){return!!t&&"mapValue"in t}function Yr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yr(n)}setAll(e){let n=pt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ui(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new At(Yr(this.value))}}function LI(t){const e=[];return ui(t.fields,(n,s)=>{const i=new pt([n]);if(Xa(s)){const r=LI(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
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
 */class Ge{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,X.min(),X.min(),X.min(),At.empty(),0)}static newFoundDocument(e,n,s,i){return new Ge(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,X.min(),X.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,X.min(),X.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ll{constructor(e,n){this.position=e,this.inclusive=n}}function X_(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Gi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function J_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function yD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VI{}class qe extends VI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ED(e,n,s):n==="array-contains"?new wD(e,s):n==="in"?new AD(e,s):n==="not-in"?new RD(e,s):n==="array-contains-any"?new CD(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new TD(e,s):new ID(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rn extends VI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Rn(e,n)}matches(e){return FI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function FI(t){return t.op==="and"}function UI(t){return vD(t)&&FI(t)}function vD(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Qh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(UI(t))return t.filters.map(e=>Qh(e)).join(",");{const e=t.filters.map(n=>Qh(n)).join(",");return`${t.op}(${e})`}}function $I(t,e){return t instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&An(s.value,i.value)}(t,e):t instanceof Rn?function(s,i){return i instanceof Rn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&$I(o,i.filters[a]),!0):!1}(t,e):void Y()}function BI(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`}(t):t instanceof Rn?function(n){return n.op.toString()+" {"+n.getFilters().map(BI).join(" ,")+"}"}(t):"Filter"}class ED extends qe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class TD extends qe{constructor(e,n){super(e,"in",n),this.keys=jI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ID extends qe{constructor(e,n){super(e,"not-in",n),this.keys=jI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class wD extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&No(n.arrayValue,this.value)}}class AD extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class RD extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class CD extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>No(this.value.arrayValue,s))}}/**
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
 */class SD{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Z_(t,e=null,n=[],s=[],i=null,r=null,o=null){return new SD(t,e,n,s,i,r,o)}function Yf(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qi(s)).join(",")),e.he=n}return e.he}function Xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$I(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J_(t.startAt,e.startAt)&&J_(t.endAt,e.endAt)}function Yh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function bD(t,e,n,s,i,r,o,a){return new Vc(t,e,n,s,i,r,o,a)}function Fc(t){return new Vc(t)}function em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ND(t){return t.collectionGroup!==null}function Vi(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=kD(e),s=PD(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new Xr(n)),e.Pe.push(new Xr(pt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Xr(pt.keyField(),r))}}}return e.Pe}function Hn(t){const e=te(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Z_(e.path,e.collectionGroup,Vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Vi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xr(r.field,o))}const s=e.endAt?new Ll(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ll(e.startAt.position,e.startAt.inclusive):null;e.Ie=Z_(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function Xh(t,e,n){return new Vc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return Xf(Hn(t),Hn(e))&&t.limitType===e.limitType}function HI(t){return`${Yf(Hn(t))}|lt:${t.limitType}`}function Jh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>BI(i)).join(", ")}]`),oa(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Qi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Qi(i)).join(",")),`Target(${s})`}(Hn(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):Q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Vi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=X_(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Vi(s),i)||s.endAt&&!function(o,a,l){const c=X_(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Vi(s),i))}(t,e)}function OD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WI(t){return(e,n)=>{let s=!1;for(const i of Vi(t)){const r=DD(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function DD(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Gi(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */class vr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return xI(this.inner)}size(){return this.innerSize}}/**
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
 */const xD=new Me(Q.comparator);function Wn(){return xD}const qI=new Me(Q.comparator);function Ur(...t){let e=qI;for(const n of t)e=e.insert(n.key,n);return e}function KI(t){let e=qI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Bs(){return Jr()}function zI(){return Jr()}function Jr(){return new vr(t=>t.toString(),(t,e)=>t.isEqual(e))}const MD=new Me(Q.comparator),LD=new yt(Q.comparator);function ae(...t){let e=LD;for(const n of t)e=e.add(n);return e}const VD=new yt(ge);function FD(){return VD}/**
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
 */function GI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function QI(t){return{integerValue:""+t}}function UD(t,e){return pD(e)?QI(e):GI(t,e)}/**
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
 */class Bc{constructor(){this._=void 0}}function $D(t,e,n){return t instanceof Vl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&zf(r)&&(r=Gf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Yi?XI(t,e):t instanceof Xi?JI(t,e):function(i,r){const o=YI(i,r),a=tm(o)+tm(i.Te);return Gh(o)&&Gh(i.Te)?QI(a):GI(i.serializer,a)}(t,e)}function BD(t,e,n){return t instanceof Yi?XI(t,e):t instanceof Xi?JI(t,e):n}function YI(t,e){return t instanceof Fl?function(s){return Gh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Vl extends Bc{}class Yi extends Bc{constructor(e){super(),this.elements=e}}function XI(t,e){const n=ZI(e);for(const s of t.elements)n.some(i=>An(i,s))||n.push(s);return{arrayValue:{values:n}}}class Xi extends Bc{constructor(e){super(),this.elements=e}}function JI(t,e){let n=ZI(e);for(const s of t.elements)n=n.filter(i=>!An(i,s));return{arrayValue:{values:n}}}class Fl extends Bc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function tm(t){return Be(t.integerValue||t.doubleValue)}function ZI(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ew{constructor(e,n){this.field=e,this.transform=n}}function jD(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Yi&&i instanceof Yi||s instanceof Xi&&i instanceof Xi?zi(s.elements,i.elements,An):s instanceof Fl&&i instanceof Fl?An(s.Te,i.Te):s instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class HD{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jf(t.key,Rt.none()):new aa(t.key,t.data,Rt.none());{const n=t.data,s=At.empty();let i=new yt(pt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Rs(t.key,s,new Dt(i.toArray()),Rt.none())}}function WD(t,e,n){t instanceof aa?function(i,r,o){const a=i.value.clone(),l=sm(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rs?function(i,r,o){if(!Ja(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=sm(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(nw(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zr(t,e,n,s){return t instanceof aa?function(r,o,a,l){if(!Ja(r.precondition,o))return a;const c=r.value.clone(),u=im(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rs?function(r,o,a,l){if(!Ja(r.precondition,o))return a;const c=im(r.fieldTransforms,l,o),u=o.data;return u.setAll(nw(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Ja(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qD(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=YI(s.transform,i||null);r!=null&&(n===null&&(n=At.empty()),n.set(s.field,r))}return n||null}function nm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&zi(s,i,(r,o)=>jD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends jc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rs extends jc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function sm(t,e,n){const s=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,BD(o,a,n[i]))}return s}function im(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,$D(r,o,e))}return s}class Jf extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sw extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KD{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&WD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=tw(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,s)=>nm(n,s))&&zi(this.baseMutations,e.baseMutations,(n,s)=>nm(n,s))}}class Zf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Te(e.mutations.length===s.length);let i=function(){return MD}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Zf(e,n,s,i)}}/**
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
 */class zD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class GD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ce;function iw(t){switch(t){default:return Y();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function rw(t){if(t===void 0)return jn("GRPC error has no .code"),R.UNKNOWN;switch(t){case $e.OK:return R.OK;case $e.CANCELLED:return R.CANCELLED;case $e.UNKNOWN:return R.UNKNOWN;case $e.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case $e.INTERNAL:return R.INTERNAL;case $e.UNAVAILABLE:return R.UNAVAILABLE;case $e.UNAUTHENTICATED:return R.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case $e.NOT_FOUND:return R.NOT_FOUND;case $e.ALREADY_EXISTS:return R.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return R.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case $e.ABORTED:return R.ABORTED;case $e.OUT_OF_RANGE:return R.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return R.UNIMPLEMENTED;case $e.DATA_LOSS:return R.DATA_LOSS;default:return Y()}}(ce=$e||($e={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ep{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Va}static getOrCreateInstance(){return Va===null&&(Va=new ep),Va}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Va=null;/**
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
 */function QD(){return new TextEncoder}/**
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
 */const YD=new Li([4294967295,4294967295],0);function rm(t){const e=QD().encode(t),n=new ZO;return n.update(e),new Uint8Array(n.digest())}function om(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Li([n,s],0),new Li([i,r],0)]}class tp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new $r(`Invalid padding: ${n}`);if(s<0)throw new $r(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new $r(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Li.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(Li.fromNumber(s)));return i.compare(YD)===1&&(i=new Li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=rm(e),[s,i]=om(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new tp(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=rm(e),[s,i]=om(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hc(X.min(),i,new Me(ge),Wn(),ae())}}class la{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new la(s,n,ae(),ae(),ae())}}/**
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
 */class Za{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class ow{constructor(e,n){this.targetId=e,this.pe=n}}class aw{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class am{constructor(){this.ye=0,this.we=cm(),this.Se=Tt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ae(),n=ae(),s=ae();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new la(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=cm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class XD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Wn(),this.$e=lm(),this.Ue=new Me(ge)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Yh(a))if(r===0){const l=new Q(a.path);this.ze(i,l,Ge.newNoDocument(l,X.min()))}else Te(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=ep.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,_){var m,v,T,C,S,w;const B={localCacheCount:f,existenceFilterCount:_.count},H=_.unchangedNames;return H&&(B.bloomFilter={applied:h===0,hashCount:(m=H==null?void 0:H.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(C=(T=(v=H==null?void 0:H.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&C!==void 0?C:0,padding:(w=(S=H==null?void 0:H.bits)===null||S===void 0?void 0:S.padding)!==null&&w!==void 0?w:0},d&&(B.bloomFilter.mightContain=d)),B}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=ti(r).toUint8Array()}catch(h){if(h instanceof MI)return Ki("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new tp(l,o,a)}catch(h){return Ki(h instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Yh(a.target)){const l=new Q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ge.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=ae();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Ue,this.Ke,s);return this.Ke=Wn(),this.$e=lm(),this.Ue=new Me(ge),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new am,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new yt(ge),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new am),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function lm(){return new Me(Q.comparator)}function cm(){return new Me(Q.comparator)}const JD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ex=(()=>({and:"AND",or:"OR"}))();class tx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||oa(e)?e:{value:e}}function Ul(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nx(t,e){return Ul(t,e.toTimestamp())}function Vt(t){return Te(!!t),X.fromTimestamp(function(n){const s=vs(n);return new He(s.seconds,s.nanos)}(t))}function np(t,e){return function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function cw(t){const e=xe.fromString(t);return Te(pw(e)),e}function $l(t,e){return np(t.databaseId,e.path)}function eo(t,e){const n=cw(e);if(n.get(1)!==t.databaseId.projectId)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(uw(n))}function ed(t,e){return np(t.databaseId,e)}function sx(t){const e=cw(t);return e.length===4?xe.emptyPath():uw(e)}function Oo(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function um(t,e,n){return{name:$l(t,e),fields:n.value.mapValue.fields}}function ix(t,e){return"found"in e?function(s,i){Te(!!i.found),i.found.name,i.found.updateTime;const r=eo(s,i.found.name),o=Vt(i.found.updateTime),a=i.found.createTime?Vt(i.found.createTime):X.min(),l=new At({mapValue:{fields:i.found.fields}});return Ge.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(s,i){Te(!!i.missing),Te(!!i.readTime);const r=eo(s,i.missing),o=Vt(i.readTime);return Ge.newNoDocument(r,o)}(t,e):Y()}function rx(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Te(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:rw(c.code);return new U(u,c.message||"")}(o);n=new aw(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=eo(t,s.document.name),r=Vt(s.document.updateTime),o=s.document.createTime?Vt(s.document.createTime):X.min(),a=new At({mapValue:{fields:s.document.fields}}),l=Ge.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Za(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=eo(t,s.document),r=s.readTime?Vt(s.readTime):X.min(),o=Ge.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=eo(t,s.document),r=s.removedTargetIds||[];n=new Za([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new GD(i,r),a=s.targetId;n=new ow(a,o)}}return n}function hw(t,e){let n;if(e instanceof aa)n={update:um(t,e.key,e.value)};else if(e instanceof Jf)n={delete:$l(t,e.key)};else if(e instanceof Rs)n={update:um(t,e.key,e.data),updateMask:px(e.fieldMask)};else{if(!(e instanceof sw))return Y();n={verify:$l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:nx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function ox(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Vt(i.updateTime):Vt(r);return o.isEqual(X.min())&&(o=Vt(r)),new HD(o,i.transformResults||[])}(n,e))):[]}function ax(t,e){return{documents:[ed(t,e.path)]}}function lx(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ed(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ed(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return fw(Rn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:yi(h.field),direction:hx(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Zh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function cx(t){let e=sx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=dw(h);return d instanceof Rn&&UI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Xr(vi(_.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,oa(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ll(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ll(f,d)}(n.endAt)),bD(e,i,o,r,a,"F",l,c)}function ux(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=vi(n.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=vi(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vi(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(vi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rn.create(n.compositeFilter.filters.map(s=>dw(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function hx(t){return JD[t]}function dx(t){return ZD[t]}function fx(t){return ex[t]}function yi(t){return{fieldPath:t.canonicalString()}}function vi(t){return pt.fromServerFormat(t.fieldPath)}function fw(t){return t instanceof qe?function(n){if(n.op==="=="){if(Y_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(Q_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(Q_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:dx(n.op),value:n.value}}}(t):t instanceof Rn?function(n){const s=n.getFilters().map(i=>fw(i));return s.length===1?s[0]:{compositeFilter:{op:fx(n.op),filters:s}}}(t):Y()}function px(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class as{constructor(e,n,s,i,r=X.min(),o=X.min(),a=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new as(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gx{constructor(e){this.ct=e}}function _x(t){const e=cx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
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
 */class mx{constructor(){this.sn=new yx}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ys.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class yx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new yt(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new yt(xe.comparator)).toArray()}}/**
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
 */class Ji{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ji(0)}static On(){return new Ji(-1)}}/**
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
 */class vx{constructor(){this.changes=new vr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ex{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Tx{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Zr(s.mutation,i,Dt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=Bs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ur();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Wn();const o=Jr(),a=function(){return Jr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Rs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zr(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Ex(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jr();let i=new Me((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Dt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ae()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=zI();u.forEach(d=>{if(!r.has(d)){const f=tw(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ND(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Bs());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:KI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Ur();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ur();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,h){return new Vc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ge.newInvalidDocument(c)))});let o=Ur();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Zr(c.mutation,l,Dt.empty(),He.now()),$c(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Ix{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:_x(i.bundledQuery),readTime:Vt(i.readTime)}}(n)),k.resolve()}}/**
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
 */class wx{constructor(){this.overlays=new Me(Q.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Bs();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Bs(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Bs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Bs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zD(n,s));let r=this.cr.get(n);r===void 0&&(r=ae(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
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
 */class sp{constructor(){this.lr=new yt(ze.hr),this.Pr=new yt(ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new ze(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1);let r=ae();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||ge(e.mr,n.mr)}static Ir(e,n){return ge(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
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
 */class Ax{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new yt(ze.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KD(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new yt(ge);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),k.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new ze(new Q(r),0);let a=new yt(ge);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return k.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new ze(n,0),i=this.pr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Rx{constructor(e){this.Dr=e,this.docs=function(){return new Me(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=Wn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ge.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Wn();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hD(uD(u),s)<=0||(i.has(u.key)||$c(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Cx(this)}getSize(e){return k.resolve(this.size)}}class Cx extends vx{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class Sx{constructor(e){this.persistence=e,this.Cr=new vr(n=>Yf(n),Xf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new sp,this.targetCount=0,this.Or=Ji.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
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
 */class bx{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Kf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Sx(this),this.indexManager=new mx,this.remoteDocumentCache=function(i){return new Rx(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new gx(n),this.Qr=new Ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new Ax(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const i=new Px(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class Px extends fD{constructor(e){super(),this.currentSequenceNumber=e}}class ip{constructor(e){this.persistence=e,this.Wr=new sp,this.Gr=null}static zr(e){return new ip(e)}get jr(){if(this.Gr)return this.Gr;throw Y()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,s=>{const i=Q.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class rp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new rp(e,n.fromCache,s,i)}}/**
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
 */class kx{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(em(n))return k.resolve(null);let s=Hn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),s=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Xh(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return em(n)||i.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(q_()<=fe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jh(n)),this.ji(e,o,n,cD(i,-1)))})}Gi(e,n){let s=new yt(WI(e));return n.forEach((i,r)=>{$c(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return q_()<=fe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Jh(n)),this.Ki.getDocumentsMatchingQuery(e,n,ys.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Nx{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(ge),this.Yi=new vr(r=>Yf(r),Xf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tx(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Ox(t,e,n,s){return new Nx(t,e,n,s)}async function gw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ae();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function Dx(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(_=>{f=f.next(()=>u.getEntry(l,_)).next(m=>{const v=c.docVersions.get(_);Te(v!==null),m.version.compareTo(v)<0&&(h.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function _w(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function xx(t,e){const n=te(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,v,T){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Wn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Mx(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function Mx(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Wn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function Lx(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Vx(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new as(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function td(t,e,n){const s=te(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function hm(t,e,n){const s=te(t);let i=X.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=te(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:ae())).next(a=>(Fx(s,OD(e),a),{documents:a,ss:r})))}function Fx(t,e,n){let s=t.Zi.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class dm{constructor(){this.activeTargetIds=FD()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ux{constructor(){this.Hs=new dm,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new dm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $x{Ys(e){}shutdown(){}}/**
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
 */class fm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fa=null;function Ou(){return Fa===null?Fa=function(){return 268435456+Math.round(2147483648*Math.random())}():Fa++,"0x"+Fa.toString(16)}/**
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
 */const Bx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jx{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const ct="WebChannelConnection";class Hx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=Ou(),l=this.mo(n,s);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ki("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=Bx[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=Ou();return new Promise((o,a)=>{const l=new JO;l.setWithCredentials(!0),l.listenOnce(QO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nu.NO_ERROR:const u=l.getResponseJson();j(ct,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Nu.TIMEOUT:j(ct,`RPC '${e}' ${r} timed out`),a(new U(R.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const h=l.getStatus();if(j(ct,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(T)>=0?T:R.UNKNOWN}(f.status);a(new U(_,f.message))}else a(new U(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(R.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j(ct,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);j(ct,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=Ou(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zO(),a=GO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new XO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");j(ct,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const _=new jx({so:v=>{f?j(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(j(ct,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),j(ct,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),m=(v,T,C)=>{v.listen(T,S=>{try{C(S)}catch(w){setTimeout(()=>{throw w},0)}})};return m(h,xa.EventType.OPEN,()=>{f||j(ct,`RPC '${e}' stream ${i} transport opened.`)}),m(h,xa.EventType.CLOSE,()=>{f||(f=!0,j(ct,`RPC '${e}' stream ${i} transport closed`),_.Po())}),m(h,xa.EventType.ERROR,v=>{f||(f=!0,Ki(ct,`RPC '${e}' stream ${i} transport errored:`,v),_.Po(new U(R.UNAVAILABLE,"The operation could not be completed")))}),m(h,xa.EventType.MESSAGE,v=>{var T;if(!f){const C=v.data[0];Te(!!C);const S=C,w=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(w){j(ct,`RPC '${e}' stream ${i} received error:`,w);const B=w.status;let H=function(ie){const re=$e[ie];if(re!==void 0)return rw(re)}(B),ne=w.message;H===void 0&&(H=R.INTERNAL,ne="Unknown error status: "+B+" with message "+w.message),f=!0,_.Po(new U(H,ne)),h.close()}else j(ct,`RPC '${e}' stream ${i} received:`,C),_.Io(C)}}),m(a,YO.STAT_EVENT,v=>{v.stat===H_.PROXY?j(ct,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===H_.NOPROXY&&j(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function Du(){return typeof document<"u"?document:null}/**
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
 */function Wc(t){return new tx(t,!0)}/**
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
 */class op{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class mw{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new op(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new U(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wx extends mw{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=rx(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Vt(o.readTime):X.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=Oo(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Yh(l)?{documents:ax(r,l)}:{query:lx(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lw(r,o.resumeToken);const c=Zh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ul(r,o.snapshotVersion.toTimestamp());const c=Zh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=ux(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=Oo(this.serializer),n.removeTarget=e,this.Ho(n)}}class qx extends mw{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=ox(e.writeResults,e.commitTime),s=Vt(e.commitTime);return this.listener.u_(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Oo(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>hw(this.serializer,s))};this.Ho(n)}}/**
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
 */class Kx extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(R.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(R.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class zx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(jn(n),this.d_=!1):j("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class Gx{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{hi(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.y_.add(4),await ca(c),c.b_.set("Unknown"),c.y_.delete(4),await qc(c)}(this))})}),this.b_=new zx(s,i)}}async function qc(t){if(hi(t))for(const e of t.w_)await e(!0)}async function ca(t){for(const e of t.w_)await e(!1)}function yw(t,e){const n=te(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),cp(n)?lp(n):Er(n).Uo()&&ap(n,e))}function vw(t,e){const n=te(t),s=Er(n);n.p_.delete(e),s.Uo()&&Ew(n,e),n.p_.size===0&&(s.Uo()?s.zo():hi(n)&&n.b_.set("Unknown"))}function ap(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Er(t).i_(e)}function Ew(t,e){t.D_.Be(e),Er(t).s_(e)}function lp(t){t.D_=new XD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Er(t).start(),t.b_.A_()}function cp(t){return hi(t)&&!Er(t).$o()&&t.p_.size>0}function hi(t){return te(t).y_.size===0}function Tw(t){t.D_=void 0}async function Qx(t){t.p_.forEach((e,n)=>{ap(t,e)})}async function Yx(t,e){Tw(t),cp(t)?(t.b_.m_(e),lp(t)):t.b_.set("Unknown")}async function Xx(t,e,n){if(t.b_.set("Online"),e instanceof aw&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bl(t,s)}else if(e instanceof Za?t.D_.We(e):e instanceof ow?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const s=await _w(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ew(r,l);const h=new as(u.target,l,c,u.sequenceNumber);ap(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Bl(t,s)}}async function Bl(t,e,n){if(!ra(e))throw e;t.y_.add(1),await ca(t),t.b_.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await qc(t)})}function Iw(t,e){return e().catch(n=>Bl(t,n,e))}async function Kc(t){const e=te(t),n=Es(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Jx(e);)try{const i=await Lx(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,Zx(e,i)}catch(i){await Bl(e,i)}ww(e)&&Aw(e)}function Jx(t){return hi(t)&&t.g_.length<10}function Zx(t,e){t.g_.push(e);const n=Es(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ww(t){return hi(t)&&!Es(t).$o()&&t.g_.length>0}function Aw(t){Es(t).start()}async function eM(t){Es(t).l_()}async function tM(t){const e=Es(t);for(const n of t.g_)e.a_(n.mutations)}async function nM(t,e,n){const s=t.g_.shift(),i=Zf.from(s,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function sM(t,e){e&&Es(t).__&&await async function(s,i){if(function(o){return iw(o)&&o!==R.ABORTED}(i.code)){const r=s.g_.shift();Es(s).Go(),await Iw(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Kc(s)}}(t,e),ww(t)&&Aw(t)}async function pm(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=hi(n);n.y_.add(3),await ca(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await qc(n)}async function iM(t,e){const n=te(t);e?(n.y_.delete(2),await qc(n)):e||(n.y_.add(2),await ca(n),n.b_.set("Unknown"))}function Er(t){return t.v_||(t.v_=function(n,s,i){const r=te(n);return r.P_(),new Wx(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:Qx.bind(null,t),uo:Yx.bind(null,t),r_:Xx.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),cp(t)?lp(t):t.b_.set("Unknown")):(await t.v_.stop(),Tw(t))})),t.v_}function Es(t){return t.C_||(t.C_=function(n,s,i){const r=te(n);return r.P_(),new qx(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:eM.bind(null,t),uo:sM.bind(null,t),c_:tM.bind(null,t),u_:nM.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Kc(t)):(await t.C_.stop(),t.g_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class up{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new up(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(jn("AsyncQueue",`${e}: ${t}`),ra(t))return new U(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=Ur(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Fi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class gm{constructor(){this.F_=new Me(Q.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):Y():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zi(e,n,Fi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class rM{constructor(){this.x_=void 0,this.listeners=[]}}class oM{constructor(){this.queries=new vr(e=>HI(e),Uc),this.onlineState="Unknown",this.O_=new Set}}async function dp(t,e){const n=te(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new rM),i)try{r.x_=await n.onListen(s)}catch(o){const a=hp(o,`Initialization of query '${Jh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&pp(n)}async function fp(t,e){const n=te(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function aM(t,e){const n=te(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&pp(n)}function lM(t,e,n){const s=te(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function pp(t){t.O_.forEach(e=>{e.next()})}class gp{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Zi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Rw{constructor(e){this.key=e}}class Cw{constructor(e){this.key=e}}class cM{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ae(),this.mutatedKeys=ae(),this.na=WI(e),this.ra=new Fi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new gm,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=$c(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?_!==m&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const _=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return _(d)-_(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Zi(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new gm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ae(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new Cw(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new Rw(s))}),n}ha(e){this.X_=e.ss,this.ta=ae();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Zi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class uM{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hM{constructor(e){this.key=e,this.Ia=!1}}class dM{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new vr(a=>HI(a),Uc),this.da=new Map,this.Aa=new Set,this.Ra=new Me(Q.comparator),this.Va=new Map,this.ma=new sp,this.fa={},this.ga=new Map,this.pa=Ji.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function fM(t,e){const n=wM(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await Vx(n.localStore,Hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await pM(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&yw(n.remoteStore,o)}return i}async function pM(t,e,n,s,i){t.wa=(h,d,f)=>async function(m,v,T,C){let S=v.view.sa(T);S.zi&&(S=await hm(m.localStore,v.query,!1).then(({documents:H})=>v.view.sa(H,S)));const w=C&&C.targetChanges.get(v.targetId),B=v.view.applyChanges(S,m.isPrimaryClient,w);return mm(m,v.targetId,B.ca),B.snapshot}(t,h,d,f);const r=await hm(t.localStore,e,!0),o=new cM(e,r.ss),a=o.sa(r.documents),l=la.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);mm(t,n,c.ca);const u=new uM(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function gM(t,e){const n=te(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!Uc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await td(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),vw(n.remoteStore,s.targetId),nd(n,s.targetId)}).catch(ia)):(nd(n,s.targetId),await td(n.localStore,s.targetId,!0))}async function _M(t,e,n){const s=AM(t);try{const i=await function(o,a){const l=te(o),c=He.now(),u=a.reduce((f,_)=>f.add(_.key),ae());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Wn(),m=ae();return l.Xi.getEntries(f,u).next(v=>{_=v,_.forEach((T,C)=>{C.isValidDocument()||(m=m.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(v=>{h=v;const T=[];for(const C of a){const S=qD(C,h.get(C.key).overlayedDocument);S!=null&&T.push(new Rs(C.key,S,LI(S.value.mapValue),Rt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,m);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:KI(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Me(ge)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await ua(s,i.changes),await Kc(s.remoteStore)}catch(i){const r=hp(i,"Failed to persist write");n.reject(r)}}async function Sw(t,e){const n=te(t);try{const s=await xx(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Te(o.Ia):i.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await ua(n,s,e)}catch(s){await ia(s)}}function _m(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&pp(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mM(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Me(Q.comparator);o=o.insert(r,Ge.newNoDocument(r,X.min()));const a=ae().add(r),l=new Hc(X.min(),new Map,new Me(ge),o,a);await Sw(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),_p(s)}else await td(s.localStore,e,!1).then(()=>nd(s,e,n)).catch(ia)}async function yM(t,e){const n=te(t),s=e.batch.batchId;try{const i=await Dx(n.localStore,e);Pw(n,s,null),bw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ua(n,i)}catch(i){await ia(i)}}async function vM(t,e,n){const s=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Te(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);Pw(s,e,n),bw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ua(s,i)}catch(i){await ia(i)}}function bw(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Pw(t,e,n){const s=te(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||kw(t,s)})}function kw(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(vw(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),_p(t))}function mm(t,e,n){for(const s of n)s instanceof Rw?(t.ma.addReference(s.key,e),EM(t,s)):s instanceof Cw?(j("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||kw(t,s.key)):Y()}function EM(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(j("SyncEngine","New document in limbo: "+n),t.Aa.add(s),_p(t))}function _p(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new Q(xe.fromString(e)),s=t.pa.next();t.Va.set(s,new hM(n)),t.Ra=t.Ra.insert(n,s),yw(t.remoteStore,new as(Hn(Fc(n.path)),s,"TargetPurposeLimboResolution",Kf.ae))}}async function ua(t,e,n){const s=te(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=rp.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ra(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),_=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(d,m)}}}(s.localStore,r))}async function TM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await gw(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new U(R.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ua(n,s.ts)}}function IM(t,e){const n=te(t),s=n.Va.get(e);if(s&&s.Ia)return ae().add(s.key);{let i=ae();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function wM(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mM.bind(null,e),e.Ta.r_=aM.bind(null,e.eventManager),e.Ta.Sa=lM.bind(null,e.eventManager),e}function AM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vM.bind(null,e),e}class ym{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ox(this.persistence,new kx,e.initialUser,this.serializer)}createPersistence(e){return new bx(ip.zr,this.serializer)}createSharedClientState(e){return new Ux}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_m(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TM.bind(null,this.syncEngine),await iM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oM}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),s=function(r){return new Hx(r)}(e.databaseInfo);return function(r,o,a,l){return new Kx(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new Gx(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_m(this.syncEngine,n,0),function(){return fm.v()?new fm:new $x}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new dM(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=te(n);j("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await ca(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new U(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=te(i),a=Oo(o.serializer)+"/documents",l={documents:r.map(d=>$l(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=ix(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Te(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Jf(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const i=Q.fromPath(s);this.mutations.push(new sw(i,this.precondition(i)))}),await async function(s,i){const r=te(s),o=Oo(r.serializer)+"/documents",a={writes:i.map(l=>hw(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=X.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new U(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Rt.exists(!1):Rt.updateTime(n):Rt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new U(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Rt.updateTime(n)}return Rt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class SM{constructor(e,n,s,i,r){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.qa=s.maxAttempts,this.Ko=new op(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new CM(this.datastore),n=this.Ka(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.$a(i)}))}).catch(s=>{this.$a(s)})})}Ka(e){try{const n=this.updateFunction(e);return!oa(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!iw(n)}return!1}}/**
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
 */class bM{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=DI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=hp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xu(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await gw(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kM(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>pm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>pm(e.remoteStore,r)),t._onlineComponents=e}function PM(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PM(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await xu(t,new ym)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await xu(t,new ym);return t._offlineComponents}async function yp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await vm(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await vm(t,new RM))),t._onlineComponents}function NM(t){return yp(t).then(e=>e.syncEngine)}function OM(t){return yp(t).then(e=>e.datastore)}async function jl(t){const e=await yp(t),n=e.eventManager;return n.onListen=fM.bind(null,e.syncEngine),n.onUnlisten=gM.bind(null,e.syncEngine),n}function DM(t,e,n={}){const s=new En;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new mp({next:d=>{o.enqueueAndForget(()=>fp(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new U(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new U(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new gp(Fc(a.path),u,{includeMetadataChanges:!0,W_:!0});return dp(r,h)}(await jl(t),t.asyncQueue,e,n,s)),s.promise}function xM(t,e,n={}){const s=new En;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new mp({next:d=>{o.enqueueAndForget(()=>fp(r,h)),d.fromCache&&l.source==="server"?c.reject(new U(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new gp(a,u,{includeMetadataChanges:!0,W_:!0});return dp(r,h)}(await jl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Nw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Em=new Map;/**
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
 */function Ow(t,e,n){if(!n)throw new U(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MM(t,e,n,s){if(e===!0&&s===!0)throw new U(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tm(t){if(!Q.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Im(t){if(Q.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vp(t);throw new U(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new U(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new eD;switch(s.type){case"firstParty":return new iD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Em.get(n);s&&(j("ComponentProvider","Removing Datastore"),Em.delete(n),s.terminate())}(this),Promise.resolve()}}function LM(t,e,n,s={}){var i;const r=(t=Ft(t,zc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ut.MOCK_USER;else{a=rC(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new tD(new OI(a,l))}}/**
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
 */class ha{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ha(this.firestore,e,this._query)}}class vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class ps extends ha{constructor(e,n,s){super(e,n,Fc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Q(e))}withConverter(e){return new ps(this.firestore,e,this._path)}}function FF(t,e,...n){if(t=Je(t),Ow("collection","path",e),t instanceof zc){const s=xe.fromString(e,...n);return Im(s),new ps(t,null,s)}{if(!(t instanceof vt||t instanceof ps))throw new U(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Im(s),new ps(t.firestore,null,s)}}function UF(t,e,...n){if(t=Je(t),arguments.length===1&&(e=DI.V()),Ow("doc","path",e),t instanceof zc){const s=xe.fromString(e,...n);return Tm(s),new vt(t,null,new Q(s))}{if(!(t instanceof vt||t instanceof ps))throw new U(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Tm(s),new vt(t.firestore,t instanceof ps?t.converter:null,new Q(s))}}/**
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
 */class VM{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new op(this,"async_queue_retry"),this.Xa=()=>{const n=Du();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Du();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new En;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ra(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw jn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&Y()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Am(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ts extends zc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new VM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dw(this),this._firestoreClient.terminate()}}function FM(t,e){const n=typeof t=="object"?t:Wd(),s=typeof t=="string"?t:e||"(default)",i=Hd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=iC("firestore");r&&LM(i,...r)}return i}function da(t){return t._firestoreClient||Dw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dw(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new _D(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Nw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new bM(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(Tt.fromBase64String(e))}catch(n){throw new U(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pa{constructor(e){this._methodName=e}}/**
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
 */class Gc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const UM=/^__.*__$/;class $M{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}class xw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Qc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Hl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Mw(this.uu)&&UM.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class BM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Wc(e)}Ru(e,n,s,i=!1){return new Qc({uu:e,methodName:n,Au:s,path:pt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ep(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new BM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lw(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);Tp("Data must be an object, but it was:",o,s);const a=$w(s,o);let l,c;if(r.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=sd(e,h,n);if(!o.contains(d))throw new U(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jw(u,d)||u.push(d)}l=new Dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new $M(new At(a),l,c)}class Yc extends pa{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}function Vw(t,e,n){return new Qc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class jM extends pa{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=Vw(this,e,!0),s=this.Vu.map(r=>Tr(r,n)),i=new Yi(s);return new ew(e.path,i)}isEqual(e){return this===e}}class HM extends pa{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=Vw(this,e,!0),s=this.Vu.map(r=>Tr(r,n)),i=new Xi(s);return new ew(e.path,i)}isEqual(e){return this===e}}function Fw(t,e,n,s){const i=t.Ru(1,e,n);Tp("Data must be an object, but it was:",i,s);const r=[],o=At.empty();ui(s,(l,c)=>{const u=Ip(e,l,n);c=Je(c);const h=i.Iu(u);if(c instanceof Yc)r.push(u);else{const d=Tr(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Dt(r);return new xw(o,a,i.fieldTransforms)}function Uw(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[sd(e,s,n)],l=[i];if(r.length%2!=0)throw new U(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(sd(e,r[d])),l.push(r[d+1]);const c=[],u=At.empty();for(let d=a.length-1;d>=0;--d)if(!jw(c,a[d])){const f=a[d];let _=l[d];_=Je(_);const m=o.Iu(f);if(_ instanceof Yc)c.push(f);else{const v=Tr(_,m);v!=null&&(c.push(f),u.set(f,v))}}const h=new Dt(c);return new xw(u,h,o.fieldTransforms)}function Tr(t,e){if(Bw(t=Je(t)))return Tp("Unsupported field value:",e,t),$w(t,e);if(t instanceof pa)return function(s,i){if(!Mw(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Tr(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return UD(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=He.fromDate(s);return{timestampValue:Ul(i.serializer,r)}}if(s instanceof He){const r=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ul(i.serializer,r)}}if(s instanceof Gc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof si)return{bytesValue:lw(i.serializer,s._byteString)};if(s instanceof vt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:np(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${vp(s)}`)}(t,e)}function $w(t,e){const n={};return xI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(s,i)=>{const r=Tr(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Gc||t instanceof si||t instanceof vt||t instanceof pa)}function Tp(t,e,n){if(!Bw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=vp(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function sd(t,e,n){if((e=Je(e))instanceof fa)return e._internalPath;if(typeof e=="string")return Ip(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const WM=new RegExp("[~\\*/\\[\\]]");function Ip(t,e,n){if(e.search(WM)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fa(...e.split("."))._internalPath}catch{throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new U(R.INVALID_ARGUMENT,a+t+l)}function jw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wl{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qM extends Wl{data(){return super.data()}}function Hw(t,e){return typeof e=="string"?Ip(t,e):e instanceof fa?e._internalPath:e._delegate._internalPath}/**
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
 */function Ww(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qw{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ui(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Gc(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Gf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=vs(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);Te(pw(s));const i=new ko(s.get(1),s.get(3)),r=new Q(s.popFirst(5));return i.isEqual(n)||jn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Kw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class KM extends qw{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}/**
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
 */class Ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wp extends Wl{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Hw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class el extends wp{data(e={}){return super.data(e)}}class zw{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ri(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new el(this._firestore,this._userDataWriter,s.key,s,new Ri(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new el(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new el(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:zM(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function Gw(t){t=Ft(t,vt);const e=Ft(t.firestore,Ts);return DM(da(e),t._key).then(n=>Yw(e,t,n))}class Xc extends qw{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function GM(t){t=Ft(t,ha);const e=Ft(t.firestore,Ts),n=da(e),s=new Xc(e);return Ww(t._query),xM(n,t._query).then(i=>new zw(e,s,t,i))}function $F(t,e,n){t=Ft(t,vt);const s=Ft(t.firestore,Ts),i=Kw(t.converter,e,n);return Qw(s,[Lw(Ep(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rt.none())])}function BF(t,e,n,...s){t=Ft(t,vt);const i=Ft(t.firestore,Ts),r=Ep(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof fa?Uw(r,"updateDoc",t._key,e,n,s):Fw(r,"updateDoc",t._key,e),Qw(i,[o.toMutation(t._key,Rt.exists(!0))])}function Ap(t,...e){var n,s,i;t=Je(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Am(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Am(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof vt)c=Ft(t.firestore,Ts),u=Fc(t._key.path),l={next:h=>{e[o]&&e[o](Yw(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ft(t,ha);c=Ft(h.firestore,Ts),u=h._query;const d=new Xc(c);l={next:f=>{e[o]&&e[o](new zw(c,d,h,f))},error:e[o+1],complete:e[o+2]},Ww(t._query)}return function(d,f,_,m){const v=new mp(m),T=new gp(f,v,_);return d.asyncQueue.enqueueAndForget(async()=>dp(await jl(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>fp(await jl(d),T))}}(da(c),u,a,l)}function Qw(t,e){return function(s,i){const r=new En;return s.asyncQueue.enqueueAndForget(async()=>_M(await NM(s),i,r)),r.promise}(da(t),e)}function Yw(t,e,n){const s=n.docs.get(e._key),i=new Xc(t);return new wp(t,i,e._key,s,new Ri(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const QM={maxAttempts:5};function kr(t,e){if((t=Je(t)).firestore!==e)throw new U(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class YM extends class{constructor(n,s){this._firestore=n,this._transaction=s,this._dataReader=Ep(n)}get(n){const s=kr(n,this._firestore),i=new KM(this._firestore);return this._transaction.lookup([s._key]).then(r=>{if(!r||r.length!==1)return Y();const o=r[0];if(o.isFoundDocument())return new Wl(this._firestore,i,o.key,o,s.converter);if(o.isNoDocument())return new Wl(this._firestore,i,s._key,null,s.converter);throw Y()})}set(n,s,i){const r=kr(n,this._firestore),o=Kw(r.converter,s,i),a=Lw(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,a),this}update(n,s,i,...r){const o=kr(n,this._firestore);let a;return a=typeof(s=Je(s))=="string"||s instanceof fa?Uw(this._dataReader,"Transaction.update",o._key,s,i,r):Fw(this._dataReader,"Transaction.update",o._key,s),this._transaction.update(o._key,a),this}delete(n){const s=kr(n,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=kr(e,this._firestore),s=new Xc(this._firestore);return super.get(e).then(i=>new wp(this._firestore,s,n._key,i._document,new Ri(!1,!1),n.converter))}}function HF(t,e,n){t=Ft(t,Ts);const s=Object.assign(Object.assign({},QM),n);return function(r){if(r.maxAttempts<1)throw new U(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,a){const l=new En;return r.asyncQueue.enqueueAndForget(async()=>{const c=await OM(r);new SM(r.asyncQueue,c,a,o,l).run()}),l.promise}(da(t),i=>e(new YM(t,i)),s)}function WF(...t){return new jM("arrayUnion",t)}function qF(...t){return new HM("arrayRemove",t)}(function(e,n=!0){(function(i){yr=i})(Is),In(new nn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ts(new nD(s.getProvider("auth-internal")),new oD(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Mt(W_,"4.1.0",e),Mt(W_,"4.1.0","esm2017")})();/**
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
 */const Xw="firebasestorage.googleapis.com",XM="storageBucket",JM=2*60*1e3,ZM=10*60*1e3;/**
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
 */class bn extends Sn{constructor(e,n,s=0){super(Mu(e),`Firebase Storage: ${n} (${Mu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Cn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Cn||(Cn={}));function Mu(t){return"storage/"+t}function eL(){const t="An unknown error occurred, please check the error payload for server response.";return new bn(Cn.UNKNOWN,t)}function tL(){return new bn(Cn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nL(){return new bn(Cn.CANCELED,"User canceled the upload/download.")}function sL(t){return new bn(Cn.INVALID_URL,"Invalid URL '"+t+"'.")}function iL(t){return new bn(Cn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Rm(t){return new bn(Cn.INVALID_ARGUMENT,t)}function Jw(){return new bn(Cn.APP_DELETED,"The Firebase app was deleted.")}function rL(t){return new bn(Cn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(s.path==="")return s;throw iL(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},m=n===Xw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${m}/${i}/${v}`,"i"),S=[{regex:a,indices:l,postModify:r},{regex:f,indices:_,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<S.length;w++){const B=S[w],H=B.regex.exec(e);if(H){const ne=H[B.indices.bucket];let F=H[B.indices.path];F||(F=""),s=new Zt(ne,F),B.postModify(s);break}}if(s==null)throw sL(e);return s}}class oL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aL(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let _=!1;function m(v){_||(_=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function lL(t){t(!1)}/**
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
 */function cL(t){return t!==void 0}function Cm(t,e,n,s){if(s<e)throw Rm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Rm(`Invalid value for '${t}'. Expected ${n} or less.`)}function uL(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ql;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ql||(ql={}));/**
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
 */function hL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class dL{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ua(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ql.NO_ERROR,l=r.getStatus();if(!a||hL(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ql.ABORT;s(!1,new Ua(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ua(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cL(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=eL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Jw():nL();o(l)}else{const l=tL();o(l)}};this.canceled_?n(!1,new Ua(!1,null,!0)):this.backoffId_=aL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ua{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function fL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _L(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mL(t,e,n,s,i,r,o=!0){const a=uL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gL(c,e),fL(c,n),pL(c,r),_L(c,s),new dL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function yL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Kl{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kl(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vL(this._location.path)}get storage(){return this._service}get parent(){const e=yL(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Kl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rL(e)}}function Sm(t,e){const n=e==null?void 0:e[XM];return n==null?null:Zt.makeFromBucketSpec(n,t)}class EL{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Xw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JM,this._maxUploadRetryTime=ZM,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=Sm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=Sm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new oL(Jw());{const o=mL(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const bm="@firebase/storage",Pm="0.11.2";/**
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
 */const TL="storage";function IL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new EL(n,s,i,e,Is)}function wL(){In(new nn(TL,IL,"PUBLIC").setMultipleInstances(!0)),Mt(bm,Pm,""),Mt(bm,Pm,"esm2017")}wL();const Lu=new WeakMap;function Zw(t,e){return Lu.has(e)||Lu.set(e,t||{f:{},r:{},s:{},u:{}}),Lu.get(e)}function AL(t,e,n,s){if(!t)return n;const[i,r]=e0(t);if(!i)return n;const o=Zw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function RL(t,e,n,s){if(!t)return;const[i,r]=e0(t);if(!i)return;const o=Zw(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(fn),a}function e0(t){return ZP(t)||ek(t)?["f",t.path]:tk(t)?["r",t.toString()]:nk(t)?["s",t.toString()]:[]}const Vu=new WeakMap;function CL(t,e,n){const s=Ho();Vu.has(s)||Vu.set(s,new Map);const i=Vu.get(s),r=RL(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):fn}const SL={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function id(t,e,n,s){if(!XP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const _=Object.getOwnPropertyDescriptor(a,f);_&&!_.enumerable&&Object.defineProperty(h,f,_)});for(const f in a){const _=a[f];if(_==null||_ instanceof Date||_ instanceof He||_ instanceof Gc)h[f]=_;else if(ef(_)){const m=c+f;h[f]=m in n?l[f]:_.path,d[m]=_.converter?_:_.withConverter(s.converter)}else if(Array.isArray(_)){h[f]=Array(_.length);for(let m=0;m<_.length;m++){const v=_[m];v&&v.path in r&&(h[f][m]=r[v.path])}o(_,l[f]||h[f],c+f+".",[h[f],d])}else oi(_)?(h[f]={},o(_,l[f],c+f+".",[h[f],d])):h[f]=_}}return o(t,e,"",i),i}const Rp={reset:!1,wait:!0,maxRefDepth:2,converter:SL,snapshotOptions:{serverTimestamps:"estimate"}};function zl(t){for(const e in t)t[e].unsub()}function rd(t,e,n,s,i,r,o,a,l){const[c,u]=id(s.data(t.snapshotOptions),Zd(e,n),i,t);r.set(e,n,c),od(t,e,n,i,u,r,o,a,l)}function bL({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=fn;return a.once?Gw(t).then(u=>{u.exists()?rd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Ap(t,u=>{u.exists()?rd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),zl(l)}}function od(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(m=>c.indexOf(m)<0).forEach(m=>{s[m].unsub(),delete s[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function _(m){m in f&&++h>=d&&a(n)}c.forEach(m=>{const v=s[m],T=i[m],C=`${n}.${m}`;if(f[C]=!0,v)if(v.path!==T.path)v.unsub();else return;s[m]={data:()=>Zd(e,C),unsub:bL({ref:T,target:e,path:C,depth:o,ops:r,resolve:_.bind(null,C),reject:l},t),path:T.path}})}function PL(t,e,n,s,i,r){const o=Object.assign({},Rp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Vn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let _,m=fn;const v=[],T={added:({newIndex:S,doc:w})=>{v.splice(S,0,Object.create(null));const B=v[S],[H,ne]=id(w.data(l),void 0,B,o);n.add(nt(d),S,H),od(o,d,`${h}.${S}`,B,ne,n,0,s.bind(null,w),i)},modified:({oldIndex:S,newIndex:w,doc:B})=>{const H=nt(d),ne=v[S],F=H[S],[ie,re]=id(B.data(l),F,ne,o);v.splice(w,0,ne),n.remove(H,S),n.add(H,w,ie),od(o,d,`${h}.${w}`,ne,re,n,0,s,i)},removed:({oldIndex:S})=>{const w=nt(d);n.remove(w,S),zl(v.splice(S,1)[0])}};function C(S){const w=S.docChanges(a);if(!_&&w.length){_=!0;let B=0;const H=w.length,ne=Object.create(null);for(let F=0;F<H;F++)ne[w[F].doc.id]=!0;s=F=>{F&&F.id in ne&&++B>=H&&(c&&(n.set(t,h,nt(d)),d=t),f(nt(d)),s=fn)}}w.forEach(B=>{T[B.type](B)}),w.length||(c&&(n.set(t,h,nt(d)),d=t),s(nt(d)))}return u?GM(e).then(C).catch(i):m=Ap(e,C,i),S=>{if(m(),S){const w=typeof S=="function"?S():[];n.set(t,h,w)}v.forEach(zl)}}function kL(t,e,n,s,i,r){const o=Object.assign({},Rp,r),a="value",l=Object.create(null);s=sk(s,()=>Zd(t,a));let c=fn;function u(h){h.exists()?rd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Gw(e).then(u).catch(i):c=Ap(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}zl(l)}}const km=Symbol();function t0(t,e){let n=fn;const s=Object.assign({},Rp,e),i=nt(t),r=s.target||Vn();rk()&&(s.once=!0);const o=AL(i,s.ssrKey,km,Ho()),a=o!==km;a&&(r.value=o);let l=!a;const c=Vn(!1),u=Vn(),h=Ny(),d=gy();let f=fn;function _(){let T=nt(t);const C=new Promise((S,w)=>{if(n(s.reset),!T)return n=fn,S(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(ef(T)?kL:PL)(r,T,NL,S,w,s)}).catch(S=>(h.value===C&&(u.value=S),Promise.reject(S))).finally(()=>{h.value===C&&(c.value=!1)});h.value=C}let m=fn;rt(t)&&(m=ki(t,_)),_(),i&&(f=CL(h.value,i,s.ssrKey)),Vd()&&Qy(()=>h.value),d&&V0(v);function v(T=s.reset){m(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const NL={set:(t,e,n)=>QP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function KF(t,e){return t0(t,{target:Vn([]),...e})}function zF(t,e){return t0(t,e)}function OL(t){return(e,n)=>{const s=ok(e,n).run(()=>Vn(t));_E.set(e,s),lk(s,e)}}function GF(t){return GP?dE(Ho(t)):null}function DL(t,{firebaseApp:e,modules:n=[]}){t.provide(gE,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const xL=Symbol();var Nm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nm||(Nm={}));function ML(){const t=py(!0),e=t.run(()=>Vn({}));let n=[],s=[];const i=Cd({install(r){i._a=r,r.provide(xL,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!TP?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const n0=Sv({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),QF=FM(n0);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ei=typeof window<"u";function LL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Fu(t,e){const n={};for(const s in e){const i=e[s];n[s]=on(i)?i.map(t):t(i)}return n}const to=()=>{},on=Array.isArray,VL=/\/$/,FL=t=>t.replace(VL,"");function Uu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=jL(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function UL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $L(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&er(e.matched[s],n.matched[i])&&s0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function s0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BL(t[n],e[n]))return!1;return!0}function BL(t,e){return on(t)?Dm(t,e):on(e)?Dm(e,t):t===e}function Dm(t,e){return on(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function jL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Do;(function(t){t.pop="pop",t.push="push"})(Do||(Do={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function HL(t){if(!t)if(Ei){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FL(t)}const WL=/^[^#]+#/;function qL(t,e){return t.replace(WL,"#")+e}function KL(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Jc=()=>({left:window.pageXOffset,top:window.pageYOffset});function zL(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=KL(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xm(t,e){return(history.state?history.state.position-e:-1)+t}const ad=new Map;function GL(t,e){ad.set(t,e)}function QL(t){const e=ad.get(t);return ad.delete(t),e}let YL=()=>location.protocol+"//"+location.host;function i0(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Om(l,"")}return Om(n,t)+s+i}function XL(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=i0(t,location),_=n.value,m=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}v=m?d.position-m.position:0}else s(f);i.forEach(T=>{T(n.value,_,{delta:v,type:Do.pop,direction:v?v>0?no.forward:no.back:no.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Jc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Mm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Jc():null}}function JL(t){const{history:e,location:n}=window,s={value:i0(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:YL()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,Mm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,e.state,{forward:l,scroll:Jc()});r(u.current,u,!0);const h=Ee({},Mm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function ZL(t){t=HL(t);const e=JL(t),n=XL(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:t,go:s,createHref:qL.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function eV(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ZL(t)}function tV(t){return typeof t=="string"||t&&typeof t=="object"}function r0(t){return typeof t=="string"||typeof t=="symbol"}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},o0=Symbol("");var Lm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lm||(Lm={}));function tr(t,e){return Ee(new Error,{type:t,[o0]:!0},e)}function Nn(t,e){return t instanceof Error&&o0 in t&&(e==null||!!(t.type&e))}const Vm="[^/]+?",nV={sensitive:!1,strict:!1,start:!0,end:!0},sV=/[.+*?^${}()[\]/\\]/g;function iV(t,e){const n=Ee({},nV,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(sV,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:m,optional:v,regexp:T}=d;r.push({name:_,repeatable:m,optional:v});const C=T||Vm;if(C!==Vm){f+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+w.message)}}let S=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(S=v&&c.length<2?`(?:/${S})`:"/"+S),v&&(S+="?"),i+=S,f+=20,v&&(f+=-8),m&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=r[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:m,optional:v}=f,T=_ in c?c[_]:"";if(on(T)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=on(T)?T.join("/"):T;if(!C)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function rV(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oV(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=rV(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Fm(s))return 1;if(Fm(i))return-1}return i.length-s.length}function Fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aV={type:0,value:""},lV=/[a-zA-Z0-9_]/;function cV(t){if(!t)return[[]];if(t==="/")return[[aV]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:lV.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function uV(t,e,n){const s=iV(cV(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hV(t,e){const n=[],s=new Map;e=Bm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,_=dV(u);_.aliasOf=d&&d.record;const m=Bm(e,u),v=[_];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of S)v.push(Ee({},_,{components:d?d.record.components:_.components,path:w,aliasOf:d?d.record:_}))}let T,C;for(const S of v){const{path:w}=S;if(h&&w[0]!=="/"){const B=h.record.path,H=B[B.length-1]==="/"?"":"/";S.path=h.record.path+(w&&H+w)}if(T=uV(S,h,m),d?d.alias.push(T):(C=C||T,C!==T&&C.alias.push(T),f&&u.name&&!$m(T)&&o(u.name)),_.children){const B=_.children;for(let H=0;H<B.length;H++)r(B[H],T,d&&d.children[H])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return C?()=>{o(C)}:to}function o(u){if(r0(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&oV(u,n[h])>=0&&(u.record.path!==n[h].record.path||!a0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$m(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},_,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw tr(1,{location:u});m=d.record.name,f=Ee(Um(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Um(u.params,d.keys.map(C=>C.name))),_=d.stringify(f)}else if("path"in u)_=u.path,d=n.find(C=>C.re.test(_)),d&&(f=d.parse(_),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw tr(1,{location:u,currentLocation:h});m=d.record.name,f=Ee({},h.params,u.params),_=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:m,path:_,params:f,matched:v,meta:pV(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Um(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $m(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pV(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Bm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function a0(t,e){return e.children.some(n=>n===t||a0(t,n))}const l0=/#/g,gV=/&/g,_V=/\//g,mV=/=/g,yV=/\?/g,c0=/\+/g,vV=/%5B/g,EV=/%5D/g,u0=/%5E/g,TV=/%60/g,h0=/%7B/g,IV=/%7C/g,d0=/%7D/g,wV=/%20/g;function Cp(t){return encodeURI(""+t).replace(IV,"|").replace(vV,"[").replace(EV,"]")}function AV(t){return Cp(t).replace(h0,"{").replace(d0,"}").replace(u0,"^")}function ld(t){return Cp(t).replace(c0,"%2B").replace(wV,"+").replace(l0,"%23").replace(gV,"%26").replace(TV,"`").replace(h0,"{").replace(d0,"}").replace(u0,"^")}function RV(t){return ld(t).replace(mV,"%3D")}function CV(t){return Cp(t).replace(l0,"%23").replace(yV,"%3F")}function SV(t){return t==null?"":CV(t).replace(_V,"%2F")}function Gl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bV(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(c0," "),o=r.indexOf("="),a=Gl(o<0?r:r.slice(0,o)),l=o<0?null:Gl(r.slice(o+1));if(a in e){let c=e[a];on(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function jm(t){let e="";for(let n in t){const s=t[n];if(n=RV(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(s)?s.map(r=>r&&ld(r)):[s&&ld(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function PV(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=on(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const kV=Symbol(""),Hm=Symbol(""),Zc=Symbol(""),Sp=Symbol(""),cd=Symbol("");function Nr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function es(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(tr(4,{from:n,to:e})):h instanceof Error?a(h):tV(h)?a(tr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function $u(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(NV(a)){const c=(a.__vccOpts||a)[e];c&&i.push(es(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=LL(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&es(d,n,s,r,o)()}))}}return i}function NV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wm(t){const e=xt(Zc),n=xt(Sp),s=Qt(()=>e.resolve(nt(t.to))),i=Qt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(er.bind(null,u));if(d>-1)return d;const f=qm(l[c-2]);return c>1&&qm(u)===f&&h[h.length-1].path!==f?h.findIndex(er.bind(null,l[c-2])):d}),r=Qt(()=>i.value>-1&&MV(n.params,s.value.params)),o=Qt(()=>i.value>-1&&i.value===n.matched.length-1&&s0(n.params,s.value.params));function a(l={}){return xV(l)?e[nt(t.replace)?"replace":"push"](nt(t.to)).catch(to):Promise.resolve()}return{route:s,href:Qt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const OV=lr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wm,setup(t,{slots:e}){const n=sc(Wm(t)),{options:s}=xt(Zc),i=Qt(()=>({[Km(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Km(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),DV=OV;function xV(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MV(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!on(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function qm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Km=(t,e,n)=>t??e??n,LV=lr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xt(cd),i=Qt(()=>t.route||s.value),r=xt(Hm,0),o=Qt(()=>{let c=nt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Qt(()=>i.value.matched[o.value]);Ha(Hm,Qt(()=>o.value+1)),Ha(kV,a),Ha(cd,i);const l=Vn();return ki(()=>[l.value,a.value,t.name],([c,u,h],[d,f,_])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!er(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return zm(n.default,{Component:d,route:c});const f=h.props[u],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Ud(d,Ee({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return zm(n.default,{Component:v,route:c})||v}}});function zm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const f0=LV;function VV(t){const e=hV(t.routes,t),n=t.parseQuery||bV,s=t.stringifyQuery||jm,i=t.history,r=Nr(),o=Nr(),a=Nr(),l=Ny(Jn);let c=Jn;Ei&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fu.bind(null,I=>""+I),h=Fu.bind(null,SV),d=Fu.bind(null,Gl);function f(I,V){let D,q;return r0(I)?(D=e.getRecordMatcher(I),q=V):q=I,e.addRoute(q,D)}function _(I){const V=e.getRecordMatcher(I);V&&e.removeRoute(V)}function m(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function T(I,V){if(V=Ee({},V||l.value),typeof I=="string"){const y=Uu(n,I,V.path),E=e.resolve({path:y.path},V),A=i.createHref(y.fullPath);return Ee(y,E,{params:d(E.params),hash:Gl(y.hash),redirectedFrom:void 0,href:A})}let D;if("path"in I)D=Ee({},I,{path:Uu(n,I.path,V.path).path});else{const y=Ee({},I.params);for(const E in y)y[E]==null&&delete y[E];D=Ee({},I,{params:h(y)}),V.params=h(V.params)}const q=e.resolve(D,V),me=I.hash||"";q.params=u(d(q.params));const p=UL(s,Ee({},I,{hash:AV(me),path:q.path})),g=i.createHref(p);return Ee({fullPath:p,hash:me,query:s===jm?PV(I.query):I.query||{}},q,{redirectedFrom:void 0,href:g})}function C(I){return typeof I=="string"?Uu(n,I,l.value.path):Ee({},I)}function S(I,V){if(c!==I)return tr(8,{from:V,to:I})}function w(I){return ne(I)}function B(I){return w(Ee(C(I),{replace:!0}))}function H(I){const V=I.matched[I.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let q=typeof D=="function"?D(I):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=C(q):{path:q},q.params={}),Ee({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function ne(I,V){const D=c=T(I),q=l.value,me=I.state,p=I.force,g=I.replace===!0,y=H(D);if(y)return ne(Ee(C(y),{state:typeof y=="object"?Ee({},me,y.state):me,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let A;return!p&&$L(s,q,D)&&(A=tr(16,{to:E,from:q}),an(q,q,!0,!1)),(A?Promise.resolve(A):re(E,q)).catch(b=>Nn(b)?Nn(b,2)?b:zn(b):_e(b,E,q)).then(b=>{if(b){if(Nn(b,2))return ne(Ee({replace:g},C(b.to),{state:typeof b.to=="object"?Ee({},me,b.to.state):me,force:p}),V||E)}else b=W(E,q,!0,g,me);return De(E,q,b),b})}function F(I,V){const D=S(I,V);return D?Promise.reject(D):Promise.resolve()}function ie(I){const V=fi.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(I):I()}function re(I,V){let D;const[q,me,p]=FV(I,V);D=$u(q.reverse(),"beforeRouteLeave",I,V);for(const y of q)y.leaveGuards.forEach(E=>{D.push(es(E,I,V))});const g=F.bind(null,I,V);return D.push(g),lt(D).then(()=>{D=[];for(const y of r.list())D.push(es(y,I,V));return D.push(g),lt(D)}).then(()=>{D=$u(me,"beforeRouteUpdate",I,V);for(const y of me)y.updateGuards.forEach(E=>{D.push(es(E,I,V))});return D.push(g),lt(D)}).then(()=>{D=[];for(const y of p)if(y.beforeEnter)if(on(y.beforeEnter))for(const E of y.beforeEnter)D.push(es(E,I,V));else D.push(es(y.beforeEnter,I,V));return D.push(g),lt(D)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),D=$u(p,"beforeRouteEnter",I,V),D.push(g),lt(D))).then(()=>{D=[];for(const y of o.list())D.push(es(y,I,V));return D.push(g),lt(D)}).catch(y=>Nn(y,8)?y:Promise.reject(y))}function De(I,V,D){a.list().forEach(q=>ie(()=>q(I,V,D)))}function W(I,V,D,q,me){const p=S(I,V);if(p)return p;const g=V===Jn,y=Ei?history.state:{};D&&(q||g?i.replace(I.fullPath,Ee({scroll:g&&y&&y.scroll},me)):i.push(I.fullPath,me)),l.value=I,an(I,V,D,g),zn()}let ve;function It(){ve||(ve=i.listen((I,V,D)=>{if(!_a.listening)return;const q=T(I),me=H(q);if(me){ne(Ee(me,{replace:!0}),q).catch(to);return}c=q;const p=l.value;Ei&&GL(xm(p.fullPath,D.delta),Jc()),re(q,p).catch(g=>Nn(g,12)?g:Nn(g,2)?(ne(g.to,q).then(y=>{Nn(y,20)&&!D.delta&&D.type===Do.pop&&i.go(-1,!1)}).catch(to),Promise.reject()):(D.delta&&i.go(-D.delta,!1),_e(g,q,p))).then(g=>{g=g||W(q,p,!1),g&&(D.delta&&!Nn(g,8)?i.go(-D.delta,!1):D.type===Do.pop&&Nn(g,20)&&i.go(-1,!1)),De(q,p,g)}).catch(to)}))}let Pn=Nr(),Ve=Nr(),Re;function _e(I,V,D){zn(I);const q=Ve.list();return q.length?q.forEach(me=>me(I,V,D)):console.error(I),Promise.reject(I)}function kn(){return Re&&l.value!==Jn?Promise.resolve():new Promise((I,V)=>{Pn.add([I,V])})}function zn(I){return Re||(Re=!I,It(),Pn.list().forEach(([V,D])=>I?D(I):V()),Pn.reset()),I}function an(I,V,D,q){const{scrollBehavior:me}=t;if(!Ei||!me)return Promise.resolve();const p=!D&&QL(xm(I.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return My().then(()=>me(I,V,p)).then(g=>g&&zL(g)).catch(g=>_e(g,I,V))}const St=I=>i.go(I);let di;const fi=new Set,_a={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,hasRoute:v,getRoutes:m,resolve:T,options:t,push:w,replace:B,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:kn,install(I){const V=this;I.component("RouterLink",DV),I.component("RouterView",f0),I.config.globalProperties.$router=V,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>nt(l)}),Ei&&!di&&l.value===Jn&&(di=!0,w(i.location).catch(me=>{}));const D={};for(const me in Jn)Object.defineProperty(D,me,{get:()=>l.value[me],enumerable:!0});I.provide(Zc,V),I.provide(Sp,Cy(D)),I.provide(cd,l);const q=I.unmount;fi.add(I),I.unmount=function(){fi.delete(I),fi.size<1&&(c=Jn,ve&&ve(),ve=null,l.value=Jn,di=!1,Re=!1),q()}}};function lt(I){return I.reduce((V,D)=>V.then(()=>ie(D)),Promise.resolve())}return _a}function FV(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>er(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>er(c,l))||i.push(l))}return[n,s,i]}function UV(){return xt(Zc)}function $V(){return xt(Sp)}const BV=lr({__name:"App",setup(t){const e=mE(),n=UV(),s=$V();return ki(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(us(),uo(nt(f0)))}}),jV="modulepreload",HV=function(t){return"/"+t},Gm={},$a=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=HV(r),r in Gm)return;Gm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":jV,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function WV(t,e,n,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qV=t=>e=>typeof e=="function"?((n,s)=>(customElements.define(n,s),s))(t,e):((n,s)=>{const{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const KV=({finisher:t,descriptor:e})=>(n,s)=>{var i;if(s===void 0){const r=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,s,e(s)),t==null||t(r,s)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bu;const zV=((Bu=window.HTMLSlotElement)===null||Bu===void 0?void 0:Bu.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function YF(t){const{slot:e,selector:n}=t??{};return KV({descriptor:s=>({get(){var i;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r),a=o!=null?zV(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=window,bp=tl.ShadowRoot&&(tl.ShadyCSS===void 0||tl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pp=Symbol(),Qm=new WeakMap;let p0=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==Pp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(bp&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=Qm.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Qm.set(n,e))}return e}toString(){return this.cssText}};const GV=t=>new p0(typeof t=="string"?t:t+"",void 0,Pp),QV=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new p0(n,t,Pp)},YV=(t,e)=>{bp?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const s=document.createElement("style"),i=tl.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,t.appendChild(s)})},Ym=bp?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return GV(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ju;const Ql=window,Xm=Ql.trustedTypes,XV=Xm?Xm.emptyScript:"",Jm=Ql.reactiveElementPolyfillSupport,ud={toAttribute(t,e){switch(e){case Boolean:t=t?XV:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},g0=(t,e)=>e!==t&&(e==e||t==t),Hu={attribute:!0,type:String,converter:ud,reflect:!1,hasChanged:g0},hd="finalized";let Ti=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,s)=>{const i=this._$Ep(s,n);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,n=Hu){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,s){return{get(){return this[n]},set(i){const r=this[e];this[n]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Hu}static finalize(){if(this.hasOwnProperty(hd))return!1;this[hd]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,s=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of s)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)n.unshift(Ym(i))}else e!==void 0&&n.push(Ym(e));return n}static _$Ep(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,s;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return YV(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostConnected)===null||s===void 0?void 0:s.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostDisconnected)===null||s===void 0?void 0:s.call(n)})}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$EO(e,n,s=Hu){var i;const r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:ud).toAttribute(n,s.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var s;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:ud;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||g0)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let n=!1;const s=this._$AL;try{n=this.shouldUpdate(s),n?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(s)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,s)=>this._$EO(s,this[s],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ti[hd]=!0,Ti.elementProperties=new Map,Ti.elementStyles=[],Ti.shadowRootOptions={mode:"open"},Jm==null||Jm({ReactiveElement:Ti}),((ju=Ql.reactiveElementVersions)!==null&&ju!==void 0?ju:Ql.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wu;const Yl=window,nr=Yl.trustedTypes,Zm=nr?nr.createPolicy("lit-html",{createHTML:t=>t}):void 0,dd="$lit$",os=`lit$${(Math.random()+"").slice(9)}$`,_0="?"+os,JV=`<${_0}>`,ii=document,xo=()=>ii.createComment(""),Mo=t=>t===null||typeof t!="object"&&typeof t!="function",m0=Array.isArray,ZV=t=>m0(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",qu=`[ 	
\f\r]`,Or=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ey=/-->/g,ty=/>/g,ks=RegExp(`>|${qu}(?:([^\\s"'>=/]+)(${qu}*=${qu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ny=/'/g,sy=/"/g,y0=/^(?:script|style|textarea|title)$/i,eF=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),tF=eF(1),sr=Symbol.for("lit-noChange"),Qe=Symbol.for("lit-nothing"),iy=new WeakMap,js=ii.createTreeWalker(ii,129,null,!1);function v0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zm!==void 0?Zm.createHTML(e):e}const nF=(t,e)=>{const n=t.length-1,s=[];let i,r=e===2?"<svg>":"",o=Or;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===Or?u[1]==="!--"?o=ey:u[1]!==void 0?o=ty:u[2]!==void 0?(y0.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ks):u[3]!==void 0&&(o=ks):o===ks?u[0]===">"?(o=i??Or,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ks:u[3]==='"'?sy:ny):o===sy||o===ny?o=ks:o===ey||o===ty?o=Or:(o=ks,i=void 0);const f=o===ks&&t[a+1].startsWith("/>")?" ":"";r+=o===Or?l+JV:h>=0?(s.push(c),l.slice(0,h)+dd+l.slice(h)+os+f):l+os+(h===-2?(s.push(void 0),a):f)}return[v0(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),s]};class Lo{constructor({strings:e,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=nF(e,n);if(this.el=Lo.createElement(c,s),js.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=js.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(dd)||d.startsWith(os)){const f=u[o++];if(h.push(d),f!==void 0){const _=i.getAttribute(f.toLowerCase()+dd).split(os),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:m[2],strings:_,ctor:m[1]==="."?iF:m[1]==="?"?oF:m[1]==="@"?aF:eu})}else l.push({type:6,index:r})}for(const d of h)i.removeAttribute(d)}if(y0.test(i.tagName)){const h=i.textContent.split(os),d=h.length-1;if(d>0){i.textContent=nr?nr.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],xo()),js.nextNode(),l.push({type:2,index:++r});i.append(h[d],xo())}}}else if(i.nodeType===8)if(i.data===_0)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(os,h+1))!==-1;)l.push({type:7,index:r}),h+=os.length-1}r++}}static createElement(e,n){const s=ii.createElement("template");return s.innerHTML=e,s}}function ir(t,e,n=t,s){var i,r,o,a;if(e===sr)return e;let l=s!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[s]:n._$Cl;const c=Mo(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,s)),s!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:n._$Cl=l),l!==void 0&&(e=ir(t,l._$AS(t,e.values),l,s)),e}class sF{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:s},parts:i}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ii).importNode(s,!0);js.currentNode=r;let o=js.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new ga(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new lF(o,this,e)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=js.nextNode(),a++)}return js.currentNode=ii,r}v(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}}class ga{constructor(e,n,s,i){var r;this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ir(this,e,n),Mo(e)?e===Qe||e==null||e===""?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==sr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ZV(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qe&&Mo(this._$AH)?this._$AA.nextSibling.data=e:this.$(ii.createTextNode(e)),this._$AH=e}g(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Lo.createElement(v0(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(s);else{const o=new sF(r,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(e){let n=iy.get(e.strings);return n===void 0&&iy.set(e.strings,n=new Lo(e)),n}T(e){m0(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of e)i===n.length?n.push(s=new ga(this.k(xo()),this.k(xo()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class eu{constructor(e,n,s,i,r){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Qe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=ir(this,e,n,0),o=!Mo(e)||e!==this._$AH&&e!==sr,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=ir(this,a[s+l],n,l),c===sr&&(c=this._$AH[l]),o||(o=!Mo(c)||c!==this._$AH[l]),c===Qe?e=Qe:e!==Qe&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class iF extends eu{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qe?void 0:e}}const rF=nr?nr.emptyScript:"";class oF extends eu{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Qe?this.element.setAttribute(this.name,rF):this.element.removeAttribute(this.name)}}class aF extends eu{constructor(e,n,s,i,r){super(e,n,s,i,r),this.type=5}_$AI(e,n=this){var s;if((e=(s=ir(this,e,n,0))!==null&&s!==void 0?s:Qe)===sr)return;const i=this._$AH,r=e===Qe&&i!==Qe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Qe&&(i===Qe||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class lF{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ir(this,e)}}const ry=Yl.litHtmlPolyfillSupport;ry==null||ry(Lo,ga),((Wu=Yl.litHtmlVersions)!==null&&Wu!==void 0?Wu:Yl.litHtmlVersions=[]).push("2.8.0");const cF=(t,e,n)=>{var s,i;const r=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new ga(e.insertBefore(xo(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ku,zu;class so extends Ti{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const s=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=s.firstChild),s}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cF(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return sr}}so.finalized=!0,so._$litElement$=!0,(Ku=globalThis.litElementHydrateSupport)===null||Ku===void 0||Ku.call(globalThis,{LitElement:so});const oy=globalThis.litElementPolyfillSupport;oy==null||oy({LitElement:so});((zu=globalThis.litElementVersions)!==null&&zu!==void 0?zu:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class uF extends so{render(){return tF`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const hF=QV`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fd=class extends uF{};fd.styles=[hF];fd=WV([qV("md-elevation")],fd);const dF=t=>(kd("data-v-7a114a21"),t=t(),Nd(),t),fF={class:"card"},pF=dF(()=>ri("md-elevation",null,null,-1)),gF=lr({__name:"ListItem",setup(t){return(e,n)=>(us(),Md("div",fF,[pF,BA(e.$slots,"title",{},void 0,!0)]))}});const kp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Gu=kp(gF,[["__scopeId","data-v-7a114a21"]]),_F=t=>(kd("data-v-b5b1e296"),t=t(),Nd(),t),mF=["src"],yF=_F(()=>ri("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),vF=lr({__name:"AccountImage",setup(t){var s;const e=mE(),n=Vn((s=e.value)==null?void 0:s.providerData[0].photoURL);return(i,r)=>{const o=Xy("RouterLink");return us(),Md("div",null,[nt(e)?(us(),uo(o,{key:0,to:"/myAccount"},{default:ts(()=>[ri("img",{class:"accountImage",src:n.value,alt:""},null,8,mF)]),_:1})):(us(),uo(o,{key:1,to:"/login"},{default:ts(()=>[yF]),_:1}))])}}});const EF=kp(vF,[["__scopeId","data-v-b5b1e296"]]),TF=t=>(kd("data-v-13af1bcb"),t=t(),Nd(),t),IF=TF(()=>ri("h1",null,"Fonti Paintball",-1)),wF=lr({__name:"HomeView",setup(t){return(e,n)=>{const s=Xy("RouterLink");return us(),Md("div",null,[je(EF),ri("main",null,[IF,je(s,{to:"/rules"},{default:ts(()=>[je(Gu,null,{title:ts(()=>[qa(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),je(s,{to:"/availability"},{default:ts(()=>[je(Gu,null,{title:ts(()=>[qa(" Inserisci disponibilità ")]),_:1})]),_:1}),je(Gu,null,{title:ts(()=>[qa(" Statistiche giocatori (prossimamente...) ")]),_:1})])])}}});const AF=kp(wF,[["__scopeId","data-v-13af1bcb"]]),E0=VV({history:eV("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:AF},{path:"/login",name:"login",component:()=>$a(()=>import("./LoginView-3e0762a8.js"),["assets/LoginView-3e0762a8.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>$a(()=>import("./AvailabilityView-2c9d17a5.js"),["assets/AvailabilityView-2c9d17a5.js","assets/dialog-4ebe3e14.js","assets/AvailabilityView-86519ee2.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>$a(()=>import("./UserView-7bf5044d.js"),["assets/UserView-7bf5044d.js","assets/dialog-4ebe3e14.js","assets/UserView-7478357e.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>$a(()=>import("./RulesView-13137f14.js"),["assets/RulesView-13137f14.js","assets/RulesView-af284cb9.css"])}]});E0.beforeEach(async t=>{if(t.meta.requiresAuth&&!await ak())return{path:"/login",query:{redirect:t.fullPath}}});const tu=GR(BV);tu.use(ML());tu.use(E0);tu.use(DL,{firebaseApp:n0,modules:[OL()]});tu.mount("#app");export{KV as $,SF as A,vd as B,yd as C,Vn as D,FF as E,Bt as F,ss as G,QF as H,KF as I,bF as J,UF as K,Gw as L,BF as M,WF as N,$F as O,so as P,tF as Q,QV as R,WV as S,dv as T,qV as U,Qe as V,YF as W,zF as X,HF as Y,qF as Z,kp as _,mE as a,sr as a0,us as b,Md as c,lr as d,nt as e,PF as f,DF as g,ri as h,je as i,Nd as j,CF as k,NF as l,uo as m,BA as n,Ky as o,kd as p,qa as q,Xy as r,OF as s,RF as t,GF as u,kF as v,ts as w,sc as x,Qt as y,ki as z};
