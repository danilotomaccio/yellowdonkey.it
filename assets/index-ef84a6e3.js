(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function af(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ue={},Xs=[],Tn=()=>{},SI=()=>!1,PI=/^on[^a-z]/,Ac=t=>PI.test(t),lf=t=>t.startsWith("onUpdate:"),ct=Object.assign,cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kI=Object.prototype.hasOwnProperty,ve=(t,e)=>kI.call(t,e),ne=Array.isArray,Js=t=>Cc(t)==="[object Map]",Xy=t=>Cc(t)==="[object Set]",he=t=>typeof t=="function",it=t=>typeof t=="string",uf=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",Jy=t=>He(t)&&he(t.then)&&he(t.catch),Zy=Object.prototype.toString,Cc=t=>Zy.call(t),xI=t=>Cc(t).slice(8,-1),ev=t=>Cc(t)==="[object Object]",hf=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_l=af(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},DI=/-(\w)/g,Wn=Rc(t=>t.replace(DI,(e,n)=>n?n.toUpperCase():"")),NI=/\B([A-Z])/g,Pr=Rc(t=>t.replace(NI,"-$1").toLowerCase()),Sc=Rc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fu=Rc(t=>t?`on${Sc(t)}`:""),xo=(t,e)=>!Object.is(t,e),$u=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},OI=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sm;const kh=()=>Sm||(Sm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Do(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=it(i)?FI(i):Do(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(it(t))return t;if(He(t))return t}}const MI=/;(?![^(]*\))/g,LI=/:([^]+)/,VI=/\/\*[^]*?\*\//g;function FI(t){const e={};return t.replace(VI,"").split(MI).forEach(n=>{if(n){const i=n.split(LI);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function si(t){let e="";if(it(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=si(t[n]);i&&(e+=i+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $I="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UI=af($I);function tv(t){return!!t||t===""}const Ge=t=>it(t)?t:t==null?"":ne(t)||He(t)&&(t.toString===Zy||!he(t.toString))?JSON.stringify(t,nv,2):String(t),nv=(t,e)=>e&&e.__v_isRef?nv(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Xy(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!ne(e)&&!ev(e)?String(e):e;let Jt;class iv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function df(t){return new iv(t)}function BI(t,e=Jt){e&&e.active&&e.effects.push(t)}function ff(){return Jt}function sv(t){Jt&&Jt.cleanups.push(t)}const pf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rv=t=>(t.w&Ui)>0,ov=t=>(t.n&Ui)>0,HI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ui},jI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];rv(s)&&!ov(s)?s.delete(t):e[n++]=s,s.w&=~Ui,s.n&=~Ui}e.length=n}},Dl=new WeakMap;let oo=0,Ui=1;const xh=30;let _n;const fs=Symbol(""),Dh=Symbol("");class mf{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,BI(this,i)}run(){if(!this.active)return this.fn();let e=_n,n=Di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_n,_n=this,Di=!0,Ui=1<<++oo,oo<=xh?HI(this):Pm(this),this.fn()}finally{oo<=xh&&jI(this),Ui=1<<--oo,_n=this.parent,Di=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_n===this?this.deferStop=!0:this.active&&(Pm(this),this.onStop&&this.onStop(),this.active=!1)}}function Pm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Di=!0;const av=[];function kr(){av.push(Di),Di=!1}function xr(){const t=av.pop();Di=t===void 0?!0:t}function Qt(t,e,n){if(Di&&_n){let i=Dl.get(t);i||Dl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=pf()),lv(s)}}function lv(t,e){let n=!1;oo<=xh?ov(t)||(t.n|=Ui,n=!rv(t)):n=!t.has(_n),n&&(t.add(_n),_n.deps.push(t))}function hi(t,e,n,i,s,r){const o=Dl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?hf(n)&&a.push(o.get("length")):(a.push(o.get(fs)),Js(t)&&a.push(o.get(Dh)));break;case"delete":ne(t)||(a.push(o.get(fs)),Js(t)&&a.push(o.get(Dh)));break;case"set":Js(t)&&a.push(o.get(fs));break}if(a.length===1)a[0]&&Nh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Nh(pf(l))}}function Nh(t,e){const n=ne(t)?t:[...t];for(const i of n)i.computed&&km(i);for(const i of n)i.computed||km(i)}function km(t,e){(t!==_n||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function zI(t,e){var n;return(n=Dl.get(t))==null?void 0:n.get(e)}const WI=af("__proto__,__v_isRef,__isVue"),cv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uf)),qI=gf(),KI=gf(!1,!0),GI=gf(!0),xm=QI();function QI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=we(this);for(let r=0,o=this.length;r<o;r++)Qt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(we)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kr();const i=we(this)[e].apply(this,n);return xr(),i}}),t}function YI(t){const e=we(this);return Qt(e,"has",t),e.hasOwnProperty(t)}function gf(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?dA:pv:e?fv:dv).get(i))return i;const o=ne(i);if(!t){if(o&&ve(xm,s))return Reflect.get(xm,s,r);if(s==="hasOwnProperty")return YI}const a=Reflect.get(i,s,r);return(uf(s)?cv.has(s):WI(s))||(t||Qt(i,"get",s),e)?a:We(a)?o&&hf(s)?a:a.value:He(a)?t?gv(a):Dr(a):a}}const XI=uv(),JI=uv(!0);function uv(t=!1){return function(n,i,s,r){let o=n[i];if(lr(o)&&We(o)&&!We(s))return!1;if(!t&&(!Nl(s)&&!lr(s)&&(o=we(o),s=we(s)),!ne(n)&&We(o)&&!We(s)))return o.value=s,!0;const a=ne(n)&&hf(i)?Number(i)<n.length:ve(n,i),l=Reflect.set(n,i,s,r);return n===we(r)&&(a?xo(s,o)&&hi(n,"set",i,s):hi(n,"add",i,s)),l}}function ZI(t,e){const n=ve(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&hi(t,"delete",e,void 0),i}function eA(t,e){const n=Reflect.has(t,e);return(!uf(e)||!cv.has(e))&&Qt(t,"has",e),n}function tA(t){return Qt(t,"iterate",ne(t)?"length":fs),Reflect.ownKeys(t)}const hv={get:qI,set:XI,deleteProperty:ZI,has:eA,ownKeys:tA},nA={get:GI,set(t,e){return!0},deleteProperty(t,e){return!0}},iA=ct({},hv,{get:KI,set:JI}),_f=t=>t,Pc=t=>Reflect.getPrototypeOf(t);function Ka(t,e,n=!1,i=!1){t=t.__v_raw;const s=we(t),r=we(e);n||(e!==r&&Qt(s,"get",e),Qt(s,"get",r));const{has:o}=Pc(s),a=i?_f:n?Ef:No;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ga(t,e=!1){const n=this.__v_raw,i=we(n),s=we(t);return e||(t!==s&&Qt(i,"has",t),Qt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Qa(t,e=!1){return t=t.__v_raw,!e&&Qt(we(t),"iterate",fs),Reflect.get(t,"size",t)}function Dm(t){t=we(t);const e=we(this);return Pc(e).has.call(e,t)||(e.add(t),hi(e,"add",t,t)),this}function Nm(t,e){e=we(e);const n=we(this),{has:i,get:s}=Pc(n);let r=i.call(n,t);r||(t=we(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?xo(e,o)&&hi(n,"set",t,e):hi(n,"add",t,e),this}function Om(t){const e=we(this),{has:n,get:i}=Pc(e);let s=n.call(e,t);s||(t=we(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&hi(e,"delete",t,void 0),r}function Mm(){const t=we(this),e=t.size!==0,n=t.clear();return e&&hi(t,"clear",void 0,void 0),n}function Ya(t,e){return function(i,s){const r=this,o=r.__v_raw,a=we(o),l=e?_f:t?Ef:No;return!t&&Qt(a,"iterate",fs),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Xa(t,e,n){return function(...i){const s=this.__v_raw,r=we(s),o=Js(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?_f:e?Ef:No;return!e&&Qt(r,"iterate",l?Dh:fs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ei(t){return function(...e){return t==="delete"?!1:this}}function sA(){const t={get(r){return Ka(this,r)},get size(){return Qa(this)},has:Ga,add:Dm,set:Nm,delete:Om,clear:Mm,forEach:Ya(!1,!1)},e={get(r){return Ka(this,r,!1,!0)},get size(){return Qa(this)},has:Ga,add:Dm,set:Nm,delete:Om,clear:Mm,forEach:Ya(!1,!0)},n={get(r){return Ka(this,r,!0)},get size(){return Qa(this,!0)},has(r){return Ga.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:Ya(!0,!1)},i={get(r){return Ka(this,r,!0,!0)},get size(){return Qa(this,!0)},has(r){return Ga.call(this,r,!0)},add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear"),forEach:Ya(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xa(r,!1,!1),n[r]=Xa(r,!0,!1),e[r]=Xa(r,!1,!0),i[r]=Xa(r,!0,!0)}),[t,n,e,i]}const[rA,oA,aA,lA]=sA();function yf(t,e){const n=e?t?lA:aA:t?oA:rA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ve(n,s)&&s in i?n:i,s,r)}const cA={get:yf(!1,!1)},uA={get:yf(!1,!0)},hA={get:yf(!0,!1)},dv=new WeakMap,fv=new WeakMap,pv=new WeakMap,dA=new WeakMap;function fA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pA(t){return t.__v_skip||!Object.isExtensible(t)?0:fA(xI(t))}function Dr(t){return lr(t)?t:vf(t,!1,hv,cA,dv)}function mv(t){return vf(t,!1,iA,uA,fv)}function gv(t){return vf(t,!0,nA,hA,pv)}function vf(t,e,n,i,s){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=pA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ni(t){return lr(t)?Ni(t.__v_raw):!!(t&&t.__v_isReactive)}function lr(t){return!!(t&&t.__v_isReadonly)}function Nl(t){return!!(t&&t.__v_isShallow)}function _v(t){return Ni(t)||lr(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function kc(t){return xl(t,"__v_skip",!0),t}const No=t=>He(t)?Dr(t):t,Ef=t=>He(t)?gv(t):t;function yv(t){Di&&_n&&(t=we(t),lv(t.dep||(t.dep=pf())))}function vv(t,e){t=we(t);const n=t.dep;n&&Nh(n)}function We(t){return!!(t&&t.__v_isRef===!0)}function Me(t){return wv(t,!1)}function Ev(t){return wv(t,!0)}function wv(t,e){return We(t)?t:new mA(t,e)}class mA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:No(e)}get value(){return yv(this),this._value}set value(e){const n=this.__v_isShallow||Nl(e)||lr(e);e=n?e:we(e),xo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:No(e),vv(this))}}function H(t){return We(t)?t.value:t}const gA={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Tv(t){return Ni(t)?t:new Proxy(t,gA)}function _A(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=vA(t,n);return e}class yA{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zI(we(this._object),this._key)}}function vA(t,e,n){const i=t[e];return We(i)?i:new yA(t,e,n)}class EA{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new mf(e,()=>{this._dirty||(this._dirty=!0,vv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=we(this);return yv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wA(t,e,n=!1){let i,s;const r=he(t);return r?(i=t,s=Tn):(i=t.get,s=t.set),new EA(i,s,r||!s,n)}function Oi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){xc(r,e,n)}return s}function bn(t,e,n,i){if(he(t)){const r=Oi(t,e,n,i);return r&&Jy(r)&&r.catch(o=>{xc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(bn(t[r],e,n,i));return s}function xc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Oi(l,null,10,[t,o,a]);return}}TA(t,n,s,i)}function TA(t,e,n,i=!0){console.error(t)}let Oo=!1,Oh=!1;const Rt=[];let On=0;const Zs=[];let ii=null,rs=0;const bv=Promise.resolve();let wf=null;function Tf(t){const e=wf||bv;return t?e.then(this?t.bind(this):t):e}function bA(t){let e=On+1,n=Rt.length;for(;e<n;){const i=e+n>>>1;Mo(Rt[i])<t?e=i+1:n=i}return e}function bf(t){(!Rt.length||!Rt.includes(t,Oo&&t.allowRecurse?On+1:On))&&(t.id==null?Rt.push(t):Rt.splice(bA(t.id),0,t),Iv())}function Iv(){!Oo&&!Oh&&(Oh=!0,wf=bv.then(Cv))}function IA(t){const e=Rt.indexOf(t);e>On&&Rt.splice(e,1)}function AA(t){ne(t)?Zs.push(...t):(!ii||!ii.includes(t,t.allowRecurse?rs+1:rs))&&Zs.push(t),Iv()}function Lm(t,e=Oo?On+1:0){for(;e<Rt.length;e++){const n=Rt[e];n&&n.pre&&(Rt.splice(e,1),e--,n())}}function Av(t){if(Zs.length){const e=[...new Set(Zs)];if(Zs.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((n,i)=>Mo(n)-Mo(i)),rs=0;rs<ii.length;rs++)ii[rs]();ii=null,rs=0}}const Mo=t=>t.id==null?1/0:t.id,CA=(t,e)=>{const n=Mo(t)-Mo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Cv(t){Oh=!1,Oo=!0,Rt.sort(CA);const e=Tn;try{for(On=0;On<Rt.length;On++){const n=Rt[On];n&&n.active!==!1&&Oi(n,null,14)}}finally{On=0,Rt.length=0,Av(),Oo=!1,wf=null,(Rt.length||Zs.length)&&Cv()}}function RA(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ue;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ue;d&&(s=n.map(f=>it(f)?f.trim():f)),h&&(s=n.map(OI))}let a,l=i[a=Fu(e)]||i[a=Fu(Wn(e))];!l&&r&&(l=i[a=Fu(Pr(e))]),l&&bn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(c,t,6,s)}}function Rv(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!he(t)){const l=c=>{const u=Rv(c,e,!0);u&&(a=!0,ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(He(t)&&i.set(t,null),null):(ne(r)?r.forEach(l=>o[l]=null):ct(o,r),He(t)&&i.set(t,o),o)}function Dc(t,e){return!t||!Ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Pr(e))||ve(t,e))}let yt=null,Nc=null;function Ol(t){const e=yt;return yt=t,Nc=t&&t.type.__scopeId||null,e}function Oc(t){Nc=t}function Mc(){Nc=null}function en(t,e=yt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Km(-1);const r=Ol(e);let o;try{o=t(...s)}finally{Ol(r),i._d&&Km(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Uu(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,T;const I=Ol(t);try{if(n.shapeFlag&4){const R=s||i;v=Nn(u.call(R,R,h,r,f,d,g)),T=l}else{const R=e;v=Nn(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),T=e.props?l:SA(l)}}catch(R){_o.length=0,xc(R,t,1),v=je(Bi)}let A=v;if(T&&y!==!1){const R=Object.keys(T),{shapeFlag:$}=A;R.length&&$&7&&(o&&R.some(lf)&&(T=PA(T,o)),A=cr(A,T))}return n.dirs&&(A=cr(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),v=A,Ol(I),v}const SA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ac(n))&&((e||(e={}))[n]=t[n]);return e},PA=(t,e)=>{const n={};for(const i in t)(!lf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function kA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Dc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vm(i,o,c):!0:!!o;return!1}function Vm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Dc(n,r))return!0}return!1}function xA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const DA=t=>t.__isSuspense;function NA(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):AA(t)}const Ja={};function Mi(t,e,n){return Sv(t,e,n)}function Sv(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ue){var a;const l=ff()===((a=tt)==null?void 0:a.scope)?tt:null;let c,u=!1,h=!1;if(We(t)?(c=()=>t.value,u=Nl(t)):Ni(t)?(c=()=>t,i=!0):ne(t)?(h=!0,u=t.some(R=>Ni(R)||Nl(R)),c=()=>t.map(R=>{if(We(R))return R.value;if(Ni(R))return qs(R);if(he(R))return Oi(R,l,2)})):he(t)?e?c=()=>Oi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),bn(t,l,3,[f])}:c=Tn,e&&i){const R=c;c=()=>qs(R())}let d,f=R=>{d=I.onStop=()=>{Oi(R,l,4)}},g;if(Fo)if(f=Tn,e?n&&bn(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const R=CC();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Tn;let y=h?new Array(t.length).fill(Ja):Ja;const v=()=>{if(I.active)if(e){const R=I.run();(i||u||(h?R.some(($,Q)=>xo($,y[Q])):xo(R,y)))&&(d&&d(),bn(e,l,3,[R,y===Ja?void 0:h&&y[0]===Ja?[]:y,f]),y=R)}else I.run()};v.allowRecurse=!!e;let T;s==="sync"?T=v:s==="post"?T=()=>qt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>bf(v));const I=new mf(c,T);e?n?v():y=I.run():s==="post"?qt(I.run.bind(I),l&&l.suspense):I.run();const A=()=>{I.stop(),l&&l.scope&&cf(l.scope.effects,I)};return g&&g.push(A),A}function OA(t,e,n){const i=this.proxy,s=it(t)?t.includes(".")?Pv(i,t):()=>i[t]:t.bind(i,i);let r;he(e)?r=e:(r=e.handler,n=e);const o=tt;ur(this);const a=Sv(s,r.bind(i),n);return o?ur(o):ps(),a}function Pv(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function qs(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))qs(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)qs(t[n],e);else if(Xy(t)||Js(t))t.forEach(n=>{qs(n,e)});else if(ev(t))for(const n in t)qs(t[n],e);return t}function es(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(kr(),bn(l,n,8,[t.el,a,t,e]),xr())}}function Yt(t,e){return he(t)?(()=>ct({name:t.name},e,{setup:t}))():t}const mo=t=>!!t.type.__asyncLoader,kv=t=>t.type.__isKeepAlive;function MA(t,e){xv(t,"a",e)}function LA(t,e){xv(t,"da",e)}function xv(t,e,n=tt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)kv(s.parent.vnode)&&VA(i,e,n,s),s=s.parent}}function VA(t,e,n,i){const s=Lc(e,t,i,!0);If(()=>{cf(i[e],s)},n)}function Lc(t,e,n=tt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;kr(),ur(n);const a=bn(e,n,t,o);return ps(),xr(),a});return i?s.unshift(r):s.push(r),r}}const _i=t=>(e,n=tt)=>(!Fo||t==="sp")&&Lc(t,(...i)=>e(...i),n),FA=_i("bm"),$A=_i("m"),UA=_i("bu"),BA=_i("u"),HA=_i("bum"),If=_i("um"),Dv=_i("sp"),jA=_i("rtg"),zA=_i("rtc");function WA(t,e=tt){Lc("ec",t,e)}const Nv="components";function Vc(t,e){return KA(Nv,t,!0,e)||t}const qA=Symbol.for("v-ndc");function KA(t,e,n=!0,i=!1){const s=yt||tt;if(s){const r=s.type;if(t===Nv){const a=bC(r,!1);if(a&&(a===e||a===Wn(e)||a===Sc(Wn(e))))return r}const o=Fm(s[t]||r[t],e)||Fm(s.appContext[t],e);return!o&&i?r:o}}function Fm(t,e){return t&&(t[e]||t[Wn(e)]||t[Sc(Wn(e))])}function ri(t,e,n,i){let s;const r=n&&n[i];if(ne(t)||it(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(He(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function Dn(t,e,n={},i,s){if(yt.isCE||yt.parent&&mo(yt.parent)&&yt.parent.isCE)return e!=="default"&&(n.name=e),je("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),Z();const o=r&&Ov(r(n)),a=qn(Je,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Ov(t){return t.some(e=>Ll(e)?!(e.type===Bi||e.type===Je&&!Ov(e.children)):!0)?t:null}const Mh=t=>t?qv(t)?Pf(t)||t.proxy:Mh(t.parent):null,go=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mh(t.parent),$root:t=>Mh(t.root),$emit:t=>t.emit,$options:t=>Af(t),$forceUpdate:t=>t.f||(t.f=()=>bf(t.update)),$nextTick:t=>t.n||(t.n=Tf.bind(t.proxy)),$watch:t=>OA.bind(t)}),Bu=(t,e)=>t!==Ue&&!t.__isScriptSetup&&ve(t,e),GA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Bu(i,e))return o[e]=1,i[e];if(s!==Ue&&ve(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ve(c,e))return o[e]=3,r[e];if(n!==Ue&&ve(n,e))return o[e]=4,n[e];Lh&&(o[e]=0)}}const u=go[e];let h,d;if(u)return e==="$attrs"&&Qt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&ve(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ve(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Bu(s,e)?(s[e]=n,!0):i!==Ue&&ve(i,e)?(i[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ue&&ve(t,o)||Bu(e,o)||(a=r[0])&&ve(a,o)||ve(i,o)||ve(go,o)||ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $m(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lh=!0;function QA(t){const e=Af(t),n=t.proxy,i=t.ctx;Lh=!1,e.beforeCreate&&Um(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:T,beforeUnmount:I,destroyed:A,unmounted:R,render:$,renderTracked:Q,renderTriggered:le,errorCaptured:G,serverPrefetch:se,expose:be,inheritAttrs:st,components:Et,directives:wt,filters:ei}=e;if(c&&YA(c,i,null),o)for(const Re in o){const Te=o[Re];he(Te)&&(i[Re]=Te.bind(n))}if(s){const Re=s.call(n,n);He(Re)&&(t.data=Dr(Re))}if(Lh=!0,r)for(const Re in r){const Te=r[Re],pn=he(Te)?Te.bind(n,n):he(Te.get)?Te.get.bind(n,n):Tn,mn=!he(Te)&&he(Te.set)?Te.set.bind(n):Tn,cn=Ie({get:pn,set:mn});Object.defineProperty(i,Re,{enumerable:!0,configurable:!0,get:()=>cn.value,set:ft=>cn.value=ft})}if(a)for(const Re in a)Mv(a[Re],i,n,Re);if(l){const Re=he(l)?l.call(n):l;Reflect.ownKeys(Re).forEach(Te=>{yl(Te,Re[Te])})}u&&Um(u,t,"c");function ye(Re,Te){ne(Te)?Te.forEach(pn=>Re(pn.bind(n))):Te&&Re(Te.bind(n))}if(ye(FA,h),ye($A,d),ye(UA,f),ye(BA,g),ye(MA,y),ye(LA,v),ye(WA,G),ye(zA,Q),ye(jA,le),ye(HA,I),ye(If,R),ye(Dv,se),ne(be))if(be.length){const Re=t.exposed||(t.exposed={});be.forEach(Te=>{Object.defineProperty(Re,Te,{get:()=>n[Te],set:pn=>n[Te]=pn})})}else t.exposed||(t.exposed={});$&&t.render===Tn&&(t.render=$),st!=null&&(t.inheritAttrs=st),Et&&(t.components=Et),wt&&(t.directives=wt)}function YA(t,e,n=Tn){ne(t)&&(t=Vh(t));for(const i in t){const s=t[i];let r;He(s)?"default"in s?r=Gt(s.from||i,s.default,!0):r=Gt(s.from||i):r=Gt(s),We(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Um(t,e,n){bn(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mv(t,e,n,i){const s=i.includes(".")?Pv(n,i):()=>n[i];if(it(t)){const r=e[t];he(r)&&Mi(s,r)}else if(he(t))Mi(s,t.bind(n));else if(He(t))if(ne(t))t.forEach(r=>Mv(r,e,n,i));else{const r=he(t.handler)?t.handler.bind(n):e[t.handler];he(r)&&Mi(s,r,t)}}function Af(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ml(l,c,o,!0)),Ml(l,e,o)),He(e)&&r.set(e,l),l}function Ml(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ml(t,r,n,!0),s&&s.forEach(o=>Ml(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=XA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const XA={data:Bm,props:Hm,emits:Hm,methods:ao,computed:ao,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ao,directives:ao,watch:ZA,provide:Bm,inject:JA};function Bm(t,e){return e?t?function(){return ct(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function JA(t,e){return ao(Vh(t),Vh(e))}function Vh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ao(t,e){return t?ct(Object.create(null),t,e):e}function Hm(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:ct(Object.create(null),$m(t),$m(e??{})):e}function ZA(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const i in e)n[i]=Vt(t[i],e[i]);return n}function Lv(){return{app:null,config:{isNativeTag:SI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eC=0;function tC(t,e){return function(i,s=null){he(i)||(i=ct({},i)),s!=null&&!He(s)&&(s=null);const r=Lv(),o=new Set;let a=!1;const l=r.app={_uid:eC++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:RC,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(l,...u)):he(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=je(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Pf(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Lo=l;try{return c()}finally{Lo=null}}};return l}}let Lo=null;function yl(t,e){if(tt){let n=tt.provides;const i=tt.parent&&tt.parent.provides;i===n&&(n=tt.provides=Object.create(i)),n[t]=e}}function Gt(t,e,n=!1){const i=tt||yt;if(i||Lo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Lo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(i&&i.proxy):e}}function nC(){return!!(tt||yt||Lo)}function iC(t,e,n,i=!1){const s={},r={};xl(r,$c,1),t.propsDefaults=Object.create(null),Vv(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:mv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function sC(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=we(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Dc(t.emitsOptions,d))continue;const f=e[d];if(l)if(ve(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Wn(d);s[g]=Fh(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Vv(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ve(e,h)&&((u=Pr(h))===h||!ve(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Fh(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ve(e,h))&&(delete r[h],c=!0)}c&&hi(t,"set","$attrs")}function Vv(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(_l(l))continue;const c=e[l];let u;s&&ve(s,u=Wn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Dc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=we(n),c=a||Ue;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Fh(s,l,h,c[h],t,!ve(c,h))}}return o}function Fh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ve(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(ur(s),i=c[n]=l.call(null,e),ps())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Pr(n))&&(i=!0))}return i}function Fv(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!he(t)){const u=h=>{l=!0;const[d,f]=Fv(h,e,!0);ct(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return He(t)&&i.set(t,Xs),Xs;if(ne(r))for(let u=0;u<r.length;u++){const h=Wn(r[u]);jm(h)&&(o[h]=Ue)}else if(r)for(const u in r){const h=Wn(u);if(jm(h)){const d=r[u],f=o[h]=ne(d)||he(d)?{type:d}:ct({},d);if(f){const g=qm(Boolean,f.type),y=qm(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||ve(f,"default"))&&a.push(h)}}}const c=[o,a];return He(t)&&i.set(t,c),c}function jm(t){return t[0]!=="$"}function zm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wm(t,e){return zm(t)===zm(e)}function qm(t,e){return ne(e)?e.findIndex(n=>Wm(n,t)):he(e)&&Wm(e,t)?0:-1}const $v=t=>t[0]==="_"||t==="$stable",Cf=t=>ne(t)?t.map(Nn):[Nn(t)],rC=(t,e,n)=>{if(e._n)return e;const i=en((...s)=>Cf(e(...s)),n);return i._c=!1,i},Uv=(t,e,n)=>{const i=t._ctx;for(const s in t){if($v(s))continue;const r=t[s];if(he(r))e[s]=rC(s,r,i);else if(r!=null){const o=Cf(r);e[s]=()=>o}}},Bv=(t,e)=>{const n=Cf(e);t.slots.default=()=>n},oC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),xl(e,"_",n)):Uv(e,t.slots={})}else t.slots={},e&&Bv(t,e);xl(t.slots,$c,1)},aC=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ue;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ct(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Uv(e,s)),o=e}else e&&(Bv(t,e),o={default:1});if(r)for(const a in s)!$v(a)&&!(a in o)&&delete s[a]};function $h(t,e,n,i,s=!1){if(ne(t)){t.forEach((d,f)=>$h(d,e&&(ne(e)?e[f]:e),n,i,s));return}if(mo(i)&&!s)return;const r=i.shapeFlag&4?Pf(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(it(c)?(u[c]=null,ve(h,c)&&(h[c]=null)):We(c)&&(c.value=null)),he(l))Oi(l,a,12,[o,u]);else{const d=it(l),f=We(l);if(d||f){const g=()=>{if(t.f){const y=d?ve(h,l)?h[l]:u[l]:l.value;s?ne(y)&&cf(y,r):ne(y)?y.includes(r)||y.push(r):d?(u[l]=[r],ve(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ve(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,qt(g,n)):g()}}}const qt=NA;function lC(t){return cC(t)}function cC(t,e){const n=kh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Tn,insertStaticContent:g}=t,y=(p,m,E,b=null,C=null,k=null,B=!1,O=null,M=!!m.dynamicChildren)=>{if(p===m)return;p&&!Yr(p,m)&&(b=_(p),ft(p,C,k,!0),p=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:W}=m;switch(D){case Fc:v(p,m,E,b);break;case Bi:T(p,m,E,b);break;case Hu:p==null&&I(m,E,b,B);break;case Je:Et(p,m,E,b,C,k,B,O,M);break;default:W&1?$(p,m,E,b,C,k,B,O,M):W&6?wt(p,m,E,b,C,k,B,O,M):(W&64||W&128)&&D.process(p,m,E,b,C,k,B,O,M,S)}Y!=null&&C&&$h(Y,p&&p.ref,k,m||p,!m)},v=(p,m,E,b)=>{if(p==null)i(m.el=a(m.children),E,b);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},T=(p,m,E,b)=>{p==null?i(m.el=l(m.children||""),E,b):m.el=p.el},I=(p,m,E,b)=>{[p.el,p.anchor]=g(p.children,m,E,b,p.el,p.anchor)},A=({el:p,anchor:m},E,b)=>{let C;for(;p&&p!==m;)C=d(p),i(p,E,b),p=C;i(m,E,b)},R=({el:p,anchor:m})=>{let E;for(;p&&p!==m;)E=d(p),s(p),p=E;s(m)},$=(p,m,E,b,C,k,B,O,M)=>{B=B||m.type==="svg",p==null?Q(m,E,b,C,k,B,O,M):se(p,m,C,k,B,O,M)},Q=(p,m,E,b,C,k,B,O)=>{let M,D;const{type:Y,props:W,shapeFlag:X,transition:re,dirs:de}=p;if(M=p.el=o(p.type,k,W&&W.is,W),X&8?u(M,p.children):X&16&&G(p.children,M,null,b,C,k&&Y!=="foreignObject",B,O),de&&es(p,null,b,"created"),le(M,p,p.scopeId,B,b),W){for(const De in W)De!=="value"&&!_l(De)&&r(M,De,null,W[De],k,p.children,b,C,Ke);"value"in W&&r(M,"value",null,W.value),(D=W.onVnodeBeforeMount)&&xn(D,b,p)}de&&es(p,null,b,"beforeMount");const Oe=(!C||C&&!C.pendingBranch)&&re&&!re.persisted;Oe&&re.beforeEnter(M),i(M,m,E),((D=W&&W.onVnodeMounted)||Oe||de)&&qt(()=>{D&&xn(D,b,p),Oe&&re.enter(M),de&&es(p,null,b,"mounted")},C)},le=(p,m,E,b,C)=>{if(E&&f(p,E),b)for(let k=0;k<b.length;k++)f(p,b[k]);if(C){let k=C.subTree;if(m===k){const B=C.vnode;le(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},G=(p,m,E,b,C,k,B,O,M=0)=>{for(let D=M;D<p.length;D++){const Y=p[D]=O?Ii(p[D]):Nn(p[D]);y(null,Y,m,E,b,C,k,B,O)}},se=(p,m,E,b,C,k,B)=>{const O=m.el=p.el;let{patchFlag:M,dynamicChildren:D,dirs:Y}=m;M|=p.patchFlag&16;const W=p.props||Ue,X=m.props||Ue;let re;E&&ts(E,!1),(re=X.onVnodeBeforeUpdate)&&xn(re,E,m,p),Y&&es(m,p,E,"beforeUpdate"),E&&ts(E,!0);const de=C&&m.type!=="foreignObject";if(D?be(p.dynamicChildren,D,O,E,b,de,k):B||Te(p,m,O,null,E,b,de,k,!1),M>0){if(M&16)st(O,m,W,X,E,b,C);else if(M&2&&W.class!==X.class&&r(O,"class",null,X.class,C),M&4&&r(O,"style",W.style,X.style,C),M&8){const Oe=m.dynamicProps;for(let De=0;De<Oe.length;De++){const Qe=Oe[De],gn=W[Qe],Ls=X[Qe];(Ls!==gn||Qe==="value")&&r(O,Qe,gn,Ls,C,p.children,E,b,Ke)}}M&1&&p.children!==m.children&&u(O,m.children)}else!B&&D==null&&st(O,m,W,X,E,b,C);((re=X.onVnodeUpdated)||Y)&&qt(()=>{re&&xn(re,E,m,p),Y&&es(m,p,E,"updated")},b)},be=(p,m,E,b,C,k,B)=>{for(let O=0;O<m.length;O++){const M=p[O],D=m[O],Y=M.el&&(M.type===Je||!Yr(M,D)||M.shapeFlag&70)?h(M.el):E;y(M,D,Y,null,b,C,k,B,!0)}},st=(p,m,E,b,C,k,B)=>{if(E!==b){if(E!==Ue)for(const O in E)!_l(O)&&!(O in b)&&r(p,O,E[O],null,B,m.children,C,k,Ke);for(const O in b){if(_l(O))continue;const M=b[O],D=E[O];M!==D&&O!=="value"&&r(p,O,D,M,B,m.children,C,k,Ke)}"value"in b&&r(p,"value",E.value,b.value)}},Et=(p,m,E,b,C,k,B,O,M)=>{const D=m.el=p?p.el:a(""),Y=m.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:re}=m;re&&(O=O?O.concat(re):re),p==null?(i(D,E,b),i(Y,E,b),G(m.children,E,Y,C,k,B,O,M)):W>0&&W&64&&X&&p.dynamicChildren?(be(p.dynamicChildren,X,E,C,k,B,O),(m.key!=null||C&&m===C.subTree)&&Hv(p,m,!0)):Te(p,m,E,Y,C,k,B,O,M)},wt=(p,m,E,b,C,k,B,O,M)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?C.ctx.activate(m,E,b,B,M):ei(m,E,b,C,k,B,M):Wt(p,m,M)},ei=(p,m,E,b,C,k,B)=>{const O=p.component=yC(p,b,C);if(kv(p)&&(O.ctx.renderer=S),vC(O),O.asyncDep){if(C&&C.registerDep(O,ye),!p.el){const M=O.subTree=je(Bi);T(null,M,m,E)}return}ye(O,p,m,E,C,k,B)},Wt=(p,m,E)=>{const b=m.component=p.component;if(kA(p,m,E))if(b.asyncDep&&!b.asyncResolved){Re(b,m,E);return}else b.next=m,IA(b.update),b.update();else m.el=p.el,b.vnode=m},ye=(p,m,E,b,C,k,B)=>{const O=()=>{if(p.isMounted){let{next:Y,bu:W,u:X,parent:re,vnode:de}=p,Oe=Y,De;ts(p,!1),Y?(Y.el=de.el,Re(p,Y,B)):Y=de,W&&$u(W),(De=Y.props&&Y.props.onVnodeBeforeUpdate)&&xn(De,re,Y,de),ts(p,!0);const Qe=Uu(p),gn=p.subTree;p.subTree=Qe,y(gn,Qe,h(gn.el),_(gn),p,C,k),Y.el=Qe.el,Oe===null&&xA(p,Qe.el),X&&qt(X,C),(De=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>xn(De,re,Y,de),C)}else{let Y;const{el:W,props:X}=m,{bm:re,m:de,parent:Oe}=p,De=mo(m);if(ts(p,!1),re&&$u(re),!De&&(Y=X&&X.onVnodeBeforeMount)&&xn(Y,Oe,m),ts(p,!0),W&&x){const Qe=()=>{p.subTree=Uu(p),x(W,p.subTree,p,C,null)};De?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Qe()):Qe()}else{const Qe=p.subTree=Uu(p);y(null,Qe,E,b,p,C,k),m.el=Qe.el}if(de&&qt(de,C),!De&&(Y=X&&X.onVnodeMounted)){const Qe=m;qt(()=>xn(Y,Oe,Qe),C)}(m.shapeFlag&256||Oe&&mo(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&p.a&&qt(p.a,C),p.isMounted=!0,m=E=b=null}},M=p.effect=new mf(O,()=>bf(D),p.scope),D=p.update=()=>M.run();D.id=p.uid,ts(p,!0),D()},Re=(p,m,E)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,sC(p,m.props,b,E),aC(p,m.children,E),kr(),Lm(),xr()},Te=(p,m,E,b,C,k,B,O,M=!1)=>{const D=p&&p.children,Y=p?p.shapeFlag:0,W=m.children,{patchFlag:X,shapeFlag:re}=m;if(X>0){if(X&128){mn(D,W,E,b,C,k,B,O,M);return}else if(X&256){pn(D,W,E,b,C,k,B,O,M);return}}re&8?(Y&16&&Ke(D,C,k),W!==D&&u(E,W)):Y&16?re&16?mn(D,W,E,b,C,k,B,O,M):Ke(D,C,k,!0):(Y&8&&u(E,""),re&16&&G(W,E,b,C,k,B,O,M))},pn=(p,m,E,b,C,k,B,O,M)=>{p=p||Xs,m=m||Xs;const D=p.length,Y=m.length,W=Math.min(D,Y);let X;for(X=0;X<W;X++){const re=m[X]=M?Ii(m[X]):Nn(m[X]);y(p[X],re,E,null,C,k,B,O,M)}D>Y?Ke(p,C,k,!0,!1,W):G(m,E,b,C,k,B,O,M,W)},mn=(p,m,E,b,C,k,B,O,M)=>{let D=0;const Y=m.length;let W=p.length-1,X=Y-1;for(;D<=W&&D<=X;){const re=p[D],de=m[D]=M?Ii(m[D]):Nn(m[D]);if(Yr(re,de))y(re,de,E,null,C,k,B,O,M);else break;D++}for(;D<=W&&D<=X;){const re=p[W],de=m[X]=M?Ii(m[X]):Nn(m[X]);if(Yr(re,de))y(re,de,E,null,C,k,B,O,M);else break;W--,X--}if(D>W){if(D<=X){const re=X+1,de=re<Y?m[re].el:b;for(;D<=X;)y(null,m[D]=M?Ii(m[D]):Nn(m[D]),E,de,C,k,B,O,M),D++}}else if(D>X)for(;D<=W;)ft(p[D],C,k,!0),D++;else{const re=D,de=D,Oe=new Map;for(D=de;D<=X;D++){const Xt=m[D]=M?Ii(m[D]):Nn(m[D]);Xt.key!=null&&Oe.set(Xt.key,D)}let De,Qe=0;const gn=X-de+1;let Ls=!1,Am=0;const Qr=new Array(gn);for(D=0;D<gn;D++)Qr[D]=0;for(D=re;D<=W;D++){const Xt=p[D];if(Qe>=gn){ft(Xt,C,k,!0);continue}let kn;if(Xt.key!=null)kn=Oe.get(Xt.key);else for(De=de;De<=X;De++)if(Qr[De-de]===0&&Yr(Xt,m[De])){kn=De;break}kn===void 0?ft(Xt,C,k,!0):(Qr[kn-de]=D+1,kn>=Am?Am=kn:Ls=!0,y(Xt,m[kn],E,null,C,k,B,O,M),Qe++)}const Cm=Ls?uC(Qr):Xs;for(De=Cm.length-1,D=gn-1;D>=0;D--){const Xt=de+D,kn=m[Xt],Rm=Xt+1<Y?m[Xt+1].el:b;Qr[D]===0?y(null,kn,E,Rm,C,k,B,O,M):Ls&&(De<0||D!==Cm[De]?cn(kn,E,Rm,2):De--)}}},cn=(p,m,E,b,C=null)=>{const{el:k,type:B,transition:O,children:M,shapeFlag:D}=p;if(D&6){cn(p.component.subTree,m,E,b);return}if(D&128){p.suspense.move(m,E,b);return}if(D&64){B.move(p,m,E,S);return}if(B===Je){i(k,m,E);for(let W=0;W<M.length;W++)cn(M[W],m,E,b);i(p.anchor,m,E);return}if(B===Hu){A(p,m,E);return}if(b!==2&&D&1&&O)if(b===0)O.beforeEnter(k),i(k,m,E),qt(()=>O.enter(k),C);else{const{leave:W,delayLeave:X,afterLeave:re}=O,de=()=>i(k,m,E),Oe=()=>{W(k,()=>{de(),re&&re()})};X?X(k,de,Oe):Oe()}else i(k,m,E)},ft=(p,m,E,b=!1,C=!1)=>{const{type:k,props:B,ref:O,children:M,dynamicChildren:D,shapeFlag:Y,patchFlag:W,dirs:X}=p;if(O!=null&&$h(O,null,E,p,!0),Y&256){m.ctx.deactivate(p);return}const re=Y&1&&X,de=!mo(p);let Oe;if(de&&(Oe=B&&B.onVnodeBeforeUnmount)&&xn(Oe,m,p),Y&6)Zi(p.component,E,b);else{if(Y&128){p.suspense.unmount(E,b);return}re&&es(p,null,m,"beforeUnmount"),Y&64?p.type.remove(p,m,E,C,S,b):D&&(k!==Je||W>0&&W&64)?Ke(D,m,E,!1,!0):(k===Je&&W&384||!C&&Y&16)&&Ke(M,m,E),b&&ti(p)}(de&&(Oe=B&&B.onVnodeUnmounted)||re)&&qt(()=>{Oe&&xn(Oe,m,p),re&&es(p,null,m,"unmounted")},E)},ti=p=>{const{type:m,el:E,anchor:b,transition:C}=p;if(m===Je){vi(E,b);return}if(m===Hu){R(p);return}const k=()=>{s(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:O}=C,M=()=>B(E,k);O?O(p.el,k,M):M()}else k()},vi=(p,m)=>{let E;for(;p!==m;)E=d(p),s(p),p=E;s(m)},Zi=(p,m,E)=>{const{bum:b,scope:C,update:k,subTree:B,um:O}=p;b&&$u(b),C.stop(),k&&(k.active=!1,ft(B,p,m,E)),O&&qt(O,m),qt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(p,m,E,b=!1,C=!1,k=0)=>{for(let B=k;B<p.length;B++)ft(p[B],m,E,b,C)},_=p=>p.shapeFlag&6?_(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),w=(p,m,E)=>{p==null?m._vnode&&ft(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,E),Lm(),Av(),m._vnode=p},S={p:y,um:ft,m:cn,r:ti,mt:ei,mc:G,pc:Te,pbc:be,n:_,o:t};let F,x;return e&&([F,x]=e(S)),{render:w,hydrate:F,createApp:tC(w,F)}}function ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hv(t,e,n=!1){const i=t.children,s=e.children;if(ne(i)&&ne(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ii(s[r]),a.el=o.el),n||Hv(o,a)),a.type===Fc&&(a.el=o.el)}}function uC(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const hC=t=>t.__isTeleport,Je=Symbol.for("v-fgt"),Fc=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),Hu=Symbol.for("v-stc"),_o=[];let vn=null;function Z(t=!1){_o.push(vn=t?null:[])}function dC(){_o.pop(),vn=_o[_o.length-1]||null}let Vo=1;function Km(t){Vo+=t}function jv(t){return t.dynamicChildren=Vo>0?vn||Xs:null,dC(),Vo>0&&vn&&vn.push(t),t}function ce(t,e,n,i,s,r){return jv(U(t,e,n,i,s,r,!0))}function qn(t,e,n,i,s){return jv(je(t,e,n,i,s,!0))}function Ll(t){return t?t.__v_isVNode===!0:!1}function Yr(t,e){return t.type===e.type&&t.key===e.key}const $c="__vInternal",zv=({key:t})=>t??null,vl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||We(t)||he(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,i=0,s=null,r=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zv(e),ref:e&&vl(e),scopeId:Nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return a?(Rf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),Vo>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const je=fC;function fC(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===qA)&&(t=Bi),Ll(t)){const a=cr(t,e,!0);return n&&Rf(a,n),Vo>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag|=-2,a}if(IC(t)&&(t=t.__vccOpts),e){e=pC(e);let{class:a,style:l}=e;a&&!it(a)&&(e.class=si(a)),He(l)&&(_v(l)&&!ne(l)&&(l=ct({},l)),e.style=Do(l))}const o=it(t)?1:DA(t)?128:hC(t)?64:He(t)?4:he(t)?2:0;return U(t,e,n,i,s,o,r,!0)}function pC(t){return t?_v(t)||$c in t?ct({},t):t:null}function cr(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?mC(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zv(a),ref:e&&e.ref?n&&s?ne(s)?s.concat(vl(e)):[s,vl(e)]:vl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Kt(t=" ",e=0){return je(Fc,null,t,e)}function pt(t="",e=!1){return e?(Z(),qn(Bi,null,t)):je(Bi,null,t)}function Nn(t){return t==null||typeof t=="boolean"?je(Bi):ne(t)?je(Je,null,t.slice()):typeof t=="object"?Ii(t):je(Fc,null,String(t))}function Ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Rf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Rf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($c in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),i&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function mC(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=si([e.class,i.class]));else if(s==="style")e.style=Do([e.style,i.style]);else if(Ac(s)){const r=e[s],o=i[s];o&&r!==o&&!(ne(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function xn(t,e,n,i=null){bn(t,e,7,[n,i])}const gC=Lv();let _C=0;function yC(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||gC,r={uid:_C++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new iv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fv(i,s),emitsOptions:Rv(i,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:i.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=RA.bind(null,r),t.ce&&t.ce(r),r}let tt=null;const Wv=()=>tt||yt;let Sf,Vs,Gm="__VUE_INSTANCE_SETTERS__";(Vs=kh()[Gm])||(Vs=kh()[Gm]=[]),Vs.push(t=>tt=t),Sf=t=>{Vs.length>1?Vs.forEach(e=>e(t)):Vs[0](t)};const ur=t=>{Sf(t),t.scope.on()},ps=()=>{tt&&tt.scope.off(),Sf(null)};function qv(t){return t.vnode.shapeFlag&4}let Fo=!1;function vC(t,e=!1){Fo=e;const{props:n,children:i}=t.vnode,s=qv(t);iC(t,n,s,e),oC(t,i);const r=s?EC(t,e):void 0;return Fo=!1,r}function EC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kc(new Proxy(t.ctx,GA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?TC(t):null;ur(t),kr();const r=Oi(i,t,0,[t.props,s]);if(xr(),ps(),Jy(r)){if(r.then(ps,ps),e)return r.then(o=>{Qm(t,o,e)}).catch(o=>{xc(o,t,0)});t.asyncDep=r}else Qm(t,r,e)}else Kv(t,e)}function Qm(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=Tv(e)),Kv(t,n)}let Ym;function Kv(t,e,n){const i=t.type;if(!t.render){if(!e&&Ym&&!i.render){const s=i.template||Af(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ct(ct({isCustomElement:r,delimiters:a},o),l);i.render=Ym(s,c)}}t.render=i.render||Tn}ur(t),kr(),QA(t),xr(),ps()}function wC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}}))}function TC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wC(t)},slots:t.slots,emit:t.emit,expose:e}}function Pf(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tv(kc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)},has(e,n){return n in e||n in go}}))}function bC(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function IC(t){return he(t)&&"__vccOpts"in t}const Ie=(t,e)=>wA(t,e,Fo);function Gv(t,e,n){const i=arguments.length;return i===2?He(e)&&!ne(e)?Ll(e)?je(t,null,[e]):je(t,e):je(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ll(n)&&(n=[n]),je(t,e,n))}const AC=Symbol.for("v-scx"),CC=()=>Gt(AC),RC="3.3.4",SC="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,Xm=os&&os.createElement("template"),PC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?os.createElementNS(SC,t):os.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>os.createTextNode(t),createComment:t=>os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Xm.innerHTML=i?`<svg>${t}</svg>`:t;const a=Xm.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kC(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xC(t,e,n){const i=t.style,s=it(n);if(n&&!s){if(e&&!it(e))for(const r in e)n[r]==null&&Uh(i,r,"");for(const r in n)Uh(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Jm=/\s*!important$/;function Uh(t,e,n){if(ne(n))n.forEach(i=>Uh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=DC(t,e);Jm.test(n)?t.setProperty(Pr(i),n.replace(Jm,""),"important"):t[i]=n}}const Zm=["Webkit","Moz","ms"],ju={};function DC(t,e){const n=ju[e];if(n)return n;let i=Wn(e);if(i!=="filter"&&i in t)return ju[e]=i;i=Sc(i);for(let s=0;s<Zm.length;s++){const r=Zm[s]+i;if(r in t)return ju[e]=r}return e}const eg="http://www.w3.org/1999/xlink";function NC(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(eg,e.slice(6,e.length)):t.setAttributeNS(eg,e,n);else{const r=UI(e);n==null||r&&!tv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function OC(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function MC(t,e,n,i){t.addEventListener(e,n,i)}function LC(t,e,n,i){t.removeEventListener(e,n,i)}function VC(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=FC(e);if(i){const c=r[e]=BC(i,s);MC(t,a,c,l)}else o&&(LC(t,a,o,l),r[e]=void 0)}}const tg=/(?:Once|Passive|Capture)$/;function FC(t){let e;if(tg.test(t)){e={};let i;for(;i=t.match(tg);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let zu=0;const $C=Promise.resolve(),UC=()=>zu||($C.then(()=>zu=0),zu=Date.now());function BC(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bn(HC(i,n.value),e,5,[i])};return n.value=t,n.attached=UC(),n}function HC(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ng=/^on[a-z]/,jC=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?kC(t,i,s):e==="style"?xC(t,n,i):Ac(e)?lf(e)||VC(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zC(t,e,i,s))?OC(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),NC(t,e,i,s))};function zC(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ng.test(e)&&he(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ng.test(e)&&it(n)?!1:e in t}const WC=["ctrl","shift","alt","meta"],qC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>WC.some(n=>t[`${n}Key`]&&!e.includes(n))},Fs=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=qC[e[s]];if(r&&r(n,e))return}return t(n,...i)},KC=ct({patchProp:jC},PC);let ig;function GC(){return ig||(ig=lC(KC))}const QC=(...t)=>{const e=GC().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=YC(i);if(!s)return;const r=e._component;!he(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function YC(t){return it(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw Nr(e)},Nr=function(t){return new Error("Firebase Database ("+Qv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XC=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new JC;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xv=function(t){const e=Yv(t);return Uc.encodeByteArray(e,!0)},Vl=function(t){return Xv(t).replace(/\./g,"")},Fl=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return Jv(void 0,t)}function Jv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eR(n)||(t[n]=Jv(t[n],e[n]));return t}function eR(t){return t!=="__proto__"}/**
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
 */function tR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nR=()=>tR().__FIREBASE_DEFAULTS__,iR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fl(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return nR()||iR()||sR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zv=t=>{var e,n;return(n=(e=kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rR=t=>{const e=Zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},eE=()=>{var t;return(t=kf())===null||t===void 0?void 0:t.config},tE=t=>{var e;return(e=kf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function oR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function aR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iE(){return Qv.NODE_ADMIN===!0}function sE(){try{return typeof indexedDB=="object"}catch{return!1}}function cR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="FirebaseError";class Jn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=uR,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,a,i)}}function hR(t,e){return t.replace(dR,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const dR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){return JSON.parse(t)}function _t(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Uo(Fl(r[0])||""),n=Uo(Fl(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},fR=function(t){const e=rE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pR=function(t){const e=rE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ul(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(sg(r)&&sg(o)){if(!Ul(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function gR(t,e){const n=new _R(t,e);return n.subscribe.bind(n)}class _R{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Wu),s.error===void 0&&(s.error=Wu),s.complete===void 0&&(s.complete=Wu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}function vR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,L(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new $o;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bR(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(t){return t===is?void 0:t}function bR(t){return t.instantiationMode==="EAGER"}/**
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
 */class IR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const AR={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},CR=Ee.INFO,RR={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},SR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=RR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=CR,this._logHandler=SR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let rg,og;function kR(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xR(){return og||(og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,Hh=new WeakMap,aE=new WeakMap,qu=new WeakMap,Df=new WeakMap;function DR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Li(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function NR(t){if(Hh.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OR(t){jh=t(jh)}function MR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ku(this),e,...n);return aE.set(i,e.sort?e.sort():[e]),Li(i)}:xR().includes(t)?function(...e){return t.apply(Ku(this),e),Li(oE.get(this))}:function(...e){return Li(t.apply(Ku(this),e))}}function LR(t){return typeof t=="function"?MR(t):(t instanceof IDBTransaction&&NR(t),PR(t,kR())?new Proxy(t,jh):t)}function Li(t){if(t instanceof IDBRequest)return DR(t);if(qu.has(t))return qu.get(t);const e=LR(t);return e!==t&&(qu.set(t,e),Df.set(e,t)),e}const Ku=t=>Df.get(t);function VR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Li(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Li(o.result),l.oldVersion,l.newVersion,Li(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],Gu=new Map;function ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=$R.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||FR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gu.set(e,r),r}OR(t=>({...t,get:(e,n,i)=>ag(e,n)||t.get(e,n,i),has:(e,n)=>!!ag(e,n)||t.has(e,n)}));/**
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
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function BR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zh="@firebase/app",lg="0.9.15";/**
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
 */const ys=new fa("@firebase/app"),HR="@firebase/app-compat",jR="@firebase/analytics-compat",zR="@firebase/analytics",WR="@firebase/app-check-compat",qR="@firebase/app-check",KR="@firebase/auth",GR="@firebase/auth-compat",QR="@firebase/database",YR="@firebase/database-compat",XR="@firebase/functions",JR="@firebase/functions-compat",ZR="@firebase/installations",eS="@firebase/installations-compat",tS="@firebase/messaging",nS="@firebase/messaging-compat",iS="@firebase/performance",sS="@firebase/performance-compat",rS="@firebase/remote-config",oS="@firebase/remote-config-compat",aS="@firebase/storage",lS="@firebase/storage-compat",cS="@firebase/firestore",uS="@firebase/firestore-compat",hS="firebase",dS="10.1.0";/**
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
 */const Wh="[DEFAULT]",fS={[zh]:"fire-core",[HR]:"fire-core-compat",[zR]:"fire-analytics",[jR]:"fire-analytics-compat",[qR]:"fire-app-check",[WR]:"fire-app-check-compat",[KR]:"fire-auth",[GR]:"fire-auth-compat",[QR]:"fire-rtdb",[YR]:"fire-rtdb-compat",[XR]:"fire-fn",[JR]:"fire-fn-compat",[ZR]:"fire-iid",[eS]:"fire-iid-compat",[tS]:"fire-fcm",[nS]:"fire-fcm-compat",[iS]:"fire-perf",[sS]:"fire-perf-compat",[rS]:"fire-rc",[oS]:"fire-rc-compat",[aS]:"fire-gcs",[lS]:"fire-gcs-compat",[cS]:"fire-fst",[uS]:"fire-fst-compat","fire-js":"fire-js",[hS]:"fire-js-all"};/**
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
 */const Bl=new Map,qh=new Map;function pS(t,e){try{t.container.addComponent(e)}catch(n){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(qh.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of Bl.values())pS(n,t);return!0}function Nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vi=new Or("app","Firebase",mS);/**
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
 */class gS{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=dS;function lE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wh,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Vi.create("bad-app-name",{appName:String(s)});if(n||(n=eE()),!n)throw Vi.create("no-options");const r=Bl.get(s);if(r){if(Ul(n,r.options)&&Ul(i,r.config))return r;throw Vi.create("duplicate-app",{appName:s})}const o=new IR(s);for(const l of qh.values())o.addComponent(l);const a=new gS(n,i,o);return Bl.set(s,a),a}function Of(t=Wh){const e=Bl.get(t);if(!e&&t===Wh&&eE())return lE();if(!e)throw Vi.create("no-app",{appName:t});return e}function sn(t,e,n){var i;let s=(i=fS[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(a.join(" "));return}Kn(new An(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _S="firebase-heartbeat-database",yS=1,Bo="firebase-heartbeat-store";let Qu=null;function cE(){return Qu||(Qu=VR(_S,yS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}}).catch(t=>{throw Vi.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function vS(t){try{return await(await cE()).transaction(Bo).objectStore(Bo).get(uE(t))}catch(e){if(e instanceof Jn)ys.warn(e.message);else{const n=Vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ys.warn(n.message)}}}async function cg(t,e){try{const i=(await cE()).transaction(Bo,"readwrite");await i.objectStore(Bo).put(e,uE(t)),await i.done}catch(n){if(n instanceof Jn)ys.warn(n.message);else{const i=Vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ys.warn(i.message)}}}function uE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ES=1024,wS=30*24*60*60*1e3;class TS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IS(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ug();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=wS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ug(),{heartbeatsToSend:n,unsentEntries:i}=bS(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ug(){return new Date().toISOString().substring(0,10)}function bS(t,e=ES){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),hg(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sE()?cR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hg(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AS(t){Kn(new An("platform-logger",e=>new UR(e),"PRIVATE")),Kn(new An("heartbeat",e=>new TS(e),"PRIVATE")),sn(zh,lg,t),sn(zh,lg,"esm2017"),sn("fire-js","")}AS("");function Mf(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function hE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CS=hE,dE=new Or("auth","Firebase",hE());/**
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
 */const Hl=new fa("@firebase/auth");function RS(t,...e){Hl.logLevel<=Ee.WARN&&Hl.warn(`Auth (${Ki}): ${t}`,...e)}function El(t,...e){Hl.logLevel<=Ee.ERROR&&Hl.error(`Auth (${Ki}): ${t}`,...e)}/**
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
 */function Gn(t,...e){throw Lf(t,...e)}function Hn(t,...e){return Lf(t,...e)}function fE(t,e,n){const i=Object.assign(Object.assign({},CS()),{[e]:n});return new Or("auth","Firebase",i).create(e,{appName:t.name})}function SS(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Gn(t,"argument-error"),fE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return dE.create(t,...e)}function oe(t,e,...n){if(!t)throw Lf(e,...n)}function oi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function di(t,e){t||oi(e)}/**
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
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PS(){return dg()==="http:"||dg()==="https:"}function dg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||aR()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,di(n>e,"Short delay should be less than long delay!"),this.isMobile=xf()||nE()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vf(t,e){di(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NS=new pa(3e4,6e4);function mE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ma(t,e,n,i,s={}){return gE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Mr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pE.fetch()(_E(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function gE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},DS),e);try{const s=new MS(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fE(t,u,c);Gn(t,u)}}catch(s){if(s instanceof Jn)throw s;Gn(t,"network-request-failed",{message:String(s)})}}async function OS(t,e,n,i,s={}){const r=await ma(t,e,n,i,s);return"mfaPendingCredential"in r&&Gn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function _E(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Vf(t.config,s):`${t.config.apiScheme}://${s}`}class MS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Hn(this.auth,"network-request-failed")),NS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Hn(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function LS(t,e){return ma(t,"POST","/v1/accounts:delete",e)}async function VS(t,e){return ma(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FS(t,e=!1){const n=ut(t),i=await n.getIdToken(e),s=Ff(i);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:yo(Yu(s.auth_time)),issuedAtTime:yo(Yu(s.iat)),expirationTime:yo(Yu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yu(t){return Number(t)*1e3}function Ff(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fl(n);return s?JSON.parse(s):(El("Failed to decode base64 JWT payload"),null)}catch(s){return El("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $S(t){const e=Ff(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Jn&&US(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function US({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yo(this.lastLoginAt),this.creationTime=yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ho(t,VS(n,{idToken:i}));oe(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zS(r.providerUserInfo):[],a=jS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function HS(t){const e=ut(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jS(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zS(t){return t.map(e=>{var{providerId:n}=e,i=Mf(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function WS(t,e){const n=await gE(t,{},async()=>{const i=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=_E(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$S(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await WS(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new jo;return i&&(oe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(oe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return oi("not implemented")}}/**
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
 */function wi(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FS(this,e)}reload(){return HS(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ho(this,LS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:R,isAnonymous:$,providerData:Q,stsTokenManager:le}=n;oe(A&&le,e,"internal-error");const G=jo.fromJSON(this.name,le);oe(typeof A=="string",e,"internal-error"),wi(h,e.name),wi(d,e.name),oe(typeof R=="boolean",e,"internal-error"),oe(typeof $=="boolean",e,"internal-error"),wi(f,e.name),wi(g,e.name),wi(y,e.name),wi(v,e.name),wi(T,e.name),wi(I,e.name);const se=new ms({uid:A,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:G,createdAt:T,lastLoginAt:I});return Q&&Array.isArray(Q)&&(se.providerData=Q.map(be=>Object.assign({},be))),v&&(se._redirectEventId=v),se}static async _fromIdTokenResponse(e,n,i=!1){const s=new jo;s.updateFromServerResponse(n);const r=new ms({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await jl(r),r}}/**
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
 */const fg=new Map;function ai(t){di(t instanceof Function,"Expected a class definition");let e=fg.get(t);return e?(di(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fg.set(t,e),e)}/**
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
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vE.type="NONE";const pg=vE;/**
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
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=wl(this.userKey,s.apiKey,r),this.fullPersistenceKey=wl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new er(ai(pg),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ai(pg);const o=wl(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ms._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new er(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new er(r,e,i))}}/**
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
 */function mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IE(e))return"Blackberry";if(AE(e))return"Webos";if($f(e))return"Safari";if((e.includes("chrome/")||wE(e))&&!e.includes("edge/"))return"Chrome";if(bE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function EE(t=Ot()){return/firefox\//i.test(t)}function $f(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wE(t=Ot()){return/crios\//i.test(t)}function TE(t=Ot()){return/iemobile/i.test(t)}function bE(t=Ot()){return/android/i.test(t)}function IE(t=Ot()){return/blackberry/i.test(t)}function AE(t=Ot()){return/webos/i.test(t)}function Hc(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qS(t=Ot()){var e;return Hc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KS(){return lR()&&document.documentMode===10}function CE(t=Ot()){return Hc(t)||bE(t)||AE(t)||IE(t)||/windows phone/i.test(t)||TE(t)}function GS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function RE(t,e=[]){let n;switch(t){case"Browser":n=mg(Ot());break;case"Worker":n=`${mg(Ot())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${i}`}async function SE(t,e){return ma(t,"GET","/v2/recaptchaConfig",mE(t,e))}function gg(t){return t!==void 0&&t.enterprise!==void 0}class PE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function QS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Hn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",QS().appendChild(i)})}function YS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XS="https://www.google.com/recaptcha/enterprise.js?render=",JS="recaptcha-enterprise",ZS="NO_RECAPTCHA";class eP{constructor(e){this.type=JS,this.auth=Lr(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{SE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new PE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;gg(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(ZS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&gg(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kE(XS+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class tP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class nP{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new tP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ai(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}async initializeRecaptchaConfig(){const e=await SE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new PE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new eP(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ai(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[ai(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return oe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return ut(t)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=gR(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function iP(t,e){const n=Nf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ul(r,e??{}))return s;Gn(s,"already-initialized")}return n.initialize({options:e})}function sP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ai);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function rP(t,e,n){const i=Lr(t);oe(i._canInitEmulator,i,"emulator-config-failed"),oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=xE(e),{host:o,port:a}=oP(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||aP()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oP(t){const e=xE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:yg(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:yg(o)}}}function yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class DE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return oi("not implemented")}_getIdTokenResponse(e){return oi("not implemented")}_linkToIdToken(e,n){return oi("not implemented")}_getReauthenticationResolver(e){return oi("not implemented")}}/**
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
 */async function tr(t,e){return OS(t,"POST","/v1/accounts:signInWithIdp",mE(t,e))}/**
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
 */const lP="http://localhost";class vs extends DE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Mf(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new vs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,tr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:lP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mr(n)}return e}}/**
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
 */class Uf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends Uf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ci extends ga{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ci.PROVIDER_ID="facebook.com";/**
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
 */class Ri extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ri.credential(n,i)}catch{return null}}}Ri.GOOGLE_SIGN_IN_METHOD="google.com";Ri.PROVIDER_ID="google.com";/**
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
 */class Si extends ga{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
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
 */class Pi extends ga{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Pi.credential(n,i)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ms._fromIdTokenResponse(e,i,s),o=vg(i);return new dr({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=vg(i);return new dr({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zl extends Jn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new zl(e,n,i,s)}}function NE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,r,e,i):r})}async function cP(t,e,n=!1){const i=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",i)}/**
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
 */async function uP(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Ho(t,NE(i,s,e,t),n);oe(r.idToken,i,"internal-error");const o=Ff(r.idToken);oe(o,i,"internal-error");const{sub:a}=o;return oe(t.uid===a,i,"user-mismatch"),dr._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Gn(i,"user-mismatch"),r}}/**
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
 */async function hP(t,e,n=!1){const i="signIn",s=await NE(t,i,e),r=await dr._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function OE(t,e,n,i){return ut(t).onIdTokenChanged(e,n,i)}function dP(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const Wl="__sak";/**
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
 */class ME{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fP(){const t=Ot();return $f(t)||Hc(t)}const pP=1e3,mP=10;class LE extends ME{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fP()&&GS(),this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);KS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mP):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},pP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LE.type="LOCAL";const gP=LE;/**
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
 */class VE extends ME{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}VE.type="SESSION";const FE=VE;/**
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
 */function _P(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new jc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await _P(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
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
 */function Bf(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Bf("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function vP(t){jn().location.href=t}/**
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
 */function $E(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function EP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TP(){return $E()?self:null}/**
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
 */const UE="firebaseLocalStorageDb",bP=1,ql="firebaseLocalStorage",BE="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zc(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function IP(){const t=indexedDB.deleteDatabase(UE);return new _a(t).toPromise()}function Gh(){const t=indexedDB.open(UE,bP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ql,{keyPath:BE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ql)?e(i):(i.close(),await IP(),e(await Gh()))})})}async function Eg(t,e,n){const i=zc(t,!0).put({[BE]:e,value:n});return new _a(i).toPromise()}async function AP(t,e){const n=zc(t,!1).get(e),i=await new _a(n).toPromise();return i===void 0?null:i.value}function wg(t,e){const n=zc(t,!0).delete(e);return new _a(n).toPromise()}const CP=800,RP=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>RP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(TP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EP(),!this.activeServiceWorker)return;this.sender=new yP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gh();return await Eg(e,Wl,"1"),await wg(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Eg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>AP(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=zc(s,!1).getAll();return new _a(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const SP=HE;new pa(3e4,6e4);/**
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
 */function jE(t,e){return e?ai(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends DE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PP(t){return hP(t.auth,new Hf(t),t.bypassAuthState)}function kP(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),uP(n,new Hf(t),t.bypassAuthState)}async function xP(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),cP(n,new Hf(t),t.bypassAuthState)}/**
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
 */class zE{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return kP;default:Gn(this.auth,"internal-error")}}resolve(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DP=new pa(2e3,1e4);async function a4(t,e,n){const i=Lr(t);SS(t,e,Uf);const s=jE(i,n);return new as(i,"signInViaPopup",e,s).executeNotNull()}class as extends zE{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){di(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DP.get())};e()}}as.currentPopupAction=null;/**
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
 */const NP="pendingRedirect",Tl=new Map;class OP extends zE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const i=await MP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MP(t,e){const n=FP(e),i=VP(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function LP(t,e){Tl.set(t._key(),e)}function VP(t){return ai(t._redirectPersistence)}function FP(t){return wl(NP,t.config.apiKey,t.name)}async function l4(t,e){return await Lr(t)._initializationPromise,WE(t,e,!1)}async function WE(t,e,n=!1){const i=Lr(t),s=jE(i,e),o=await new OP(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const $P=10*60*1e3;class UP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!qE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$P&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tg(e))}saveEventToCache(e){this.cachedEventUids.add(Tg(e)),this.lastProcessedEventTime=Date.now()}}function Tg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
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
 */async function HP(t,e={}){return ma(t,"GET","/v1/projects",e)}/**
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
 */const jP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zP=/^https?/;async function WP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HP(t);for(const n of e)try{if(qP(n))return}catch{}Gn(t,"unauthorized-domain")}function qP(t){const e=Kh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!zP.test(n))return!1;if(jP.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const KP=new pa(3e4,6e4);function bg(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GP(t){return new Promise((e,n)=>{var i,s,r;function o(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),n(Hn(t,"network-request-failed"))},timeout:KP.get()})}if(!((s=(i=jn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=jn().gapi)===null||r===void 0)&&r.load)o();else{const a=YS("iframefcb");return jn()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},kE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bl=null,e})}let bl=null;function QP(t){return bl=bl||GP(t),bl}/**
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
 */const YP=new pa(5e3,15e3),XP="__/auth/iframe",JP="emulator/auth/iframe",ZP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vf(e,JP):`https://${t.config.authDomain}/${XP}`,i={apiKey:e.apiKey,appName:t.name,v:Ki},s=ek.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Mr(i).slice(1)}`}async function nk(t){const e=await QP(t),n=jn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:tk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZP,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=jn().setTimeout(()=>{r(o)},YP.get());function l(){jn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,rk=600,ok="_blank",ak="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(t,e,n,i=sk,s=rk){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ik),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ot().toLowerCase();n&&(a=wE(c)?ok:n),EE(c)&&(e=e||ak,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(qS(c)&&a!=="_self")return ck(e||"",a),new Ig(null);const h=window.open(e||"",a,u);oe(h,t,"popup-blocked");try{h.focus()}catch{}return new Ig(h)}function ck(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const uk="__/auth/handler",hk="emulator/auth/handler",dk=encodeURIComponent("fac");async function Ag(t,e,n,i,s,r){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ki,eventId:s};if(e instanceof Uf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ga){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${dk}=${encodeURIComponent(l)}`:"";return`${fk(t)}?${Mr(a).slice(1)}${c}`}function fk({config:t}){return t.emulator?Vf(t,hk):`https://${t.authDomain}/${uk}`}/**
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
 */const Xu="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FE,this._completeRedirectFn=WE,this._overrideRedirectResult=LP}async _openPopup(e,n,i,s){var r;di((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ag(e,n,i,Kh(),s);return lk(e,o,Bf())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ag(e,n,i,Kh(),s);return vP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(di(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await nk(e),i=new UP(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xu,{type:Xu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Xu];o!==void 0&&n(!!o),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CE()||$f()||Hc()}}const mk=pk;var Cg="@firebase/auth",Rg="1.1.0";/**
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
 */class gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _k(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yk(t){Kn(new An("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RE(t)},c=new nP(i,s,r,l);return sP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Kn(new An("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(i=>new gk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Cg,Rg,_k(t)),sn(Cg,Rg,"esm2017")}/**
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
 */const vk=5*60,Ek=tE("authIdTokenMaxAge")||vk;let Sg=null;const wk=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ek)return;const s=n==null?void 0:n.token;Sg!==s&&(Sg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KE(t=Of()){const e=Nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iP(t,{popupRedirectResolver:mk,persistence:[SP,gP,FE]}),i=tE("authTokenSyncURL");if(i){const r=wk(i);dP(n,r,()=>r(n.currentUser)),OE(n,o=>r(o))}const s=Zv("auth");return s&&rP(n,`http://${s}`),n}yk("Browser");var Tk=!1;/**
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
 */const bk=new Map,Ik={activated:!1,tokenObservers:[]};function Cn(t){return bk.get(t)||Object.assign({},Ik)}const Pg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class Ak{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $o,await Ck(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $o,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Ck(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Rk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Kl=new Or("appCheck","AppCheck",Rk);function GE(t){if(!Cn(t).activated)throw Kl.create("use-before-activation",{appName:t.name})}/**
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
 */const Sk="firebase-app-check-database",Pk=1,Qh="firebase-app-check-store";let el=null;function kk(){return el||(el=new Promise((t,e)=>{try{const n=indexedDB.open(Sk,Pk);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Kl.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Qh,{keyPath:"compositeKey"})}}}catch(n){e(Kl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),el)}function xk(t,e){return Dk(Nk(t),e)}async function Dk(t,e){const i=(await kk()).transaction(Qh,"readwrite"),r=i.objectStore(Qh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Kl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Nk(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Yh=new fa("@firebase/app-check");function kg(t,e){return sE()?xk(t,e).catch(n=>{Yh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const Ok={error:"UNKNOWN_ERROR"};function Mk(t){return Uc.encodeString(JSON.stringify(t),!1)}async function Xh(t,e=!1){const n=t.app;GE(n);const i=Cn(n);let s=i.token,r;if(s&&!lo(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(lo(l)?s=l:await kg(n,void 0))}if(!e&&s&&lo(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Cn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Yh.warn(l.message):Yh.error(l),r=l}let a;return s?r?lo(s)?a={token:s.token,internalError:r}:a=Dg(r):(a={token:s.token},i.token=s,await kg(n,s)):a=Dg(r),o&&$k(n,a),a}async function Lk(t){const e=t.app;GE(e);const{provider:n}=Cn(e);{const{token:i}=await n.getToken();return{token:i}}}function Vk(t,e,n,i){const{app:s}=t,r=Cn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&lo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),xg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>xg(t))}function QE(t,e){const n=Cn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function xg(t){const{app:e}=t,n=Cn(e);let i=n.tokenRefresher;i||(i=Fk(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Fk(t){const{app:e}=t;return new Ak(async()=>{const n=Cn(e);let i;if(n.token?i=await Xh(t,!0):i=await Xh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Cn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Pg.RETRIAL_MIN_WAIT,Pg.RETRIAL_MAX_WAIT)}function $k(t,e){const n=Cn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function lo(t){return t.expireTimeMillis-Date.now()>0}function Dg(t){return{token:Mk(Ok),error:t}}/**
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
 */class Uk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Cn(this.app);for(const n of e)QE(this.app,n.next);return Promise.resolve()}}function Bk(t,e){return new Uk(t,e)}function Hk(t){return{getToken:e=>Xh(t,e),getLimitedUseToken:()=>Lk(t),addTokenListener:e=>Vk(t,"INTERNAL",e),removeTokenListener:e=>QE(t.app,e)}}const jk="@firebase/app-check",zk="0.8.0",Wk="app-check",Ng="app-check-internal";function qk(){Kn(new An(Wk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Bk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ng).initialize()})),Kn(new An(Ng,t=>{const e=t.getProvider("app-check").getImmediate();return Hk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),sn(jk,zk)}qk();var Kk="firebase",Gk="10.1.0";/**
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
 */sn(Kk,Gk,"app");const YE=Symbol("firebaseApp");function ya(t){return Wv()&&Gt(YE,null)||Of(t)}const Vn=()=>{},Qk=typeof window<"u";function jf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function Yk(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function ks(t){return!!t&&typeof t=="object"}const Xk=Object.prototype;function Jk(t){return ks(t)&&Object.getPrototypeOf(t)===Xk}function zf(t){return ks(t)&&t.type==="document"}function Zk(t){return ks(t)&&t.type==="collection"}function e1(t){return zf(t)||Zk(t)}function t1(t){return ks(t)&&t.type==="query"}function n1(t){return ks(t)&&"ref"in t}function i1(t){return ks(t)&&typeof t.bucket=="string"}function s1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const r1=Symbol.for("v-scx");function o1(){return!!Gt(r1,0)}const tl=new WeakMap;function a1(t,e){if(!tl.has(t)){const n=df(!0);tl.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),tl.delete(t)}}return tl.get(t)}const XE=new WeakMap;function Vr(t){return XE.get(ya(t))}const nl=new WeakMap;function JE(t){const e=ya(t);if(!nl.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{nl.set(e,r),n(r.value)}];nl.set(e,s)}return nl.get(e)}function Og(t){const e=JE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function l1(t,e){const n=KE(e);OE(n,i=>{const s=JE();t.value=i,Array.isArray(s)&&s[1](t)})}const Mg="@firebase/database",Lg="1.0.1";/**
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
 */let ZE="";function c1(t){ZE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_t(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new u1(e)}}catch{}return new h1},ls=ew("localStorage"),Jh=ew("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new fa("@firebase/database"),d1=function(){let t=1;return function(){return t++}}(),tw=function(t){const e=ER(t),n=new mR;n.update(e);const i=n.digest();return Uc.encodeByteArray(i)},va=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=va.apply(null,i):typeof i=="object"?e+=_t(i):e+=i,e+=" "}return e};let gs=null,Vg=!0;const f1=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nr.logLevel=Ee.VERBOSE,gs=nr.log.bind(nr),e&&Jh.set("logging_enabled",!0)):typeof t=="function"?gs=t:(gs=null,Jh.remove("logging_enabled"))},It=function(...t){if(Vg===!0&&(Vg=!1,gs===null&&Jh.get("logging_enabled")===!0&&f1(!0)),gs){const e=va.apply(null,t);gs(e)}},Ea=function(t){return function(...e){It(t,...e)}},Zh=function(...t){const e="FIREBASE INTERNAL ERROR: "+va(...t);nr.error(e)},Es=function(...t){const e=`FIREBASE FATAL ERROR: ${va(...t)}`;throw nr.error(e),new Error(e)},rn=function(...t){const e="FIREBASE WARNING: "+va(...t);nr.warn(e)},p1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},m1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fr="[MIN_NAME]",ws="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===fr||e===ws)return-1;if(e===fr||t===ws)return 1;{const n=Fg(t),i=Fg(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},g1=function(t,e){return t===e?0:t<e?-1:1},Xr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_t(e))},Wf=function(t){if(typeof t!="object"||t===null)return _t(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=_t(e[i]),n+=":",n+=Wf(t[e[i]]);return n+="}",n},iw=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sw=function(t){L(!nw(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},_1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},y1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},v1=new RegExp("^-?(0*)\\d{1,10}$"),E1=-2147483648,w1=2147483647,Fg=function(t){if(v1.test(t)){const e=Number(t);if(e>=E1&&e<=w1)return e}return null},wa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw rn("Exception was thrown by user callback.",n),e},Math.floor(0))}},T1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class b1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){rn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rn(e)}}class ed{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ed.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="5",rw="v",ow="s",aw="r",lw="f",cw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uw="ls",hw="p",td="ac",dw="websocket",fw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pw(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let i;if(e===dw)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fw)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C1(t)&&(n.ns=t.namespace);const s=[];return dn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.counters_={}}incrementCounter(e,n=1){yi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={},Zu={};function Kf(t){const e=t.toString();return Ju[e]||(Ju[e]=new R1),Ju[e]}function S1(t,e){const n=t.toString();return Zu[n]||(Zu[n]=e()),Zu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&wa(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="start",k1="close",x1="pLPCommand",D1="pRTLPCB",mw="id",gw="pw",_w="ser",N1="cb",O1="seg",M1="ts",L1="d",V1="dframe",yw=1870,vw=30,F1=yw-vw,$1=25e3,U1=3e4;class Ks{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(e),this.stats_=Kf(n),this.urlFn=l=>(this.appCheckToken&&(l[td]=this.appCheckToken),pw(n,fw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new P1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(U1)),m1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$g)this.id=a,this.password=l;else if(o===k1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[$g]="t",i[_w]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[N1]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rw]=qf,this.transportSessionId&&(i[ow]=this.transportSessionId),this.lastSessionId&&(i[uw]=this.lastSessionId),this.applicationId&&(i[hw]=this.applicationId),this.appCheckToken&&(i[td]=this.appCheckToken),typeof location<"u"&&location.hostname&&cw.test(location.hostname)&&(i[aw]=lw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ks.forceAllow_=!0}static forceDisallow(){Ks.forceDisallow_=!0}static isAvailable(){return Ks.forceAllow_?!0:!Ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_1()&&!y1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Xv(n),s=iw(i,F1);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[V1]="t",i[mw]=e,i[gw]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_t(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gf{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=d1(),window[x1+this.uniqueCallbackIdentifier]=e,window[D1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){It("frame writing exception"),a.stack&&It(a.stack),It(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mw]=this.myID,e[gw]=this.myPW,e[_w]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vw+i.length<=yw;){const o=this.pendingSegs.shift();i=i+"&"+O1+s+"="+o.seg+"&"+M1+s+"="+o.ts+"&"+L1+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor($1)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=16384,H1=45e3;let Gl=null;typeof MozWebSocket<"u"?Gl=MozWebSocket:typeof WebSocket<"u"&&(Gl=WebSocket);class yn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=Kf(n),this.connURL=yn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[rw]=qf,typeof location<"u"&&location.hostname&&cw.test(location.hostname)&&(o[aw]=lw),n&&(o[ow]=n),i&&(o[uw]=i),s&&(o[td]=s),r&&(o[hw]=r),pw(e,dw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{let i;iE(),this.mySock=new Gl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Gl!==null&&!yn.forceDisallow_}static previouslyFailed(){return ls.isInMemoryStorage||ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Uo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=iw(n,B1);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(H1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ks,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yn&&yn.isAvailable();let i=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[yn];else{const s=this.transports_=[];for(const r of zo.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=6e4,z1=5e3,W1=10*1024,q1=100*1024,eh="t",Ug="d",K1="s",Bg="r",G1="e",Hg="o",jg="a",zg="n",Wg="p",Q1="h";class Y1{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=vo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>q1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>W1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eh in e){const n=e[eh];n===jg?this.upgradeIfSecondaryHealthy_():n===Bg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xr("t",e),i=Xr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xr("t",e),i=Xr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xr(eh,e);if(Ug in e){const i=e[Ug];if(n===Q1){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===zg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===K1?this.onConnectionShutdown_(i):n===Bg?this.onReset_(i):n===G1?Zh("Server Error: "+i):n===Hg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qf!==i&&rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),vo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(j1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends ww{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ql}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=32,Kg=768;class $e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ne(){return new $e("")}function ge(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hi(t){return t.pieces_.length-t.pieceNum_}function Ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $e(t.pieces_,e)}function Tw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function X1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Iw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $e(e,0)}function lt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof $e)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new $e(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function hn(t,e){const n=ge(t),i=ge(e);if(n===null)return e;if(n===i)return hn(Ve(t),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Aw(t,e){if(Hi(t)!==Hi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function En(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Hi(t)>Hi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class J1{constructor(e,n){this.errorPrefix_=n,this.parts_=bw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Bc(this.parts_[i]);Cw(this)}}function Z1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bc(e),Cw(t)}function ex(t){const e=t.parts_.pop();t.byteLength_-=Bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cw(t){if(t.byteLength_>Kg)throw new Error(t.errorPrefix_+"has a key path longer than "+Kg+" bytes ("+t.byteLength_+").");if(t.parts_.length>qg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qg+") or object contains a cycle "+ss(t))}function ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends ww{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Qf}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=1e3,tx=60*5*1e3,Gg=30*1e3,nx=1.3,ix=3e4,sx="server_kill",Qg=3;class ui extends Ew{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ui.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jr,this.maxReconnectDelay_=tx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!iE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ql.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(_t(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new $o,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ui.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yi(e,"w")){const i=hr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_t(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zh("Unrecognized action received from server: "+_t(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ix&&(this.reconnectDelay_=Jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ui.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Y1(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{rn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(sx)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&rn(h),l())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bh(this.interruptReasons_)&&(this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Wf(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new $e(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){It("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qg&&(this.reconnectDelay_=Gg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){It("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ZE.replace(/\./g,"-")]=1,xf()?e["framework.cordova"]=1:nE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ql.getInstance().currentlyOnline();return Bh(this.interruptReasons_)&&e}}ui.nextPersistentConnectionId_=0;ui.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new _e(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new _e(fr,e),s=new _e(fr,n);return this.compare(i,s)!==0}minPost(){return _e.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;class Rw extends Wc{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw Nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return _e.MIN}maxPost(){return new _e(ws,il)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new _e(e,il)}toString(){return".key"}}const ir=new Rw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Zt=class co{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??co.RED,this.left=s??Fn.EMPTY_NODE,this.right=r??Fn.EMPTY_NODE}copy(e,n,i,s,r){return new co(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Fn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,co.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,co.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Zt.RED=!0;Zt.BLACK=!1;class rx{copy(e,n,i,s,r){return this}insert(e,n,i){return new Zt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Fn=class Il{constructor(e,n=Il.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Il(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Zt.BLACK,null,null))}remove(e){return new Il(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}};Fn.EMPTY_NODE=new rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t,e){return Fr(t.name,e.name)}function Yf(t,e){return Fr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd;function ax(t){nd=t}const Sw=function(t){return typeof t=="number"?"number:"+sw(t):"string:"+t},Pw=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yi(e,".sv"),"Priority must be a string or number.")}else L(t===nd||t.isEmpty(),"priority of unexpected type.");L(t===nd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pw(this.priorityNode_)}static set __childrenNodeConstructor(e){Yg=e}static get __childrenNodeConstructor(){return Yg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ge(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ge(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(L(i!==".priority"||Hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sw(this.value_):e+=this.value_,this.lazyHash_=tw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=rt.VALUE_TYPE_ORDER.indexOf(n),r=rt.VALUE_TYPE_ORDER.indexOf(i);return L(s>=0,"Unknown leaf type: "+n),L(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kw,xw;function lx(t){kw=t}function cx(t){xw=t}class ux extends Wc{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return _e.MIN}maxPost(){return new _e(ws,new rt("[PRIORITY-POST]",xw))}makePost(e,n){const i=kw(e);return new _e(n,new rt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Pt=new ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=Math.log(2);class dx{constructor(e){const n=r=>parseInt(Math.log(r)/hx,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yl=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Zt(d,h.node,Zt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),y=s(f+1,c);return h=t[f],d=n?n(h):h,new Zt(d,h.node,Zt.BLACK,g,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const v=h-g,T=h;h-=g;const I=s(v+1,T),A=t[v],R=n?n(A):A;f(new Zt(R,A.node,y,null,I))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));y?d(v,Zt.BLACK):(d(v,Zt.BLACK),d(v,Zt.RED))}return u},o=new dx(t.length),a=r(o);return new Fn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th;const $s={};class li{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L($s&&Pt,"ChildrenNode.ts has not been loaded"),th=th||new li({".priority":$s},{".priority":Pt}),th}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fn?n:null}hasIndex(e){return yi(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(_e.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Yl(i,e.getCompare()):a=$s;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new li(u,c)}addToIndexes(e,n){const i=$l(this.indexes_,(s,r)=>{const o=hr(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),s===$s)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(_e.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Yl(a,o.getCompare())}else return $s;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new _e(e.name,a))),l.insert(e,e.node)}});return new li(i,this.indexSet_)}removeFromIndexes(e,n){const i=$l(this.indexes_,s=>{if(s===$s)return s;{const r=n.get(e.name);return r?s.remove(new _e(e.name,r)):s}});return new li(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;class Ce{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Pw(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zr||(Zr=new Ce(new Fn(Yf),null,li.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zr}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zr:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new _e(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Zr:this.priorityNode_;return new Ce(s,o,r)}}updateChild(e,n){const i=ge(e);if(i===null)return n;{L(ge(e)!==".priority"||Hi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ve(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Pt,(o,a)=>{n[o]=a.val(e),i++,r&&Ce.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sw(this.getPriority().val())+":"),this.forEachChild(Pt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":tw(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new _e(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new _e(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new _e(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,_e.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,_e.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ta?-1:0}withIndex(e){if(e===ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Pt),s=n.getIterator(Pt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ir?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fx extends Ce{constructor(){super(new Fn(Yf),Ce.EMPTY_NODE,li.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const Ta=new fx;Object.defineProperties(_e,{MIN:{value:new _e(fr,Ce.EMPTY_NODE)},MAX:{value:new _e(ws,Ta)}});Rw.__EMPTY_NODE=Ce.EMPTY_NODE;rt.__childrenNodeConstructor=Ce;ax(Ta);cx(Ta);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=!0;function At(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,At(e))}if(!(t instanceof Array)&&px){const n=[];let i=!1;if(dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=At(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new _e(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const r=Yl(n,ox,o=>o.name,Yf);if(i){const o=Yl(n,Pt.getCompare());return new Ce(r,At(e),new li({".priority":o},{".priority":Pt}))}else return new Ce(r,At(e),li.Default)}else{let n=Ce.EMPTY_NODE;return dn(t,(i,s)=>{if(yi(t,i)&&i.substring(0,1)!=="."){const r=At(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(At(e))}}lx(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx extends Wc{constructor(e){super(),this.indexPath_=e,L(!pe(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Fr(e.name,n.name):r}makePost(e,n){const i=At(e),s=Ce.EMPTY_NODE.updateChild(this.indexPath_,i);return new _e(n,s)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,Ta);return new _e(ws,e)}toString(){return bw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx extends Wc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Fr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return _e.MIN}maxPost(){return _e.MAX}makePost(e,n){const i=At(e);return new _e(n,i)}toString(){return".value"}}const _x=new gx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return{type:"value",snapshotNode:t}}function vx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ex(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fr}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pt}copy(){const e=new Xf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pt?n="$priority":t.index_===_x?n="$value":t.index_===ir?n="$key":(L(t.index_ instanceof mx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_t(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=_t(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+_t(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=_t(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+_t(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Ew{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ea("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xl.getListenId_(e,i),a={};this.listens_[o]=a;const l=Jg(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),hr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Xl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Jg(e._queryParams),i=e._path.toString(),s=new $o;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Uo(a.responseText)}catch{rn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&rn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return{value:null,children:new Map}}function Dw(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ge(e);t.children.has(i)||t.children.set(i,Jl());const s=t.children.get(i);e=Ve(e),Dw(s,e,n)}}function id(t,e,n){t.value!==null?n(e,t.value):bx(t,(i,s)=>{const r=new $e(e.toString()+"/"+i);id(s,r,n)})}function bx(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=10*1e3,Ax=30*1e3,Cx=5*60*1e3;class Rx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ix(e);const i=e_+(Ax-e_)*Math.random();vo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;dn(e,(s,r)=>{r>0&&yi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),vo(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($n||($n={}));function Nw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ow(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=$n.ACK_USER_WRITE,this.source=Nw()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $e(e));return new Zl(Ne(),n,this.revert)}}else return L(ge(this.path)===e,"operationForChild called for unrelated child."),new Zl(Ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=$n.OVERWRITE}operationForChild(e){return pe(this.path)?new Ts(this.source,Ne(),this.snap.getImmediateChild(e)):new Ts(this.source,Ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=$n.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new $e(e));return n.isEmpty()?null:n.value?new Ts(this.source,Ne(),n.value):new Wo(this.source,Ne(),n)}else return L(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Sx(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wx(o.childName,o.snapshotNode))}),eo(t,s,"child_removed",e,i,n),eo(t,s,"child_added",e,i,n),eo(t,s,"child_moved",r,i,n),eo(t,s,"child_changed",e,i,n),eo(t,s,"value",e,i,n),s}function eo(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>kx(t,a,l)),o.forEach(a=>{const l=Px(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Px(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kx(t,e,n){if(e.childName==null||n.childName==null)throw Nr("Should only compare child_ events.");const i=new _e(e.childName,e.snapshotNode),s=new _e(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e){return{eventCache:t,serverCache:e}}function Eo(t,e,n,i){return Lw(new Jf(e,n,i),t.serverCache)}function Vw(t,e,n,i){return Lw(t.eventCache,new Jf(e,n,i))}function sd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh;const xx=()=>(nh||(nh=new Fn(g1)),nh);class Le{constructor(e,n=xx()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return dn(e,(i,s)=>{n=n.set(new $e(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ne(),value:this.value};if(pe(e))return null;{const i=ge(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ve(e),n);return r!=null?{path:lt(new $e(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=ge(e),i=this.children.get(n);return i!==null?i.subtree(Ve(e)):new Le(null)}}set(e,n){if(pe(e))return new Le(n,this.children);{const i=ge(e),r=(this.children.get(i)||new Le(null)).set(Ve(e),n),o=this.children.insert(i,r);return new Le(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=ge(e),i=this.children.get(n);if(i){const s=i.remove(Ve(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Le(null):new Le(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const n=ge(e),i=this.children.get(n);return i?i.get(Ve(e)):null}}setTree(e,n){if(pe(e))return n;{const i=ge(e),r=(this.children.get(i)||new Le(null)).setTree(Ve(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Le(this.value,o)}}fold(e){return this.fold_(Ne(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(lt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ne(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(pe(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Ve(e),lt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ne(),n)}foreachOnPath_(e,n,i){if(pe(e))return this;{this.value&&i(n,this.value);const s=ge(e),r=this.children.get(s);return r?r.foreachOnPath_(Ve(e),lt(n,s),i):new Le(null)}}foreach(e){this.foreach_(Ne(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(lt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.writeTree_=e}static empty(){return new In(new Le(null))}}function wo(t,e,n){if(pe(e))return new In(new Le(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=hn(s,e);return r=r.updateChild(o,n),new In(t.writeTree_.set(s,r))}else{const s=new Le(n),r=t.writeTree_.setTree(e,s);return new In(r)}}}function t_(t,e,n){let i=t;return dn(n,(s,r)=>{i=wo(i,lt(e,s),r)}),i}function n_(t,e){if(pe(e))return In.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new In(n)}}function rd(t,e){return xs(t,e)!=null}function xs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(hn(n.path,e)):null}function i_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pt,(i,s)=>{e.push(new _e(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new _e(i,s.value))}),e}function Fi(t,e){if(pe(e))return t;{const n=xs(t,e);return n!=null?new In(new Le(n)):new In(t.writeTree_.subtree(e))}}function od(t){return t.writeTree_.isEmpty()}function pr(t,e){return Fw(Ne(),t.writeTree_,e)}function Fw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Fw(lt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(lt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e){return zw(e,t)}function Dx(t,e,n,i,s){L(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=wo(t.visibleWrites,e,n)),t.lastWriteId=i}function Nx(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ox(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Mx(a,i.path)?s=!1:En(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Lx(t),!0;if(i.snap)t.visibleWrites=n_(t.visibleWrites,i.path);else{const a=i.children;dn(a,l=>{t.visibleWrites=n_(t.visibleWrites,lt(i.path,l))})}return!0}else return!1}function Mx(t,e){if(t.snap)return En(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&En(lt(t.path,n),e))return!0;return!1}function Lx(t){t.visibleWrites=Uw(t.allWrites,Vx,Ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vx(t){return t.visible}function Uw(t,e,n){let i=In.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)En(n,o)?(a=hn(n,o),i=wo(i,a,r.snap)):En(o,n)&&(a=hn(o,n),i=wo(i,Ne(),r.snap.getChild(a)));else if(r.children){if(En(n,o))a=hn(n,o),i=t_(i,a,r.children);else if(En(o,n))if(a=hn(o,n),pe(a))i=t_(i,Ne(),r.children);else{const l=hr(r.children,ge(a));if(l){const c=l.getChild(Ve(a));i=wo(i,Ne(),c)}}}else throw Nr("WriteRecord should have .snap or .children")}}return i}function Bw(t,e,n,i,s){if(!i&&!s){const r=xs(t.visibleWrites,e);if(r!=null)return r;{const o=Fi(t.visibleWrites,e);if(od(o))return n;if(n==null&&!rd(o,Ne()))return null;{const a=n||Ce.EMPTY_NODE;return pr(o,a)}}}else{const r=Fi(t.visibleWrites,e);if(!s&&od(r))return n;if(!s&&n==null&&!rd(r,Ne()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(En(c.path,e)||En(e,c.path))},a=Uw(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return pr(a,l)}}}function Fx(t,e,n){let i=Ce.EMPTY_NODE;const s=xs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Pt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Fi(t.visibleWrites,e);return n.forEachChild(Pt,(o,a)=>{const l=pr(Fi(r,new $e(o)),a);i=i.updateImmediateChild(o,l)}),i_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Fi(t.visibleWrites,e);return i_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $x(t,e,n,i,s){L(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=lt(e,n);if(rd(t.visibleWrites,r))return null;{const o=Fi(t.visibleWrites,r);return od(o)?s.getChild(n):pr(o,s.getChild(n))}}function Ux(t,e,n,i){const s=lt(e,n),r=xs(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Fi(t.visibleWrites,s);return pr(o,i.getNode().getImmediateChild(n))}else return null}function Bx(t,e){return xs(t.visibleWrites,e)}function Hx(t,e,n,i,s,r,o){let a;const l=Fi(t.visibleWrites,e),c=xs(l,Ne());if(c!=null)a=c;else if(n!=null)a=pr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function jx(){return{visibleWrites:In.empty(),allWrites:[],lastWriteId:-1}}function ad(t,e,n,i){return Bw(t.writeTree,t.treePath,e,n,i)}function Hw(t,e){return Fx(t.writeTree,t.treePath,e)}function s_(t,e,n,i){return $x(t.writeTree,t.treePath,e,n,i)}function ec(t,e){return Bx(t.writeTree,lt(t.treePath,e))}function zx(t,e,n,i,s,r){return Hx(t.writeTree,t.treePath,e,n,i,s,r)}function Zf(t,e,n){return Ux(t.writeTree,t.treePath,e,n)}function jw(t,e){return zw(lt(t.treePath,e),t.writeTree)}function zw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Xg(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ex(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,vx(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Xg(i,e.snapshotNode,s.oldSnap));else throw Nr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ww=new qx;class ep{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Jf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bs(this.viewCache_),r=zx(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Kx(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Gx(t,e,n,i,s){const r=new Wx;let o,a;if(n.type===$n.OVERWRITE){const c=n;c.source.fromUser?o=ld(t,e,c.path,c.snap,i,s,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=tc(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===$n.MERGE){const c=n;c.source.fromUser?o=Yx(t,e,c.path,c.children,i,s,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=cd(t,e,c.path,c.children,i,s,a,r))}else if(n.type===$n.ACK_USER_WRITE){const c=n;c.revert?o=Zx(t,e,c.path,i,s,r):o=Xx(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===$n.LISTEN_COMPLETE)o=Jx(t,e,n.path,i,r);else throw Nr("Unknown operation type: "+n.type);const l=r.getChanges();return Qx(e,o,l),{viewCache:o,changes:l}}function Qx(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=sd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(yx(sd(e)))}}function qw(t,e,n,i,s,r){const o=e.eventCache;if(ec(i,n)!=null)return e;{let a,l;if(pe(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=bs(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=Hw(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ad(i,bs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ge(n);if(c===".priority"){L(Hi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=s_(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=s_(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Zf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Eo(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function tc(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ge(n);if(!l.isCompleteForPath(n)&&Hi(n)>1)return e;const g=Ve(n),v=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,Ww,null)}const h=Vw(e,c,l.isFullyInitialized()||pe(n),u.filtersNodes()),d=new ep(s,h,r);return qw(t,h,n,s,d,a)}function ld(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new ep(s,e,r);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Eo(e,c,!0,t.filter.filtersNodes());else{const h=ge(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Eo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ve(n),f=a.getNode().getImmediateChild(h);let g;if(pe(d))g=i;else{const y=u.getCompleteChild(h);y!=null?Tw(d)===".priority"&&y.getChild(Iw(d)).isEmpty()?g=y:g=y.updateChild(d,i):g=Ce.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Eo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function r_(t,e){return t.eventCache.isCompleteForChild(e)}function Yx(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=lt(n,l);r_(e,ge(u))&&(a=ld(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=lt(n,l);r_(e,ge(u))||(a=ld(t,a,u,c,s,r,o))}),a}function o_(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function cd(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=i:c=new Le(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=o_(t,f,d);l=tc(t,l,new $e(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=o_(t,g,d);l=tc(t,l,new $e(h),y,s,r,o,a)}}),l}function Xx(t,e,n,i,s,r,o){if(ec(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tc(t,e,n,l.getNode().getChild(n),s,r,a,o);if(pe(n)){let c=new Le(null);return l.getNode().forEachChild(ir,(u,h)=>{c=c.set(new $e(u),h)}),cd(t,e,n,c,s,r,a,o)}else return e}else{let c=new Le(null);return i.foreach((u,h)=>{const d=lt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),cd(t,e,n,c,s,r,a,o)}}function Jx(t,e,n,i,s){const r=e.serverCache,o=Vw(e,r.getNode(),r.isFullyInitialized()||pe(n),r.isFiltered());return qw(t,o,n,i,Ww,s)}function Zx(t,e,n,i,s,r){let o;if(ec(i,n)!=null)return e;{const a=new ep(i,e,s),l=e.eventCache.getNode();let c;if(pe(n)||ge(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ad(i,bs(e));else{const h=e.serverCache.getNode();L(h instanceof Ce,"serverChildren would be complete if leaf node"),u=Hw(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ge(n);let h=Zf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,Ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ad(i,bs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ec(i,Ne())!=null,Eo(e,c,o,t.filter.filtersNodes())}}function eD(t,e){const n=bs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function a_(t,e,n,i){e.type===$n.MERGE&&e.source.queryId!==null&&(L(bs(t.viewCache_),"We should always have a full cache before handling merges"),L(sd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Gx(t.processor_,s,e,n,i);return Kx(t.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,tD(t,r.changes,r.viewCache.eventCache.getNode(),null)}function tD(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Sx(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l_;function nD(t){L(!l_,"__referenceConstructor has already been defined"),l_=t}function tp(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return L(r!=null,"SyncTree gave us an op for an invalid query."),a_(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(a_(o,e,n,i));return r}}function np(t,e){let n=null;for(const i of t.views.values())n=n||eD(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c_;function iD(t){L(!c_,"__referenceConstructor has already been defined"),c_=t}class u_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=jx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sD(t,e,n,i,s){return Dx(t.pendingWriteTree_,e,n,i,s),s?Kc(t,new Ts(Nw(),e,n)):[]}function Gs(t,e,n=!1){const i=Nx(t.pendingWriteTree_,e);if(Ox(t.pendingWriteTree_,e)){let r=new Le(null);return i.snap!=null?r=r.set(Ne(),!0):dn(i.children,o=>{r=r.set(new $e(o),!0)}),Kc(t,new Zl(i.path,r,n))}else return[]}function qc(t,e,n){return Kc(t,new Ts(Ow(),e,n))}function rD(t,e,n){const i=Le.fromObject(n);return Kc(t,new Wo(Ow(),e,i))}function oD(t,e,n,i){const s=Yw(t,i);if(s!=null){const r=Xw(s),o=r.path,a=r.queryId,l=hn(o,e),c=new Ts(Mw(a),l,n);return Jw(t,o,c)}else return[]}function aD(t,e,n,i){const s=Yw(t,i);if(s){const r=Xw(s),o=r.path,a=r.queryId,l=hn(o,e),c=Le.fromObject(n),u=new Wo(Mw(a),l,c);return Jw(t,o,u)}else return[]}function Kw(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=hn(o,e),c=np(a,l);if(c)return c});return Bw(s,e,r,n,!0)}function Kc(t,e){return Gw(e,t.syncPointTree_,null,$w(t.pendingWriteTree_,Ne()))}function Gw(t,e,n,i){if(pe(t.path))return Qw(t,e,n,i);{const s=e.get(Ne());n==null&&s!=null&&(n=np(s,Ne()));let r=[];const o=ge(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=jw(i,o);r=r.concat(Gw(a,l,c,u))}return s&&(r=r.concat(tp(s,t,i,n))),r}}function Qw(t,e,n,i){const s=e.get(Ne());n==null&&s!=null&&(n=np(s,Ne()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=jw(i,o),u=t.operationForChild(o);u&&(r=r.concat(Qw(u,a,l,c)))}),s&&(r=r.concat(tp(s,t,i,n))),r}function Yw(t,e){return t.tagToQueryMap.get(e)}function Xw(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $e(t.substr(0,e))}}function Jw(t,e,n){const i=t.syncPointTree_.get(e);L(i,"Missing sync point for query tag that we're tracking");const s=$w(t.pendingWriteTree_,e);return tp(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ip(n)}node(){return this.node_}}class sp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=lt(this.path_,e);return new sp(this.syncTree_,n)}node(){return Kw(this.syncTree_,this.path_)}}const lD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},h_=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uD(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},uD=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&L(!1,"Unexpected increment value: "+i);const s=e.node();if(L(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},hD=function(t,e,n,i){return rp(e,new sp(n,t),i)},dD=function(t,e,n){return rp(t,new ip(e),n)};function rp(t,e,n){const i=t.getPriority().val(),s=h_(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=h_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new rt(a,At(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new rt(s))),o.forEachChild(Pt,(a,l)=>{const c=rp(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ap(t,e){let n=e instanceof $e?e:new $e(e),i=t,s=ge(n);for(;s!==null;){const r=hr(i.node.children,s)||{children:{},childCount:0};i=new op(s,i,r),n=Ve(n),s=ge(n)}return i}function $r(t){return t.node.value}function Zw(t,e){t.node.value=e,ud(t)}function e0(t){return t.node.childCount>0}function fD(t){return $r(t)===void 0&&!e0(t)}function Gc(t,e){dn(t.node.children,(n,i)=>{e(new op(n,t,i))})}function t0(t,e,n,i){n&&!i&&e(t),Gc(t,s=>{t0(s,e,!0,i)}),n&&i&&e(t)}function pD(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ba(t){return new $e(t.parent===null?t.name:ba(t.parent)+"/"+t.name)}function ud(t){t.parent!==null&&mD(t.parent,t.name,t)}function mD(t,e,n){const i=fD(n),s=yi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ud(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ud(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=/[\[\].#$\/\u0000-\u001F\u007F]/,_D=/[\[\].#$\u0000-\u001F\u007F]/,ih=10*1024*1024,n0=function(t){return typeof t=="string"&&t.length!==0&&!gD.test(t)},yD=function(t){return typeof t=="string"&&t.length!==0&&!_D.test(t)},vD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yD(t)},i0=function(t,e,n){const i=n instanceof $e?new J1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ss(i));if(typeof e=="function")throw new Error(t+"contains a function "+ss(i)+" with contents = "+e.toString());if(nw(e))throw new Error(t+"contains "+e.toString()+" "+ss(i));if(typeof e=="string"&&e.length>ih/3&&Bc(e)>ih)throw new Error(t+"contains a string greater than "+ih+" utf8 bytes "+ss(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(dn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!n0(o)))throw new Error(t+" contains an invalid key ("+o+") "+ss(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Z1(i,o),i0(t,a,i),ex(i)}),s&&r)throw new Error(t+' contains ".value" child '+ss(i)+" in addition to actual children.")}},ED=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!n0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vD(n))throw new Error(vR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function TD(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Aw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ds(t,e,n){TD(t,n),bD(t,i=>En(i,e)||En(e,i))}function bD(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(ID(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ID(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();gs&&It("event: "+n.toString()),wa(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD="repo_interrupt",CD=25;class RD{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jl(),this.transactionQueueTree_=new op,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SD(t,e,n){if(t.stats_=Kf(t.repoInfo_),t.forceRestClient_||T1())t.server_=new Xl(t.repoInfo_,(i,s,r,o)=>{d_(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>f_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ui(t.repoInfo_,e,(i,s,r,o)=>{d_(t,i,s,r,o)},i=>{f_(t,i)},i=>{kD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=S1(t.repoInfo_,()=>new Rx(t.stats_,t.server_)),t.infoData_=new Tx,t.infoSyncTree_=new u_({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=qc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lp(t,"connected",!1),t.serverSyncTree_=new u_({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ds(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function PD(t){const n=t.infoData_.getNode(new $e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function s0(t){return lD({timestamp:PD(t)})}function d_(t,e,n,i,s){t.dataUpdateCount++;const r=new $e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=$l(n,c=>At(c));o=aD(t.serverSyncTree_,r,l,s)}else{const l=At(n);o=oD(t.serverSyncTree_,r,l,s)}else if(i){const l=$l(n,c=>At(c));o=rD(t.serverSyncTree_,r,l)}else{const l=At(n);o=qc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=up(t,r)),Ds(t.eventQueue_,a,o)}function f_(t,e){lp(t,"connected",e),e===!1&&DD(t)}function kD(t,e){dn(e,(n,i)=>{lp(t,n,i)})}function lp(t,e,n){const i=new $e("/.info/"+e),s=At(n);t.infoData_.updateSnapshot(i,s);const r=qc(t.infoSyncTree_,i,s);Ds(t.eventQueue_,i,r)}function xD(t){return t.nextWriteId_++}function DD(t){r0(t,"onDisconnectEvents");const e=s0(t),n=Jl();id(t.onDisconnect_,Ne(),(s,r)=>{const o=hD(s,r,t.serverSyncTree_,e);Dw(n,s,o)});let i=[];id(n,Ne(),(s,r)=>{i=i.concat(qc(t.serverSyncTree_,s,r));const o=LD(t,s);up(t,o)}),t.onDisconnect_=Jl(),Ds(t.eventQueue_,Ne(),i)}function ND(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AD)}function r0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),It(n,...e)}function o0(t,e,n){return Kw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function cp(t,e=t.transactionQueueTree_){if(e||Qc(t,e),$r(e)){const n=l0(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&OD(t,ba(e),n)}else e0(e)&&Gc(e,n=>{cp(t,n)})}function OD(t,e,n){const i=n.map(c=>c.currentWriteId),s=o0(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=hn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{r0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Gs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Qc(t,ap(t.transactionQueueTree_,e)),cp(t,t.transactionQueueTree_),Ds(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)wa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{rn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}up(t,e)}},o)}function up(t,e){const n=a0(t,e),i=ba(n),s=l0(t,n);return MD(t,s,i),i}function MD(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=hn(n,l.path);let u=!1,h;if(L(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=CD)u=!0,h="maxretry",s=s.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=o0(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){i0("transaction failed: Data returned ",f,l.path);let g=At(f);typeof f=="object"&&f!=null&&yi(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,T=s0(t),I=dD(g,d,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=xD(t),o.splice(o.indexOf(v),1),s=s.concat(sD(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(Gs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0))}Ds(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Qc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)wa(i[a]);cp(t,t.transactionQueueTree_)}function a0(t,e){let n,i=t.transactionQueueTree_;for(n=ge(e);n!==null&&$r(i)===void 0;)i=ap(i,n),e=Ve(e),n=ge(e);return i}function l0(t,e){const n=[];return c0(t,e,n),n.sort((i,s)=>i.order-s.order),n}function c0(t,e,n){const i=$r(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Gc(e,s=>{c0(t,s,n)})}function Qc(t,e){const n=$r(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Zw(e,n.length>0?n:void 0)}Gc(e,i=>{Qc(t,i)})}function LD(t,e){const n=ba(a0(t,e)),i=ap(t.transactionQueueTree_,e);return pD(i,s=>{sh(t,s)}),sh(t,i),t0(i,s=>{sh(t,s)}),n}function sh(t,e){const n=$r(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Gs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zw(e,void 0):n.length=r+1,Ds(t.eventQueue_,ba(e),s);for(let o=0;o<i.length;o++)wa(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function FD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):rn(`Invalid query segment '${n}' in query '${t}'`)}return e}const p_=function(t,e){const n=$D(t),i=n.namespace;n.domain==="firebase.com"&&Es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||p1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new A1(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new $e(n.pathString)}},$D=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=VD(t.substring(u,h)));const d=FD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class hp{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return pe(this._path)?null:Tw(this._path)}get ref(){return new Ur(this._repo,this._path)}get _queryIdentifier(){const e=Zg(this._queryParams),n=Wf(e);return n==="{}"?"default":n}get _queryObject(){return Zg(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof hp))return!1;const n=this._repo===e._repo,i=Aw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+X1(this._path)}}class Ur extends hp{constructor(e,n){super(e,n,new Xf,!1)}get parent(){const e=Iw(this._path);return e===null?null:new Ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}nD(Ur);iD(Ur);/**
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
 */const UD="FIREBASE_DATABASE_EMULATOR_HOST",hd={};let BD=!1;function HD(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=p_(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[UD]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=p_(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new ed(ed.OWNER):new I1(t.name,t.options,e);ED("Invalid Firebase Database URL",o),pe(o.path)||Es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zD(a,t,u,new b1(t.name,n));return new WD(h,t)}function jD(t,e){const n=hd[e];(!n||n[t.key]!==t)&&Es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ND(t),delete n[t.key]}function zD(t,e,n,i){let s=hd[e.name];s||(s={},hd[e.name]=s);let r=s[t.toURLString()];return r&&Es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new RD(t,BD,n,i),s[t.toURLString()]=r,r}class WD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ur(this._repo,Ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Es("Cannot call "+e+" on a deleted database.")}}/**
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
 */function qD(t){c1(Ki),Kn(new An("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return HD(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(Mg,Lg,t),sn(Mg,Lg,"esm2017")}ui.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ui.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qD();var KD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,dp=dp||{},ie=KD||self;function Yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ia(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GD(t){return Object.prototype.hasOwnProperty.call(t,rh)&&t[rh]||(t[rh]=++QD)}var rh="closure_uid_"+(1e9*Math.random()>>>0),QD=0;function YD(t,e,n){return t.call.apply(t.bind,arguments)}function XD(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=YD:kt=XD,kt.apply(null,arguments)}function rl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Gi(){this.s=this.s,this.o=this.o}var JD=0;Gi.prototype.s=!1;Gi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),JD!=0)&&GD(this)};Gi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const u0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fp(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function m_(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Yc(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var ZD=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",()=>{},e),ie.removeEventListener("test",()=>{},e)}catch{}return t}();function qo(t){return/^[\s\xa0]*$/.test(t)}function Xc(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return Xc().indexOf(t)!=-1}function pp(t){return pp[" "](t),t}pp[" "]=function(){};function eN(t,e){var n=qN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tN=Mn("Opera"),mr=Mn("Trident")||Mn("MSIE"),h0=Mn("Edge"),dd=h0||mr,d0=Mn("Gecko")&&!(Xc().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),nN=Xc().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge");function f0(){var t=ie.document;return t?t.documentMode:void 0}var fd;e:{var oh="",ah=function(){var t=Xc();if(d0)return/rv:([^\);]+)(\)|;)/.exec(t);if(h0)return/Edge\/([\d\.]+)/.exec(t);if(mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nN)return/WebKit\/(\S+)/.exec(t);if(tN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ah&&(oh=ah?ah[1]:""),mr){var lh=f0();if(lh!=null&&lh>parseFloat(oh)){fd=String(lh);break e}}fd=oh}var pd;if(ie.document&&mr){var g_=f0();pd=g_||parseInt(fd,10)||void 0}else pd=void 0;var iN=pd;function Ko(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(d0){e:{try{pp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ko.$.h.call(this)}}dt(Ko,xt);var sN={2:"touch",3:"pen",4:"mouse"};Ko.prototype.h=function(){Ko.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),rN=0;function oN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++rN,this.fa=this.ia=!1}function Jc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function mp(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function aN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function p0(t){const e={};for(const n in t)e[n]=t[n];return e}const __="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m0(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<__.length;r++)n=__[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Zc(t){this.src=t,this.g={},this.h=0}Zc.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=gd(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oN(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function md(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=u0(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Jc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gd(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var gp="closure_lm_"+(1e6*Math.random()|0),ch={};function g0(t,e,n,i,s){if(i&&i.once)return y0(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)g0(t,e[r],n,i,s);return null}return n=vp(n),t&&t[Aa]?t.O(e,n,Ia(i)?!!i.capture:!!i,s):_0(t,e,n,!1,i,s)}function _0(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ia(s)?!!s.capture:!!s,a=yp(t);if(a||(t[gp]=a=new Zc(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=lN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ZD||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(E0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lN(){function t(n){return e.call(t.src,t.listener,n)}const e=cN;return t}function y0(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)y0(t,e[r],n,i,s);return null}return n=vp(n),t&&t[Aa]?t.P(e,n,Ia(i)?!!i.capture:!!i,s):_0(t,e,n,!0,i,s)}function v0(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)v0(t,e[r],n,i,s);else i=Ia(i)?!!i.capture:!!i,n=vp(n),t&&t[Aa]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=gd(r,n,i,s),-1<n&&(Jc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=yp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gd(e,n,i,s)),(n=-1<t?e[t]:null)&&_p(n))}function _p(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Aa])md(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(E0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=yp(e))?(md(n,t),n.h==0&&(n.src=null,e[gp]=null)):Jc(t)}}}function E0(t){return t in ch?ch[t]:ch[t]="on"+t}function cN(t,e){if(t.fa)t=!0;else{e=new Ko(e,this);var n=t.listener,i=t.la||t.src;t.ia&&_p(t),t=n.call(i,e)}return t}function yp(t){return t=t[gp],t instanceof Zc?t:null}var uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(t){return typeof t=="function"?t:(t[uh]||(t[uh]=function(e){return t.handleEvent(e)}),t[uh])}function ht(){Gi.call(this),this.i=new Zc(this),this.S=this,this.J=null}dt(ht,Gi);ht.prototype[Aa]=!0;ht.prototype.removeEventListener=function(t,e,n,i){v0(this,t,e,n,i)};function vt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var s=e;e=new xt(i,t),m0(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ol(o,i,!0,e)&&s}if(o=e.g=t,s=ol(o,i,!0,e)&&s,s=ol(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=ol(o,i,!1,e)&&s}ht.prototype.N=function(){if(ht.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Jc(n[i]);delete t.g[e],t.h--}}this.J=null};ht.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ht.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ol(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&md(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ep=ie.JSON.stringify;class uN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hN(){var t=wp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dN{constructor(){this.h=this.g=null}add(e,n){const i=w0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var w0=new uN(()=>new fN,t=>t.reset());class fN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mN(t){ie.setTimeout(()=>{throw t},0)}let Go,Qo=!1,wp=new dN,T0=()=>{const t=ie.Promise.resolve(void 0);Go=()=>{t.then(gN)}};var gN=()=>{for(var t;t=hN();){try{t.h.call(t.g)}catch(n){mN(n)}var e=w0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qo=!1};function eu(t,e){ht.call(this),this.h=t||1,this.g=e||ie,this.j=kt(this.qb,this),this.l=Date.now()}dt(eu,ht);V=eu.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),vt(this,"tick"),this.ga&&(Tp(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){eu.$.N.call(this),Tp(this),delete this.g};function bp(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function b0(t){t.g=bp(()=>{t.g=null,t.i&&(t.i=!1,b0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _N extends Gi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b0(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yo(t){Gi.call(this),this.h=t,this.g={}}dt(Yo,Gi);var y_=[];function I0(t,e,n,i){Array.isArray(n)||(n&&(y_[0]=n.toString()),n=y_);for(var s=0;s<n.length;s++){var r=g0(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function A0(t){mp(t.g,function(e,n){this.g.hasOwnProperty(n)&&_p(e)},t),t.g={}}Yo.prototype.N=function(){Yo.$.N.call(this),A0(this)};Yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tu(){this.g=!0}tu.prototype.Ea=function(){this.g=!1};function yN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function vN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Qs(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wN(t,n)+(i?" "+i:"")})}function EN(t,e){t.info(function(){return"TIMEOUT: "+e})}tu.prototype.info=function(){};function wN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ep(n)}catch{return e}}var Ns={},v_=null;function nu(){return v_=v_||new ht}Ns.Ta="serverreachability";function C0(t){xt.call(this,Ns.Ta,t)}dt(C0,xt);function Xo(t){const e=nu();vt(e,new C0(e))}Ns.STAT_EVENT="statevent";function R0(t,e){xt.call(this,Ns.STAT_EVENT,t),this.stat=e}dt(R0,xt);function Bt(t){const e=nu();vt(e,new R0(e,t))}Ns.Ua="timingevent";function S0(t,e){xt.call(this,Ns.Ua,t),this.size=e}dt(S0,xt);function Ca(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var iu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},P0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ip(){}Ip.prototype.h=null;function E_(t){return t.h||(t.h=t.i())}function k0(){}var Ra={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ap(){xt.call(this,"d")}dt(Ap,xt);function Cp(){xt.call(this,"c")}dt(Cp,xt);var _d;function su(){}dt(su,Ip);su.prototype.g=function(){return new XMLHttpRequest};su.prototype.i=function(){return{}};_d=new su;function Sa(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Yo(this),this.P=TN,t=dd?125:void 0,this.V=new eu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new x0}function x0(){this.i=null,this.g="",this.h=!1}var TN=45e3,yd={},nc={};V=Sa.prototype;V.setTimeout=function(t){this.P=t};function vd(t,e,n){t.L=1,t.v=ou(fi(e)),t.s=n,t.S=!0,D0(t,null)}function D0(t,e){t.G=Date.now(),Pa(t),t.A=fi(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),U0(n.i,"t",i),t.C=0,n=t.l.J,t.h=new x0,t.g=aT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new _N(kt(t.Pa,t,t.g),t.O)),I0(t.U,t.g,"readystatechange",t.nb),e=t.I?p0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Xo(),yN(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&Un(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||dd||this.g&&(this.h.h||this.g.ja()||I_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Xo(3):Xo(2)),ru(this);var n=this.g.da();this.ca=n;t:if(N0(this)){var i=I_(this.g);t="";var s=i.length,r=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),To(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qo(a)){var c=a;break t}}c=null}if(n=c)Qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ed(this,n);else{this.i=!1,this.o=3,Bt(12),cs(this),To(this);break e}}this.S?(O0(this,u,o),dd&&this.i&&u==3&&(I0(this.U,this.V,"tick",this.mb),this.V.start())):(Qs(this.j,this.m,o,null),Ed(this,o)),u==4&&cs(this),this.i&&!this.J&&(u==4?iT(this.l,this):(this.i=!1,Pa(this)))}else jN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),cs(this),To(this)}}}catch{}finally{}};function N0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function O0(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=bN(t,n),s==nc){e==4&&(t.o=4,Bt(14),i=!1),Qs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yd){t.o=4,Bt(15),Qs(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Qs(t.j,t.m,s,null),Ed(t,s);N0(t)&&s!=nc&&s!=yd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Bt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dp(e),e.M=!0,Bt(11))):(Qs(t.j,t.m,n,"[Invalid Chunked Response]"),cs(t),To(t))}V.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(ru(this),O0(this,t,e),this.i&&t!=4&&Pa(this))}};function bN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?nc:(n=Number(e.substring(n,i)),isNaN(n)?yd:(i+=1,i+n>e.length?nc:(e=e.slice(i,i+n),t.C=i+n,e)))}V.cancel=function(){this.J=!0,cs(this)};function Pa(t){t.Y=Date.now()+t.P,M0(t,t.P)}function M0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ca(kt(t.lb,t),e)}function ru(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(EN(this.j,this.A),this.L!=2&&(Xo(),Bt(17)),cs(this),this.o=2,To(this)):M0(this,this.Y-t)};function To(t){t.l.H==0||t.J||iT(t.l,t)}function cs(t){ru(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Tp(t.V),A0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ed(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wd(n.i,t))){if(!t.K&&wd(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)rc(n),cu(n);else break e;xp(n),Bt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ca(kt(n.ib,n),6e3));if(1>=j0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else us(n,11)}else if((t.K||n.g==t)&&rc(n),!qo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Rp(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,Fe(i.I,i.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=oT(i,i.J?i.pa:null,i.Y),o.K){z0(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(ru(a),Pa(a)),i.g=o}else tT(i);0<n.j.length&&uu(n)}else c[0]!="stop"&&c[0]!="close"||us(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?us(n,7):kp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Xo(4)}catch{}}function IN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function AN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function L0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AN(t),i=IN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var V0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _s(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _s){this.h=t.h,ic(this,t.j),this.s=t.s,this.g=t.g,sc(this,t.m),this.l=t.l;var e=t.i,n=new Jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),w_(this,n),this.o=t.o}else t&&(e=String(t).match(V0))?(this.h=!1,ic(this,e[1]||"",!0),this.s=uo(e[2]||""),this.g=uo(e[3]||"",!0),sc(this,e[4]),this.l=uo(e[5]||"",!0),w_(this,e[6]||"",!0),this.o=uo(e[7]||"")):(this.h=!1,this.i=new Jo(null,this.h))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ho(e,T_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ho(e,T_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ho(n,n.charAt(0)=="/"?PN:SN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ho(n,xN)),t.join("")};function fi(t){return new _s(t)}function ic(t,e,n){t.j=n?uo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function w_(t,e,n){e instanceof Jo?(t.i=e,DN(t.i,t.h)):(n||(e=ho(e,kN)),t.i=new Jo(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function ou(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function uo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var T_=/[#\/\?@]/g,SN=/[#\?:]/g,PN=/[#\?]/g,kN=/[#\?@]/g,xN=/#/g;function Jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qi(t){t.g||(t.g=new Map,t.h=0,t.i&&CN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Jo.prototype;V.add=function(t,e){Qi(this),this.i=null,t=Br(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function F0(t,e){Qi(t),e=Br(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $0(t,e){return Qi(t),e=Br(t,e),t.g.has(e)}V.forEach=function(t,e){Qi(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};V.ta=function(){Qi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};V.Z=function(t){Qi(this);let e=[];if(typeof t=="string")$0(this,t)&&(e=e.concat(this.g.get(Br(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Qi(this),this.i=null,t=Br(this,t),$0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function U0(t,e,n){F0(t,e),0<n.length&&(t.i=null,t.g.set(Br(t,e),fp(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Br(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DN(t,e){e&&!t.j&&(Qi(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(F0(this,i),U0(this,s,n))},t)),t.j=e}var NN=class{constructor(t,e){this.g=t,this.map=e}};function B0(t){this.l=t||ON,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ON=10;function H0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function j0(t){return t.h?1:t.g?t.g.size:0}function wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rp(t,e){t.g?t.g.add(e):t.h=e}function z0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}B0.prototype.cancel=function(){if(this.i=W0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function W0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fp(t.i)}var MN=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function LN(){this.g=new MN}function VN(t,e,n){const i=n||"";try{L0(t,function(s,r){let o=s;Ia(s)&&(o=Ep(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function FN(t,e){const n=new tu;if(ie.Image){const i=new Image;i.onload=rl(al,n,i,"TestLoadImage: loaded",!0,e),i.onerror=rl(al,n,i,"TestLoadImage: error",!1,e),i.onabort=rl(al,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=rl(al,n,i,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function al(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ka(t){this.l=t.fc||null,this.j=t.ob||!1}dt(ka,Ip);ka.prototype.g=function(){return new au(this.l,this.j)};ka.prototype.i=function(t){return function(){return t}}({});function au(t,e){ht.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(au,ht);var Sp=0;V=au.prototype;V.open=function(t,e){if(this.readyState!=Sp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zo(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=Sp};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zo(this)),this.g&&(this.readyState=3,Zo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;q0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function q0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xa(this):Zo(this),this.readyState==3&&q0(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,xa(this))};V.Ya=function(t){this.g&&(this.response=t,xa(this))};V.ka=function(){this.g&&xa(this)};function xa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zo(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Zo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(au.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $N=ie.JSON.parse;function qe(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=K0,this.L=this.M=!1}dt(qe,ht);var K0="",UN=/^https?$/i,BN=["POST","PUT"];V=qe.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_d.g(),this.C=this.u?E_(this.u):E_(_d),this.g.onreadystatechange=kt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){b_(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ie.FormData&&t instanceof ie.FormData,!(0<=u0(BN,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Y0(this),0<this.B&&((this.L=HN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.ua,this)):this.A=bp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){b_(this,r)}};function HN(t){return mr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof dp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))};function b_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,G0(t),lu(t)}function G0(t){t.F||(t.F=!0,vt(t,"complete"),vt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),lu(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lu(this,!0)),qe.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Q0(this):this.kb())};V.kb=function(){Q0(this)};function Q0(t){if(t.h&&typeof dp<"u"&&(!t.C[1]||Un(t)!=4||t.da()!=2)){if(t.v&&Un(t)==4)bp(t.La,0,t);else if(vt(t,"readystatechange"),Un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(V0)[1]||null;!s&&ie.self&&ie.self.location&&(s=ie.self.location.protocol.slice(0,-1)),i=!UN.test(s?s.toLowerCase():"")}n=i}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var r=2<Un(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",G0(t)}}finally{lu(t)}}}}function lu(t,e){if(t.g){Y0(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Y0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Un(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$N(e)}};function I_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case K0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function jN(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(qo(t[i]))continue;var n=pN(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}aN(e,function(i){return i.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function X0(t){let e="";return mp(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Pp(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=X0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function to(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function J0(t){this.Ga=0,this.j=[],this.l=new tu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=to("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=to("baseRetryDelayMs",5e3,t),this.hb=to("retryDelaySeedMs",1e4,t),this.eb=to("forwardChannelMaxRetries",2,t),this.xa=to("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new B0(t&&t.concurrentRequestLimit),this.Ja=new LN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=J0.prototype;V.ra=8;V.H=1;function kp(t){if(Z0(t),t.H==3){var e=t.W++,n=fi(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),Da(t,n),e=new Sa(t,t.l,e),e.L=2,e.v=ou(fi(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=aT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pa(e)}rT(t)}function cu(t){t.g&&(Dp(t),t.g.cancel(),t.g=null)}function Z0(t){cu(t),t.u&&(ie.clearTimeout(t.u),t.u=null),rc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function uu(t){if(!H0(t.i)&&!t.m){t.m=!0;var e=t.Na;Go||T0(),Qo||(Go(),Qo=!0),wp.add(e,t),t.C=0}}function zN(t,e){return j0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ca(kt(t.Na,t,e),sT(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Sa(this,this.l,t);let r=this.s;if(this.U&&(r?(r=p0(r),m0(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eT(this,s,e),n=fi(this.I),Fe(n,"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),Da(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(X0(r)))+"&"+e:this.o&&Pp(n,this.o,r)),Rp(this.i,s),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),s.aa=!0,vd(s,n,null)):vd(s,n,e),this.H=2}}else this.H==3&&(t?A_(this,t):this.j.length==0||H0(this.i)||A_(this))};function A_(t,e){var n;e?n=e.m:n=t.W++;const i=fi(t.I);Fe(i,"SID",t.K),Fe(i,"RID",n),Fe(i,"AID",t.V),Da(t,i),t.o&&t.s&&Pp(i,t.o,t.s),n=new Sa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=eT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Rp(t.i,n),vd(n,i,e)}function Da(t,e){t.na&&mp(t.na,function(n,i){Fe(e,i,n)}),t.h&&L0({},function(n,i){Fe(e,i,n)})}function eT(t,e,n){n=Math.min(t.j.length,n);var i=t.h?kt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{VN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function tT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Go||T0(),Qo||(Go(),Qo=!0),wp.add(e,t),t.A=0}}function xp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ca(kt(t.Ma,t),sT(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,nT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ca(kt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),cu(this),nT(this))};function Dp(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function nT(t){t.g=new Sa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=fi(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),Da(t,e),t.o&&t.s&&Pp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ou(fi(e)),n.s=null,n.S=!0,D0(n,t)}V.ib=function(){this.v!=null&&(this.v=null,cu(this),xp(this),Bt(19))};function rc(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function iT(t,e){var n=null;if(t.g==e){rc(t),Dp(t),t.g=null;var i=2}else if(wd(t.i,e))n=e.F,z0(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=nu(),vt(i,new S0(i,n)),uu(t)}else tT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&zN(t,e)||i==2&&xp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}}function sT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function us(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=kt(t.pb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||ic(n,"https"),ou(n)),FN(n.toString(),i)}else Bt(2);t.H=0,t.h&&t.h.za(e),rT(t),Z0(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function rT(t){if(t.H=0,t.ma=[],t.h){const e=W0(t.i);(e.length!=0||t.j.length!=0)&&(m_(t.ma,e),m_(t.ma,t.j),t.i.i.length=0,fp(t.j),t.j.length=0),t.h.ya()}}function oT(t,e,n){var i=n instanceof _s?fi(n):new _s(n);if(i.g!="")e&&(i.g=e+"."+i.g),sc(i,i.m);else{var s=ie.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new _s(null);i&&ic(r,i),e&&(r.g=e),s&&sc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Fe(i,n,e),Fe(i,"VER",t.ra),Da(t,i),i}function aT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new qe(new ka({ob:!0})):new qe(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function lT(){}V=lT.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function oc(){if(mr&&!(10<=Number(iN)))throw Error("Environmental error: no available transport.")}oc.prototype.g=function(t,e){return new ln(t,e)};function ln(t,e){ht.call(this),this.g=new J0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hr(this)}dt(ln,ht);ln.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=oT(t,null,t.Y),uu(t)};ln.prototype.close=function(){kp(this.g)};ln.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ep(t),t=n);e.j.push(new NN(e.fb++,t)),e.H==3&&uu(e)};ln.prototype.N=function(){this.g.h=null,delete this.j,kp(this.g),delete this.g,ln.$.N.call(this)};function cT(t){Ap.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(cT,Ap);function uT(){Cp.call(this),this.status=1}dt(uT,Cp);function Hr(t){this.g=t}dt(Hr,lT);Hr.prototype.Ba=function(){vt(this.g,"a")};Hr.prototype.Aa=function(t){vt(this.g,new cT(t))};Hr.prototype.za=function(t){vt(this.g,new uT)};Hr.prototype.ya=function(){vt(this.g,"b")};function WN(){this.blockSize=-1}function Rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(Rn,WN);Rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hh(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)hh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){hh(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){hh(this,i),s=0;break}}this.h=s,this.i+=e};Rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ke(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var qN={};function Np(t){return-128<=t&&128>t?eN(t,function(e){return new ke([e|0],0>e?-1:0)}):new ke([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return sr;if(0>t)return gt(Bn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Td;return new ke(e,0)}function hT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return gt(hT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),i=sr,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Bn(Math.pow(e,r)),i=i.R(r).add(Bn(o))):(i=i.R(n),i=i.add(Bn(o)))}return i}var Td=4294967296,sr=Np(0),bd=Np(1),C_=Np(16777216);V=ke.prototype;V.ea=function(){if(un(this))return-gt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Td+i)*e,e*=Td}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ci(this))return"0";if(un(this))return"-"+gt(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,i="";;){var s=lc(n,e).g;n=ac(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ci(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ci(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function un(t){return t.h==-1}V.X=function(t){return t=ac(this,t),un(t)?-1:ci(t)?0:1};function gt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ke(n,~t.h).add(bd)}V.abs=function(){return un(this)?gt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ke(n,n[n.length-1]&-2147483648?-1:0)};function ac(t,e){return t.add(gt(e))}V.R=function(t){if(ci(this)||ci(t))return sr;if(un(this))return un(t)?gt(this).R(gt(t)):gt(gt(this).R(t));if(un(t))return gt(this.R(gt(t)));if(0>this.X(C_)&&0>t.X(C_))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,ll(n,2*i+2*s),n[2*i+2*s+1]+=r*l,ll(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,ll(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,ll(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ke(n,0)};function ll(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function no(t,e){this.g=t,this.h=e}function lc(t,e){if(ci(e))throw Error("division by zero");if(ci(t))return new no(sr,sr);if(un(t))return e=lc(gt(t),e),new no(gt(e.g),gt(e.h));if(un(e))return e=lc(t,gt(e)),new no(gt(e.g),e.h);if(30<t.g.length){if(un(t)||un(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bd,i=e;0>=i.X(t);)n=R_(n),i=R_(i);var s=Us(n,1),r=Us(i,1);for(i=Us(i,2),n=Us(n,2);!ci(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Us(i,1),n=Us(n,1)}return e=ac(t,s.R(e)),new no(s,e)}for(s=sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Bn(n),o=r.R(e);un(o)||0<o.X(t);)n-=i,r=Bn(n),o=r.R(e);ci(r)&&(r=bd),s=s.add(r),t=ac(t,o)}return new no(s,t)}V.gb=function(t){return lc(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ke(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ke(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ke(n,this.h^t.h)};function R_(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ke(n,t.h)}function Us(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ke(s,t.h)}oc.prototype.createWebChannel=oc.prototype.g;ln.prototype.send=ln.prototype.u;ln.prototype.open=ln.prototype.m;ln.prototype.close=ln.prototype.close;iu.NO_ERROR=0;iu.TIMEOUT=8;iu.HTTP_ERROR=6;P0.COMPLETE="complete";k0.EventType=Ra;Ra.OPEN="a";Ra.CLOSE="b";Ra.ERROR="c";Ra.MESSAGE="d";ht.prototype.listen=ht.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;Rn.prototype.digest=Rn.prototype.l;Rn.prototype.reset=Rn.prototype.reset;Rn.prototype.update=Rn.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Bn;ke.fromString=hT;var KN=function(){return new oc},GN=function(){return nu()},dh=iu,QN=P0,YN=Ns,S_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},XN=ka,cl=k0,JN=qe,ZN=Rn,rr=ke;const P_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new fa("@firebase/firestore");function k_(){return Is.logLevel}function K(t,...e){if(Is.logLevel<=Ee.DEBUG){const n=e.map(Op);Is.debug(`Firestore (${jr}): ${t}`,...n)}}function pi(t,...e){if(Is.logLevel<=Ee.ERROR){const n=e.map(Op);Is.error(`Firestore (${jr}): ${t}`,...n)}}function gr(t,...e){if(Is.logLevel<=Ee.WARN){const n=e.map(Op);Is.warn(`Firestore (${jr}): ${t}`,...n)}}function Op(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw pi(e),new Error(e)}function Pe(t,e){t||ee()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class tO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nO{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string"),new dT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new bt(e)}}class iO{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sO{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new iO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new rO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=aO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ae(t,e){return t<e?-1:t>e?1:0}function _r(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Ze(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ze(0,0))}static max(){return new te(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,i){n===void 0?n=0:n>e.length&&ee(),i===void 0?i=e.length-n:i>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ea?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends ea{construct(e,n,i){return new Be(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const lO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends ea{construct(e,n,i){return new St(e,n,i)}static isValidIdentifier(e){return lO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new z(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Be.fromString(e))}static fromName(e){return new J(Be.fromString(e).popFirst(5))}static empty(){return new J(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Be(e.slice()))}}function cO(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(i===1e9?new Ze(n+1,0):new Ze(n,i));return new ji(s,J.empty(),e)}function uO(t){return new ji(t.readTime,t.key,-1)}class ji{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new ji(te.min(),J.empty(),-1)}static max(){return new ji(te.max(),J.empty(),-1)}}function hO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const dO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==dO)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,i)=>{n(e)})}static reject(e){return new N((n,i)=>{i(e)})}static waitFor(e){return new N((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=N.resolve(!1);for(const i of e)n=n.next(s=>s?N.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new N((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new N((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Oa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Mp.ae=-1;function Ma(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function pO(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??mt.RED,this.left=s??mt.EMPTY,this.right=r??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new mt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,i,s,r){return this}insert(e,n,i){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D_(this.data.getIterator())}getIteratorFrom(e){return new D_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dt(this.comparator);return n.data=e,n}}class D_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new nn([])}unionWith(e){let n=new Dt(St.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _r(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class mT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new mT("Invalid base64 string: "+r):r}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const mO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=mO.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */function Lp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vp(t){const e=t.mapValue.fields.__previous_value__;return Lp(e)?Vp(e):e}function ta(t){const e=zi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lp(t)?4:_O(t)?9007199254740991:10:ee()}function Qn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=zi(s.timestampValue),a=zi(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return As(s.bytesValue).isEqual(As(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Xe(s.geoPointValue.latitude)===Xe(r.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Xe(s.integerValue)===Xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Xe(s.doubleValue),a=Xe(r.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _r(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(x_(o)!==x_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qn(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function ia(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function yr(t,e){if(t===e)return 0;const n=Cs(t),i=Cs(e);if(n!==i)return Ae(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Xe(r.integerValue||r.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return N_(t.timestampValue,e.timestampValue);case 4:return N_(ta(t),ta(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(r,o){const a=As(r),l=As(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ae(Xe(r.latitude),Xe(o.latitude));return a!==0?a:Ae(Xe(r.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=yr(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===hl.mapValue&&o===hl.mapValue)return 0;if(r===hl.mapValue)return 1;if(o===hl.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ae(l[h],u[h]);if(d!==0)return d;const f=yr(a[l[h]],c[u[h]]);if(f!==0)return f}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function N_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=zi(t),i=zi(e),s=Ae(n.seconds,i.seconds);return s!==0?s:Ae(n.nanos,i.nanos)}function vr(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=zi(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return As(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Id(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Id(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function Ad(t){return!!t&&"integerValue"in t}function Fp(t){return!!t&&"arrayValue"in t}function O_(t){return!!t&&"nullValue"in t}function M_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Os(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=bo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _O(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=St.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=bo(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Al(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Os(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new $t(bo(this.value))}}function gT(t){const e=[];return Os(t.fields,(n,i)=>{const s=new St([n]);if(Al(i)){const r=gT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,te.min(),te.min(),te.min(),$t.empty(),0)}static newFoundDocument(e,n,i,s){return new at(e,1,n,te.min(),i,s,0)}static newNoDocument(e,n){return new at(e,2,n,te.min(),te.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,te.min(),te.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uc{constructor(e,n){this.position=e,this.inclusive=n}}function L_(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=J.comparator(J.fromName(o.referenceValue),n.key):i=yr(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function V_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Io{constructor(e,n="asc"){this.field=e,this.dir=n}}function yO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _T{}class nt extends _T{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new EO(e,n,i):n==="array-contains"?new bO(e,i):n==="in"?new IO(e,i):n==="not-in"?new AO(e,i):n==="array-contains-any"?new CO(e,i):new nt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new wO(e,i):new TO(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yr(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(yr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yn extends _T{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yn(e,n)}matches(e){return yT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function yT(t){return t.op==="and"}function vT(t){return vO(t)&&yT(t)}function vO(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function Cd(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+vr(t.value);if(vT(t))return t.filters.map(e=>Cd(e)).join(",");{const e=t.filters.map(n=>Cd(n)).join(",");return`${t.op}(${e})`}}function ET(t,e){return t instanceof nt?function(i,s){return s instanceof nt&&i.op===s.op&&i.field.isEqual(s.field)&&Qn(i.value,s.value)}(t,e):t instanceof Yn?function(i,s){return s instanceof Yn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&ET(o,s.filters[a]),!0):!1}(t,e):void ee()}function wT(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${vr(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class EO extends nt{constructor(e,n,i){super(e,n,i),this.key=J.fromName(i.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class wO extends nt{constructor(e,n){super(e,"in",n),this.keys=TT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TO extends nt{constructor(e,n){super(e,"not-in",n),this.keys=TT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>J.fromName(i.referenceValue))}class bO extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fp(n)&&ia(n.arrayValue,this.value)}}class IO extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class AO extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class CO extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ia(this.value.arrayValue,i))}}/**
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
 */class RO{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function F_(t,e=null,n=[],i=[],s=null,r=null,o=null){return new RO(t,e,n,i,s,r,o)}function $p(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Cd(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>vr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>vr(i)).join(",")),e.he=n}return e.he}function Up(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ET(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V_(t.startAt,e.startAt)&&V_(t.endAt,e.endAt)}function Rd(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function SO(t,e,n,i,s,r,o,a){return new hu(t,e,n,i,s,r,o,a)}function du(t){return new hu(t)}function $_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function xO(t){return t.collectionGroup!==null}function or(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=kO(e),i=PO(e);if(n!==null&&i===null)n.isKeyField()||e.Pe.push(new Io(n)),e.Pe.push(new Io(St.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Io(St.keyField(),r))}}}return e.Pe}function mi(t){const e=ae(t);if(!e.Ie)if(e.limitType==="F")e.Ie=F_(e.path,e.collectionGroup,or(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of or(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Io(r.field,o))}const i=e.endAt?new uc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new uc(e.startAt.position,e.startAt.inclusive):null;e.Ie=F_(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.Ie}function Sd(t,e,n){return new hu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return Up(mi(t),mi(e))&&t.limitType===e.limitType}function bT(t){return`${$p(mi(t))}|lt:${t.limitType}`}function Pd(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>wT(s)).join(", ")}]`),Ma(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>vr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>vr(s)).join(",")),`Target(${i})`}(mi(t))}; limitType=${t.limitType})`}function pu(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):J.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of or(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=L_(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,or(i),s)||i.endAt&&!function(o,a,l){const c=L_(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,or(i),s))}(t,e)}function DO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IT(t){return(e,n)=>{let i=!1;for(const s of or(t)){const r=NO(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function NO(t,e,n){const i=t.field.isKeyField()?J.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?yr(l,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Os(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return pT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new ze(J.comparator);function gi(){return OO}const AT=new ze(J.comparator);function fo(...t){let e=AT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=AT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function hs(){return Ao()}function RT(){return Ao()}function Ao(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const MO=new ze(J.comparator),LO=new Dt(J.comparator);function fe(...t){let e=LO;for(const n of t)e=e.add(n);return e}const VO=new Dt(Ae);function FO(){return VO}/**
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
 */function ST(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function PT(t){return{integerValue:""+t}}function kT(t,e){return pO(e)?PT(e):ST(t,e)}/**
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
 */class mu{constructor(){this._=void 0}}function $O(t,e,n){return t instanceof hc?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Lp(r)&&(r=Vp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Er?DT(t,e):t instanceof wr?NT(t,e):function(s,r){const o=xT(s,r),a=U_(o)+U_(s.Te);return Ad(o)&&Ad(s.Te)?PT(a):ST(s.serializer,a)}(t,e)}function UO(t,e,n){return t instanceof Er?DT(t,e):t instanceof wr?NT(t,e):n}function xT(t,e){return t instanceof sa?function(i){return Ad(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class hc extends mu{}class Er extends mu{constructor(e){super(),this.elements=e}}function DT(t,e){const n=OT(e);for(const i of t.elements)n.some(s=>Qn(s,i))||n.push(i);return{arrayValue:{values:n}}}class wr extends mu{constructor(e){super(),this.elements=e}}function NT(t,e){let n=OT(e);for(const i of t.elements)n=n.filter(s=>!Qn(s,i));return{arrayValue:{values:n}}}class sa extends mu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function U_(t){return Xe(t.integerValue||t.doubleValue)}function OT(t){return Fp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.field=e,this.transform=n}}function BO(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Er&&s instanceof Er||i instanceof wr&&s instanceof wr?_r(i.elements,s.elements,Qn):i instanceof sa&&s instanceof sa?Qn(i.Te,s.Te):i instanceof hc&&s instanceof hc}(t.transform,e.transform)}class HO{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hp(t.key,Ut.none()):new La(t.key,t.data,Ut.none());{const n=t.data,i=$t.empty();let s=new Dt(St.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Yi(t.key,i,new nn(s.toArray()),Ut.none())}}function jO(t,e,n){t instanceof La?function(s,r,o){const a=s.value.clone(),l=H_(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yi?function(s,r,o){if(!Cl(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=H_(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(LT(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Co(t,e,n,i){return t instanceof La?function(r,o,a,l){if(!Cl(r.precondition,o))return a;const c=r.value.clone(),u=j_(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Yi?function(r,o,a,l){if(!Cl(r.precondition,o))return a;const c=j_(r.fieldTransforms,l,o),u=o.data;return u.setAll(LT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Cl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zO(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=xT(i.transform,s||null);r!=null&&(n===null&&(n=$t.empty()),n.set(i.field,r))}return n||null}function B_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&_r(i,s,(r,o)=>BO(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends gu{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yi extends gu{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function LT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function H_(t,e,n){const i=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,UO(o,a,n[s]))}return i}function j_(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,$O(r,o,e))}return i}class Hp extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VT extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&jO(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Co(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Co(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=RT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=MT(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&_r(this.mutations,e.mutations,(n,i)=>B_(n,i))&&_r(this.baseMutations,e.baseMutations,(n,i)=>B_(n,i))}}class jp{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Pe(e.mutations.length===i.length);let s=function(){return MO}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new jp(e,n,i,s)}}/**
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
 */class qO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,me;function FT(t){switch(t){default:return ee();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function $T(t){if(t===void 0)return pi("GRPC error has no .code"),P.UNKNOWN;switch(t){case Ye.OK:return P.OK;case Ye.CANCELLED:return P.CANCELLED;case Ye.UNKNOWN:return P.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return P.INTERNAL;case Ye.UNAVAILABLE:return P.UNAVAILABLE;case Ye.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ye.NOT_FOUND:return P.NOT_FOUND;case Ye.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ye.ABORTED:return P.ABORTED;case Ye.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ye.DATA_LOSS:return P.DATA_LOSS;default:return ee()}}(me=Ye||(Ye={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return dl}static getOrCreateInstance(){return dl===null&&(dl=new zp),dl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let dl=null;/**
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
 */function GO(){return new TextEncoder}/**
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
 */const QO=new rr([4294967295,4294967295],0);function z_(t){const e=GO().encode(t),n=new ZN;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rr([n,i],0),new rr([s,r],0)]}class Wp{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(i<0)throw new po(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=rr.fromNumber(this.de)}Re(e,n,i){let s=e.add(n.multiply(rr.fromNumber(i)));return s.compare(QO)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=z_(e),[i,s]=W_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);if(!this.Ve(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Wp(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=z_(e),[i,s]=W_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);this.me(o)}}me(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new _u(te.min(),s,new ze(Ae),gi(),fe())}}class Va{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Va(i,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,i,s){this.fe=e,this.removedTargetIds=n,this.key=i,this.ge=s}}class UT{constructor(e,n){this.targetId=e,this.pe=n}}class BT{constructor(e,n,i=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class q_{constructor(){this.ye=0,this.we=G_(),this.Se=Mt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=fe(),n=fe(),i=fe();return this.we.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ee()}}),new Va(this.Se,this.be,e,n,i)}xe(){this.De=!1,this.we=G_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class YO{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=gi(),this.$e=K_(),this.Ue=new ze(Ae)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const i=this.He(n);switch(e.state){case 0:this.Je(n)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),i.Fe(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((i,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,i;const s=e.targetId,r=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Rd(a))if(r===0){const l=new J(a.path);this.ze(s,l,at.newNoDocument(l,te.min()))}else Pe(r===1);else{const l=this.et(s);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=zp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var y,v,T,I,A,R;const $={localCacheCount:f,existenceFilterCount:g.count},Q=g.unchangedNames;return Q&&($.bloomFilter={applied:h===0,hashCount:(y=Q==null?void 0:Q.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(I=(T=(v=Q==null?void 0:Q.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&I!==void 0?I:0,padding:(R=(A=Q==null?void 0:Q.bits)===null||A===void 0?void 0:A.padding)!==null&&R!==void 0?R:0},d&&($.bloomFilter.mightContain=d)),$}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=As(r).toUint8Array()}catch(h){if(h instanceof mT)return gr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Wp(l,o,a)}catch(h){return gr(h instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const i=this.qe.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Rd(a.target)){const l=new J(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,at.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let i=fe();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const s=new _u(e,n,this.Ue,this.Ke,i);return this.Ke=gi(),this.$e=K_(),this.Ue=new ze(Ae),s}Ge(e,n){if(!this.Je(e))return;const i=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,i),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,i){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),i&&(this.Ke=this.Ke.insert(n,i))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new q_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Dt(Ae),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new q_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function K_(){return new ze(J.comparator)}function G_(){return new ze(J.comparator)}const XO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZO=(()=>({and:"AND",or:"OR"}))();class eM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Ma(e)?e:{value:e}}function dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tM(t,e){return dc(t,e.toTimestamp())}function on(t){return Pe(!!t),te.fromTimestamp(function(n){const i=zi(n);return new Ze(i.seconds,i.nanos)}(t))}function qp(t,e){return function(i){return new Be(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function jT(t){const e=Be.fromString(t);return Pe(GT(e)),e}function fc(t,e){return qp(t.databaseId,e.path)}function Ro(t,e){const n=jT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(zT(n))}function xd(t,e){return qp(t.databaseId,e)}function nM(t){const e=jT(t);return e.length===4?Be.emptyPath():zT(e)}function ra(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zT(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:fc(t,e),fields:n.value.mapValue.fields}}function iM(t,e){return"found"in e?function(i,s){Pe(!!s.found),s.found.name,s.found.updateTime;const r=Ro(i,s.found.name),o=on(s.found.updateTime),a=s.found.createTime?on(s.found.createTime):te.min(),l=new $t({mapValue:{fields:s.found.fields}});return at.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(i,s){Pe(!!s.missing),Pe(!!s.readTime);const r=Ro(i,s.missing),o=on(s.readTime);return at.newNoDocument(r,o)}(t,e):ee()}function sM(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Pe(u===void 0||typeof u=="string"),Mt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),Mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?P.UNKNOWN:$T(c.code);return new z(u,c.message||"")}(o);n=new BT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ro(t,i.document.name),r=on(i.document.updateTime),o=i.document.createTime?on(i.document.createTime):te.min(),a=new $t({mapValue:{fields:i.document.fields}}),l=at.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Rl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ro(t,i.document),r=i.readTime?on(i.readTime):te.min(),o=at.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Rl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ro(t,i.document),r=i.removedTargetIds||[];n=new Rl([],r,s,null)}else{if(!("filter"in e))return ee();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new KO(s,r),a=i.targetId;n=new UT(a,o)}}return n}function WT(t,e){let n;if(e instanceof La)n={update:Q_(t,e.key,e.value)};else if(e instanceof Hp)n={delete:fc(t,e.key)};else if(e instanceof Yi)n={update:Q_(t,e.key,e.data),updateMask:fM(e.fieldMask)};else{if(!(e instanceof VT))return ee();n={verify:fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof hc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Er)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:tM(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ee()}(t,e.precondition)),n}function rM(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?on(s.updateTime):on(r);return o.isEqual(te.min())&&(o=on(r)),new HO(o,s.transformResults||[])}(n,e))):[]}function oM(t,e){return{documents:[xd(t,e.path)]}}function aM(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=xd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return KT(Yn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Hs(h.field),direction:uM(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=kd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lM(t){let e=nM(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Pe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=qT(h);return d instanceof Yn&&vT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Io(js(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ma(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new uc(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new uc(f,d)}(n.endAt)),SO(e,s,o,r,a,"F",l,c)}function cM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=js(n.unaryFilter.field);return nt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=js(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=js(n.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(i=>qT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function uM(t){return XO[t]}function hM(t){return JO[t]}function dM(t){return ZO[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function js(t){return St.fromServerFormat(t.fieldPath)}function KT(t){return t instanceof nt?function(n){if(n.op==="=="){if(M_(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NAN"}};if(O_(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M_(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NAN"}};if(O_(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(n.field),op:hM(n.op),value:n.value}}}(t):t instanceof Yn?function(n){const i=n.getFilters().map(s=>KT(s));return i.length===1?i[0]:{compositeFilter:{op:dM(n.op),filters:i}}}(t):ee()}function fM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,i,s,r=te.min(),o=te.min(),a=Mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.ct=e}}function mM(t){const e=lM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
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
 */class gM{constructor(){this.sn=new _M}addToCollectionParentIndex(e,n){return this.sn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(ji.min())}updateCollectionGroup(e,n,i){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class _M{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Dt(Be.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Dt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Tr(0)}static On(){return new Tr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?N.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Co(i.mutation,s,nn.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,fe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=fe()){const s=hs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=fo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=hs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,fe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=gi();const o=Ao(),a=function(){return Ao()}();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Yi)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Co(u.mutation,c,u.mutation.getFieldMask(),Ze.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new vM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ao();let s=new ze((o,a)=>o-a),r=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||nn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||fe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=RT();u.forEach(d=>{if(!r.has(d)){const f=MT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return J.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):N.resolve(hs());let a=-1,l=r;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,fe())).next(u=>({batchId:a,changes:CT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(i=>{let s=fo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=fo();return this.indexManager.getCollectionParents(e,s).next(o=>N.forEach(o,a=>{const l=function(u,h){return new hu(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,at.newInvalidDocument(c)))});let o=fo();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Co(c.mutation,l,nn.empty(),Ze.now()),pu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class wM{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return N.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:mM(s.bundledQuery),readTime:on(s.readTime)}}(n)),N.resolve()}}/**
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
 */class TM{constructor(){this.overlays=new ze(J.comparator),this.cr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const i=hs();return N.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ht(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.cr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(i)),N.resolve()}getOverlaysForCollection(e,n,i){const s=hs(),r=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=hs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=hs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}ht(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(i.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new qO(n,i));let r=this.cr.get(n);r===void 0&&(r=fe(),this.cr.set(n,r)),this.cr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.lr=new Dt(ot.hr),this.Pr=new Dt(ot.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const i=new ot(e,n);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Er(new ot(e,n))}dr(e,n){e.forEach(i=>this.removeReference(i,n))}Ar(e){const n=new J(new Be([])),i=new ot(n,e),s=new ot(n,e+1),r=[];return this.Pr.forEachInRange([i,s],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new J(new Be([])),i=new ot(n,e),s=new ot(n,e+1);let r=fe();return this.Pr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ot(e,0),i=this.lr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ot{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return J.comparator(e.key,n.key)||Ae(e.mr,n.mr)}static Ir(e,n){return Ae(e.mr,n.mr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Dt(ot.hr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WO(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new ot(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.wr(i),r=s<0?0:s;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([i,s],o=>{const a=this.yr(o.mr);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Dt(Ae);return n.forEach(s=>{const r=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{i=i.add(a.mr)})}),N.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;J.isDocumentKey(r)||(r=r.child(""));const o=new ot(new J(r),0);let a=new Dt(Ae);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),N.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(i=>{const s=this.yr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return N.forEach(n.mutations,s=>{const r=new ot(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,n){const i=new ot(n,0),s=this.pr.firstAfterOrEqual(i);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.Dr=e,this.docs=function(){return new ze(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return N.resolve(i?i.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let i=gi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():at.newInvalidDocument(s))}),N.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=gi();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hO(uO(u),i)<=0||(s.has(u.key)||pu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ee()}vr(e,n){return N.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new AM(this)}getSize(e){return N.resolve(this.size)}}class AM extends yM{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(i)}),N.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.persistence=e,this.Cr=new zr(n=>$p(n),Up),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Kp,this.targetCount=0,this.Or=Tr.xn()}forEachTarget(e,n){return this.Cr.forEach((i,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Fr&&(this.Fr=n),N.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Tr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Ln(n),N.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(r).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cr.get(n)||null;return N.resolve(i)}addMatchingKeys(e,n,i){return this.Mr.Tr(n,i),N.resolve()}removeMatchingKeys(e,n,i){this.Mr.dr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),N.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Mr.Vr(n);return N.resolve(i)}containsKey(e,n){return N.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Mp(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new CM(this),this.indexManager=new gM,this.remoteDocumentCache=function(s){return new IM(s)}(i=>this.referenceDelegate.qr(i)),this.serializer=new pM(n),this.Qr=new wM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Nr[e.toKey()];return i||(i=new bM(n,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,i){K("MemoryPersistence","Starting transaction:",e);const s=new SM(this.Br.next());return this.referenceDelegate.Kr(),i(s).next(r=>this.referenceDelegate.$r(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ur(e,n){return N.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,n)))}}class SM extends fO{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Wr=new Kp,this.Gr=null}static zr(e){return new Gp(e)}get jr(){if(this.Gr)return this.Gr;throw ee()}addReference(e,n,i){return this.Wr.addReference(i,n),this.jr.delete(i.toString()),N.resolve()}removeReference(e,n,i){return this.Wr.removeReference(i,n),this.jr.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.jr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.jr,i=>{const s=J.fromPath(i);return this.Hr(e,s).next(r=>{r||n.removeEntry(s,te.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(i=>{i?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return N.or([()=>N.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Li=i,this.ki=s}static qi(e,n){let i=fe(),s=fe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Qp(e,n.fromCache,i,s)}}/**
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
 */class PM{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.$i(e,n).next(r=>r||this.Ui(e,n,s,i)).next(r=>r||this.Wi(e,n))}$i(e,n){if($_(n))return N.resolve(null);let i=mi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sd(n,null,"F"),i=mi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=fe(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Sd(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,i,s){return $_(n)||s.isEqual(te.min())?this.Wi(e,n):this.Ki.getDocuments(e,i).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,i,s)?this.Wi(e,n):(k_()<=Ee.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pd(n)),this.ji(e,o,n,cO(s,-1)))})}Gi(e,n){let i=new Dt(IT(e));return n.forEach((s,r)=>{pu(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Wi(e,n){return k_()<=Ee.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Pd(n)),this.Ki.getDocumentsMatchingQuery(e,n,ji.min())}ji(e,n,i,s){return this.Ki.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class kM{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new ze(Ae),this.Yi=new zr(r=>$p(r),Up),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EM(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function xM(t,e,n,i){return new kM(t,e,n,i)}async function QT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.es(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=fe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function DM(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=N.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const v=c.docVersions.get(g);Pe(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=fe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function YT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function NM(t,e){const n=ae(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Mt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=gi(),c=fe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(OM(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(te.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function OM(t,e,n){let i=fe(),s=fe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=gi();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function MM(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function LM(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.kr.getTargetData(i,e).next(r=>r?(s=r,N.resolve(s)):n.kr.allocateTargetId(i).next(o=>(s=new xi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.kr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function Dd(t,e,n){const i=ae(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Oa(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Y_(t,e,n){const i=ae(t);let s=te.min(),r=fe();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ae(l),d=h.Yi.get(u);return d!==void 0?N.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,mi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?r:fe())).next(a=>(VM(i,DO(e),a),{documents:a,ss:r})))}function VM(t,e,n){let i=t.Zi.get(e)||te.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Zi.set(e,i)}class X_{constructor(){this.activeTargetIds=FO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FM{constructor(){this.Hs=new X_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,i){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new X_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $M{Ys(e){}shutdown(){}}/**
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
 */class J_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fl=null;function fh(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
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
 */const UM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class HM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=i+"://"+n.host,this.Eo=`projects/${s}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Ro(){return!1}Vo(n,i,s,r,o){const a=fh(),l=this.mo(n,i);K("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,s).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw gr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,i,s,r,o,a){return this.Vo(n,i,s,r,o)}fo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}mo(n,i){const s=UM[n];return`${this.To}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,i,s){const r=fh();return new Promise((o,a)=>{const l=new JN;l.setWithCredentials(!0),l.listenOnce(QN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dh.NO_ERROR:const u=l.getResponseJson();K(Tt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case dh.TIMEOUT:K(Tt,`RPC '${e}' ${r} timed out`),a(new z(P.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const h=l.getStatus();if(K(Tt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(T)>=0?T:P.UNKNOWN}(f.status);a(new z(g,f.message))}else a(new z(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(P.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K(Tt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);K(Tt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=fh(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KN(),a=GN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new XN({})),this.fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");K(Tt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new BM({so:v=>{f?K(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(K(Tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),K(Tt,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,T,I)=>{v.listen(T,A=>{try{I(A)}catch(R){setTimeout(()=>{throw R},0)}})};return y(h,cl.EventType.OPEN,()=>{f||K(Tt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,cl.EventType.CLOSE,()=>{f||(f=!0,K(Tt,`RPC '${e}' stream ${s} transport closed`),g.Po())}),y(h,cl.EventType.ERROR,v=>{f||(f=!0,gr(Tt,`RPC '${e}' stream ${s} transport errored:`,v),g.Po(new z(P.UNAVAILABLE,"The operation could not be completed")))}),y(h,cl.EventType.MESSAGE,v=>{var T;if(!f){const I=v.data[0];Pe(!!I);const A=I,R=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(R){K(Tt,`RPC '${e}' stream ${s} received error:`,R);const $=R.status;let Q=function(se){const be=Ye[se];if(be!==void 0)return $T(be)}($),le=R.message;Q===void 0&&(Q=P.INTERNAL,le="Unknown error status: "+$+" with message "+R.message),f=!0,g.Po(new z(Q,le)),h.close()}else K(Tt,`RPC '${e}' stream ${s} received:`,I),g.Io(I)}}),y(a,YN.STAT_EVENT,v=>{v.stat===S_.PROXY?K(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===S_.NOPROXY&&K(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function ph(){return typeof document<"u"?document:null}/**
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
 */function yu(t){return new eM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-i);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.Bo=i,this.Lo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Yp(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(pi(n.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.ko===n&&this.e_(i,s)},i=>{e(()=>{const s=new z(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(s)})})}e_(e,n){const i=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{i(()=>this.t_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jM extends XT{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=sM(this.serializer,e),i=function(r){if(!("targetChange"in r))return te.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?on(o.readTime):te.min()}(e);return this.listener.r_(n,i)}i_(e){const n={};n.database=ra(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Rd(l)?{documents:oM(r,l)}:{query:aM(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HT(r,o.resumeToken);const c=kd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=dc(r,o.snapshotVersion.toTimestamp());const c=kd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=cM(this.serializer,e);i&&(n.labels=i),this.Ho(n)}s_(e){const n={};n.database=ra(this.serializer),n.removeTarget=e,this.Ho(n)}}class zM extends XT{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=rM(e.writeResults,e.commitTime),i=on(e.commitTime);return this.listener.u_(i,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ra(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>WT(this.serializer,i))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new z(P.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Vo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(P.UNKNOWN,s.toString())})}yo(e,n,i,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(P.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class qM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(pi(n),this.d_=!1):K("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{Ms(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ae(l);c.y_.add(4),await Fa(c),c.b_.set("Unknown"),c.y_.delete(4),await vu(c)}(this))})}),this.b_=new qM(i,s)}}async function vu(t){if(Ms(t))for(const e of t.w_)await e(!0)}async function Fa(t){for(const e of t.w_)await e(!1)}function JT(t,e){const n=ae(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Zp(n)?Jp(n):Wr(n).Uo()&&Xp(n,e))}function ZT(t,e){const n=ae(t),i=Wr(n);n.p_.delete(e),i.Uo()&&eb(n,e),n.p_.size===0&&(i.Uo()?i.zo():Ms(n)&&n.b_.set("Unknown"))}function Xp(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wr(t).i_(e)}function eb(t,e){t.D_.Be(e),Wr(t).s_(e)}function Jp(t){t.D_=new YO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Wr(t).start(),t.b_.A_()}function Zp(t){return Ms(t)&&!Wr(t).$o()&&t.p_.size>0}function Ms(t){return ae(t).y_.size===0}function tb(t){t.D_=void 0}async function GM(t){t.p_.forEach((e,n)=>{Xp(t,e)})}async function QM(t,e){tb(t),Zp(t)?(t.b_.m_(e),Jp(t)):t.b_.set("Unknown")}async function YM(t,e,n){if(t.b_.set("Online"),e instanceof BT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(i){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await pc(t,i)}else if(e instanceof Rl?t.D_.We(e):e instanceof UT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(te.min()))try{const i=await YT(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(Mt.EMPTY_BYTE_STRING,u.snapshotVersion)),eb(r,l);const h=new xi(u.target,l,c,u.sequenceNumber);Xp(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){K("RemoteStore","Failed to raise snapshot:",i),await pc(t,i)}}async function pc(t,e,n){if(!Oa(e))throw e;t.y_.add(1),await Fa(t),t.b_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await vu(t)})}function nb(t,e){return e().catch(n=>pc(t,n,e))}async function Eu(t){const e=ae(t),n=Wi(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;XM(e);)try{const s=await MM(e.localStore,i);if(s===null){e.g_.length===0&&n.zo();break}i=s.batchId,JM(e,s)}catch(s){await pc(e,s)}ib(e)&&sb(e)}function XM(t){return Ms(t)&&t.g_.length<10}function JM(t,e){t.g_.push(e);const n=Wi(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ib(t){return Ms(t)&&!Wi(t).$o()&&t.g_.length>0}function sb(t){Wi(t).start()}async function ZM(t){Wi(t).l_()}async function eL(t){const e=Wi(t);for(const n of t.g_)e.a_(n.mutations)}async function tL(t,e,n){const i=t.g_.shift(),s=jp.from(i,e,n);await nb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Eu(t)}async function nL(t,e){e&&Wi(t).__&&await async function(i,s){if(function(o){return FT(o)&&o!==P.ABORTED}(s.code)){const r=i.g_.shift();Wi(i).Go(),await nb(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Eu(i)}}(t,e),ib(t)&&sb(t)}async function Z_(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const i=Ms(n);n.y_.add(3),await Fa(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await vu(n)}async function iL(t,e){const n=ae(t);e?(n.y_.delete(2),await vu(n)):e||(n.y_.add(2),await Fa(n),n.b_.set("Unknown"))}function Wr(t){return t.v_||(t.v_=function(n,i,s){const r=ae(n);return r.P_(),new jM(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:GM.bind(null,t),uo:QM.bind(null,t),r_:YM.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Zp(t)?Jp(t):t.b_.set("Unknown")):(await t.v_.stop(),tb(t))})),t.v_}function Wi(t){return t.C_||(t.C_=function(n,i,s){const r=ae(n);return r.P_(),new zM(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:ZM.bind(null,t),uo:nL.bind(null,t),c_:eL.bind(null,t),u_:tL.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Eu(t)):(await t.C_.stop(),t.g_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new em(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tm(t,e){if(pi("AsyncQueue",`${e}: ${t}`),Oa(t))return new z(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.comparator=e?(n,i)=>e(n,i)||J.comparator(n.key,i.key):(n,i)=>J.comparator(n.key,i.key),this.keyedMap=fo(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ar;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.F_=new ze(J.comparator)}track(e){const n=e.doc.key,i=this.F_.get(n);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(n,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(n):e.type===1&&i.type===2?this.F_=this.F_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ee():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,i)=>{e.push(i)}),e}}class br{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new br(e,n,ar.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.x_=void 0,this.listeners=[]}}class rL{constructor(){this.queries=new zr(e=>bT(e),fu),this.onlineState="Unknown",this.O_=new Set}}async function nm(t,e){const n=ae(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new sL),s)try{r.x_=await n.onListen(i)}catch(o){const a=tm(o,`Initialization of query '${Pd(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&sm(n)}async function im(t,e){const n=ae(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function oL(t,e){const n=ae(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(s)&&(i=!0);o.x_=s}}i&&sm(n)}function aL(t,e,n){const i=ae(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function sm(t){t.O_.forEach(e=>{e.next()})}class rm{constructor(e,n,i){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new br(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.key=e}}class ob{constructor(e){this.key=e}}class lL{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=fe(),this.mutatedKeys=fe(),this.na=IT(e),this.ra=new ar(this.na)}get ia(){return this.X_}sa(e,n){const i=n?n.oa:new ey,s=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=pu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(i.track({type:3,doc:f}),v=!0):this._a(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return g(d)-g(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new br(this.query,e.ra,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new ey,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=fe(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const n=[];return e.forEach(i=>{this.ta.has(i)||n.push(new ob(i))}),this.ta.forEach(i=>{e.has(i)||n.push(new rb(i))}),n}ha(e){this.X_=e.ss,this.ta=fe();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return br.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class cL{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class uL{constructor(e){this.key=e,this.Ia=!1}}class hL{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new zr(a=>bT(a),fu),this.da=new Map,this.Aa=new Set,this.Ra=new ze(J.comparator),this.Va=new Map,this.ma=new Kp,this.fa={},this.ga=new Map,this.pa=Tr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function dL(t,e){const n=TL(t);let i,s;const r=n.Ea.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Pa();else{const o=await LM(n.localStore,mi(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await fL(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&JT(n.remoteStore,o)}return s}async function fL(t,e,n,i,s){t.wa=(h,d,f)=>async function(y,v,T,I){let A=v.view.sa(T);A.zi&&(A=await Y_(y.localStore,v.query,!1).then(({documents:Q})=>v.view.sa(Q,A)));const R=I&&I.targetChanges.get(v.targetId),$=v.view.applyChanges(A,y.isPrimaryClient,R);return ny(y,v.targetId,$.ca),$.snapshot}(t,h,d,f);const r=await Y_(t.localStore,e,!0),o=new lL(e,r.ss),a=o.sa(r.documents),l=Va.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);ny(t,n,c.ca);const u=new cL(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function pL(t,e){const n=ae(t),i=n.Ea.get(e),s=n.da.get(i.targetId);if(s.length>1)return n.da.set(i.targetId,s.filter(r=>!fu(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),ZT(n.remoteStore,i.targetId),Nd(n,i.targetId)}).catch(Na)):(Nd(n,i.targetId),await Dd(n.localStore,i.targetId,!0))}async function mL(t,e,n){const i=bL(t);try{const s=await function(o,a){const l=ae(o),c=Ze.now(),u=a.reduce((f,g)=>f.add(g.key),fe());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=gi(),y=fe();return l.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((T,I)=>{I.isValidDocument()||(y=y.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const T=[];for(const I of a){const A=zO(I,h.get(I.key).overlayedDocument);A!=null&&T.push(new Yi(I.key,A,gT(A.value.mapValue),Ut.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:CT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new ze(Ae)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,s.batchId,n),await $a(i,s.changes),await Eu(i.remoteStore)}catch(s){const r=tm(s,"Failed to persist write");n.reject(r)}}async function ab(t,e){const n=ae(t);try{const i=await NM(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Va.get(r);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Pe(o.Ia):s.removedDocuments.size>0&&(Pe(o.Ia),o.Ia=!1))}),await $a(n,i,e)}catch(i){await Na(i)}}function ty(t,e,n){const i=ae(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ae(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&sm(l)}(i.eventManager,e),s.length&&i.Ta.r_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function gL(t,e,n){const i=ae(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Va.get(e),r=s&&s.key;if(r){let o=new ze(J.comparator);o=o.insert(r,at.newNoDocument(r,te.min()));const a=fe().add(r),l=new _u(te.min(),new Map,new ze(Ae),o,a);await ab(i,l),i.Ra=i.Ra.remove(r),i.Va.delete(e),om(i)}else await Dd(i.localStore,e,!1).then(()=>Nd(i,e,n)).catch(Na)}async function _L(t,e){const n=ae(t),i=e.batch.batchId;try{const s=await DM(n.localStore,e);cb(n,i,null),lb(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await $a(n,s)}catch(s){await Na(s)}}async function yL(t,e,n){const i=ae(t);try{const s=await function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Pe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);cb(i,e,n),lb(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await $a(i,s)}catch(s){await Na(s)}}function lb(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function cb(t,e,n){const i=ae(t);let s=i.fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fa[i.currentUser.toKey()]=s}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(i=>{t.ma.containsKey(i)||ub(t,i)})}function ub(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(ZT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),om(t))}function ny(t,e,n){for(const i of n)i instanceof rb?(t.ma.addReference(i.key,e),vL(t,i)):i instanceof ob?(K("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||ub(t,i.key)):ee()}function vL(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(K("SyncEngine","New document in limbo: "+n),t.Aa.add(i),om(t))}function om(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new J(Be.fromString(e)),i=t.pa.next();t.Va.set(i,new uL(n)),t.Ra=t.Ra.insert(n,i),JT(t.remoteStore,new xi(mi(du(n.path)),i,"TargetPurposeLimboResolution",Mp.ae))}}async function $a(t,e,n){const i=ae(t),s=[],r=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Qp.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Ta.r_(s),await async function(l,c){const u=ae(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,d=>N.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>N.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Oa(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,y)}}}(i.localStore,r))}async function EL(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const i=await QT(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new z(P.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await $a(n,i.ts)}}function wL(t,e){const n=ae(t),i=n.Va.get(e);if(i&&i.Ia)return fe().add(i.key);{let s=fe();const r=n.da.get(e);if(!r)return s;for(const o of r){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function TL(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gL.bind(null,e),e.Ta.r_=oL.bind(null,e.eventManager),e.Ta.Sa=aL.bind(null,e.eventManager),e}function bL(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_L.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yL.bind(null,e),e}class iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xM(this.persistence,new PM,e.initialUser,this.serializer)}createPersistence(e){return new RM(Gp.zr,this.serializer)}createSharedClientState(e){return new FM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ty(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=EL.bind(null,this.syncEngine),await iL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rL}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),i=function(r){return new HM(r)}(e.databaseInfo);return function(r,o,a,l){return new WM(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new KM(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ty(this.syncEngine,n,0),function(){return J_.v()?new J_:new $M}())}createSyncEngine(e,n){return function(s,r,o,a,l,c,u){const h=new hL(s,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=ae(n);K("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await Fa(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class am{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new z(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const o=ae(s),a=ra(o.serializer)+"/documents",l={documents:r.map(d=>fc(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=iM(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Pe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=J.fromPath(i);this.mutations.push(new VT(s,this.precondition(s)))}),await async function(i,s){const r=ae(i),o=ra(r.serializer)+"/documents",a={writes:s.map(l=>WT(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=te.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new z(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Ut.exists(!1):Ut.updateTime(n):Ut.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new z(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ut.updateTime(n)}return Ut.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class CL{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.qa=i.maxAttempts,this.Ko=new Yp(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new AL(this.datastore),n=this.Ka(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.$a(s)}))}).catch(i=>{this.$a(i)})})}Ka(e){try{const n=this.updateFunction(e);return!Ma(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!FT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=fT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{K("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(K("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=tm(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function mh(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await QT(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PL(t);K("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Z_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Z_(e.remoteStore,r)),t._onlineComponents=e}function SL(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SL(n))throw n;gr("Error using user provided cache. Falling back to memory cache: "+n),await mh(t,new iy)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await mh(t,new iy);return t._offlineComponents}async function lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await sy(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await sy(t,new IL))),t._onlineComponents}function kL(t){return lm(t).then(e=>e.syncEngine)}function xL(t){return lm(t).then(e=>e.datastore)}async function mc(t){const e=await lm(t),n=e.eventManager;return n.onListen=dL.bind(null,e.syncEngine),n.onUnlisten=pL.bind(null,e.syncEngine),n}function DL(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new am({next:d=>{o.enqueueAndForget(()=>im(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new z(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new z(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new rm(du(a.path),u,{includeMetadataChanges:!0,W_:!0});return nm(r,h)}(await mc(t),t.asyncQueue,e,n,i)),i.promise}function NL(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new am({next:d=>{o.enqueueAndForget(()=>im(r,h)),d.fromCache&&l.source==="server"?c.reject(new z(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new rm(a,u,{includeMetadataChanges:!0,W_:!0});return nm(r,h)}(await mc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function hb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ry=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t,e,n){if(!n)throw new z(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OL(t,e,n,i){if(e===!0&&i===!0)throw new z(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oy(t){if(!J.isDocumentKey(t))throw new z(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ay(t){if(J.isDocumentKey(t))throw new z(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cm(t);throw new z(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ly{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hb((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new eO;switch(i.type){case"firstParty":return new sO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=ry.get(n);i&&(K("ComponentProvider","Removing Datastore"),ry.delete(n),i.terminate())}(this),Promise.resolve()}}function ML(t,e,n,i={}){var s;const r=(t=an(t,wu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=bt.MOCK_USER;else{a=oR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new z(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bt(c)}t._authCredentials=new tO(new dT(a,l))}}/**
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
 */class Ua{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ua(this.firestore,e,this._query)}}class Nt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class $i extends Ua{constructor(e,n,i){super(e,n,du(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new J(e))}withConverter(e){return new $i(this.firestore,e,this._path)}}function fb(t,e,...n){if(t=ut(t),db("collection","path",e),t instanceof wu){const i=Be.fromString(e,...n);return ay(i),new $i(t,null,i)}{if(!(t instanceof Nt||t instanceof $i))throw new z(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Be.fromString(e,...n));return ay(i),new $i(t.firestore,null,i)}}function Ln(t,e,...n){if(t=ut(t),arguments.length===1&&(e=fT.V()),db("doc","path",e),t instanceof wu){const i=Be.fromString(e,...n);return oy(i),new Nt(t,null,new J(i))}{if(!(t instanceof Nt||t instanceof $i))throw new z(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Be.fromString(e,...n));return oy(i),new Nt(t.firestore,t instanceof $i?t.converter:null,new J(i))}}/**
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
 */class LL{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Yp(this,"async_queue_retry"),this.Xa=()=>{const n=ph();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=ph();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new zn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Oa(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw pi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=em.createAndSchedule(this,e,n,i,r=>this.ru(r));return this.ja.push(s),s}eu(){this.Ha&&ee()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function cy(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class qi extends wu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new LL}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pb(this),this._firestoreClient.terminate()}}function VL(t,e){const n=typeof t=="object"?t:Of(),i=typeof t=="string"?t:e||"(default)",s=Nf(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=rR("firestore");r&&ML(s,...r)}return s}function Ba(t){return t._firestoreClient||pb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pb(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new gO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new RL(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(Mt.fromBase64String(e))}catch(n){throw new z(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=/^__.*__$/;class $L{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class mb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class bu{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.Pu(e),s}Iu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return gc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(gb(this.uu)&&FL.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class UL{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||yu(e)}Ru(e,n,i,s=!1){return new bu({uu:e,methodName:n,Au:i,path:St.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function um(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new UL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _b(t,e,n,i,s,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,s);hm("Data must be an object, but it was:",o,i);const a=wb(i,o);let l,c;if(r.merge)l=new nn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Od(e,h,n);if(!o.contains(d))throw new z(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bb(u,d)||u.push(d)}l=new nn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new $L(new $t(a),l,c)}class Iu extends qr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Iu}}function yb(t,e,n){return new bu({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class BL extends qr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=yb(this,e,!0),i=this.Vu.map(r=>Kr(r,n)),s=new Er(i);return new Bp(e.path,s)}isEqual(e){return this===e}}class HL extends qr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=yb(this,e,!0),i=this.Vu.map(r=>Kr(r,n)),s=new wr(i);return new Bp(e.path,s)}isEqual(e){return this===e}}class jL extends qr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new sa(e.serializer,kT(e.serializer,this.mu));return new Bp(e.path,n)}isEqual(e){return this===e}}function vb(t,e,n,i){const s=t.Ru(1,e,n);hm("Data must be an object, but it was:",s,i);const r=[],o=$t.empty();Os(i,(l,c)=>{const u=dm(e,l,n);c=ut(c);const h=s.Iu(u);if(c instanceof Iu)r.push(u);else{const d=Kr(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new nn(r);return new mb(o,a,s.fieldTransforms)}function Eb(t,e,n,i,s,r){const o=t.Ru(1,e,n),a=[Od(e,i,n)],l=[s];if(r.length%2!=0)throw new z(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Od(e,r[d])),l.push(r[d+1]);const c=[],u=$t.empty();for(let d=a.length-1;d>=0;--d)if(!bb(c,a[d])){const f=a[d];let g=l[d];g=ut(g);const y=o.Iu(f);if(g instanceof Iu)c.push(f);else{const v=Kr(g,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new nn(c);return new mb(u,h,o.fieldTransforms)}function Kr(t,e){if(Tb(t=ut(t)))return hm("Unsupported field value:",e,t),wb(t,e);if(t instanceof qr)return function(i,s){if(!gb(s.uu))throw s.Eu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=Kr(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return kT(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Ze.fromDate(i);return{timestampValue:dc(s.serializer,r)}}if(i instanceof Ze){const r=new Ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:dc(s.serializer,r)}}if(i instanceof Tu)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Rs)return{bytesValue:HT(s.serializer,i._byteString)};if(i instanceof Nt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qp(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Eu(`Unsupported field value: ${cm(i)}`)}(t,e)}function wb(t,e){const n={};return pT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Os(t,(i,s)=>{const r=Kr(s,e.lu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Tu||t instanceof Rs||t instanceof Nt||t instanceof qr)}function hm(t,e,n){if(!Tb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=cm(n);throw i==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function Od(t,e,n){if((e=ut(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return dm(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const zL=new RegExp("[~\\*/\\[\\]]");function dm(t,e,n){if(e.search(zL)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new z(P.INVALID_ARGUMENT,a+t+l)}function bb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _c{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ib("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WL extends _c{data(){return super.data()}}function Ib(t,e){return typeof e=="string"?dm(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
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
 */function Ab(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cb{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Os(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Tu(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Vp(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=zi(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Be.fromString(e);Pe(GT(i));const s=new na(i.get(1),i.get(3)),r=new J(i.popFirst(5));return s.isEqual(n)||pi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Rb(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class qL extends Cb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}/**
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
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fm extends _c{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Ib("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Sl extends fm{data(e={}){return super.data(e)}}class Sb{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Sl(this._firestore,this._userDataWriter,i.key,i,new Ys(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Sl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Sl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:KL(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function Au(t){t=an(t,Nt);const e=an(t.firestore,qi);return DL(Ba(e),t._key).then(n=>kb(e,t,n))}class Cu extends Cb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function GL(t){t=an(t,Ua);const e=an(t.firestore,qi),n=Ba(e),i=new Cu(e);return Ab(t._query),NL(n,t._query).then(s=>new Sb(e,i,t,s))}function uy(t,e,n){t=an(t,Nt);const i=an(t.firestore,qi),s=Rb(t.converter,e,n);return Pb(i,[_b(um(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function QL(t,e,n,...i){t=an(t,Nt);const s=an(t.firestore,qi),r=um(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof Ha?Eb(r,"updateDoc",t._key,e,n,i):vb(r,"updateDoc",t._key,e),Pb(s,[o.toMutation(t._key,Ut.exists(!0))])}function pm(t,...e){var n,i,s;t=ut(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(cy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Nt)c=an(t.firestore,qi),u=du(t._key.path),l={next:h=>{e[o]&&e[o](kb(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=an(t,Ua);c=an(h.firestore,qi),u=h._query;const d=new Cu(c);l={next:f=>{e[o]&&e[o](new Sb(c,d,h,f))},error:e[o+1],complete:e[o+2]},Ab(t._query)}return function(d,f,g,y){const v=new am(y),T=new rm(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>nm(await mc(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>im(await mc(d),T))}}(Ba(c),u,a,l)}function Pb(t,e){return function(i,s){const r=new zn;return i.asyncQueue.enqueueAndForget(async()=>mL(await kL(i),s,r)),r.promise}(Ba(t),e)}function kb(t,e,n){const i=n.docs.get(e._key),s=new Cu(t);return new fm(t,s,e._key,i,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const YL={maxAttempts:5};function io(t,e){if((t=ut(t)).firestore!==e)throw new z(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class XL extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=um(n)}get(n){const i=io(n,this._firestore),s=new qL(this._firestore);return this._transaction.lookup([i._key]).then(r=>{if(!r||r.length!==1)return ee();const o=r[0];if(o.isFoundDocument())return new _c(this._firestore,s,o.key,o,i.converter);if(o.isNoDocument())return new _c(this._firestore,s,i._key,null,i.converter);throw ee()})}set(n,i,s){const r=io(n,this._firestore),o=Rb(r.converter,i,s),a=_b(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,s);return this._transaction.set(r._key,a),this}update(n,i,s,...r){const o=io(n,this._firestore);let a;return a=typeof(i=ut(i))=="string"||i instanceof Ha?Eb(this._dataReader,"Transaction.update",o._key,i,s,r):vb(this._dataReader,"Transaction.update",o._key,i),this._transaction.update(o._key,a),this}delete(n){const i=io(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=io(e,this._firestore),i=new Cu(this._firestore);return super.get(e).then(s=>new fm(this._firestore,i,n._key,s._document,new Ys(!1,!1),n.converter))}}function JL(t,e,n){t=an(t,qi);const i=Object.assign(Object.assign({},YL),n);return function(r){if(r.maxAttempts<1)throw new z(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(r,o,a){const l=new zn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await xL(r);new CL(r.asyncQueue,c,a,o,l).run()}),l.promise}(Ba(t),s=>e(new XL(t,s)),i)}function ZL(...t){return new BL("arrayUnion",t)}function eV(...t){return new HL("arrayRemove",t)}function tV(t){return new jL("increment",t)}(function(e,n=!0){(function(s){jr=s})(Ki),Kn(new An("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new qi(new nO(i.getProvider("auth-internal")),new oO(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),sn(P_,"4.1.0",e),sn(P_,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="firebasestorage.googleapis.com",nV="storageBucket",iV=2*60*1e3,sV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Jn{constructor(e,n,i=0){super(gh(e),`Firebase Storage: ${n} (${gh(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function gh(t){return"storage/"+t}function rV(){const t="An unknown error occurred, please check the error payload for server response.";return new Zn(Xn.UNKNOWN,t)}function oV(){return new Zn(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aV(){return new Zn(Xn.CANCELED,"User canceled the upload/download.")}function lV(t){return new Zn(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function cV(t){return new Zn(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hy(t){return new Zn(Xn.INVALID_ARGUMENT,t)}function Db(){return new Zn(Xn.APP_DELETED,"The Firebase app was deleted.")}function uV(t){return new Zn(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(i.path==="")return i;throw cV(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===xb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${y}/${s}/${v}`,"i"),A=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<A.length;R++){const $=A[R],Q=$.regex.exec(e);if(Q){const le=Q[$.indices.bucket];let G=Q[$.indices.path];G||(G=""),i=new wn(le,G),$.postModify(i);break}}if(i==null)throw lV(e);return i}}class hV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}i<64&&(i*=2);let A;a===1?(a=2,A=0):A=(i+Math.random())*1e3,h(A)}let g=!1;function y(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function fV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t){return t!==void 0}function dy(t,e,n,i){if(i<e)throw hy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw hy(`Invalid value for '${t}'. Expected ${n} or less.`)}function mV(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yc||(yc={}));/**
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
 */function gV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new pl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===yc.NO_ERROR,l=r.getStatus();if(!a||gV(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===yc.ABORT;i(!1,new pl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new pl(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());pV(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=rV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Db():aV();o(l)}else{const l=oV();o(l)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=dV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function yV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function EV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TV(t,e,n,i,s,r,o=!0){const a=mV(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return EV(c,e),yV(c,n),vV(c,r),wV(c,i),new _V(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vc{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vc(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IV(this._location.path)}get storage(){return this._service}get parent(){const e=bV(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new vc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uV(e)}}function fy(t,e){const n=e==null?void 0:e[nV];return n==null?null:wn.makeFromBucketSpec(n,t)}class AV{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=xb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iV,this._maxUploadRetryTime=sV,this._requests=new Set,s!=null?this._bucket=wn.makeFromBucketSpec(s,this._host):this._bucket=fy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=fy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new hV(Db());{const o=TV(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const py="@firebase/storage",my="0.11.2";/**
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
 */const CV="storage";function RV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new AV(n,i,s,e,Ki)}function SV(){Kn(new An(CV,RV,"PUBLIC").setMultipleInstances(!0)),sn(py,my,""),sn(py,my,"esm2017")}SV();const _h=new WeakMap;function Nb(t,e){return _h.has(e)||_h.set(e,t||{f:{},r:{},s:{},u:{}}),_h.get(e)}function PV(t,e,n,i){if(!t)return n;const[s,r]=Ob(t);if(!s)return n;const o=Nb(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function kV(t,e,n,i){if(!t)return;const[s,r]=Ob(t);if(!s)return;const o=Nb(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Vn),a}function Ob(t){return e1(t)||t1(t)?["f",t.path]:n1(t)?["r",t.toString()]:i1(t)?["s",t.toString()]:[]}const yh=new WeakMap;function xV(t,e,n){const i=ya();yh.has(i)||yh.set(i,new Map);const s=yh.get(i),r=kV(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):Vn}const DV={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Md(t,e,n,i){if(!Jk(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof Ze||g instanceof Tu)h[f]=g;else if(zf(g)){const y=c+f;h[f]=y in n?l[f]:g.path,d[y]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else ks(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const mm={reset:!1,wait:!0,maxRefDepth:2,converter:DV,snapshotOptions:{serverTimestamps:"estimate"}};function Ec(t){for(const e in t)t[e].unsub()}function Ld(t,e,n,i,s,r,o,a,l){const[c,u]=Md(i.data(t.snapshotOptions),jf(e,n),s,t);r.set(e,n,c),Vd(t,e,n,s,u,r,o,a,l)}function NV({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=Vn;return a.once?Au(t).then(u=>{u.exists()?Ld(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=pm(t,u=>{u.exists()?Ld(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Ec(l)}}function Vd(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=i[y],T=s[y],I=`${n}.${y}`;if(f[I]=!0,v)if(v.path!==T.path)v.unsub();else return;i[y]={data:()=>jf(e,I),unsub:NV({ref:T,target:e,path:I,depth:o,ops:r,resolve:g.bind(null,I),reject:l},t),path:T.path}})}function OV(t,e,n,i,s,r){const o=Object.assign({},mm,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Me(c?[]:t.value);c||n.set(t,h,[]);const f=i;let g,y=Vn;const v=[],T={added:({newIndex:A,doc:R})=>{v.splice(A,0,Object.create(null));const $=v[A],[Q,le]=Md(R.data(l),void 0,$,o);n.add(H(d),A,Q),Vd(o,d,`${h}.${A}`,$,le,n,0,i.bind(null,R),s)},modified:({oldIndex:A,newIndex:R,doc:$})=>{const Q=H(d),le=v[A],G=Q[A],[se,be]=Md($.data(l),G,le,o);v.splice(R,0,le),n.remove(Q,A),n.add(Q,R,se),Vd(o,d,`${h}.${R}`,le,be,n,0,i,s)},removed:({oldIndex:A})=>{const R=H(d);n.remove(R,A),Ec(v.splice(A,1)[0])}};function I(A){const R=A.docChanges(a);if(!g&&R.length){g=!0;let $=0;const Q=R.length,le=Object.create(null);for(let G=0;G<Q;G++)le[R[G].doc.id]=!0;i=G=>{G&&G.id in le&&++$>=Q&&(c&&(n.set(t,h,H(d)),d=t),f(H(d)),i=Vn)}}R.forEach($=>{T[$.type]($)}),R.length||(c&&(n.set(t,h,H(d)),d=t),i(H(d)))}return u?GL(e).then(I).catch(s):y=pm(e,I,s),A=>{if(y(),A){const R=typeof A=="function"?A():[];n.set(t,h,R)}v.forEach(Ec)}}function MV(t,e,n,i,s,r){const o=Object.assign({},mm,r),a="value",l=Object.create(null);i=s1(i,()=>jf(t,a));let c=Vn;function u(h){h.exists()?Ld(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?Au(e).then(u).catch(s):c=pm(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Ec(l)}}const gy=Symbol();function Mb(t,e){let n=Vn;const i=Object.assign({},mm,e),s=H(t),r=i.target||Me();o1()&&(i.once=!0);const o=PV(s,i.ssrKey,gy,ya()),a=o!==gy;a&&(r.value=o);let l=!a;const c=Me(!1),u=Me(),h=Ev(),d=ff();let f=Vn;function g(){let T=H(t);const I=new Promise((A,R)=>{if(n(i.reset),!T)return n=Vn,A(null);c.value=l,l=!0,T.converter||(T=T.withConverter(i.converter)),n=(zf(T)?MV:OV)(r,T,LV,A,R,i)}).catch(A=>(h.value===I&&(u.value=A),Promise.reject(A))).finally(()=>{h.value===I&&(c.value=!1)});h.value=I}let y=Vn;We(t)&&(y=Mi(t,g)),g(),s&&(f=xV(h.value,s,i.ssrKey)),Wv()&&Dv(()=>h.value),d&&sv(v);function v(T=i.reset){y(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const LV={set:(t,e,n)=>Yk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Lb(t,e){return Mb(t,{target:Me([]),...e})}function Vb(t,e){return Mb(t,e)}function VV(t){return(e,n)=>{const i=a1(e,n).run(()=>Me(t));XE.set(e,i),l1(i,e)}}function p4(t){return Qk?KE(ya(t)):null}function FV(t,{firebaseApp:e,modules:n=[]}){t.provide(YE,e);for(const i of n)i(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Fb;const Ru=t=>Fb=t,$b=Symbol();function Fd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var So;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(So||(So={}));function $V(){const t=df(!0),e=t.run(()=>Me({}));let n=[],i=[];const s=kc({install(r){Ru(s),s._a=r,r.provide($b,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!Tk?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ub=()=>{};function _y(t,e,n,i=Ub){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&ff()&&sv(s),s}function Bs(t,...e){t.slice().forEach(n=>{n(...e)})}const UV=t=>t();function $d(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Fd(s)&&Fd(i)&&t.hasOwnProperty(n)&&!We(i)&&!Ni(i)?t[n]=$d(s,i):t[n]=i}return t}const BV=Symbol();function HV(t){return!Fd(t)||!t.hasOwnProperty(BV)}const{assign:bi}=Object;function jV(t){return!!(We(t)&&t.effect)}function zV(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=_A(n.state.value[t]);return bi(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=kc(Ie(()=>{Ru(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Bb(t,c,e,n,i,!0),l}function Bb(t,e,n={},i,s,r){let o;const a=bi({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),Me({});let y;function v(G){let se;c=u=!1,typeof G=="function"?(G(i.state.value[t]),se={type:So.patchFunction,storeId:t,events:f}):($d(i.state.value[t],G),se={type:So.patchObject,payload:G,storeId:t,events:f});const be=y=Symbol();Tf().then(()=>{y===be&&(c=!0)}),u=!0,Bs(h,se,i.state.value[t])}const T=r?function(){const{state:se}=n,be=se?se():{};this.$patch(st=>{bi(st,be)})}:Ub;function I(){o.stop(),h=[],d=[],i._s.delete(t)}function A(G,se){return function(){Ru(i);const be=Array.from(arguments),st=[],Et=[];function wt(ye){st.push(ye)}function ei(ye){Et.push(ye)}Bs(d,{args:be,name:G,store:$,after:wt,onError:ei});let Wt;try{Wt=se.apply(this&&this.$id===t?this:$,be)}catch(ye){throw Bs(Et,ye),ye}return Wt instanceof Promise?Wt.then(ye=>(Bs(st,ye),ye)).catch(ye=>(Bs(Et,ye),Promise.reject(ye))):(Bs(st,Wt),Wt)}}const R={_p:i,$id:t,$onAction:_y.bind(null,d),$patch:v,$reset:T,$subscribe(G,se={}){const be=_y(h,G,se.detached,()=>st()),st=o.run(()=>Mi(()=>i.state.value[t],Et=>{(se.flush==="sync"?u:c)&&G({storeId:t,type:So.direct,events:f},Et)},bi({},l,se)));return be},$dispose:I},$=Dr(R);i._s.set(t,$);const Q=i._a&&i._a.runWithContext||UV,le=i._e.run(()=>(o=df(),Q(()=>o.run(e))));for(const G in le){const se=le[G];if(We(se)&&!jV(se)||Ni(se))r||(g&&HV(se)&&(We(se)?se.value=g[G]:$d(se,g[G])),i.state.value[t][G]=se);else if(typeof se=="function"){const be=A(G,se);le[G]=be,a.actions[G]=se}}return bi($,le),bi(we($),le),Object.defineProperty($,"$state",{get:()=>i.state.value[t],set:G=>{v(se=>{bi(se,G)})}}),i._p.forEach(G=>{bi($,o.run(()=>G({store:$,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate($.$state,g),c=!0,u=!0,$}function WV(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=nC();return a=a||(c?Gt($b,null):null),a&&Ru(a),a=Fb,a._s.has(i)||(r?Bb(i,e,s,a):zV(i,s,a)),a._s.get(i)}return o.$id=i,o}const Hb=lE({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),tn=VL(Hb);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof window<"u";function qV(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function vh(t,e){const n={};for(const i in e){const s=e[i];n[i]=Sn(s)?s.map(t):t(s)}return n}const Po=()=>{},Sn=Array.isArray,KV=/\/$/,GV=t=>t.replace(KV,"");function Eh(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=JV(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function QV(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YV(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ir(e.matched[i],n.matched[s])&&jb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XV(t[n],e[n]))return!1;return!0}function XV(t,e){return Sn(t)?vy(t,e):Sn(e)?vy(e,t):t===e}function vy(t,e){return Sn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function JV(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var oa;(function(t){t.pop="pop",t.push="push"})(oa||(oa={}));var ko;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ko||(ko={}));function ZV(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GV(t)}const eF=/^[^#]+#/;function tF(t,e){return t.replace(eF,"#")+e}function nF(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Su=()=>({left:window.pageXOffset,top:window.pageYOffset});function iF(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nF(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ey(t,e){return(history.state?history.state.position-e:-1)+t}const Ud=new Map;function sF(t,e){Ud.set(t,e)}function rF(t){const e=Ud.get(t);return Ud.delete(t),e}let oF=()=>location.protocol+"//"+location.host;function zb(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),yy(l,"")}return yy(n,t)+i+s}function aF(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=zb(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else i(f);s.forEach(T=>{T(n.value,g,{delta:v,type:oa.pop,direction:v?v>0?ko.forward:ko.back:ko.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Se({},d.state,{scroll:Su()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function wy(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Su():null}}function lF(t){const{history:e,location:n}=window,i={value:zb(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:oF()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Se({},e.state,wy(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Se({},s.value,e.state,{forward:l,scroll:Su()});r(u.current,u,!0);const h=Se({},wy(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function cF(t){t=ZV(t);const e=lF(t),n=aF(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Se({location:"",base:t,go:i,createHref:tF.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uF(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cF(t)}function hF(t){return typeof t=="string"||t&&typeof t=="object"}function Wb(t){return typeof t=="string"||typeof t=="symbol"}const Ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qb=Symbol("");var Ty;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ty||(Ty={}));function Ar(t,e){return Se(new Error,{type:t,[qb]:!0},e)}function ni(t,e){return t instanceof Error&&qb in t&&(e==null||!!(t.type&e))}const by="[^/]+?",dF={sensitive:!1,strict:!1,start:!0,end:!0},fF=/[.+*?^${}()[\]/\\]/g;function pF(t,e){const n=Se({},dF,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(fF,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:T}=d;r.push({name:g,repeatable:y,optional:v});const I=T||by;if(I!==by){f+=10;try{new RegExp(`(${I})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+R.message)}}let A=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(A=v&&c.length<2?`(?:/${A})`:"/"+A),v&&(A+="?"),s+=A,f+=20,v&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,T=g in c?c[g]:"";if(Sn(T)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=Sn(T)?T.join("/"):T;if(!I)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=I}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function mF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gF(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=mF(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Iy(i))return 1;if(Iy(s))return-1}return s.length-i.length}function Iy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _F={type:0,value:""},yF=/[a-zA-Z0-9_]/;function vF(t){if(!t)return[[]];if(t==="/")return[[_F]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:yF.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function EF(t,e,n){const i=pF(vF(t.path),n),s=Se(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wF(t,e){const n=[],i=new Map;e=Ry({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=TF(u);g.aliasOf=d&&d.record;const y=Ry(e,u),v=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of A)v.push(Se({},g,{components:d?d.record.components:g.components,path:R,aliasOf:d?d.record:g}))}let T,I;for(const A of v){const{path:R}=A;if(h&&R[0]!=="/"){const $=h.record.path,Q=$[$.length-1]==="/"?"":"/";A.path=h.record.path+(R&&Q+R)}if(T=EF(A,h,y),d?d.alias.push(T):(I=I||T,I!==T&&I.alias.push(T),f&&u.name&&!Cy(T)&&o(u.name)),g.children){const $=g.children;for(let Q=0;Q<$.length;Q++)r($[Q],T,d&&d.children[Q])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return I?()=>{o(I)}:Po}function o(u){if(Wb(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&gF(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Kb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cy(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Ar(1,{location:u});y=d.record.name,f=Se(Ay(h.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&Ay(u.params,d.keys.map(I=>I.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(I=>I.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?i.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw Ar(1,{location:u,currentLocation:h});y=d.record.name,f=Se({},h.params,u.params),g=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:y,path:g,params:f,matched:v,meta:IF(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ay(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function TF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Cy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IF(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Ry(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Kb(t,e){return e.children.some(n=>n===t||Kb(t,n))}const Gb=/#/g,AF=/&/g,CF=/\//g,RF=/=/g,SF=/\?/g,Qb=/\+/g,PF=/%5B/g,kF=/%5D/g,Yb=/%5E/g,xF=/%60/g,Xb=/%7B/g,DF=/%7C/g,Jb=/%7D/g,NF=/%20/g;function gm(t){return encodeURI(""+t).replace(DF,"|").replace(PF,"[").replace(kF,"]")}function OF(t){return gm(t).replace(Xb,"{").replace(Jb,"}").replace(Yb,"^")}function Bd(t){return gm(t).replace(Qb,"%2B").replace(NF,"+").replace(Gb,"%23").replace(AF,"%26").replace(xF,"`").replace(Xb,"{").replace(Jb,"}").replace(Yb,"^")}function MF(t){return Bd(t).replace(RF,"%3D")}function LF(t){return gm(t).replace(Gb,"%23").replace(SF,"%3F")}function VF(t){return t==null?"":LF(t).replace(CF,"%2F")}function wc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FF(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Qb," "),o=r.indexOf("="),a=wc(o<0?r:r.slice(0,o)),l=o<0?null:wc(r.slice(o+1));if(a in e){let c=e[a];Sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Sy(t){let e="";for(let n in t){const i=t[n];if(n=MF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(i)?i.map(r=>r&&Bd(r)):[i&&Bd(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function $F(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Sn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const UF=Symbol(""),Py=Symbol(""),Pu=Symbol(""),_m=Symbol(""),Hd=Symbol("");function so(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ai(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ar(4,{from:n,to:e})):h instanceof Error?a(h):hF(h)?a(Ar(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function wh(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(BF(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ai(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=qV(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ai(d,n,i,r,o)()}))}}return s}function BF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ky(t){const e=Gt(Pu),n=Gt(_m),i=Ie(()=>e.resolve(H(t.to))),s=Ie(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ir.bind(null,u));if(d>-1)return d;const f=xy(l[c-2]);return c>1&&xy(u)===f&&h[h.length-1].path!==f?h.findIndex(Ir.bind(null,l[c-2])):d}),r=Ie(()=>s.value>-1&&WF(n.params,i.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&jb(n.params,i.value.params));function a(l={}){return zF(l)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(Po):Promise.resolve()}return{route:i,href:Ie(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const HF=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ky,setup(t,{slots:e}){const n=Dr(ky(t)),{options:i}=Gt(Pu),s=Ie(()=>({[Dy(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Dy(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),jF=HF;function zF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WF(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Sn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function xy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dy=(t,e,n)=>t??e??n,qF=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Gt(Hd),s=Ie(()=>t.route||i.value),r=Gt(Py,0),o=Ie(()=>{let c=H(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ie(()=>s.value.matched[o.value]);yl(Py,Ie(()=>o.value+1)),yl(UF,a),yl(Hd,s);const l=Me();return Mi(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ir(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ny(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Gv(d,Se({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ny(n.default,{Component:v,route:c})||v}}});function Ny(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zb=qF;function KF(t){const e=wF(t.routes,t),n=t.parseQuery||FF,i=t.stringifyQuery||Sy,s=t.history,r=so(),o=so(),a=so(),l=Ev(Ti);let c=Ti;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vh.bind(null,_=>""+_),h=vh.bind(null,VF),d=vh.bind(null,wc);function f(_,w){let S,F;return Wb(_)?(S=e.getRecordMatcher(_),F=w):F=_,e.addRoute(F,S)}function g(_){const w=e.getRecordMatcher(_);w&&e.removeRoute(w)}function y(){return e.getRoutes().map(_=>_.record)}function v(_){return!!e.getRecordMatcher(_)}function T(_,w){if(w=Se({},w||l.value),typeof _=="string"){const E=Eh(n,_,w.path),b=e.resolve({path:E.path},w),C=s.createHref(E.fullPath);return Se(E,b,{params:d(b.params),hash:wc(E.hash),redirectedFrom:void 0,href:C})}let S;if("path"in _)S=Se({},_,{path:Eh(n,_.path,w.path).path});else{const E=Se({},_.params);for(const b in E)E[b]==null&&delete E[b];S=Se({},_,{params:h(E)}),w.params=h(w.params)}const F=e.resolve(S,w),x=_.hash||"";F.params=u(d(F.params));const p=QV(i,Se({},_,{hash:OF(x),path:F.path})),m=s.createHref(p);return Se({fullPath:p,hash:x,query:i===Sy?$F(_.query):_.query||{}},F,{redirectedFrom:void 0,href:m})}function I(_){return typeof _=="string"?Eh(n,_,l.value.path):Se({},_)}function A(_,w){if(c!==_)return Ar(8,{from:w,to:_})}function R(_){return le(_)}function $(_){return R(Se(I(_),{replace:!0}))}function Q(_){const w=_.matched[_.matched.length-1];if(w&&w.redirect){const{redirect:S}=w;let F=typeof S=="function"?S(_):S;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=I(F):{path:F},F.params={}),Se({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function le(_,w){const S=c=T(_),F=l.value,x=_.state,p=_.force,m=_.replace===!0,E=Q(S);if(E)return le(Se(I(E),{state:typeof E=="object"?Se({},x,E.state):x,force:p,replace:m}),w||S);const b=S;b.redirectedFrom=w;let C;return!p&&YV(i,F,S)&&(C=Ar(16,{to:b,from:F}),cn(F,F,!0,!1)),(C?Promise.resolve(C):be(b,F)).catch(k=>ni(k)?ni(k,2)?k:mn(k):Te(k,b,F)).then(k=>{if(k){if(ni(k,2))return le(Se({replace:m},I(k.to),{state:typeof k.to=="object"?Se({},x,k.to.state):x,force:p}),w||b)}else k=Et(b,F,!0,m,x);return st(b,F,k),k})}function G(_,w){const S=A(_,w);return S?Promise.reject(S):Promise.resolve()}function se(_){const w=vi.values().next().value;return w&&typeof w.runWithContext=="function"?w.runWithContext(_):_()}function be(_,w){let S;const[F,x,p]=GF(_,w);S=wh(F.reverse(),"beforeRouteLeave",_,w);for(const E of F)E.leaveGuards.forEach(b=>{S.push(Ai(b,_,w))});const m=G.bind(null,_,w);return S.push(m),Ke(S).then(()=>{S=[];for(const E of r.list())S.push(Ai(E,_,w));return S.push(m),Ke(S)}).then(()=>{S=wh(x,"beforeRouteUpdate",_,w);for(const E of x)E.updateGuards.forEach(b=>{S.push(Ai(b,_,w))});return S.push(m),Ke(S)}).then(()=>{S=[];for(const E of p)if(E.beforeEnter)if(Sn(E.beforeEnter))for(const b of E.beforeEnter)S.push(Ai(b,_,w));else S.push(Ai(E.beforeEnter,_,w));return S.push(m),Ke(S)}).then(()=>(_.matched.forEach(E=>E.enterCallbacks={}),S=wh(p,"beforeRouteEnter",_,w),S.push(m),Ke(S))).then(()=>{S=[];for(const E of o.list())S.push(Ai(E,_,w));return S.push(m),Ke(S)}).catch(E=>ni(E,8)?E:Promise.reject(E))}function st(_,w,S){a.list().forEach(F=>se(()=>F(_,w,S)))}function Et(_,w,S,F,x){const p=A(_,w);if(p)return p;const m=w===Ti,E=zs?history.state:{};S&&(F||m?s.replace(_.fullPath,Se({scroll:m&&E&&E.scroll},x)):s.push(_.fullPath,x)),l.value=_,cn(_,w,S,m),mn()}let wt;function ei(){wt||(wt=s.listen((_,w,S)=>{if(!Zi.listening)return;const F=T(_),x=Q(F);if(x){le(Se(x,{replace:!0}),F).catch(Po);return}c=F;const p=l.value;zs&&sF(Ey(p.fullPath,S.delta),Su()),be(F,p).catch(m=>ni(m,12)?m:ni(m,2)?(le(m.to,F).then(E=>{ni(E,20)&&!S.delta&&S.type===oa.pop&&s.go(-1,!1)}).catch(Po),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Te(m,F,p))).then(m=>{m=m||Et(F,p,!1),m&&(S.delta&&!ni(m,8)?s.go(-S.delta,!1):S.type===oa.pop&&ni(m,20)&&s.go(-1,!1)),st(F,p,m)}).catch(Po)}))}let Wt=so(),ye=so(),Re;function Te(_,w,S){mn(_);const F=ye.list();return F.length?F.forEach(x=>x(_,w,S)):console.error(_),Promise.reject(_)}function pn(){return Re&&l.value!==Ti?Promise.resolve():new Promise((_,w)=>{Wt.add([_,w])})}function mn(_){return Re||(Re=!_,ei(),Wt.list().forEach(([w,S])=>_?S(_):w()),Wt.reset()),_}function cn(_,w,S,F){const{scrollBehavior:x}=t;if(!zs||!x)return Promise.resolve();const p=!S&&rF(Ey(_.fullPath,0))||(F||!S)&&history.state&&history.state.scroll||null;return Tf().then(()=>x(_,w,p)).then(m=>m&&iF(m)).catch(m=>Te(m,_,w))}const ft=_=>s.go(_);let ti;const vi=new Set,Zi={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:T,options:t,push:R,replace:$,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:pn,install(_){const w=this;_.component("RouterLink",jF),_.component("RouterView",Zb),_.config.globalProperties.$router=w,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),zs&&!ti&&l.value===Ti&&(ti=!0,R(s.location).catch(x=>{}));const S={};for(const x in Ti)Object.defineProperty(S,x,{get:()=>l.value[x],enumerable:!0});_.provide(Pu,w),_.provide(_m,mv(S)),_.provide(Hd,l);const F=_.unmount;vi.add(_),_.unmount=function(){vi.delete(_),vi.size<1&&(c=Ti,wt&&wt(),wt=null,l.value=Ti,ti=!1,Re=!1),F()}}};function Ke(_){return _.reduce((w,S)=>w.then(()=>se(S)),Promise.resolve())}return Zi}function GF(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ir(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ir(c,l))||s.push(l))}return[n,i,s]}function QF(){return Gt(Pu)}function YF(){return Gt(_m)}const eI=WV("settings",()=>({installEvent:Me()})),XF=Yt({__name:"App",setup(t){const e=Vr(),n=QF(),i=YF();return Mi(e,async(s,r)=>{if(!s&&r&&i.meta.requiresAuth)return n.push({name:"login"});if(s&&typeof i.query.redirect=="string")return n.push(i.query.redirect)}),window.addEventListener("beforeinstallprompt",s=>{eI().installEvent=s}),(s,r)=>(Z(),qn(H(Zb)))}}),JF="modulepreload",ZF=function(t){return"/"+t},Oy={},ml=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ZF(r),r in Oy)return;Oy[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":JF,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function q(t,e,n,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},t$=(t,e,n)=>{e.constructor.createProperty(n,t)};function xe(t){return(e,n)=>n!==void 0?t$(t,e,n):e$(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xi(t){return xe({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tI=({finisher:t,descriptor:e})=>(n,i)=>{var s;if(i===void 0){const r=(s=n.originalKey)!==null&&s!==void 0?s:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(t,e){return tI({descriptor:n=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Th;const n$=((Th=window.HTMLSlotElement)===null||Th===void 0?void 0:Th.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function i$(t){const{slot:e,selector:n}=t??{};return tI({descriptor:i=>({get(){var s;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),a=o!=null?n$(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl=window,ym=Pl.ShadowRoot&&(Pl.ShadyCSS===void 0||Pl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vm=Symbol(),My=new WeakMap;let nI=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==vm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ym&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=My.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&My.set(n,e))}return e}toString(){return this.cssText}};const s$=t=>new nI(typeof t=="string"?t:t+"",void 0,vm),zt=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new nI(n,t,vm)},r$=(t,e)=>{ym?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),s=Pl.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)})},Ly=ym?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return s$(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bh;const Tc=window,Vy=Tc.trustedTypes,o$=Vy?Vy.emptyScript:"",Fy=Tc.reactiveElementPolyfillSupport,jd={toAttribute(t,e){switch(e){case Boolean:t=t?o$:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},iI=(t,e)=>e!==t&&(e==e||t==t),Ih={attribute:!0,type:String,converter:jd,reflect:!1,hasChanged:iI},zd="finalized";let Ws=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const s=this._$Ep(i,n);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,n=Ih){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(s){const r=this[e];this[n]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ih}static finalize(){if(this.hasOwnProperty(zd))return!1;this[zd]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of i)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(Ly(s))}else e!==void 0&&n.push(Ly(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return r$(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=Ih){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:jd).toAttribute(n,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:jd;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||iI)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ws[zd]=!0,Ws.elementProperties=new Map,Ws.elementStyles=[],Ws.shadowRootOptions={mode:"open"},Fy==null||Fy({ReactiveElement:Ws}),((bh=Tc.reactiveElementVersions)!==null&&bh!==void 0?bh:Tc.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ah;const bc=window,Cr=bc.trustedTypes,$y=Cr?Cr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wd="$lit$",ki=`lit$${(Math.random()+"").slice(9)}$`,sI="?"+ki,a$=`<${sI}>`,Ss=document,aa=()=>Ss.createComment(""),la=t=>t===null||typeof t!="object"&&typeof t!="function",rI=Array.isArray,l$=t=>rI(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ch=`[ 	
\f\r]`,ro=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uy=/-->/g,By=/>/g,ns=RegExp(`>|${Ch}(?:([^\\s"'>=/]+)(${Ch}*=${Ch}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hy=/'/g,jy=/"/g,oI=/^(?:script|style|textarea|title)$/i,c$=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ct=c$(1),Ps=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),zy=new WeakMap,ds=Ss.createTreeWalker(Ss,129,null,!1);function aI(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return $y!==void 0?$y.createHTML(e):e}const u$=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=ro;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===ro?u[1]==="!--"?o=Uy:u[1]!==void 0?o=By:u[2]!==void 0?(oI.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=ns):u[3]!==void 0&&(o=ns):o===ns?u[0]===">"?(o=s??ro,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ns:u[3]==='"'?jy:Hy):o===jy||o===Hy?o=ns:o===Uy||o===By?o=ro:(o=ns,s=void 0);const f=o===ns&&t[a+1].startsWith("/>")?" ":"";r+=o===ro?l+a$:h>=0?(i.push(c),l.slice(0,h)+Wd+l.slice(h)+ki+f):l+ki+(h===-2?(i.push(void 0),a):f)}return[aI(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class ca{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=u$(e,n);if(this.el=ca.createElement(c,i),ds.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=ds.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(Wd)||d.startsWith(ki)){const f=u[o++];if(h.push(d),f!==void 0){const g=s.getAttribute(f.toLowerCase()+Wd).split(ki),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:y[2],strings:g,ctor:y[1]==="."?d$:y[1]==="?"?p$:y[1]==="@"?m$:ku})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(oI.test(s.tagName)){const h=s.textContent.split(ki),d=h.length-1;if(d>0){s.textContent=Cr?Cr.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],aa()),ds.nextNode(),l.push({type:2,index:++r});s.append(h[d],aa())}}}else if(s.nodeType===8)if(s.data===sI)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(ki,h+1))!==-1;)l.push({type:7,index:r}),h+=ki.length-1}r++}}static createElement(e,n){const i=Ss.createElement("template");return i.innerHTML=e,i}}function Rr(t,e,n=t,i){var s,r,o,a;if(e===Ps)return e;let l=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=la(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=Rr(t,l._$AS(t,e.values),l,i)),e}class h${constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ss).importNode(i,!0);ds.currentNode=r;let o=ds.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new ja(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new g$(o,this,e)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=ds.nextNode(),a++)}return ds.currentNode=Ss,r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class ja{constructor(e,n,i,s){var r;this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Rr(this,e,n),la(e)?e===ue||e==null||e===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):e!==this._$AH&&e!==Ps&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):l$(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ue&&la(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ss.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ca.createElement(aI(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const o=new h$(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let n=zy.get(e.strings);return n===void 0&&zy.set(e.strings,n=new ca(e)),n}T(e){rI(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new ja(this.k(aa()),this.k(aa()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class ku{constructor(e,n,i,s,r){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Rr(this,e,n,0),o=!la(e)||e!==this._$AH&&e!==Ps,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Rr(this,a[i+l],n,l),c===Ps&&(c=this._$AH[l]),o||(o=!la(c)||c!==this._$AH[l]),c===ue?e=ue:e!==ue&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let d$=class extends ku{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ue?void 0:e}};const f$=Cr?Cr.emptyScript:"";let p$=class extends ku{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ue?this.element.setAttribute(this.name,f$):this.element.removeAttribute(this.name)}};class m$ extends ku{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=Rr(this,e,n,0))!==null&&i!==void 0?i:ue)===Ps)return;const s=this._$AH,r=e===ue&&s!==ue||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==ue&&(s===ue||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class g${constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Rr(this,e)}}const Wy=bc.litHtmlPolyfillSupport;Wy==null||Wy(ca,ja),((Ah=bc.litHtmlVersions)!==null&&Ah!==void 0?Ah:bc.litHtmlVersions=[]).push("2.8.0");const _$=(t,e,n)=>{var i,s;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new ja(e.insertBefore(aa(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rh,Sh;let Ht=class extends Ws{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_$(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ps}};Ht.finalized=!0,Ht._$litElement$=!0,(Rh=globalThis.litElementHydrateSupport)===null||Rh===void 0||Rh.call(globalThis,{LitElement:Ht});const qy=globalThis.litElementPolyfillSupport;qy==null||qy({LitElement:Ht});((Sh=globalThis.litElementVersions)!==null&&Sh!==void 0?Sh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class y$ extends Ht{render(){return Ct`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const v$=zt`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qd=class extends y${};qd.styles=[v$];qd=q([Pn("md-elevation")],qd);const lI=t=>(Oc("data-v-eabfc1cc"),t=t(),Mc(),t),E$=lI(()=>U("md-elevation",null,null,-1)),w$={class:"title headline-large"},T$={class:"content body-large"},b$={key:1,class:"card"},I$=lI(()=>U("md-elevation",null,null,-1)),A$={class:"title headline-large"},C$={class:"content body-large"},R$=Yt({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const i=Vc("RouterLink");return t.path?(Z(),qn(i,{key:0,to:t.path,class:"route card"},{default:en(()=>[U("div",null,[E$,U("div",w$,[Dn(e.$slots,"title",{},void 0,!0)]),U("div",T$,[Dn(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):(Z(),ce("div",b$,[I$,U("div",A$,[Dn(e.$slots,"title",{},void 0,!0)]),U("div",C$,[Dn(e.$slots,"content",{},void 0,!0)])]))}}});const xu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Ph=xu(R$,[["__scopeId","data-v-eabfc1cc"]]),S$=t=>(Oc("data-v-27e31cd3"),t=t(),Mc(),t),P$=["src"],k$=S$(()=>U("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),x$=Yt({__name:"AccountImage",setup(t){var i;const e=Vr(),n=Me((i=e.value)==null?void 0:i.providerData[0].photoURL);return(s,r)=>{const o=Vc("RouterLink");return Z(),ce("div",null,[H(e)?(Z(),qn(o,{key:0,to:"/myAccount"},{default:en(()=>[U("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,P$)]),_:1})):(Z(),qn(o,{key:1,to:"/myAccount"},{default:en(()=>[k$]),_:1}))])}}});const D$=xu(x$,[["__scopeId","data-v-27e31cd3"]]),ua=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class N$ extends Ht{render(){return Ct`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const O$=zt`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kd=class extends N${};Kd.styles=[O$];Kd=q([Pn("md-icon")],Kd);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const cI=Symbol("attachableController");let kl;kl=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[cI])==null||e.hostConnected()});class uI{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[cI]=this,kl==null||kl.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const M$=["focusin","focusout","pointerdown"];class Em extends Ht{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new uI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[Ky]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Ky]=!0}}onControlChange(e,n){for(const i of M$)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}q([xe({type:Boolean,reflect:!0})],Em.prototype,"visible",void 0);q([xe({type:Boolean,reflect:!0})],Em.prototype,"inward",void 0);const Ky=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const L$=zt`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Gd=class extends Em{};Gd.styles=[L$];Gd=q([Pn("md-focus-ring")],Gd);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V$={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F$=t=>(...e)=>({_$litDirective$:t,values:e});let $$=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const za=F$(class extends $${constructor(t){var e;if(super(t),t.type!==V$.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const s=t.element.classList;this.it.forEach(r=>{r in e||(s.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return Ps}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ha={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const U$=450,Gy=225,B$=.2,H$=10,j$=75,z$=.35,W$="::after",q$="forwards";var Ft;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Ft||(Ft={}));const K$=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],G$=150;class Wa extends Ht{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Ft.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new uI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Ct`<div class="surface ${za(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Ft.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Ft.HOLDING){this.state=Ft.WAITING_FOR_CLICK;return}if(this.state===Ft.TOUCH_DELAY){this.state=Ft.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Ft.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Ft.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,G$)}),this.state===Ft.TOUCH_DELAY&&(this.state=Ft.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Ft.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Ft.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),i=Math.max(e,n),s=Math.max(z$*i,j$),r=Math.floor(i*B$),a=Math.sqrt(n**2+e**2)+H$;this.initialSize=r,this.rippleScale=`${(a+s)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:i}=window,{left:s,top:r}=this.getBoundingClientRect(),o=n+s,a=i+r,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:i}=this.getBoundingClientRect(),s={x:(i-this.initialSize)/2,y:(n-this.initialSize)/2};let r;return e instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(e):r={x:i/2,y:n/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:s}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:i}=this.getTranslationCoordinates(e),s=`${n.x}px, ${n.y}px`,r=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:W$,duration:U$,easing:ha.STANDARD,fill:q$})}async endPressAnimation(){this.state=Ft.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Gy){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,Gy-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:i,left:s,bottom:r,right:o}=this.getBoundingClientRect();return e>=s&&e<=o&&n>=i&&n<=r}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const i of K$)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}}q([xe({type:Boolean,reflect:!0})],Wa.prototype,"disabled",void 0);q([Xi()],Wa.prototype,"hovered",void 0);q([Xi()],Wa.prototype,"pressed",void 0);q([fn(".surface")],Wa.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Q$=zt`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Qd=class extends Wa{};Qd.styles=[Q$];Qd=q([Pn("md-ripple")],Qd);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hI=Symbol.for(""),Y$=t=>{if((t==null?void 0:t.r)===hI)return t==null?void 0:t._$litStatic$},Ic=(t,...e)=>({_$litStatic$:e.reduce((n,i,s)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:hI}),Qy=new Map,X$=t=>(e,...n)=>{const i=n.length;let s,r;const o=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(r=n[c],(s=Y$(r))!==void 0);)l+=s+e[++c],u=!0;c!==i&&a.push(r),o.push(l),c++}if(c===i&&o.push(e[i]),u){const h=o.join("$$lit$$");(e=Qy.get(h))===void 0&&(o.raw=o,Qy.set(h,e=o)),n=a}return t(e,...n)},dI=X$(Ct);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fI=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];fI.map(pI);function pI(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Du(t){for(const e of fI)t.createProperty(e,{attribute:pI(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Sr=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function mI(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async i=>{const{type:s,[Sr]:r}=n,{form:o}=r;if(!(!o||s==="button")&&(await new Promise(a=>{a()}),!i.defaultPrevented)){if(s==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),r.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Yy(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var gI;class jt extends Ht{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Yy(this,this.flipIconInRtl),this[gI]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Sr].form}get labels(){return this[Sr].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Ic`div`:Ic`button`,{ariaLabel:n,ariaHasPopup:i,ariaExpanded:s}=this,r=n&&this.ariaLabelSelected,o=r?ue:this.selected;let a=ue;return this.href||(a=r&&this.selected?this.ariaLabelSelected:n),dI`<${e}
        class="icon-button ${za(this.getRenderClasses())}"
        id="button"
        aria-label="${a||ue}"
        aria-haspopup="${!this.href&&i||ue}"
        aria-expanded="${!this.href&&s||ue}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?ue:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():ue}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Ct`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||ue}"
        aria-label="${e||ue}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Ct`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Ct`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return Ct`<span class="touch"></span>`}renderFocusRing(){return Ct`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Ct`<md-ripple
      for=${this.href?"link":ue}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=Yy(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}gI=Sr;Du(jt),mI(jt);jt.formAssociated=!0;jt.shadowRootOptions={mode:"open",delegatesFocus:!0};q([xe({type:Boolean,reflect:!0})],jt.prototype,"disabled",void 0);q([xe({type:Boolean,attribute:"flip-icon-in-rtl"})],jt.prototype,"flipIconInRtl",void 0);q([xe()],jt.prototype,"href",void 0);q([xe()],jt.prototype,"target",void 0);q([xe({attribute:"aria-label-selected"})],jt.prototype,"ariaLabelSelected",void 0);q([xe({type:Boolean})],jt.prototype,"toggle",void 0);q([xe({type:Boolean,reflect:!0})],jt.prototype,"selected",void 0);q([xe()],jt.prototype,"type",void 0);q([xe()],jt.prototype,"value",void 0);q([Xi()],jt.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const J$=zt`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Z$=zt`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yd=class extends jt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Yd.styles=[J$,Z$];Yd=q([Pn("md-icon-button")],Yd);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Nu extends Ht{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}q([xe({type:Boolean,reflect:!0})],Nu.prototype,"inset",void 0);q([xe({type:Boolean,reflect:!0,attribute:"inset-start"})],Nu.prototype,"insetStart",void 0);q([xe({type:Boolean,reflect:!0,attribute:"inset-end"})],Nu.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const e2=zt`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xd=class extends Nu{};Xd.styles=[e2];Xd=q([Pn("md-divider")],Xd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function _I(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(n);return i||e.preventDefault(),i}function yI(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function vI(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!t2(t)}function t2(t){const e=Jd;return e&&(t.preventDefault(),t.stopImmediatePropagation()),n2(),e}let Jd=!1;async function n2(){Jd=!0,await null,Jd=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i2={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:ha.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:ha.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},s2={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:ha.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:ha.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class et extends Ht{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>i2,this.getCloseAnimation=()=>s2,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var s;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(s=this.querySelector("[autofocus]"))==null||s.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:i}=this;if(!n||!i||!n.open)return;const s=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=s;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return Ct`
      <div class="scrim"></div>
      <dialog
        class=${za(n)}
        aria-label=${i||ue}
        aria-labelledby=${this.hasHeadline?"headline":ue}
        role=${this.type==="alert"?"alertdialog":ue}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||ue}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||ue}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!_I(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:i,container:s,headline:r,content:o,actions:a}=this;if(!n||!i||!s||!r||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,g=[[n,c??[]],[i,u??[]],[s,l??[]],[r,h??[]],[o,d??[]],[a,f??[]]],y=[];for(const[v,T]of g)for(const I of T)y.push(v.animate(...I));await Promise.all(y.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:i}=e;n===this.topAnchor&&(this.isAtScrollTop=i),n===this.bottomAnchor&&(this.isAtScrollBottom=i)}}Du(et);et.shadowRootOptions={...Ht.shadowRootOptions,delegatesFocus:!0};q([xe({type:Boolean})],et.prototype,"open",null);q([xe({attribute:!1})],et.prototype,"returnValue",void 0);q([xe()],et.prototype,"type",void 0);q([fn("dialog")],et.prototype,"dialog",void 0);q([fn(".scrim")],et.prototype,"scrim",void 0);q([fn(".container")],et.prototype,"container",void 0);q([fn(".headline")],et.prototype,"headline",void 0);q([fn(".content")],et.prototype,"content",void 0);q([fn(".actions")],et.prototype,"actions",void 0);q([Xi()],et.prototype,"isAtScrollTop",void 0);q([Xi()],et.prototype,"isAtScrollBottom",void 0);q([fn(".scroller")],et.prototype,"scroller",void 0);q([fn(".top.anchor")],et.prototype,"topAnchor",void 0);q([fn(".bottom.anchor")],et.prototype,"bottomAnchor",void 0);q([Xi()],et.prototype,"hasHeadline",void 0);q([Xi()],et.prototype,"hasActions",void 0);q([Xi()],et.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const r2=zt`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zd=class extends et{};Zd.styles=[r2];Zd=q([Pn("md-dialog")],Zd);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const wm=zt`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var EI;class Lt extends Ht{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Sr].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[EI]=this.attachInternals(),this.handleActivationClick=e=>{!vI(e)||!this.buttonElement||(this.focus(),yI(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?Ic`a`:Ic`button`,{ariaLabel:i,ariaHasPopup:s,ariaExpanded:r}=this;return dI`
      <${n}
        class="button ${za(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||ue}"
        aria-haspopup="${s||ue}"
        aria-expanded="${r||ue}"
        href=${this.href||ue}
        target=${this.target||ue}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var i,s;const e=this.disabled&&!this.href,n=Ct`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Ct`
      ${(i=this.renderElevation)==null?void 0:i.call(this)}
      ${(s=this.renderOutline)==null?void 0:s.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?ue:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:ue}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}EI=Sr;Du(Lt),mI(Lt);Lt.formAssociated=!0;Lt.shadowRootOptions={mode:"open",delegatesFocus:!0};q([xe({type:Boolean,reflect:!0})],Lt.prototype,"disabled",void 0);q([xe()],Lt.prototype,"href",void 0);q([xe()],Lt.prototype,"target",void 0);q([xe({type:Boolean,attribute:"trailing-icon"})],Lt.prototype,"trailingIcon",void 0);q([xe({type:Boolean,attribute:"has-icon"})],Lt.prototype,"hasIcon",void 0);q([xe()],Lt.prototype,"type",void 0);q([xe()],Lt.prototype,"value",void 0);q([fn(".button")],Lt.prototype,"buttonElement",void 0);q([i$({slot:"icon",flatten:!0})],Lt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class o2 extends Lt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const a2=zt`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ef=class extends o2{};ef.styles=[wm,a2];ef=q([Pn("md-text-button")],ef);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l2 extends Lt{renderOutline(){return Ct`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const c2=zt`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tf=class extends l2{};tf.styles=[wm,c2];tf=q([Pn("md-outlined-button")],tf);const Ou=t=>(Oc("data-v-d890dc55"),t=t(),Mc(),t),u2={key:0,id:"user"},h2={class:"body-large admonitions"},d2={key:0,class:"section slots"},f2=Ou(()=>U("div",{class:"label"}," Slot prenotati: ",-1)),p2={key:0},m2={key:1,class:"bookedSlots"},g2=Ou(()=>U("md-elevation",null,null,-1)),_2=["onClick"],y2=Ou(()=>U("md-icon",null,"close",-1)),v2=[y2],E2=["open"],w2=Ou(()=>U("div",{slot:"headline"},"Conferma rimozione",-1)),T2={key:0,slot:"content",id:"form-id",method:"dialog"},b2={key:0},I2={slot:"actions"},A2={key:1,class:"section button"},C2=Yt({__name:"UserView",setup(t){var h,d;const e=Vr(),n=Vb(Ln(tn,`users/${(h=e.value)==null?void 0:h.uid}`)),i=Lb(fb(tn,`users/${(d=e.value)==null?void 0:d.uid}/availabilities`)),s=eI(),r=Me(!1),o=Me(),a=Ie(()=>i.value.filter(f=>f.date.toDate()>new Date));function l(f){r.value=!0,o.value=f}async function c(){var I,A;if(o.value===null)return;const f=(I=o.value)==null?void 0:I.id,g=(A=e.value)==null?void 0:A.uid,y=Ln(tn,`users/${g}/availabilities/${f}`),v=Ln(tn,`users/${g}`),T=Ln(tn,`availabilities/${f}`);await JL(tn,async R=>{var $;R.update(T,{players:eV(v)}),R.delete(y),(($=o.value)==null?void 0:$.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&R.update(v,{admonitionCount:tV(1)})}),r.value=!1}function u(){s.installEvent,s.installEvent&&s.installEvent.prompt()}return(f,g)=>{const y=Vc("RouterLink");return H(n)?(Z(),ce("div",u2,[U("div",null,[U("h2",null,Ge(H(n).username),1)]),U("div",null,[U("div",h2," Ammonizioni: "+Ge(H(n).admonitionCount),1)]),a.value.length>0?(Z(),ce("div",d2,[f2,H(n).admonitionCount>=2?(Z(),ce("div",p2," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):pt("",!0),a.value.length>0?(Z(),ce("div",m2,[(Z(!0),ce(Je,null,ri(a.value,v=>(Z(),ce("div",{class:"bookedSlot",key:v.id},[g2,Kt(" "+Ge(v.date.toDate().getDate())+" "+Ge(H(ua)[v.date.toDate().getMonth()])+" "+Ge(v.timeSlot)+" ",1),U("md-icon-button",{onClick:T=>l(v)},v2,8,_2),U("md-dialog",{class:"removeDialog",type:"alert",open:r.value},[w2,o.value?(Z(),ce("form",T2,[U("div",null," Sei sicuro di voler disdire per il "+Ge(o.value.date.toDate().getDate())+" "+Ge(H(ua)[o.value.date.toDate().getMonth()])+" "+Ge(o.value.timeSlot)+"? ",1),o.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?(Z(),ce("p",b2," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):pt("",!0)])):pt("",!0),U("div",I2,[U("md-text-button",{form:"form-id",value:"cancel",onClick:g[0]||(g[0]=T=>r.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:c},"Disdici")])],8,E2)]))),128))])):pt("",!0)])):pt("",!0),H(n).role==="admin"?(Z(),ce("div",A2,[je(y,{to:"/adminPanel"},{default:en(()=>[Kt(" Admin ")]),_:1})])):pt("",!0),H(s)&&H(s).installEvent?(Z(),ce("div",{key:2,class:"section button",onClick:u}," Installa app ")):pt("",!0)])):pt("",!0)}}});const wI=xu(C2,[["__scopeId","data-v-d890dc55"]]),R2=Object.freeze(Object.defineProperty({__proto__:null,default:wI},Symbol.toStringTag,{value:"Module"})),S2=t=>(Oc("data-v-a529ec71"),t=t(),Mc(),t),P2={id:"home"},k2=S2(()=>U("h1",{class:"title display-medium"},"Fonti Paintball",-1)),x2={class:"content"},D2=Yt({__name:"HomeView",setup(t){const e=Me(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),If(()=>window.removeEventListener("resize",n));const i=Vr();return(s,r)=>(Z(),ce("div",P2,[e.value<900||!H(i)?(Z(),qn(D$,{key:0})):pt("",!0),k2,U("div",x2,[U("main",null,[je(Ph,{path:"/rules"},{title:en(()=>[Kt(" Regolamento ")]),content:en(()=>[Kt(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),je(Ph,{path:"/availability"},{title:en(()=>[Kt(" Calendario ")]),content:en(()=>[Kt(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),je(Ph,null,{title:en(()=>[Kt(" Statistiche giocatori ")]),content:en(()=>[Kt(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&H(i)?(Z(),qn(wI,{key:0})):pt("",!0)])]))}});const N2=xu(D2,[["__scopeId","data-v-a529ec71"]]);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const O2=zt`@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-icon-color: CanvasText;--md-radio-hover-icon-color: CanvasText;--md-radio-focus-icon-color: CanvasText;--md-radio-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class M2{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=n=>{const i=n.key==="ArrowDown",s=n.key==="ArrowUp",r=n.key==="ArrowLeft",o=n.key==="ArrowRight";if(!r&&!o&&!i&&!s)return;const a=this.getNamedSiblings();if(!a.length)return;n.preventDefault();const c=getComputedStyle(this.host).direction==="rtl"?r||i:o||i,u=a.indexOf(this.host);let h=c?u+1:u-1;for(;h!==u;){h>=a.length?h=0:h<0&&(h=a.length-1);const d=a[h];if(d.hasAttribute("disabled")){c?h++:h--;continue}for(const f of a)f!==d&&(f.checked=!1,f.tabIndex=-1);d.checked=!0,d.removeAttribute("tabindex"),d.focus(),d.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.getNamedSiblings())e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.getNamedSiblings(),n=e.find(i=>i.checked);if(n||this.focused){const i=n||this.host;i.removeAttribute("tabindex");for(const s of e)s!==i&&(s.tabIndex=-1);return}for(const i of e)i.removeAttribute("tabindex")}getNamedSiblings(){const e=this.host.getAttribute("name");return!e||!this.root?[]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var TI;const nf=Symbol("checked");let L2=0;class Ji extends Ht{get checked(){return this[nf]}set checked(e){const n=this.checked;if(n===e)return;this[nf]=e;const i=String(e);this.internals.setFormValue(this.checked?this.value:null,i),this.requestUpdate("checked",n),this.selectionController.handleCheckedChange()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.maskId=`cutout${++L2}`,this[TI]=!1,this.disabled=!1,this.value="on",this.selectionController=new M2(this),this.internals=this.attachInternals(),this.addController(this.selectionController),this.addEventListener("click",e=>{vI(e)&&(this.focus(),yI(this.input))})}focus(){var e;(e=this.input)==null||e.focus()}render(){const e={checked:this.checked},{ariaLabel:n}=this;return Ct`
      <div class="container ${za(e)}">
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle class="outer circle" cx="10" cy="10" r="10"
              mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>
        <input
          id="input"
          type="radio"
          name=${this.name}
          aria-label=${n||ue}
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        >
      </div>
    `}handleChange(e){this.disabled||(this.checked=!0,_I(this,e))}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}}TI=nf;Du(Ji);Ji.shadowRootOptions={...Ht.shadowRootOptions,delegatesFocus:!0};Ji.formAssociated=!0;q([xe({type:Boolean})],Ji.prototype,"checked",null);q([xe({type:Boolean,reflect:!0})],Ji.prototype,"disabled",void 0);q([xe()],Ji.prototype,"value",void 0);q([fn("input")],Ji.prototype,"input",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const V2=zt`:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:grid;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:48px}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sf=class extends Ji{};sf.styles=[V2,O2];sf=q([Pn("md-radio")],sf);const F2=U("span",{"aria-hidden":"true"},"Mattina",-1),$2=U("span",{"aria-hidden":"true"},"Pomeriggio",-1),U2={props:{date:{type:Date,required:!0}},methods:{onSelect(t){this.$emit("select",{timeSlot:t})}}},B2=Yt({...U2,__name:"BookSlot",setup(t){return(e,n)=>(Z(),ce("div",null,[U("h2",null,"Dai la disponibilità per il "+Ge(t.date.getDate())+" "+Ge(H(ua)[t.date.getMonth()]),1),U("form",null,[U("label",null,[U("md-radio",{onChange:n[0]||(n[0]=i=>e.onSelect("mattina")),type:"radio",name:"time",value:"mattina","aria-label":"Mattina","touch-target":"wrapper",checked:""},null,32),F2]),U("label",null,[U("md-radio",{onChange:n[1]||(n[1]=i=>e.onSelect("pomeriggio")),type:"radio",name:"time",value:"pomeriggio","aria-label":"Pomeriggio","touch-target":"wrapper"},null,32),$2])])]))}});const H2={props:{date:{type:Date,required:!0},time:{type:String,required:!0}}},j2=Yt({...H2,__name:"ExistingSlot",setup(t){return(e,n)=>(Z(),ce("div",null,[U("h2",null,"Dai la disponibilità per il "+Ge(t.date.getDate())+" "+Ge(H(ua)[t.date.getMonth()])+" "+Ge(t.time),1)]))}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class z2 extends Lt{renderElevation(){return Ct`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const W2=zt`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-type: var(--md-filled-tonal-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const q2=zt`md-elevation{transition-duration:280ms}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rf=class extends z2{};rf.styles=[wm,q2,W2];rf=q([Pn("md-filled-tonal-button")],rf);var K2=Object.defineProperty,G2=(t,e,n)=>e in t?K2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gl=(t,e,n)=>(G2(t,typeof e!="symbol"?e+"":e,n),n);const qa=()=>Mu(new Date),Q2=(t,e,n)=>{switch(e){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return Tm(t,n);default:return t}},Y2=t=>[...Array(7)].map((e,n)=>Gr(t,n)),Gr=(t,e)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds()),Tm=(t,e)=>Gr(t,(e-t.getDay()-7)%-7),X2=(t,e)=>Gr(Tm(t,e),7),da=t=>new Date(t.getFullYear(),t.getMonth()),J2=t=>Math.ceil(t.getDate()/7),Z2=(t,e,n)=>new Date(t.getFullYear()+(e=="year"?n:0),t.getMonth()+(e=="month"?n:0),t.getDate()+(e=="week"?n*7:0)),bm=t=>("0"+String(t.getMonth()+1)).slice(-2),Im=t=>("0"+String(t.getDate())).slice(-2),bI=t=>t.getFullYear()+"-"+bm(t),eU=t=>bI(t)+"-"+Im(t),tU=t=>bm(t)+"-"+Im(t),nU=(t,e,n)=>{if(t.getHours()===0&&t.getMinutes()===0&&t.getSeconds()===0)return"";if(!Lu()){var i=new Date().getTimezoneOffset()*6e4;return new Date(t.getTime()-i).toISOString().slice(11,16)}return t.toLocaleTimeString(e,n)},iU=(t,e,n,i)=>{const s=t.getFullYear()===e.getFullYear(),r=AI(t,e),o=n!=="year"&&n!=="month";let a=[];return a.push(i[t.getMonth()]),o&&(a.push(" "),a.push(t.getDate())),s||(a.push(o?", ":" "),a.push(t.getFullYear())),!r||!s?(a.push(" – "),r||a.push(i[e.getMonth()]),o&&a.push(" ")):o&&a.push(" – "),o?(a.push(e.getDate()),a.push(", ")):a.push(" "),a.push(e.getFullYear()),a.join("")},II=(t,e)=>{const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return(n-i)/864e5},sU=(t,e)=>!!t&&!!e&&II(t,e)===0,rU=(t,e)=>!!t&&!!e&&t.getTime()===e.getTime(),AI=(t,e)=>!!t&&!!e&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth(),oU=t=>da(t)<da(qa()),aU=t=>da(t)>da(qa()),lU=t=>Mu(t)>qa(),cU=t=>Mu(t)<qa(),uU=t=>t.getMonth()!==Gr(t,7).getMonth(),hU=t=>t.getMonth()!==Gr(t,1).getMonth(),CI=t=>{let e=[...Array(7)].map(n=>0);return t.split(/\D/,7).forEach((n,i)=>e[i]=Number(n)),e[1]--,new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},of=t=>typeof t=="string"?CI(t):new Date(t),Mu=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},dU=t=>t.substring(0,2),Lu=()=>typeof Intl<"u",fU=(t,e)=>{if(!Lu())return[...Array(12)].map(i=>"");const n=new Intl.DateTimeFormat(t,{month:e});return[...Array(12)].map((i,s)=>n.format(new Date(2017,s,1)))},pU=(t,e,n)=>{if(!Lu())return[...Array(7)].map(s=>"");const i=new Intl.DateTimeFormat(t,{weekday:e});return[...Array(7)].map((s,r)=>i.format(new Date(2017,0,(r+1+n)%7)))},mU=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),gU=(t,e)=>{const n=t.classes?[...t.classes]:[];return e&&n.push("isHovered"),{originalItem:t,startDate:of(t.startDate),endDate:of(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id,url:t.url,tooltip:t.tooltip??t.title}},j={addDays:Gr,beginningOfMonth:da,beginningOfPeriod:Q2,beginningOfWeek:Tm,dateOnly:Mu,dayDiff:II,daysOfWeek:Y2,endOfWeek:X2,formattedPeriod:iU,formattedTime:nU,fromIsoStringToLocalDate:CI,getDefaultBrowserLocale:mU,getFormattedMonthNames:fU,getFormattedWeekdayNames:pU,incrementPeriod:Z2,instanceOfMonth:J2,isFutureMonth:aU,isInFuture:lU,isInPast:cU,isLastDayOfMonth:hU,isLastInstanceOfMonth:uU,isoMonthDay:tU,isoYearMonth:bI,isoYearMonthDay:eU,isPastMonth:oU,isSameDate:sU,isSameDateTime:rU,isSameMonth:AI,languageCode:dU,normalizeItem:gU,paddedDay:Im,paddedMonth:bm,supportsIntl:Lu,today:qa,toLocalDate:of};class _U{constructor(){gl(this,"currentDragItem"),gl(this,"dateSelectionOrigin"),gl(this,"currentHoveredItemId",""),gl(this,"CalendarMath",j)}}const yU={class:"cv-header-days"},vU={key:0,class:"cv-weeknumber"},EU=["aria-multiselectable"],wU={key:0,class:"cv-weeknumber"},TU={class:"cv-weekdays"},bU=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],IU={class:"cv-day-number"},AU=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],CU=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],RU=Yt({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(t,{emit:e}){const n=t,i=Dr(new _U),s=Ie(()=>n.locale||j.getDefaultBrowserLocale()),r=Ie(()=>n.showDate?j.dateOnly(n.showDate):j.today()),o=Ie(()=>j.beginningOfPeriod(r.value,n.displayPeriodUom,n.startingDayOfWeek)),a=Ie(()=>j.addDays(j.incrementPeriod(o.value,n.displayPeriodUom,n.displayPeriodCount),-1)),l=Ie(()=>{const _=j.beginningOfWeek(j.beginningOfPeriod(o.value,"year",0),n.startingDayOfWeek),w=j.beginningOfWeek(o.value,n.startingDayOfWeek);return 1+Math.floor(j.dayDiff(_,w)/7)}),c=Ie(()=>j.beginningOfWeek(o.value,n.startingDayOfWeek)),u=Ie(()=>j.endOfWeek(a.value,n.startingDayOfWeek)),h=Ie(()=>{const _=Math.floor((j.dayDiff(c.value,u.value)+1)/7);return[...Array(_)].map((w,S)=>j.addDays(c.value,S*7))}),d=Ie(()=>j.getFormattedMonthNames(s.value,n.monthNameFormat)),f=Ie(()=>j.getFormattedWeekdayNames(s.value,n.weekdayNameFormat,n.startingDayOfWeek)),g=Ie(()=>n.items?n.items.map(_=>j.normalizeItem(_,_.id===i.currentHoveredItemId)):[]),y=Ie(()=>j.beginningOfPeriod(j.today(),n.displayPeriodUom,n.startingDayOfWeek)),v=Ie(()=>j.addDays(j.incrementPeriod(y.value,n.displayPeriodUom,n.displayPeriodCount),-1)),T=Ie(()=>j.formattedPeriod(o.value,a.value,n.displayPeriodUom,d.value)),I=Ie(()=>{const _=y.value,w=o.value;return n.currentPeriodLabel?n.currentPeriodLabel==="icons"?n.currentPeriodLabelIcons[Math.sign(_.getTime()-w.getTime())+1]:n.currentPeriodLabel:j.formattedPeriod(_,v.value,n.displayPeriodUom,d.value)}),A=Ie(()=>({previousYear:G(-12),previousPeriod:G(-1),nextPeriod:G(1),previousFullPeriod:G(-n.displayPeriodCount),nextFullPeriod:G(n.displayPeriodCount),nextYear:G(12),currentPeriod:y.value,currentPeriodLabel:I.value,periodStart:o.value,periodEnd:a.value,displayLocale:s.value,displayFirstDate:c.value,displayLastDate:u.value,monthNames:d.value,fixedItems:g.value,periodLabel:T.value})),R=Ie(()=>({periodStart:o,periodEnd:a,displayFirstDate:c,displayLastDate:u}));Mi(()=>R,_=>{n.periodChangedCallback&&(e("period-changed"),n.periodChangedCallback(_,"watch"))},{immediate:!0,deep:!0});const $=(_,w)=>{n.disablePast&&j.isInPast(_)||n.disableFuture&&j.isInFuture(_)||e("click-date",_,mn(_,_),w)},Q=(_,w)=>e("click-item",_,w),le=_=>"dow"+(_+n.startingDayOfWeek)%7,G=_=>{const w=j.incrementPeriod(o.value,n.displayPeriodUom,_),S=j.incrementPeriod(w,n.displayPeriodUom,n.displayPeriodCount);return n.disablePast&&S<=j.today()||n.disableFuture&&w>j.today()?null:w},se=(_,w)=>{i.currentHoveredItemId=_.id,n.doEmitItemMouseEvents&&e("item-mouseenter",_,w)},be=(_,w)=>{i.currentHoveredItemId="",n.doEmitItemMouseEvents&&e("item-mouseleave",_,w)},st=(_,w)=>{var S,F;if(!n.enableDateSelection)return!1;(S=w.dataTransfer)==null||S.setData("text",_.toString());let x=new Image;return x.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(F=w.dataTransfer)==null||F.setDragImage(x,10,10),i.dateSelectionOrigin=_,e("date-selection-start",wt(_),w),!0},Et=(_,w)=>{var S;return n.enableDragDrop?((S=w.dataTransfer)==null||S.setData("text",_.id),i.currentDragItem=_,i.dateSelectionOrigin=void 0,e("drag-start",_,w),!0):!1},wt=_=>_<=i.dateSelectionOrigin?[_,i.dateSelectionOrigin]:[i.dateSelectionOrigin,_],ei=(_,w)=>{n.enableDragDrop&&e("drag-over-date",i.currentDragItem,_,w)},Wt=(_,w)=>{n.enableDateSelection&&i.dateSelectionOrigin&&e("date-selection",wt(_),w),n.enableDragDrop&&(e("drag-enter-date",i.currentDragItem,_,w),w.target.classList.add("draghover"))},ye=(_,w)=>{n.enableDateSelection&&n.selectionStart||!n.enableDragDrop||(e("drag-leave-date",i.currentDragItem,_,w),w.target.classList.remove("draghover"))},Re=(_,w)=>{if(n.enableDateSelection&&i.dateSelectionOrigin){e("date-selection-finish",wt(_),w);return}n.enableDragDrop&&(e("drop-on-date",i.currentDragItem,_,w),w.target.classList.remove("draghover"))},Te=(_,w)=>_.startDate<w.startDate?-1:w.startDate<_.startDate?1:_.endDate>w.endDate?-1:w.endDate>_.endDate?1:_.id<w.id?-1:1,pn=_=>mn(_,j.addDays(_,6)),mn=(_,w)=>g.value.filter(S=>S.endDate>=_&&j.dateOnly(S.startDate)<=w,this).sort(Te),cn=_=>!!g.value.find(w=>w.endDate>=_&&j.dateOnly(w.startDate)<=_),ft=_=>!(!n.selectionStart||!n.selectionEnd||_<j.dateOnly(n.selectionStart)||_>j.dateOnly(n.selectionEnd)),ti=_=>{const w=pn(_),S=[],F=[[],[],[],[],[],[],[]];if(!w)return S;for(let x=0;x<w.length;x++){const p=Object.assign({},w[x],{classes:[...w[x].classes],itemRow:0}),m=p.startDate<_,E=m?0:j.dayDiff(_,p.startDate),b=Math.min(7-E,j.dayDiff(j.addDays(_,E),p.endDate)+1);m&&p.classes.push("continued"),j.dayDiff(_,p.endDate)>6&&p.classes.push("toBeContinued"),j.isInPast(p.endDate)&&p.classes.push("past"),p.originalItem.url&&p.classes.push("hasUrl");for(let C=0;C<7;C++)if(C===E){let k=0;for(;F[C][k];)k++;p.itemRow=k,F[C][k]=!0}else C<E+b&&(F[C][p.itemRow]=!0);p.classes.push(`offset${E}`),p.classes.push(`span${b}`),S.push(p)}return S},vi=_=>{const w='<span class="startTime">'+j.formattedTime(_.startDate,s.value,n.timeFormatOptions)+"</span>";let S="";return j.isSameDateTime(_.startDate,_.endDate)||(S='<span class="endTime">'+j.formattedTime(_.endDate,s.value,n.timeFormatOptions)+"</span>"),w+S},Zi=_=>n.showTimes?vi(_)+" "+_.title:_.title,Ke=_=>{const w=_.itemRow,S=n.itemContentHeight,F=n.itemBorderHeight;return`calc(${n.itemTop} + ${w}*${S} + ${w}*${F})`};return(_,w)=>(Z(),ce("div",{"aria-label":"Calendar",class:si(["cv-wrapper",`locale-${H(j).languageCode(H(s))}`,`locale-${H(s)}`,`y${H(o).getFullYear()}`,`m${H(j).paddedMonth(H(o))}`,`period-${t.displayPeriodUom}`,`periodCount-${t.displayPeriodCount}`,{past:H(j).isPastMonth(H(o)),future:H(j).isFutureMonth(H(o)),noIntl:!H(j).supportsIntl}])},[Dn(_.$slots,"header",{headerProps:H(A)}),U("div",yU,[t.displayWeekNumbers?(Z(),ce("div",vU)):pt("",!0),(Z(!0),ce(Je,null,ri(H(f),(S,F)=>Dn(_.$slots,"dayHeader",{index:le(F),label:S},()=>[(Z(),ce("div",{key:le(F),class:si([le(F),"cv-header-day"])},Ge(S),3))])),256))]),U("div",{"aria-multiselectable":t.enableDateSelection,class:"cv-weeks"},[(Z(!0),ce(Je,null,ri(H(h),(S,F)=>(Z(),ce("div",{key:`${F}-week`,class:si(["cv-week",`week${F+1}`,`ws${H(j).isoYearMonthDay(S)}`])},[t.displayWeekNumbers?(Z(),ce("div",wU,[Dn(_.$slots,"weekNumber",{date:S,numberInYear:H(l)+F,numberInPeriod:F+1},()=>[U("span",null,Ge(H(l)+F),1)])])):pt("",!0),U("div",TU,[(Z(!0),ce(Je,null,ri(H(j).daysOfWeek(S),(x,p)=>(Z(),ce("div",{key:le(p),draggable:t.enableDateSelection,class:si(["cv-day",le(p),`d${H(j).isoYearMonthDay(x)}`,`d${H(j).isoMonthDay(x)}`,`d${H(j).paddedDay(x)}`,`instance${H(j).instanceOfMonth(x)}`,{today:H(j).isSameDate(x,H(j).today()),outsideOfMonth:!H(j).isSameMonth(x,H(r)),past:H(j).isInPast(x),future:H(j).isInFuture(x),last:H(j).isLastDayOfMonth(x),lastInstance:H(j).isLastInstanceOfMonth(x),hasItems:cn(x),selectionStart:H(j).isSameDate(x,t.selectionStart),selectionEnd:H(j).isSameDate(x,t.selectionEnd)},...t.dateClasses&&t.dateClasses[H(j).isoYearMonthDay(x)]||[]]),"aria-grabbed":t.enableDateSelection?ft(x):void 0,"aria-label":x.getDate().toString(),"aria-selected":ft(x),"aria-dropeffect":t.enableDragDrop&&i.currentDragItem?"move":t.enableDateSelection&&i.dateSelectionOrigin?"execute":"none",onClick:m=>$(x,m),onDragstart:m=>st(x,m),onDrop:Fs(m=>Re(x,m),["prevent"]),onDragover:Fs(m=>ei(x,m),["prevent"]),onDragenter:Fs(m=>Wt(x,m),["prevent"]),onDragleave:Fs(m=>ye(x,m),["prevent"])},[U("div",IU,Ge(x.getDate()),1),Dn(_.$slots,"dayContent",{day:x})],42,bU))),128)),n.enableHtmlTitles?(Z(!0),ce(Je,{key:0},ri(ti(S),x=>Dn(_.$slots,"item",{value:x,weekStartDate:S,top:Ke(x)},()=>[(Z(),ce("div",{key:x.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?x==i.currentDragItem:void 0,class:si([x.classes,"cv-item"]),title:x.tooltip||x.title,style:Do(`top:${Ke(x)};${x.originalItem.style}`),onDragstart:p=>Et(x,p),onMouseenter:p=>se(x,p),onMouseleave:p=>be(x,p),onClick:Fs(p=>Q(x,p),["stop"]),innerHTML:Zi(x)},null,46,AU))])),256)):(Z(!0),ce(Je,{key:1},ri(ti(S),x=>Dn(_.$slots,"item",{value:x,weekStartDate:S,top:Ke(x)},()=>[(Z(),ce("div",{key:x.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?x==i.currentDragItem:void 0,class:si([x.classes,"cv-item"]),title:x.tooltip||x.title,style:Do(`top:${Ke(x)};${x.originalItem.style}`),onDragstart:p=>Et(x,p),onMouseenter:p=>se(x,p),onMouseleave:p=>be(x,p),onClick:Fs(p=>Q(x,p),["stop"])},Ge(Zi(x)),47,CU)),Kt(" div> ")])),256))])],2))),128))],8,EU)],2))}}),SU={class:"calendarHeader"},PU=U("md-icon",null,"chevron_left",-1),kU=[PU],xU=U("md-icon",null,"today",-1),DU=[xU],NU=U("md-icon",null,"chevron_right",-1),OU=[NU],MU={class:"date"},LU=Yt({__name:"CalendarHeader",props:{headerProps:{type:Object,required:!0}},emits:["input"],setup(t,{emit:e}){const n=t;function i(){e("input",n.headerProps.nextPeriod)}function s(){e("input",n.headerProps.currentPeriod)}function r(){e("input",n.headerProps.previousPeriod)}return(o,a)=>(Z(),ce("div",SU,[U("div",{class:"navButtons"},[U("md-icon-button",{onClick:r},kU),U("md-icon-button",{onClick:s},DU),U("md-icon-button",{onClick:i},OU)]),U("div",MU,Ge(H(ua)[n.headerProps.periodStart.getMonth()]),1)]))}});const VU={class:"calendarContainer"},FU={id:"calendar-component"},$U=Yt({__name:"Calendar",emits:["onClickDay","onClickItem"],setup(t,{emit:e}){var d;let n=Me(new Date);const i=(d=Vr().value)==null?void 0:d.uid;function s(f){return f.map(y=>{const v=y.id.substring(0,8),T=y.id.charAt(y.id.length-1);let I;if(T==="M")I=8;else if(T==="P")I=15;else throw new Error("Formato ID non riconosciuto");const A=new Date(parseInt(v.substring(0,4),10),parseInt(v.substring(4,6),10)-1,parseInt(v.substring(6,8),10),I),R=new Date(A);R.setHours(A.getHours()+4);const $=y.players||y.users,Q=$.filter(le=>le.id===i).length>0;return{id:y.id,startDate:A,endDate:R,title:$.length>=3?"Al completo":`${3-$.length} posti disponibili`,classes:Q?["bookedByUser"]:["green"],slotAvailables:3-$.length,playersNames:$.map(le=>le.username),bookedByUser:Q}})}const r=fb(tn,"availabilities"),o=Lb(r,{wait:!0}),a=Ie(()=>s(o.value));function l(f,g){return g.filter(y=>y.slotAvailables===0&&y.startDate.getFullYear()===f.getFullYear()&&y.startDate.getMonth()===f.getMonth()&&y.startDate.getDate()===f.getDate())}function c(f){n.value=f}function u(f){l(f,a.value).length>=1||e("onClickDay",f)}function h(f){f.endDate<new Date||e("onClickItem",f)}return(f,g)=>(Z(),ce("div",VU,[U("div",FU,[je(H(RU),{"show-date":H(n),class:"theme-default",onClickDate:u,onClickItem:h,items:a.value,"disable-past":!0,"current-period-label":"icons","display-period-uom":"month",startingDayOfWeek:1},{header:en(({headerProps:y})=>[je(LU,{headerProps:y,onInput:c},null,8,["headerProps"])]),_:1},8,["show-date","items"])])]))}});const UU={class:"squadGen"},BU={key:0,class:"squads"},HU={class:"squad"},jU=Yt({__name:"SquadGenerator",props:{players:{}},setup(t){const e=t,n=Me();function i(r){const o=[],a=r.slice().sort(()=>Math.random()-.5);for(let l=a.length-1;l>=0;l--)l%2!==0&&o.push(a.splice(l,1)[0]);return[a,o]}function s(){n.value=i(e.players)}return(r,o)=>(Z(),ce("div",UU,[n.value&&n.value.length>0?(Z(),ce("div",BU,[(Z(!0),ce(Je,null,ri(n.value,(a,l)=>(Z(),ce("div",HU,[U("b",null," Squadra "+Ge(l+1),1),(Z(!0),ce(Je,null,ri(a,c=>(Z(),ce("div",null,Ge(c),1))),256))]))),256))])):pt("",!0),U("md-filled-tonal-button",{onClick:s}," Genera squadre ")]))}});const zU={class:"availabilityView"},WU=U("div",{class:"istruzioni"}," Per prenotare, clicca su un giorno vuoto o su uno slot già creato ",-1),qU=["open"],KU=U("div",{slot:"headline"},"Non puoi prenotare",-1),GU=U("form",{id:"form",slot:"content",method:"dialog"}," Hai ricevuto due o più ammonizioni e non puoi più prenotare. Dai un'occhiata al regolamento se vuoi sapere come ridurre le tue ammonizioni. ",-1),QU={slot:"actions"},YU=["open"],XU=U("div",{slot:"headline"},"Slot prenotato",-1),JU={slot:"content",id:"form-id",method:"dialog"},ZU=["open"],e4=U("div",{slot:"headline"},"Prenota slot",-1),t4={slot:"content",id:"form-id",method:"dialog"},n4={key:2,class:"clausola"},i4={slot:"actions"},s4={key:0},r4=U("a",{target:"_blank",rel:"noopener noreferrer",href:"https://calendar.google.com/calendar/embed?src=rho5n91oc32t7pdipjecqvpe9s%40group.calendar.google.com&ctz=Europe%2FRome"},[U("md-filled-tonal-button",{id:"addToCalendar"},[Kt(" Aggiungi calendario a Google Calendar "),U("md-icon",{slot:"icon"},"calendar_add_on")])],-1),o4=Yt({__name:"AvailabilityView",setup(t){var T;const e=Me(!1),n=Me(!1),i=Me(new Date),s=Me("mattina"),r=Me(!1),o=Me(!1),a=Me(!1),l=Me(!1),c=Me(!1),u=Me([]),h=(T=Vr().value)==null?void 0:T.uid,d=Vb(Ln(tn,`users/${h}`));function f(I,A){return`availabilities/${I.getFullYear()}${(I.getMonth()+1).toString().padStart(2,"0")}${I.getDate().toString().padStart(2,"0")}-${A==="mattina"?"M":"P"}`}async function g(){if(l.value=!1,i.value==null||s.value==null){console.error("Ma che cazz");return}r.value=!0;const I=Ln(tn,f(i.value,s.value)),A=Ln(tn,`users/${h}/${f(i.value,s.value)}`);(await Au(I)).exists()?QL(I,{players:ZL(Ln(tn,`users/${h}`))}):uy(I,{players:[Ln(tn,`users/${h}`)]}),uy(A,{date:i.value,timeSlot:s.value}),r.value=!1,o.value=!0,n.value=!1,e.value=!1}function y(I){var A;if(((A=d.value)==null?void 0:A.admonitionCount)>=2){a.value=!0;return}l.value=!0,o.value=!1,i.value=I,n.value=!1,e.value=!0}function v(I){var A;if(I.originalItem.bookedByUser){c.value=!0,u.value=["Danilo",...I.originalItem.playersNames];return}if(((A=d.value)==null?void 0:A.admonitionCount)>=2){a.value=!0;return}o.value=!1,l.value=!0,I.originalItem.slotAvailables>0&&(s.value=I.id.charAt(I.id.length-1)==="M"?"mattina":"pomeriggio",i.value=I.startDate,n.value=!0,e.value=!1)}return(I,A)=>{const R=Vc("RouterLink");return Z(),ce("div",zU,[WU,je($U,{onOnClickDay:y,onOnClickItem:v}),U("md-dialog",{type:"alert",open:a.value},[KU,GU,U("div",QU,[U("md-text-button",{form:"form",value:"ok",onClick:A[0]||(A[0]=$=>a.value=!1)},"OK")])],8,qU),U("md-dialog",{type:"alert",open:c.value,onClose:A[1]||(A[1]=$=>c.value=!1)},[XU,U("div",JU,[Kt(" Giocatori: "),U("ul",null,[(Z(!0),ce(Je,null,ri(u.value,$=>(Z(),ce("li",null,Ge($),1))),256))]),je(jU,{players:u.value},null,8,["players"])])],40,YU),U("md-dialog",{type:"alert",open:l.value},[e4,U("form",t4,[e.value&&!r.value?(Z(),qn(B2,{key:0,date:i.value,onSelect:A[2]||(A[2]=$=>s.value=$.timeSlot)},null,8,["date"])):pt("",!0),n.value&&!r.value?(Z(),qn(j2,{key:1,date:i.value,time:s.value},null,8,["date","time"])):pt("",!0),!r.value&&(e.value||n.value)?(Z(),ce("div",n4,[Kt("Confermando accetti "),je(R,{class:"link",to:"/rules"},{default:en(()=>[Kt(" il regolamento")]),_:1})])):pt("",!0)]),U("div",i4,[U("md-text-button",{form:"form-id",value:"cancel",onClick:A[3]||(A[3]=$=>l.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:g},"Conferma")])],8,ZU),o.value?(Z(),ce("div",s4,"Prenotato")):pt("",!0),r4])}}});const RI=KF({history:uF("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:N2},{path:"/login",name:"login",component:()=>ml(()=>import("./LoginView-919c34c7.js"),["assets/LoginView-919c34c7.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:o4},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>ml(()=>Promise.resolve().then(()=>R2),void 0)},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>ml(()=>import("./RulesView-ce41e409.js"),["assets/RulesView-ce41e409.js","assets/RulesView-fa63a5c5.css"])},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>ml(()=>import("./AdminView-ba9933c1.js"),["assets/AdminView-ba9933c1.js","assets/AdminView-fab7fdba.css"])}]});RI.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await Og())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await Og();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const i=await Au(Ln(tn,`users/${n.uid}`));if(!i.exists()||((e=i.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const Vu=QC(XF);Vu.use($V());Vu.use(RI);Vu.use(FV,{firebaseApp:Hb,modules:[VV()]});Vu.mount("#app");export{Je as F,Ri as G,xu as _,Vr as a,Z as b,ce as c,Yt as d,H as e,pt as f,l4 as g,U as h,je as i,Mc as j,Lb as k,fb as l,Ie as m,ri as n,$A as o,Oc as p,tn as q,Vc as r,a4 as s,Ge as t,p4 as u,ua as v,en as w};
