var _R=Object.defineProperty;var yR=(t,e,n)=>e in t?_R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>(yR(t,typeof e!="symbol"?e+"":e,n),n),vR=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var mh=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var yl=(t,e,n)=>(vR(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Qf(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const We={},mr=[],Dn=()=>{},wR=()=>!1,bR=/^on[^a-z]/,iu=t=>bR.test(t),Yf=t=>t.startsWith("onUpdate:"),gt=Object.assign,Xf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ER=Object.prototype.hasOwnProperty,be=(t,e)=>ER.call(t,e),oe=Array.isArray,gr=t=>su(t)==="[object Map]",pw=t=>su(t)==="[object Set]",fe=t=>typeof t=="function",ut=t=>typeof t=="string",Jf=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",mw=t=>Ge(t)&&fe(t.then)&&fe(t.catch),gw=Object.prototype.toString,su=t=>gw.call(t),IR=t=>su(t).slice(8,-1),_w=t=>su(t)==="[object Object]",Zf=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jl=Qf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ru=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},TR=/-(\w)/g,ii=ru(t=>t.replace(TR,(e,n)=>n?n.toUpperCase():"")),AR=/\B([A-Z])/g,Kr=ru(t=>t.replace(AR,"-$1").toLowerCase()),ou=ru(t=>t.charAt(0).toUpperCase()+t.slice(1)),gh=ru(t=>t?`on${ou(t)}`:""),Xo=(t,e)=>!Object.is(t,e),_h=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},RR=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cg;const pd=()=>Cg||(Cg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jo(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ut(i)?PR(i):Jo(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ut(t))return t;if(Ge(t))return t}}const CR=/;(?![^(]*\))/g,SR=/:([^]+)/,kR=/\/\*[^]*?\*\//g;function PR(t){const e={};return t.replace(kR,"").split(CR).forEach(n=>{if(n){const i=n.split(SR);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pi(t){let e="";if(ut(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const i=pi(t[n]);i&&(e+=i+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DR=Qf(xR);function yw(t){return!!t||t===""}const Ye=t=>ut(t)?t:t==null?"":oe(t)||Ge(t)&&(t.toString===gw||!fe(t.toString))?JSON.stringify(t,vw,2):String(t),vw=(t,e)=>e&&e.__v_isRef?vw(t,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:pw(e)?{[`Set(${e.size})`]:[...e.values()]}:Ge(e)&&!oe(e)&&!_w(e)?String(e):e;let un;class ww{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ep(t){return new ww(t)}function NR(t,e=un){e&&e.active&&e.effects.push(t)}function tp(){return un}function bw(t){un&&un.cleanups.push(t)}const np=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ew=t=>(t.w&Xi)>0,Iw=t=>(t.n&Xi)>0,OR=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xi},MR=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Ew(s)&&!Iw(s)?s.delete(t):e[n++]=s,s.w&=~Xi,s.n&=~Xi}e.length=n}},rc=new WeakMap;let Ao=0,Xi=1;const md=30;let Cn;const As=Symbol(""),gd=Symbol("");class ip{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,NR(this,i)}run(){if(!this.active)return this.fn();let e=Cn,n=zi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Cn,Cn=this,zi=!0,Xi=1<<++Ao,Ao<=md?OR(this):Sg(this),this.fn()}finally{Ao<=md&&MR(this),Xi=1<<--Ao,Cn=this.parent,zi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(Sg(this),this.onStop&&this.onStop(),this.active=!1)}}function Sg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zi=!0;const Tw=[];function Gr(){Tw.push(zi),zi=!1}function Qr(){const t=Tw.pop();zi=t===void 0?!0:t}function an(t,e,n){if(zi&&Cn){let i=rc.get(t);i||rc.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=np()),Aw(s)}}function Aw(t,e){let n=!1;Ao<=md?Iw(t)||(t.n|=Xi,n=!Ew(t)):n=!t.has(Cn),n&&(t.add(Cn),Cn.deps.push(t))}function Ei(t,e,n,i,s,r){const o=rc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?Zf(n)&&a.push(o.get("length")):(a.push(o.get(As)),gr(t)&&a.push(o.get(gd)));break;case"delete":oe(t)||(a.push(o.get(As)),gr(t)&&a.push(o.get(gd)));break;case"set":gr(t)&&a.push(o.get(As));break}if(a.length===1)a[0]&&_d(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_d(np(l))}}function _d(t,e){const n=oe(t)?t:[...t];for(const i of n)i.computed&&kg(i);for(const i of n)i.computed||kg(i)}function kg(t,e){(t!==Cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function LR(t,e){var n;return(n=rc.get(t))==null?void 0:n.get(e)}const $R=Qf("__proto__,__v_isRef,__isVue"),Rw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jf)),VR=sp(),FR=sp(!1,!0),UR=sp(!0),Pg=BR();function BR(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ie(this);for(let r=0,o=this.length;r<o;r++)an(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gr();const i=Ie(this)[e].apply(this,n);return Qr(),i}}),t}function zR(t){const e=Ie(this);return an(e,"has",t),e.hasOwnProperty(t)}function sp(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?sC:xw:e?Pw:kw).get(i))return i;const o=oe(i);if(!t){if(o&&be(Pg,s))return Reflect.get(Pg,s,r);if(s==="hasOwnProperty")return zR}const a=Reflect.get(i,s,r);return(Jf(s)?Rw.has(s):$R(s))||(t||an(i,"get",s),e)?a:Xe(a)?o&&Zf(s)?a:a.value:Ge(a)?t?Nw(a):Yr(a):a}}const jR=Cw(),HR=Cw(!0);function Cw(t=!1){return function(n,i,s,r){let o=n[i];if(Rr(o)&&Xe(o)&&!Xe(s))return!1;if(!t&&(!oc(s)&&!Rr(s)&&(o=Ie(o),s=Ie(s)),!oe(n)&&Xe(o)&&!Xe(s)))return o.value=s,!0;const a=oe(n)&&Zf(i)?Number(i)<n.length:be(n,i),l=Reflect.set(n,i,s,r);return n===Ie(r)&&(a?Xo(s,o)&&Ei(n,"set",i,s):Ei(n,"add",i,s)),l}}function qR(t,e){const n=be(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ei(t,"delete",e,void 0),i}function WR(t,e){const n=Reflect.has(t,e);return(!Jf(e)||!Rw.has(e))&&an(t,"has",e),n}function KR(t){return an(t,"iterate",oe(t)?"length":As),Reflect.ownKeys(t)}const Sw={get:VR,set:jR,deleteProperty:qR,has:WR,ownKeys:KR},GR={get:UR,set(t,e){return!0},deleteProperty(t,e){return!0}},QR=gt({},Sw,{get:FR,set:HR}),rp=t=>t,au=t=>Reflect.getPrototypeOf(t);function vl(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ie(t),r=Ie(e);n||(e!==r&&an(s,"get",e),an(s,"get",r));const{has:o}=au(s),a=i?rp:n?lp:Zo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function wl(t,e=!1){const n=this.__v_raw,i=Ie(n),s=Ie(t);return e||(t!==s&&an(i,"has",t),an(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function bl(t,e=!1){return t=t.__v_raw,!e&&an(Ie(t),"iterate",As),Reflect.get(t,"size",t)}function xg(t){t=Ie(t);const e=Ie(this);return au(e).has.call(e,t)||(e.add(t),Ei(e,"add",t,t)),this}function Dg(t,e){e=Ie(e);const n=Ie(this),{has:i,get:s}=au(n);let r=i.call(n,t);r||(t=Ie(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Xo(e,o)&&Ei(n,"set",t,e):Ei(n,"add",t,e),this}function Ng(t){const e=Ie(this),{has:n,get:i}=au(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ei(e,"delete",t,void 0),r}function Og(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Ei(t,"clear",void 0,void 0),n}function El(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ie(o),l=e?rp:t?lp:Zo;return!t&&an(a,"iterate",As),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Il(t,e,n){return function(...i){const s=this.__v_raw,r=Ie(s),o=gr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?rp:e?lp:Zo;return!e&&an(r,"iterate",l?gd:As),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function xi(t){return function(...e){return t==="delete"?!1:this}}function YR(){const t={get(r){return vl(this,r)},get size(){return bl(this)},has:wl,add:xg,set:Dg,delete:Ng,clear:Og,forEach:El(!1,!1)},e={get(r){return vl(this,r,!1,!0)},get size(){return bl(this)},has:wl,add:xg,set:Dg,delete:Ng,clear:Og,forEach:El(!1,!0)},n={get(r){return vl(this,r,!0)},get size(){return bl(this,!0)},has(r){return wl.call(this,r,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:El(!0,!1)},i={get(r){return vl(this,r,!0,!0)},get size(){return bl(this,!0)},has(r){return wl.call(this,r,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:El(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Il(r,!1,!1),n[r]=Il(r,!0,!1),e[r]=Il(r,!1,!0),i[r]=Il(r,!0,!0)}),[t,n,e,i]}const[XR,JR,ZR,eC]=YR();function op(t,e){const n=e?t?eC:ZR:t?JR:XR;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(be(n,s)&&s in i?n:i,s,r)}const tC={get:op(!1,!1)},nC={get:op(!1,!0)},iC={get:op(!0,!1)},kw=new WeakMap,Pw=new WeakMap,xw=new WeakMap,sC=new WeakMap;function rC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oC(t){return t.__v_skip||!Object.isExtensible(t)?0:rC(IR(t))}function Yr(t){return Rr(t)?t:ap(t,!1,Sw,tC,kw)}function Dw(t){return ap(t,!1,QR,nC,Pw)}function Nw(t){return ap(t,!0,GR,iC,xw)}function ap(t,e,n,i,s){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=oC(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ji(t){return Rr(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function oc(t){return!!(t&&t.__v_isShallow)}function Ow(t){return ji(t)||Rr(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function lu(t){return sc(t,"__v_skip",!0),t}const Zo=t=>Ge(t)?Yr(t):t,lp=t=>Ge(t)?Nw(t):t;function Mw(t){zi&&Cn&&(t=Ie(t),Aw(t.dep||(t.dep=np())))}function Lw(t,e){t=Ie(t);const n=t.dep;n&&_d(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return Vw(t,!1)}function $w(t){return Vw(t,!0)}function Vw(t,e){return Xe(t)?t:new aC(t,e)}class aC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Zo(e)}get value(){return Mw(this),this._value}set value(e){const n=this.__v_isShallow||oc(e)||Rr(e);e=n?e:Ie(e),Xo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zo(e),Lw(this))}}function j(t){return Xe(t)?t.value:t}const lC={get:(t,e,n)=>j(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Fw(t){return ji(t)?t:new Proxy(t,lC)}function cC(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=hC(t,n);return e}class uC{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return LR(Ie(this._object),this._key)}}function hC(t,e,n){const i=t[e];return Xe(i)?i:new uC(t,e,n)}class dC{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ip(e,()=>{this._dirty||(this._dirty=!0,Lw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ie(this);return Mw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fC(t,e,n=!1){let i,s;const r=fe(t);return r?(i=t,s=Dn):(i=t.get,s=t.set),new dC(i,s,r||!s,n)}function Hi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){cu(r,e,n)}return s}function Nn(t,e,n,i){if(fe(t)){const r=Hi(t,e,n,i);return r&&mw(r)&&r.catch(o=>{cu(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Nn(t[r],e,n,i));return s}function cu(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Hi(l,null,10,[t,o,a]);return}}pC(t,n,s,i)}function pC(t,e,n,i=!0){console.error(t)}let ea=!1,yd=!1;const Lt=[];let Hn=0;const _r=[];let fi=null,gs=0;const Uw=Promise.resolve();let cp=null;function up(t){const e=cp||Uw;return t?e.then(this?t.bind(this):t):e}function mC(t){let e=Hn+1,n=Lt.length;for(;e<n;){const i=e+n>>>1;ta(Lt[i])<t?e=i+1:n=i}return e}function hp(t){(!Lt.length||!Lt.includes(t,ea&&t.allowRecurse?Hn+1:Hn))&&(t.id==null?Lt.push(t):Lt.splice(mC(t.id),0,t),Bw())}function Bw(){!ea&&!yd&&(yd=!0,cp=Uw.then(jw))}function gC(t){const e=Lt.indexOf(t);e>Hn&&Lt.splice(e,1)}function _C(t){oe(t)?_r.push(...t):(!fi||!fi.includes(t,t.allowRecurse?gs+1:gs))&&_r.push(t),Bw()}function Mg(t,e=ea?Hn+1:0){for(;e<Lt.length;e++){const n=Lt[e];n&&n.pre&&(Lt.splice(e,1),e--,n())}}function zw(t){if(_r.length){const e=[...new Set(_r)];if(_r.length=0,fi){fi.push(...e);return}for(fi=e,fi.sort((n,i)=>ta(n)-ta(i)),gs=0;gs<fi.length;gs++)fi[gs]();fi=null,gs=0}}const ta=t=>t.id==null?1/0:t.id,yC=(t,e)=>{const n=ta(t)-ta(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jw(t){yd=!1,ea=!0,Lt.sort(yC);const e=Dn;try{for(Hn=0;Hn<Lt.length;Hn++){const n=Lt[Hn];n&&n.active!==!1&&Hi(n,null,14)}}finally{Hn=0,Lt.length=0,zw(),ea=!1,cp=null,(Lt.length||_r.length)&&jw()}}function vC(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||We;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||We;d&&(s=n.map(f=>ut(f)?f.trim():f)),h&&(s=n.map(RR))}let a,l=i[a=gh(e)]||i[a=gh(ii(e))];!l&&r&&(l=i[a=gh(Kr(e))]),l&&Nn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(c,t,6,s)}}function Hw(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=Hw(c,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ge(t)&&i.set(t,null),null):(oe(r)?r.forEach(l=>o[l]=null):gt(o,r),Ge(t)&&i.set(t,o),o)}function uu(t,e){return!t||!iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Kr(e))||be(t,e))}let It=null,hu=null;function ac(t){const e=It;return It=t,hu=t&&t.type.__scopeId||null,e}function Ma(t){hu=t}function La(){hu=null}function Gt(t,e=It,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Wg(-1);const r=ac(e);let o;try{o=t(...s)}finally{ac(r),i._d&&Wg(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function yh(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,b;const I=ac(t);try{if(n.shapeFlag&4){const E=s||i;v=jn(u.call(E,E,h,r,f,d,m)),b=l}else{const E=e;v=jn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),b=e.props?l:wC(l)}}catch(E){Mo.length=0,cu(E,t,1),v=Be(Ji)}let C=v;if(b&&y!==!1){const E=Object.keys(b),{shapeFlag:x}=C;E.length&&x&7&&(o&&E.some(Yf)&&(b=bC(b,o)),C=Cr(C,b))}return n.dirs&&(C=Cr(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),v=C,ac(I),v}const wC=t=>{let e;for(const n in t)(n==="class"||n==="style"||iu(n))&&((e||(e={}))[n]=t[n]);return e},bC=(t,e)=>{const n={};for(const i in t)(!Yf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function EC(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Lg(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!uu(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lg(i,o,c):!0:!!o;return!1}function Lg(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!uu(n,r))return!0}return!1}function IC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const TC=t=>t.__isSuspense;function AC(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):_C(t)}const Tl={};function qi(t,e,n){return qw(t,e,n)}function qw(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=We){var a;const l=tp()===((a=lt)==null?void 0:a.scope)?lt:null;let c,u=!1,h=!1;if(Xe(t)?(c=()=>t.value,u=oc(t)):ji(t)?(c=()=>t,i=!0):oe(t)?(h=!0,u=t.some(E=>ji(E)||oc(E)),c=()=>t.map(E=>{if(Xe(E))return E.value;if(ji(E))return ur(E);if(fe(E))return Hi(E,l,2)})):fe(t)?e?c=()=>Hi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Nn(t,l,3,[f])}:c=Dn,e&&i){const E=c;c=()=>ur(E())}let d,f=E=>{d=I.onStop=()=>{Hi(E,l,4)}},m;if(sa)if(f=Dn,e?n&&Nn(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const E=_S();m=E.__watcherHandles||(E.__watcherHandles=[])}else return Dn;let y=h?new Array(t.length).fill(Tl):Tl;const v=()=>{if(I.active)if(e){const E=I.run();(i||u||(h?E.some((x,H)=>Xo(x,y[H])):Xo(E,y)))&&(d&&d(),Nn(e,l,3,[E,y===Tl?void 0:h&&y[0]===Tl?[]:y,f]),y=E)}else I.run()};v.allowRecurse=!!e;let b;s==="sync"?b=v:s==="post"?b=()=>nn(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),b=()=>hp(v));const I=new ip(c,b);e?n?v():y=I.run():s==="post"?nn(I.run.bind(I),l&&l.suspense):I.run();const C=()=>{I.stop(),l&&l.scope&&Xf(l.scope.effects,I)};return m&&m.push(C),C}function RC(t,e,n){const i=this.proxy,s=ut(t)?t.includes(".")?Ww(i,t):()=>i[t]:t.bind(i,i);let r;fe(e)?r=e:(r=e.handler,n=e);const o=lt;Sr(this);const a=qw(s,r.bind(i),n);return o?Sr(o):Rs(),a}function Ww(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ur(t,e){if(!Ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))ur(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ur(t[n],e);else if(pw(t)||gr(t))t.forEach(n=>{ur(n,e)});else if(_w(t))for(const n in t)ur(t[n],e);return t}function hs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Gr(),Nn(l,n,8,[t.el,a,t,e]),Qr())}}function Rt(t,e){return fe(t)?(()=>gt({name:t.name},e,{setup:t}))():t}const No=t=>!!t.type.__asyncLoader,Kw=t=>t.type.__isKeepAlive;function CC(t,e){Gw(t,"a",e)}function SC(t,e){Gw(t,"da",e)}function Gw(t,e,n=lt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(du(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Kw(s.parent.vnode)&&kC(i,e,n,s),s=s.parent}}function kC(t,e,n,i){const s=du(e,t,i,!0);dp(()=>{Xf(i[e],s)},n)}function du(t,e,n=lt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gr(),Sr(n);const a=Nn(e,n,t,o);return Rs(),Qr(),a});return i?s.unshift(r):s.push(r),r}}const Si=t=>(e,n=lt)=>(!sa||t==="sp")&&du(t,(...i)=>e(...i),n),PC=Si("bm"),Qw=Si("m"),xC=Si("bu"),DC=Si("u"),NC=Si("bum"),dp=Si("um"),Yw=Si("sp"),OC=Si("rtg"),MC=Si("rtc");function LC(t,e=lt){du("ec",t,e)}const Xw="components";function $a(t,e){return VC(Xw,t,!0,e)||t}const $C=Symbol.for("v-ndc");function VC(t,e,n=!0,i=!1){const s=It||lt;if(s){const r=s.type;if(t===Xw){const a=pS(r,!1);if(a&&(a===e||a===ii(e)||a===ou(ii(e))))return r}const o=$g(s[t]||r[t],e)||$g(s.appContext[t],e);return!o&&i?r:o}}function $g(t,e){return t&&(t[e]||t[ii(e)]||t[ou(ii(e))])}function mi(t,e,n,i){let s;const r=n&&n[i];if(oe(t)||ut(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ge(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function zn(t,e,n={},i,s){if(It.isCE||It.parent&&No(It.parent)&&It.parent.isCE)return e!=="default"&&(n.name=e),Be("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),X();const o=r&&Jw(r(n)),a=si(et,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Jw(t){return t.some(e=>cc(e)?!(e.type===Ji||e.type===et&&!Jw(e.children)):!0)?t:null}const vd=t=>t?ub(t)?_p(t)||t.proxy:vd(t.parent):null,Oo=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vd(t.parent),$root:t=>vd(t.root),$emit:t=>t.emit,$options:t=>fp(t),$forceUpdate:t=>t.f||(t.f=()=>hp(t.update)),$nextTick:t=>t.n||(t.n=up.bind(t.proxy)),$watch:t=>RC.bind(t)}),vh=(t,e)=>t!==We&&!t.__isScriptSetup&&be(t,e),FC={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(vh(i,e))return o[e]=1,i[e];if(s!==We&&be(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,r[e];if(n!==We&&be(n,e))return o[e]=4,n[e];wd&&(o[e]=0)}}const u=Oo[e];let h,d;if(u)return e==="$attrs"&&an(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==We&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return vh(s,e)?(s[e]=n,!0):i!==We&&be(i,e)?(i[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==We&&be(t,o)||vh(e,o)||(a=r[0])&&be(a,o)||be(i,o)||be(Oo,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vg(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wd=!0;function UC(t){const e=fp(t),n=t.proxy,i=t.ctx;wd=!1,e.beforeCreate&&Fg(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:I,destroyed:C,unmounted:E,render:x,renderTracked:H,renderTriggered:J,errorCaptured:Y,serverPrefetch:le,expose:Ae,inheritAttrs:ht,components:Ct,directives:St,filters:ui}=e;if(c&&BC(c,i,null),o)for(const De in o){const Te=o[De];fe(Te)&&(i[De]=Te.bind(n))}if(s){const De=s.call(n,n);Ge(De)&&(t.data=Yr(De))}if(wd=!0,r)for(const De in r){const Te=r[De],Tn=fe(Te)?Te.bind(n,n):fe(Te.get)?Te.get.bind(n,n):Dn,An=!fe(Te)&&fe(Te.set)?Te.set.bind(n):Dn,vn=Re({get:Tn,set:An});Object.defineProperty(i,De,{enumerable:!0,configurable:!0,get:()=>vn.value,set:vt=>vn.value=vt})}if(a)for(const De in a)Zw(a[De],i,n,De);if(l){const De=fe(l)?l.call(n):l;Reflect.ownKeys(De).forEach(Te=>{Hl(Te,De[Te])})}u&&Fg(u,t,"c");function we(De,Te){oe(Te)?Te.forEach(Tn=>De(Tn.bind(n))):Te&&De(Te.bind(n))}if(we(PC,h),we(Qw,d),we(xC,f),we(DC,m),we(CC,y),we(SC,v),we(LC,Y),we(MC,H),we(OC,J),we(NC,I),we(dp,E),we(Yw,le),oe(Ae))if(Ae.length){const De=t.exposed||(t.exposed={});Ae.forEach(Te=>{Object.defineProperty(De,Te,{get:()=>n[Te],set:Tn=>n[Te]=Tn})})}else t.exposed||(t.exposed={});x&&t.render===Dn&&(t.render=x),ht!=null&&(t.inheritAttrs=ht),Ct&&(t.components=Ct),St&&(t.directives=St)}function BC(t,e,n=Dn){oe(t)&&(t=bd(t));for(const i in t){const s=t[i];let r;Ge(s)?"default"in s?r=sn(s.from||i,s.default,!0):r=sn(s.from||i):r=sn(s),Xe(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Fg(t,e,n){Nn(oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zw(t,e,n,i){const s=i.includes(".")?Ww(n,i):()=>n[i];if(ut(t)){const r=e[t];fe(r)&&qi(s,r)}else if(fe(t))qi(s,t.bind(n));else if(Ge(t))if(oe(t))t.forEach(r=>Zw(r,e,n,i));else{const r=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(r)&&qi(s,r,t)}}function fp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>lc(l,c,o,!0)),lc(l,e,o)),Ge(e)&&r.set(e,l),l}function lc(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&lc(t,r,n,!0),s&&s.forEach(o=>lc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=zC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zC={data:Ug,props:Bg,emits:Bg,methods:Ro,computed:Ro,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Ro,directives:Ro,watch:HC,provide:Ug,inject:jC};function Ug(t,e){return e?t?function(){return gt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function jC(t,e){return Ro(bd(t),bd(e))}function bd(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ro(t,e){return t?gt(Object.create(null),t,e):e}function Bg(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:gt(Object.create(null),Vg(t),Vg(e??{})):e}function HC(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function eb(){return{app:null,config:{isNativeTag:wR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qC=0;function WC(t,e){return function(i,s=null){fe(i)||(i=gt({},i)),s!=null&&!Ge(s)&&(s=null);const r=eb(),o=new Set;let a=!1;const l=r.app={_uid:qC++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:yS,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Be(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,_p(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){na=l;try{return c()}finally{na=null}}};return l}}let na=null;function Hl(t,e){if(lt){let n=lt.provides;const i=lt.parent&&lt.parent.provides;i===n&&(n=lt.provides=Object.create(i)),n[t]=e}}function sn(t,e,n=!1){const i=lt||It;if(i||na){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:na._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(i&&i.proxy):e}}function KC(){return!!(lt||It||na)}function GC(t,e,n,i=!1){const s={},r={};sc(r,pu,1),t.propsDefaults=Object.create(null),tb(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Dw(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function QC(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(uu(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=ii(d);s[m]=Ed(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{tb(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=Kr(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ed(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!be(e,h))&&(delete r[h],c=!0)}c&&Ei(t,"set","$attrs")}function tb(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(jl(l))continue;const c=e[l];let u;s&&be(s,u=ii(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:uu(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ie(n),c=a||We;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ed(s,l,h,c[h],t,!be(c,h))}}return o}function Ed(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Sr(s),i=c[n]=l.call(null,e),Rs())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Kr(n))&&(i=!0))}return i}function nb(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=nb(h,e,!0);gt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ge(t)&&i.set(t,mr),mr;if(oe(r))for(let u=0;u<r.length;u++){const h=ii(r[u]);zg(h)&&(o[h]=We)}else if(r)for(const u in r){const h=ii(u);if(zg(h)){const d=r[u],f=o[h]=oe(d)||fe(d)?{type:d}:gt({},d);if(f){const m=qg(Boolean,f.type),y=qg(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Ge(t)&&i.set(t,c),c}function zg(t){return t[0]!=="$"}function jg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hg(t,e){return jg(t)===jg(e)}function qg(t,e){return oe(e)?e.findIndex(n=>Hg(n,t)):fe(e)&&Hg(e,t)?0:-1}const ib=t=>t[0]==="_"||t==="$stable",pp=t=>oe(t)?t.map(jn):[jn(t)],YC=(t,e,n)=>{if(e._n)return e;const i=Gt((...s)=>pp(e(...s)),n);return i._c=!1,i},sb=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ib(s))continue;const r=t[s];if(fe(r))e[s]=YC(s,r,i);else if(r!=null){const o=pp(r);e[s]=()=>o}}},rb=(t,e)=>{const n=pp(e);t.slots.default=()=>n},XC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),sc(e,"_",n)):sb(e,t.slots={})}else t.slots={},e&&rb(t,e);sc(t.slots,pu,1)},JC=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=We;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(gt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,sb(e,s)),o=e}else e&&(rb(t,e),o={default:1});if(r)for(const a in s)!ib(a)&&!(a in o)&&delete s[a]};function Id(t,e,n,i,s=!1){if(oe(t)){t.forEach((d,f)=>Id(d,e&&(oe(e)?e[f]:e),n,i,s));return}if(No(i)&&!s)return;const r=i.shapeFlag&4?_p(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===We?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ut(c)?(u[c]=null,be(h,c)&&(h[c]=null)):Xe(c)&&(c.value=null)),fe(l))Hi(l,a,12,[o,u]);else{const d=ut(l),f=Xe(l);if(d||f){const m=()=>{if(t.f){const y=d?be(h,l)?h[l]:u[l]:l.value;s?oe(y)&&Xf(y,r):oe(y)?y.includes(r)||y.push(r):d?(u[l]=[r],be(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,nn(m,n)):m()}}}const nn=AC;function ZC(t){return eS(t)}function eS(t,e){const n=pd();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Dn,insertStaticContent:m}=t,y=(p,g,w,A=null,R=null,P=null,z=!1,M=null,L=!!g.dynamicChildren)=>{if(p===g)return;p&&!mo(p,g)&&(A=_(p),vt(p,R,P,!0),p=null),g.patchFlag===-2&&(L=!1,g.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:K}=g;switch(N){case fu:v(p,g,w,A);break;case Ji:b(p,g,w,A);break;case wh:p==null&&I(g,w,A,z);break;case et:Ct(p,g,w,A,R,P,z,M,L);break;default:K&1?x(p,g,w,A,R,P,z,M,L):K&6?St(p,g,w,A,R,P,z,M,L):(K&64||K&128)&&N.process(p,g,w,A,R,P,z,M,L,S)}ee!=null&&R&&Id(ee,p&&p.ref,P,g||p,!g)},v=(p,g,w,A)=>{if(p==null)i(g.el=a(g.children),w,A);else{const R=g.el=p.el;g.children!==p.children&&c(R,g.children)}},b=(p,g,w,A)=>{p==null?i(g.el=l(g.children||""),w,A):g.el=p.el},I=(p,g,w,A)=>{[p.el,p.anchor]=m(p.children,g,w,A,p.el,p.anchor)},C=({el:p,anchor:g},w,A)=>{let R;for(;p&&p!==g;)R=d(p),i(p,w,A),p=R;i(g,w,A)},E=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=d(p),s(p),p=w;s(g)},x=(p,g,w,A,R,P,z,M,L)=>{z=z||g.type==="svg",p==null?H(g,w,A,R,P,z,M,L):le(p,g,R,P,z,M,L)},H=(p,g,w,A,R,P,z,M)=>{let L,N;const{type:ee,props:K,shapeFlag:te,transition:ce,dirs:pe}=p;if(L=p.el=o(p.type,P,K&&K.is,K),te&8?u(L,p.children):te&16&&Y(p.children,L,null,A,R,P&&ee!=="foreignObject",z,M),pe&&hs(p,null,A,"created"),J(L,p,p.scopeId,z,A),K){for(const $e in K)$e!=="value"&&!jl($e)&&r(L,$e,null,K[$e],P,p.children,A,R,Ze);"value"in K&&r(L,"value",null,K.value),(N=K.onVnodeBeforeMount)&&Bn(N,A,p)}pe&&hs(p,null,A,"beforeMount");const Ue=(!R||R&&!R.pendingBranch)&&ce&&!ce.persisted;Ue&&ce.beforeEnter(L),i(L,g,w),((N=K&&K.onVnodeMounted)||Ue||pe)&&nn(()=>{N&&Bn(N,A,p),Ue&&ce.enter(L),pe&&hs(p,null,A,"mounted")},R)},J=(p,g,w,A,R)=>{if(w&&f(p,w),A)for(let P=0;P<A.length;P++)f(p,A[P]);if(R){let P=R.subTree;if(g===P){const z=R.vnode;J(p,z,z.scopeId,z.slotScopeIds,R.parent)}}},Y=(p,g,w,A,R,P,z,M,L=0)=>{for(let N=L;N<p.length;N++){const ee=p[N]=M?Mi(p[N]):jn(p[N]);y(null,ee,g,w,A,R,P,z,M)}},le=(p,g,w,A,R,P,z)=>{const M=g.el=p.el;let{patchFlag:L,dynamicChildren:N,dirs:ee}=g;L|=p.patchFlag&16;const K=p.props||We,te=g.props||We;let ce;w&&ds(w,!1),(ce=te.onVnodeBeforeUpdate)&&Bn(ce,w,g,p),ee&&hs(g,p,w,"beforeUpdate"),w&&ds(w,!0);const pe=R&&g.type!=="foreignObject";if(N?Ae(p.dynamicChildren,N,M,w,A,pe,P):z||Te(p,g,M,null,w,A,pe,P,!1),L>0){if(L&16)ht(M,g,K,te,w,A,R);else if(L&2&&K.class!==te.class&&r(M,"class",null,te.class,R),L&4&&r(M,"style",K.style,te.style,R),L&8){const Ue=g.dynamicProps;for(let $e=0;$e<Ue.length;$e++){const tt=Ue[$e],Rn=K[tt],er=te[tt];(er!==Rn||tt==="value")&&r(M,tt,Rn,er,R,p.children,w,A,Ze)}}L&1&&p.children!==g.children&&u(M,g.children)}else!z&&N==null&&ht(M,g,K,te,w,A,R);((ce=te.onVnodeUpdated)||ee)&&nn(()=>{ce&&Bn(ce,w,g,p),ee&&hs(g,p,w,"updated")},A)},Ae=(p,g,w,A,R,P,z)=>{for(let M=0;M<g.length;M++){const L=p[M],N=g[M],ee=L.el&&(L.type===et||!mo(L,N)||L.shapeFlag&70)?h(L.el):w;y(L,N,ee,null,A,R,P,z,!0)}},ht=(p,g,w,A,R,P,z)=>{if(w!==A){if(w!==We)for(const M in w)!jl(M)&&!(M in A)&&r(p,M,w[M],null,z,g.children,R,P,Ze);for(const M in A){if(jl(M))continue;const L=A[M],N=w[M];L!==N&&M!=="value"&&r(p,M,N,L,z,g.children,R,P,Ze)}"value"in A&&r(p,"value",w.value,A.value)}},Ct=(p,g,w,A,R,P,z,M,L)=>{const N=g.el=p?p.el:a(""),ee=g.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ce}=g;ce&&(M=M?M.concat(ce):ce),p==null?(i(N,w,A),i(ee,w,A),Y(g.children,w,ee,R,P,z,M,L)):K>0&&K&64&&te&&p.dynamicChildren?(Ae(p.dynamicChildren,te,w,R,P,z,M),(g.key!=null||R&&g===R.subTree)&&ob(p,g,!0)):Te(p,g,w,ee,R,P,z,M,L)},St=(p,g,w,A,R,P,z,M,L)=>{g.slotScopeIds=M,p==null?g.shapeFlag&512?R.ctx.activate(g,w,A,z,L):ui(g,w,A,R,P,z,L):tn(p,g,L)},ui=(p,g,w,A,R,P,z)=>{const M=p.component=cS(p,A,R);if(Kw(p)&&(M.ctx.renderer=S),uS(M),M.asyncDep){if(R&&R.registerDep(M,we),!p.el){const L=M.subTree=Be(Ji);b(null,L,g,w)}return}we(M,p,g,w,R,P,z)},tn=(p,g,w)=>{const A=g.component=p.component;if(EC(p,g,w))if(A.asyncDep&&!A.asyncResolved){De(A,g,w);return}else A.next=g,gC(A.update),A.update();else g.el=p.el,A.vnode=g},we=(p,g,w,A,R,P,z)=>{const M=()=>{if(p.isMounted){let{next:ee,bu:K,u:te,parent:ce,vnode:pe}=p,Ue=ee,$e;ds(p,!1),ee?(ee.el=pe.el,De(p,ee,z)):ee=pe,K&&_h(K),($e=ee.props&&ee.props.onVnodeBeforeUpdate)&&Bn($e,ce,ee,pe),ds(p,!0);const tt=yh(p),Rn=p.subTree;p.subTree=tt,y(Rn,tt,h(Rn.el),_(Rn),p,R,P),ee.el=tt.el,Ue===null&&IC(p,tt.el),te&&nn(te,R),($e=ee.props&&ee.props.onVnodeUpdated)&&nn(()=>Bn($e,ce,ee,pe),R)}else{let ee;const{el:K,props:te}=g,{bm:ce,m:pe,parent:Ue}=p,$e=No(g);if(ds(p,!1),ce&&_h(ce),!$e&&(ee=te&&te.onVnodeBeforeMount)&&Bn(ee,Ue,g),ds(p,!0),K&&D){const tt=()=>{p.subTree=yh(p),D(K,p.subTree,p,R,null)};$e?g.type.__asyncLoader().then(()=>!p.isUnmounted&&tt()):tt()}else{const tt=p.subTree=yh(p);y(null,tt,w,A,p,R,P),g.el=tt.el}if(pe&&nn(pe,R),!$e&&(ee=te&&te.onVnodeMounted)){const tt=g;nn(()=>Bn(ee,Ue,tt),R)}(g.shapeFlag&256||Ue&&No(Ue.vnode)&&Ue.vnode.shapeFlag&256)&&p.a&&nn(p.a,R),p.isMounted=!0,g=w=A=null}},L=p.effect=new ip(M,()=>hp(N),p.scope),N=p.update=()=>L.run();N.id=p.uid,ds(p,!0),N()},De=(p,g,w)=>{g.component=p;const A=p.vnode.props;p.vnode=g,p.next=null,QC(p,g.props,A,w),JC(p,g.children,w),Gr(),Mg(),Qr()},Te=(p,g,w,A,R,P,z,M,L=!1)=>{const N=p&&p.children,ee=p?p.shapeFlag:0,K=g.children,{patchFlag:te,shapeFlag:ce}=g;if(te>0){if(te&128){An(N,K,w,A,R,P,z,M,L);return}else if(te&256){Tn(N,K,w,A,R,P,z,M,L);return}}ce&8?(ee&16&&Ze(N,R,P),K!==N&&u(w,K)):ee&16?ce&16?An(N,K,w,A,R,P,z,M,L):Ze(N,R,P,!0):(ee&8&&u(w,""),ce&16&&Y(K,w,A,R,P,z,M,L))},Tn=(p,g,w,A,R,P,z,M,L)=>{p=p||mr,g=g||mr;const N=p.length,ee=g.length,K=Math.min(N,ee);let te;for(te=0;te<K;te++){const ce=g[te]=L?Mi(g[te]):jn(g[te]);y(p[te],ce,w,null,R,P,z,M,L)}N>ee?Ze(p,R,P,!0,!1,K):Y(g,w,A,R,P,z,M,L,K)},An=(p,g,w,A,R,P,z,M,L)=>{let N=0;const ee=g.length;let K=p.length-1,te=ee-1;for(;N<=K&&N<=te;){const ce=p[N],pe=g[N]=L?Mi(g[N]):jn(g[N]);if(mo(ce,pe))y(ce,pe,w,null,R,P,z,M,L);else break;N++}for(;N<=K&&N<=te;){const ce=p[K],pe=g[te]=L?Mi(g[te]):jn(g[te]);if(mo(ce,pe))y(ce,pe,w,null,R,P,z,M,L);else break;K--,te--}if(N>K){if(N<=te){const ce=te+1,pe=ce<ee?g[ce].el:A;for(;N<=te;)y(null,g[N]=L?Mi(g[N]):jn(g[N]),w,pe,R,P,z,M,L),N++}}else if(N>te)for(;N<=K;)vt(p[N],R,P,!0),N++;else{const ce=N,pe=N,Ue=new Map;for(N=pe;N<=te;N++){const cn=g[N]=L?Mi(g[N]):jn(g[N]);cn.key!=null&&Ue.set(cn.key,N)}let $e,tt=0;const Rn=te-pe+1;let er=!1,Tg=0;const po=new Array(Rn);for(N=0;N<Rn;N++)po[N]=0;for(N=ce;N<=K;N++){const cn=p[N];if(tt>=Rn){vt(cn,R,P,!0);continue}let Un;if(cn.key!=null)Un=Ue.get(cn.key);else for($e=pe;$e<=te;$e++)if(po[$e-pe]===0&&mo(cn,g[$e])){Un=$e;break}Un===void 0?vt(cn,R,P,!0):(po[Un-pe]=N+1,Un>=Tg?Tg=Un:er=!0,y(cn,g[Un],w,null,R,P,z,M,L),tt++)}const Ag=er?tS(po):mr;for($e=Ag.length-1,N=Rn-1;N>=0;N--){const cn=pe+N,Un=g[cn],Rg=cn+1<ee?g[cn+1].el:A;po[N]===0?y(null,Un,w,Rg,R,P,z,M,L):er&&($e<0||N!==Ag[$e]?vn(Un,w,Rg,2):$e--)}}},vn=(p,g,w,A,R=null)=>{const{el:P,type:z,transition:M,children:L,shapeFlag:N}=p;if(N&6){vn(p.component.subTree,g,w,A);return}if(N&128){p.suspense.move(g,w,A);return}if(N&64){z.move(p,g,w,S);return}if(z===et){i(P,g,w);for(let K=0;K<L.length;K++)vn(L[K],g,w,A);i(p.anchor,g,w);return}if(z===wh){C(p,g,w);return}if(A!==2&&N&1&&M)if(A===0)M.beforeEnter(P),i(P,g,w),nn(()=>M.enter(P),R);else{const{leave:K,delayLeave:te,afterLeave:ce}=M,pe=()=>i(P,g,w),Ue=()=>{K(P,()=>{pe(),ce&&ce()})};te?te(P,pe,Ue):Ue()}else i(P,g,w)},vt=(p,g,w,A=!1,R=!1)=>{const{type:P,props:z,ref:M,children:L,dynamicChildren:N,shapeFlag:ee,patchFlag:K,dirs:te}=p;if(M!=null&&Id(M,null,w,p,!0),ee&256){g.ctx.deactivate(p);return}const ce=ee&1&&te,pe=!No(p);let Ue;if(pe&&(Ue=z&&z.onVnodeBeforeUnmount)&&Bn(Ue,g,p),ee&6)us(p.component,w,A);else{if(ee&128){p.suspense.unmount(w,A);return}ce&&hs(p,null,g,"beforeUnmount"),ee&64?p.type.remove(p,g,w,R,S,A):N&&(P!==et||K>0&&K&64)?Ze(N,g,w,!1,!0):(P===et&&K&384||!R&&ee&16)&&Ze(L,g,w),A&&hi(p)}(pe&&(Ue=z&&z.onVnodeUnmounted)||ce)&&nn(()=>{Ue&&Bn(Ue,g,p),ce&&hs(p,null,g,"unmounted")},w)},hi=p=>{const{type:g,el:w,anchor:A,transition:R}=p;if(g===et){Pi(w,A);return}if(g===wh){E(p);return}const P=()=>{s(w),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:z,delayLeave:M}=R,L=()=>z(w,P);M?M(p.el,P,L):L()}else P()},Pi=(p,g)=>{let w;for(;p!==g;)w=d(p),s(p),p=w;s(g)},us=(p,g,w)=>{const{bum:A,scope:R,update:P,subTree:z,um:M}=p;A&&_h(A),R.stop(),P&&(P.active=!1,vt(z,p,g,w)),M&&nn(M,g),nn(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ze=(p,g,w,A=!1,R=!1,P=0)=>{for(let z=P;z<p.length;z++)vt(p[z],g,w,A,R)},_=p=>p.shapeFlag&6?_(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),T=(p,g,w)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Mg(),zw(),g._vnode=p},S={p:y,um:vt,m:vn,r:hi,mt:ui,mc:Y,pc:Te,pbc:Ae,n:_,o:t};let F,D;return e&&([F,D]=e(S)),{render:T,hydrate:F,createApp:WC(T,F)}}function ds({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ob(t,e,n=!1){const i=t.children,s=e.children;if(oe(i)&&oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Mi(s[r]),a.el=o.el),n||ob(o,a)),a.type===fu&&(a.el=o.el)}}function tS(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const nS=t=>t.__isTeleport,et=Symbol.for("v-fgt"),fu=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),wh=Symbol.for("v-stc"),Mo=[];let kn=null;function X(t=!1){Mo.push(kn=t?null:[])}function iS(){Mo.pop(),kn=Mo[Mo.length-1]||null}let ia=1;function Wg(t){ia+=t}function ab(t){return t.dynamicChildren=ia>0?kn||mr:null,iS(),ia>0&&kn&&kn.push(t),t}function re(t,e,n,i,s,r){return ab(U(t,e,n,i,s,r,!0))}function si(t,e,n,i,s){return ab(Be(t,e,n,i,s,!0))}function cc(t){return t?t.__v_isVNode===!0:!1}function mo(t,e){return t.type===e.type&&t.key===e.key}const pu="__vInternal",lb=({key:t})=>t??null,ql=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ut(t)||Xe(t)||fe(t)?{i:It,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,i=0,s=null,r=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lb(e),ref:e&&ql(e),scopeId:hu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(mp(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ut(n)?8:16),ia>0&&!o&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const Be=sS;function sS(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===$C)&&(t=Ji),cc(t)){const a=Cr(t,e,!0);return n&&mp(a,n),ia>0&&!r&&kn&&(a.shapeFlag&6?kn[kn.indexOf(t)]=a:kn.push(a)),a.patchFlag|=-2,a}if(mS(t)&&(t=t.__vccOpts),e){e=rS(e);let{class:a,style:l}=e;a&&!ut(a)&&(e.class=pi(a)),Ge(l)&&(Ow(l)&&!oe(l)&&(l=gt({},l)),e.style=Jo(l))}const o=ut(t)?1:TC(t)?128:nS(t)?64:Ge(t)?4:fe(t)?2:0;return U(t,e,n,i,s,o,r,!0)}function rS(t){return t?Ow(t)||pu in t?gt({},t):t:null}function Cr(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?oS(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lb(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(ql(e)):[s,ql(e)]:ql(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Dt(t=" ",e=0){return Be(fu,null,t,e)}function it(t="",e=!1){return e?(X(),si(Ji,null,t)):Be(Ji,null,t)}function jn(t){return t==null||typeof t=="boolean"?Be(Ji):oe(t)?Be(et,null,t.slice()):typeof t=="object"?Mi(t):Be(fu,null,String(t))}function Mi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function mp(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(pu in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:It},n=32):(e=String(e),i&64?(n=16,e=[Dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function oS(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pi([e.class,i.class]));else if(s==="style")e.style=Jo([e.style,i.style]);else if(iu(s)){const r=e[s],o=i[s];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Bn(t,e,n,i=null){Nn(t,e,7,[n,i])}const aS=eb();let lS=0;function cS(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||aS,r={uid:lS++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ww(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nb(i,s),emitsOptions:Hw(i,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:i.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vC.bind(null,r),t.ce&&t.ce(r),r}let lt=null;const cb=()=>lt||It;let gp,tr,Kg="__VUE_INSTANCE_SETTERS__";(tr=pd()[Kg])||(tr=pd()[Kg]=[]),tr.push(t=>lt=t),gp=t=>{tr.length>1?tr.forEach(e=>e(t)):tr[0](t)};const Sr=t=>{gp(t),t.scope.on()},Rs=()=>{lt&&lt.scope.off(),gp(null)};function ub(t){return t.vnode.shapeFlag&4}let sa=!1;function uS(t,e=!1){sa=e;const{props:n,children:i}=t.vnode,s=ub(t);GC(t,n,s,e),XC(t,i);const r=s?hS(t,e):void 0;return sa=!1,r}function hS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lu(new Proxy(t.ctx,FC));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?fS(t):null;Sr(t),Gr();const r=Hi(i,t,0,[t.props,s]);if(Qr(),Rs(),mw(r)){if(r.then(Rs,Rs),e)return r.then(o=>{Gg(t,o,e)}).catch(o=>{cu(o,t,0)});t.asyncDep=r}else Gg(t,r,e)}else hb(t,e)}function Gg(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=Fw(e)),hb(t,n)}let Qg;function hb(t,e,n){const i=t.type;if(!t.render){if(!e&&Qg&&!i.render){const s=i.template||fp(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=gt(gt({isCustomElement:r,delimiters:a},o),l);i.render=Qg(s,c)}}t.render=i.render||Dn}Sr(t),Gr(),UC(t),Qr(),Rs()}function dS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return an(t,"get","$attrs"),e[n]}}))}function fS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dS(t)},slots:t.slots,emit:t.emit,expose:e}}function _p(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fw(lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oo)return Oo[n](t)},has(e,n){return n in e||n in Oo}}))}function pS(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function mS(t){return fe(t)&&"__vccOpts"in t}const Re=(t,e)=>fC(t,e,sa);function db(t,e,n){const i=arguments.length;return i===2?Ge(e)&&!oe(e)?cc(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&cc(n)&&(n=[n]),Be(t,e,n))}const gS=Symbol.for("v-scx"),_S=()=>sn(gS),yS="3.3.4",vS="http://www.w3.org/2000/svg",_s=typeof document<"u"?document:null,Yg=_s&&_s.createElement("template"),wS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?_s.createElementNS(vS,t):_s.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>_s.createTextNode(t),createComment:t=>_s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Yg.innerHTML=i?`<svg>${t}</svg>`:t;const a=Yg.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function bS(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ES(t,e,n){const i=t.style,s=ut(n);if(n&&!s){if(e&&!ut(e))for(const r in e)n[r]==null&&Td(i,r,"");for(const r in n)Td(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Xg=/\s*!important$/;function Td(t,e,n){if(oe(n))n.forEach(i=>Td(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=IS(t,e);Xg.test(n)?t.setProperty(Kr(i),n.replace(Xg,""),"important"):t[i]=n}}const Jg=["Webkit","Moz","ms"],bh={};function IS(t,e){const n=bh[e];if(n)return n;let i=ii(e);if(i!=="filter"&&i in t)return bh[e]=i;i=ou(i);for(let s=0;s<Jg.length;s++){const r=Jg[s]+i;if(r in t)return bh[e]=r}return e}const Zg="http://www.w3.org/1999/xlink";function TS(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zg,e.slice(6,e.length)):t.setAttributeNS(Zg,e,n);else{const r=DR(e);n==null||r&&!yw(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function AS(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yw(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function RS(t,e,n,i){t.addEventListener(e,n,i)}function CS(t,e,n,i){t.removeEventListener(e,n,i)}function SS(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=kS(e);if(i){const c=r[e]=DS(i,s);RS(t,a,c,l)}else o&&(CS(t,a,o,l),r[e]=void 0)}}const e_=/(?:Once|Passive|Capture)$/;function kS(t){let e;if(e_.test(t)){e={};let i;for(;i=t.match(e_);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Eh=0;const PS=Promise.resolve(),xS=()=>Eh||(PS.then(()=>Eh=0),Eh=Date.now());function DS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Nn(NS(i,n.value),e,5,[i])};return n.value=t,n.attached=xS(),n}function NS(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const t_=/^on[a-z]/,OS=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?bS(t,i,s):e==="style"?ES(t,n,i):iu(e)?Yf(e)||SS(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):MS(t,e,i,s))?AS(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),TS(t,e,i,s))};function MS(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&t_.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||t_.test(e)&&ut(n)?!1:e in t}const LS=["ctrl","shift","alt","meta"],$S={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>LS.some(n=>t[`${n}Key`]&&!e.includes(n))},nr=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=$S[e[s]];if(r&&r(n,e))return}return t(n,...i)},VS=gt({patchProp:OS},wS);let n_;function FS(){return n_||(n_=ZC(VS))}const US=(...t)=>{const e=FS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=BS(i);if(!s)return;const r=e._component;!fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function BS(t){return ut(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Xr(e)},Xr=function(t){return new Error("Firebase Database ("+fb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zS=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new jS;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mb=function(t){const e=pb(t);return mu.encodeByteArray(e,!0)},uc=function(t){return mb(t).replace(/\./g,"")},hc=function(t){try{return mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){return gb(void 0,t)}function gb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qS(n)||(t[n]=gb(t[n],e[n]));return t}function qS(t){return t!=="__proto__"}/**
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
 */function WS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KS=()=>WS().__FIREBASE_DEFAULTS__,GS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hc(t[1]);return e&&JSON.parse(e)},yp=()=>{try{return KS()||GS()||QS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_b=t=>{var e,n;return(n=(e=yp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YS=t=>{const e=_b(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},yb=()=>{var t;return(t=yp())===null||t===void 0?void 0:t.config},vb=t=>{var e;return(e=yp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function XS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function wb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JS(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eb(){return fb.NODE_ADMIN===!0}function wp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ib(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function ZS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="FirebaseError";class In extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ek,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?tk(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,i)}}function tk(t,e){return t.replace(nk,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const nk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return JSON.parse(t)}function Et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=oa(hc(r[0])||""),n=oa(hc(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},ik=function(t){const e=Tb(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sk=function(t){const e=Tb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dc(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(i_(r)&&i_(o)){if(!aa(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function i_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ok(t,e){const n=new ak(t,e);return n.subscribe.bind(n)}class ak{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");lk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ih),s.error===void 0&&(s.error=Ih),s.complete===void 0&&(s.complete=Ih);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ih(){}function ck(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,$(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gu=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const hk=1e3,dk=2,fk=4*60*60*1e3,pk=.5;function s_(t,e=hk,n=dk){const i=e*Math.pow(n,t),s=Math.round(pk*i*(Math.random()-.5)*2);return Math.min(fk,i+s)}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ra;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_k(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===ps?void 0:t}function _k(t){return t.instantiationMode==="EAGER"}/**
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
 */class yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const vk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},wk=Ee.INFO,bk={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=bk[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Ik=(t,e)=>e.some(n=>t instanceof n);let r_,o_;function Tk(){return r_||(r_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ak(){return o_||(o_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ab=new WeakMap,Rd=new WeakMap,Rb=new WeakMap,Th=new WeakMap,bp=new WeakMap;function Rk(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ab.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function Ck(t){if(Rd.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rd.set(t,e)}let Cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sk(t){Cd=t(Cd)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ah(this),e,...n);return Rb.set(i,e.sort?e.sort():[e]),Wi(i)}:Ak().includes(t)?function(...e){return t.apply(Ah(this),e),Wi(Ab.get(this))}:function(...e){return Wi(t.apply(Ah(this),e))}}function Pk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Ck(t),Ik(t,Tk())?new Proxy(t,Cd):t)}function Wi(t){if(t instanceof IDBRequest)return Rk(t);if(Th.has(t))return Th.get(t);const e=Pk(t);return e!==t&&(Th.set(t,e),bp.set(e,t)),e}const Ah=t=>bp.get(t);function xk(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Wi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Wi(o.result),l.oldVersion,l.newVersion,Wi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dk=["get","getKey","getAll","getAllKeys","count"],Nk=["put","add","delete","clear"],Rh=new Map;function a_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Nk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Dk.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Rh.set(e,r),r}Sk(t=>({...t,get:(e,n,i)=>a_(e,n)||t.get(e,n,i),has:(e,n)=>!!a_(e,n)||t.has(e,n)}));/**
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
 */class Ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Mk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sd="@firebase/app",l_="0.9.15";/**
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
 */const Ps=new Zr("@firebase/app"),Lk="@firebase/app-compat",$k="@firebase/analytics-compat",Vk="@firebase/analytics",Fk="@firebase/app-check-compat",Uk="@firebase/app-check",Bk="@firebase/auth",zk="@firebase/auth-compat",jk="@firebase/database",Hk="@firebase/database-compat",qk="@firebase/functions",Wk="@firebase/functions-compat",Kk="@firebase/installations",Gk="@firebase/installations-compat",Qk="@firebase/messaging",Yk="@firebase/messaging-compat",Xk="@firebase/performance",Jk="@firebase/performance-compat",Zk="@firebase/remote-config",eP="@firebase/remote-config-compat",tP="@firebase/storage",nP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/firestore-compat",rP="firebase",oP="10.1.0";/**
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
 */const kd="[DEFAULT]",aP={[Sd]:"fire-core",[Lk]:"fire-core-compat",[Vk]:"fire-analytics",[$k]:"fire-analytics-compat",[Uk]:"fire-app-check",[Fk]:"fire-app-check-compat",[Bk]:"fire-auth",[zk]:"fire-auth-compat",[jk]:"fire-rtdb",[Hk]:"fire-rtdb-compat",[qk]:"fire-fn",[Wk]:"fire-fn-compat",[Kk]:"fire-iid",[Gk]:"fire-iid-compat",[Qk]:"fire-fcm",[Yk]:"fire-fcm-compat",[Xk]:"fire-perf",[Jk]:"fire-perf-compat",[Zk]:"fire-rc",[eP]:"fire-rc-compat",[tP]:"fire-gcs",[nP]:"fire-gcs-compat",[iP]:"fire-fst",[sP]:"fire-fst-compat","fire-js":"fire-js",[rP]:"fire-js-all"};/**
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
 */const fc=new Map,Pd=new Map;function lP(t,e){try{t.container.addComponent(e)}catch(n){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(Pd.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of fc.values())lP(n,t);return!0}function qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ki=new ss("app","Firebase",cP);/**
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
 */class uP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ki.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=oP;function Cb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:kd,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ki.create("bad-app-name",{appName:String(s)});if(n||(n=yb()),!n)throw Ki.create("no-options");const r=fc.get(s);if(r){if(aa(n,r.options)&&aa(i,r.config))return r;throw Ki.create("duplicate-app",{appName:s})}const o=new yk(s);for(const l of Pd.values())o.addComponent(l);const a=new uP(n,i,o);return fc.set(s,a),a}function _u(t=kd){const e=fc.get(t);if(!e&&t===kd&&yb())return Cb();if(!e)throw Ki.create("no-app",{appName:t});return e}function Tt(t,e,n){var i;let s=(i=aP[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}ln(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hP="firebase-heartbeat-database",dP=1,la="firebase-heartbeat-store";let Ch=null;function Sb(){return Ch||(Ch=xk(hP,dP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(la)}}}).catch(t=>{throw Ki.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function fP(t){try{return await(await Sb()).transaction(la).objectStore(la).get(kb(t))}catch(e){if(e instanceof In)Ps.warn(e.message);else{const n=Ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(n.message)}}}async function c_(t,e){try{const i=(await Sb()).transaction(la,"readwrite");await i.objectStore(la).put(e,kb(t)),await i.done}catch(n){if(n instanceof In)Ps.warn(n.message);else{const i=Ki.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ps.warn(i.message)}}}function kb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pP=1024,mP=30*24*60*60*1e3;class gP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yP(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=u_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=mP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=u_(),{heartbeatsToSend:n,unsentEntries:i}=_P(this._heartbeatsCache.heartbeats),s=uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function u_(){return new Date().toISOString().substring(0,10)}function _P(t,e=pP){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),h_(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),h_(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class yP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wp()?Ib().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return c_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return c_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function h_(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vP(t){ln(new Jt("platform-logger",e=>new Ok(e),"PRIVATE")),ln(new Jt("heartbeat",e=>new gP(e),"PRIVATE")),Tt(Sd,l_,t),Tt(Sd,l_,"esm2017"),Tt("fire-js","")}vP("");function Ep(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Pb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wP=Pb,xb=new ss("auth","Firebase",Pb());/**
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
 */const pc=new Zr("@firebase/auth");function bP(t,...e){pc.logLevel<=Ee.WARN&&pc.warn(`Auth (${rs}): ${t}`,...e)}function Wl(t,...e){pc.logLevel<=Ee.ERROR&&pc.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function ri(t,...e){throw Ip(t,...e)}function ei(t,...e){return Ip(t,...e)}function Db(t,e,n){const i=Object.assign(Object.assign({},wP()),{[e]:n});return new ss("auth","Firebase",i).create(e,{appName:t.name})}function EP(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ri(t,"argument-error"),Db(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ip(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xb.create(t,...e)}function ue(t,e,...n){if(!t)throw Ip(e,...n)}function _i(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wl(e),new Error(e)}function Ii(t,e){t||_i(e)}/**
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
 */function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IP(){return d_()==="http:"||d_()==="https:"}function d_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IP()||wb()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ii(n>e,"Short delay should be less than long delay!"),this.isMobile=vp()||bb()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tp(t,e){Ii(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nb{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CP=new Va(3e4,6e4);function Ob(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fa(t,e,n,i,s={}){return Mb(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Jr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Nb.fetch()(Lb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Mb(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},RP),e);try{const s=new kP(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Db(t,u,c);ri(t,u)}}catch(s){if(s instanceof In)throw s;ri(t,"network-request-failed",{message:String(s)})}}async function SP(t,e,n,i,s={}){const r=await Fa(t,e,n,i,s);return"mfaPendingCredential"in r&&ri(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Lb(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Tp(t.config,s):`${t.config.apiScheme}://${s}`}class kP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ei(this.auth,"network-request-failed")),CP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ei(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function PP(t,e){return Fa(t,"POST","/v1/accounts:delete",e)}async function xP(t,e){return Fa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DP(t,e=!1){const n=ot(t),i=await n.getIdToken(e),s=Ap(i);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Lo(Sh(s.auth_time)),issuedAtTime:Lo(Sh(s.iat)),expirationTime:Lo(Sh(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Ap(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const s=hc(n);return s?JSON.parse(s):(Wl("Failed to decode base64 JWT payload"),null)}catch(s){return Wl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function NP(t){const e=Ap(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof In&&OP(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function OP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $b{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mc(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ca(t,xP(n,{idToken:i}));ue(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?VP(r.providerUserInfo):[],a=$P(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $b(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LP(t){const e=ot(t);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $P(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function VP(t){return t.map(e=>{var{providerId:n}=e,i=Ep(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function FP(t,e){const n=await Mb(t,{},async()=>{const i=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Lb(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nb.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await FP(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ua;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
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
 */function Di(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $b(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await mc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ca(this,PP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:E,isAnonymous:x,providerData:H,stsTokenManager:J}=n;ue(C&&J,e,"internal-error");const Y=ua.fromJSON(this.name,J);ue(typeof C=="string",e,"internal-error"),Di(h,e.name),Di(d,e.name),ue(typeof E=="boolean",e,"internal-error"),ue(typeof x=="boolean",e,"internal-error"),Di(f,e.name),Di(m,e.name),Di(y,e.name),Di(v,e.name),Di(b,e.name),Di(I,e.name);const le=new Cs({uid:C,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:x,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Y,createdAt:b,lastLoginAt:I});return H&&Array.isArray(H)&&(le.providerData=H.map(Ae=>Object.assign({},Ae))),v&&(le._redirectEventId=v),le}static async _fromIdTokenResponse(e,n,i=!1){const s=new ua;s.updateFromServerResponse(n);const r=new Cs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await mc(r),r}}/**
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
 */const f_=new Map;function yi(t){Ii(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(Ii(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
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
 */class Vb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vb.type="NONE";const p_=Vb;/**
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
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class yr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Kl(this.userKey,s.apiKey,r),this.fullPersistenceKey=Kl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new yr(yi(p_),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||yi(p_);const o=Kl(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Cs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new yr(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new yr(r,e,i))}}/**
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
 */function m_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jb(e))return"Blackberry";if(Hb(e))return"Webos";if(Rp(e))return"Safari";if((e.includes("chrome/")||Ub(e))&&!e.includes("edge/"))return"Chrome";if(zb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Fb(t=jt()){return/firefox\//i.test(t)}function Rp(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ub(t=jt()){return/crios\//i.test(t)}function Bb(t=jt()){return/iemobile/i.test(t)}function zb(t=jt()){return/android/i.test(t)}function jb(t=jt()){return/blackberry/i.test(t)}function Hb(t=jt()){return/webos/i.test(t)}function yu(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=jt()){var e;return yu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BP(){return JS()&&document.documentMode===10}function qb(t=jt()){return yu(t)||zb(t)||Hb(t)||jb(t)||/windows phone/i.test(t)||Bb(t)}function zP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wb(t,e=[]){let n;switch(t){case"Browser":n=m_(jt());break;case"Worker":n=`${m_(jt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${i}`}async function Kb(t,e){return Fa(t,"GET","/v2/recaptchaConfig",Ob(t,e))}function g_(t){return t!==void 0&&t.enterprise!==void 0}class Gb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function jP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qb(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=ei("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",jP().appendChild(i)})}function HP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qP="https://www.google.com/recaptcha/enterprise.js?render=",WP="recaptcha-enterprise",KP="NO_RECAPTCHA";class GP{constructor(e){this.type=WP,this.auth=eo(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Kb(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gb(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;g_(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(KP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&g_(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qb(qP+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class QP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class YP{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new __(this),this.idTokenSubscription=new __(this),this.beforeStateQueue=new QP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}async initializeRecaptchaConfig(){const e=await Kb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Gb(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new GP(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yi(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function eo(t){return ot(t)}class __{constructor(e){this.auth=e,this.observer=null,this.addObserver=ok(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function XP(t,e){const n=qs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(aa(r,e??{}))return s;ri(s,"already-initialized")}return n.initialize({options:e})}function JP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(yi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ZP(t,e,n){const i=eo(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Yb(e),{host:o,port:a}=ex(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||tx()}function Yb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ex(t){const e=Yb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:y_(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xb{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,n){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}/**
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
 */async function vr(t,e){return SP(t,"POST","/v1/accounts:signInWithIdp",Ob(t,e))}/**
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
 */const nx="http://localhost";class xs extends Xb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ri("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Ep(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new xs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}buildRequest(){const e={requestUri:nx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
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
 */class Cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ua extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $i extends Ua{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}}$i.FACEBOOK_SIGN_IN_METHOD="facebook.com";$i.PROVIDER_ID="facebook.com";/**
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
 */class gi extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return gi.credential(n,i)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
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
 */class Vi extends Ua{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
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
 */class Fi extends Ua{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Fi.credential(n,i)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Cs._fromIdTokenResponse(e,i,s),o=v_(i);return new Pr({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=v_(i);return new Pr({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function v_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gc extends In{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new gc(e,n,i,s)}}function Jb(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(t,r,e,i):r})}async function ix(t,e,n=!1){const i=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",i)}/**
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
 */async function sx(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ca(t,Jb(i,s,e,t),n);ue(r.idToken,i,"internal-error");const o=Ap(r.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),Pr._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ri(i,"user-mismatch"),r}}/**
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
 */async function rx(t,e,n=!1){const i="signIn",s=await Jb(t,i,e),r=await Pr._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Zb(t,e,n,i){return ot(t).onIdTokenChanged(e,n,i)}function ox(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const _c="__sak";/**
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
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ax(){const t=jt();return Rp(t)||yu(t)}const lx=1e3,cx=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ax()&&zP(),this.fallbackToPolling=qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);BP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cx):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const ux=tE;/**
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
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const iE=nE;/**
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
 */function hx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new vu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hx(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function Sp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Sp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ti(){return window}function fx(t){ti().location.href=t}/**
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
 */function sE(){return typeof ti().WorkerGlobalScope<"u"&&typeof ti().importScripts=="function"}async function px(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gx(){return sE()?self:null}/**
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
 */const rE="firebaseLocalStorageDb",_x=1,yc="firebaseLocalStorage",oE="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function yx(){const t=indexedDB.deleteDatabase(rE);return new Ba(t).toPromise()}function Dd(){const t=indexedDB.open(rE,_x);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(yc,{keyPath:oE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(yc)?e(i):(i.close(),await yx(),e(await Dd()))})})}async function w_(t,e,n){const i=wu(t,!0).put({[oE]:e,value:n});return new Ba(i).toPromise()}async function vx(t,e){const n=wu(t,!1).get(e),i=await new Ba(n).toPromise();return i===void 0?null:i.value}function b_(t,e){const n=wu(t,!0).delete(e);return new Ba(n).toPromise()}const wx=800,bx=3;class aE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>bx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(gx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await px(),!this.activeServiceWorker)return;this.sender=new dx(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await w_(e,_c,"1"),await b_(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>w_(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>vx(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>b_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=wu(s,!1).getAll();return new Ba(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aE.type="LOCAL";const Ex=aE;new Va(3e4,6e4);/**
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
 */function lE(t,e){return e?yi(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kp extends Xb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ix(t){return rx(t.auth,new kp(t),t.bypassAuthState)}function Tx(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),sx(n,new kp(t),t.bypassAuthState)}async function Ax(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ix(n,new kp(t),t.bypassAuthState)}/**
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
 */class cE{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ix;case"linkViaPopup":case"linkViaRedirect":return Ax;case"reauthViaPopup":case"reauthViaRedirect":return Tx;default:ri(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rx=new Va(2e3,1e4);async function Cx(t,e,n){const i=eo(t);EP(t,e,Cp);const s=lE(i,n);return new ys(i,"signInViaPopup",e,s).executeNotNull()}class ys extends cE{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=Sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ei(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ei(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ei(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rx.get())};e()}}ys.currentPopupAction=null;/**
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
 */const Sx="pendingRedirect",Gl=new Map;class kx extends cE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gl.get(this.auth._key());if(!e){try{const i=await Px(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gl.set(this.auth._key(),e)}return this.bypassAuthState||Gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Px(t,e){const n=Nx(e),i=Dx(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function xx(t,e){Gl.set(t._key(),e)}function Dx(t){return yi(t._redirectPersistence)}function Nx(t){return Kl(Sx,t.config.apiKey,t.name)}async function Ox(t,e){return await eo(t)._initializationPromise,uE(t,e,!1)}async function uE(t,e,n=!1){const i=eo(t),s=lE(i,e),o=await new kx(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Mx=10*60*1e3;class Lx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$x(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ei(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $x(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hE(t);default:return!1}}/**
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
 */async function Vx(t,e={}){return Fa(t,"GET","/v1/projects",e)}/**
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
 */const Fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ux=/^https?/;async function Bx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vx(t);for(const n of e)try{if(zx(n))return}catch{}ri(t,"unauthorized-domain")}function zx(t){const e=xd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Ux.test(n))return!1;if(Fx.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const jx=new Va(3e4,6e4);function I_(){const t=ti().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hx(t){return new Promise((e,n)=>{var i,s,r;function o(){I_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I_(),n(ei(t,"network-request-failed"))},timeout:jx.get()})}if(!((s=(i=ti().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ti().gapi)===null||r===void 0)&&r.load)o();else{const a=HP("iframefcb");return ti()[a]=()=>{gapi.load?o():n(ei(t,"network-request-failed"))},Qb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ql=null,e})}let Ql=null;function qx(t){return Ql=Ql||Hx(t),Ql}/**
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
 */const Wx=new Va(5e3,15e3),Kx="__/auth/iframe",Gx="emulator/auth/iframe",Qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xx(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tp(e,Gx):`https://${t.config.authDomain}/${Kx}`,i={apiKey:e.apiKey,appName:t.name,v:rs},s=Yx.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Jr(i).slice(1)}`}async function Jx(t){const e=await qx(t),n=ti().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:Xx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qx,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ei(t,"network-request-failed"),a=ti().setTimeout(()=>{r(o)},Wx.get());function l(){ti().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Zx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",i1="http://localhost";class T_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s1(t,e,n,i=e1,s=t1){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Zx),{width:i.toString(),height:s.toString(),top:r,left:o}),c=jt().toLowerCase();n&&(a=Ub(c)?n1:n),Fb(c)&&(e=e||i1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(UP(c)&&a!=="_self")return r1(e||"",a),new T_(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new T_(h)}function r1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const o1="__/auth/handler",a1="emulator/auth/handler",l1=encodeURIComponent("fac");async function A_(t,e,n,i,s,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:rs,eventId:s};if(e instanceof Cp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ad(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ua){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${l1}=${encodeURIComponent(l)}`:"";return`${c1(t)}?${Jr(a).slice(1)}${c}`}function c1({config:t}){return t.emulator?Tp(t,a1):`https://${t.authDomain}/${o1}`}/**
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
 */const kh="webStorageSupport";class u1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iE,this._completeRedirectFn=uE,this._overrideRedirectResult=xx}async _openPopup(e,n,i,s){var r;Ii((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await A_(e,n,i,xd(),s);return s1(e,o,Sp())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await A_(e,n,i,xd(),s);return fx(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ii(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Jx(e),i=new Lx(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kh,{type:kh},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[kh];o!==void 0&&n(!!o),ri(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qb()||Rp()||yu()}}const h1=u1;var R_="@firebase/auth",C_="1.1.0";/**
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
 */class d1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function f1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function p1(t){ln(new Jt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wb(t)},c=new YP(i,s,r,l);return JP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ln(new Jt("auth-internal",e=>{const n=eo(e.getProvider("auth").getImmediate());return(i=>new d1(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(R_,C_,f1(t)),Tt(R_,C_,"esm2017")}/**
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
 */const m1=5*60,g1=vb("authIdTokenMaxAge")||m1;let S_=null;const _1=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>g1)return;const s=n==null?void 0:n.token;S_!==s&&(S_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dE(t=_u()){const e=qs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XP(t,{popupRedirectResolver:h1,persistence:[Ex,ux,iE]}),i=vb("authTokenSyncURL");if(i){const r=_1(i);ox(n,r,()=>r(n.currentUser)),Zb(n,o=>r(o))}const s=_b("auth");return s&&ZP(n,`http://${s}`),n}p1("Browser");var y1=!1;/**
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
 */const v1=new Map,w1={activated:!1,tokenObservers:[]};function Mn(t){return v1.get(t)||Object.assign({},w1)}const k_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class b1{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ra,await E1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ra,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function E1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const I1={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},vc=new ss("appCheck","AppCheck",I1);function fE(t){if(!Mn(t).activated)throw vc.create("use-before-activation",{appName:t.name})}/**
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
 */const T1="firebase-app-check-database",A1=1,Nd="firebase-app-check-store";let Rl=null;function R1(){return Rl||(Rl=new Promise((t,e)=>{try{const n=indexedDB.open(T1,A1);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(vc.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Nd,{keyPath:"compositeKey"})}}}catch(n){e(vc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Rl)}function C1(t,e){return S1(k1(t),e)}async function S1(t,e){const i=(await R1()).transaction(Nd,"readwrite"),r=i.objectStore(Nd).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(vc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function k1(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Od=new Zr("@firebase/app-check");function P_(t,e){return wp()?C1(t,e).catch(n=>{Od.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const P1={error:"UNKNOWN_ERROR"};function x1(t){return mu.encodeString(JSON.stringify(t),!1)}async function Md(t,e=!1){const n=t.app;fE(n);const i=Mn(n);let s=i.token,r;if(s&&!Co(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Co(l)?s=l:await P_(n,void 0))}if(!e&&s&&Co(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Mn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Od.warn(l.message):Od.error(l),r=l}let a;return s?r?Co(s)?a={token:s.token,internalError:r}:a=D_(r):(a={token:s.token},i.token=s,await P_(n,s)):a=D_(r),o&&M1(n,a),a}async function D1(t){const e=t.app;fE(e);const{provider:n}=Mn(e);{const{token:i}=await n.getToken();return{token:i}}}function N1(t,e,n,i){const{app:s}=t,r=Mn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Co(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),x_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>x_(t))}function pE(t,e){const n=Mn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function x_(t){const{app:e}=t,n=Mn(e);let i=n.tokenRefresher;i||(i=O1(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function O1(t){const{app:e}=t;return new b1(async()=>{const n=Mn(e);let i;if(n.token?i=await Md(t,!0):i=await Md(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Mn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},k_.RETRIAL_MIN_WAIT,k_.RETRIAL_MAX_WAIT)}function M1(t,e){const n=Mn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Co(t){return t.expireTimeMillis-Date.now()>0}function D_(t){return{token:x1(P1),error:t}}/**
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
 */class L1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Mn(this.app);for(const n of e)pE(this.app,n.next);return Promise.resolve()}}function $1(t,e){return new L1(t,e)}function V1(t){return{getToken:e=>Md(t,e),getLimitedUseToken:()=>D1(t),addTokenListener:e=>N1(t,"INTERNAL",e),removeTokenListener:e=>pE(t.app,e)}}const F1="@firebase/app-check",U1="0.8.0",B1="app-check",N_="app-check-internal";function z1(){ln(new Jt(B1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return $1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(N_).initialize()})),ln(new Jt(N_,t=>{const e=t.getProvider("app-check").getImmediate();return V1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Tt(F1,U1)}z1();var j1="firebase",H1="10.1.0";/**
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
 */Tt(j1,H1,"app");const mE=Symbol("firebaseApp");function za(t){return cb()&&sn(mE,null)||_u(t)}const Kn=()=>{},q1=typeof window<"u";function Pp(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function W1(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Ws(t){return!!t&&typeof t=="object"}const K1=Object.prototype;function G1(t){return Ws(t)&&Object.getPrototypeOf(t)===K1}function xp(t){return Ws(t)&&t.type==="document"}function Q1(t){return Ws(t)&&t.type==="collection"}function Y1(t){return xp(t)||Q1(t)}function X1(t){return Ws(t)&&t.type==="query"}function J1(t){return Ws(t)&&"ref"in t}function Z1(t){return Ws(t)&&typeof t.bucket=="string"}function eD(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const tD=Symbol.for("v-scx");function nD(){return!!sn(tD,0)}const Cl=new WeakMap;function iD(t,e){if(!Cl.has(t)){const n=ep(!0);Cl.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Cl.delete(t)}}return Cl.get(t)}const gE=new WeakMap;function Ks(t){return gE.get(za(t))}const Sl=new WeakMap;function _E(t){const e=za(t);if(!Sl.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{Sl.set(e,r),n(r.value)}];Sl.set(e,s)}return Sl.get(e)}function O_(t){const e=_E(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function sD(t,e){const n=dE(e);Zb(n,i=>{const s=_E();t.value=i,Array.isArray(s)&&s[1](t)})}const M_="@firebase/database",L_="1.0.1";/**
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
 */let yE="";function rD(t){yE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ki(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oD(e)}}catch{}return new aD},vs=vE("localStorage"),Ld=vE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Zr("@firebase/database"),lD=function(){let t=1;return function(){return t++}}(),wE=function(t){const e=uk(t),n=new rk;n.update(e);const i=n.digest();return mu.encodeByteArray(i)},ja=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ja.apply(null,i):typeof i=="object"?e+=Et(i):e+=i,e+=" "}return e};let Ss=null,$_=!0;const cD=function(t,e){$(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wr.logLevel=Ee.VERBOSE,Ss=wr.log.bind(wr),e&&Ld.set("logging_enabled",!0)):typeof t=="function"?Ss=t:(Ss=null,Ld.remove("logging_enabled"))},Nt=function(...t){if($_===!0&&($_=!1,Ss===null&&Ld.get("logging_enabled")===!0&&cD(!0)),Ss){const e=ja.apply(null,t);Ss(e)}},Ha=function(t){return function(...e){Nt(t,...e)}},$d=function(...t){const e="FIREBASE INTERNAL ERROR: "+ja(...t);wr.error(e)},Ds=function(...t){const e=`FIREBASE FATAL ERROR: ${ja(...t)}`;throw wr.error(e),new Error(e)},pn=function(...t){const e="FIREBASE WARNING: "+ja(...t);wr.warn(e)},uD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xr="[MIN_NAME]",Ns="[MAX_NAME]",to=function(t,e){if(t===e)return 0;if(t===xr||e===Ns)return-1;if(e===xr||t===Ns)return 1;{const n=V_(t),i=V_(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},dD=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Et(e))},Dp=function(t){if(typeof t!="object"||t===null)return Et(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Et(e[i]),n+=":",n+=Dp(t[e[i]]);return n+="}",n},EE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function En(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const IE=function(t){$(!bE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},mD=new RegExp("^-?(0*)\\d{1,10}$"),gD=-2147483648,_D=2147483647,V_=function(t){if(mD.test(t)){const e=Number(t);if(e>=gD&&e<=_D)return e}return null},qa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pn("Exception was thrown by user callback.",n),e},Math.floor(0))}},yD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$o=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){pn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pn(e)}}class Vd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="5",TE="v",AE="s",RE="r",CE="f",SE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kE="ls",PE="p",Fd="ac",xE="websocket",DE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ED(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function NE(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let i;if(e===xE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===DE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ED(t)&&(n.ns=t.namespace);const s=[];return En(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.counters_={}}incrementCounter(e,n=1){ki(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={},xh={};function Op(t){const e=t.toString();return Ph[e]||(Ph[e]=new ID),Ph[e]}function TD(t,e){const n=t.toString();return xh[n]||(xh[n]=e()),xh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&qa(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="start",RD="close",CD="pLPCommand",SD="pRTLPCB",OE="id",ME="pw",LE="ser",kD="cb",PD="seg",xD="ts",DD="d",ND="dframe",$E=1870,VE=30,OD=$E-VE,MD=25e3,LD=3e4;class hr{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ha(e),this.stats_=Op(n),this.urlFn=l=>(this.appCheckToken&&(l[Fd]=this.appCheckToken),NE(n,DE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LD)),hD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mp((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===F_)this.id=a,this.password=l;else if(o===RD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[F_]="t",i[LE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[kD]=this.scriptTagHolder.uniqueCallbackIdentifier),i[TE]=Np,this.transportSessionId&&(i[AE]=this.transportSessionId),this.lastSessionId&&(i[kE]=this.lastSessionId),this.applicationId&&(i[PE]=this.applicationId),this.appCheckToken&&(i[Fd]=this.appCheckToken),typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(i[RE]=CE);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hr.forceAllow_=!0}static forceDisallow(){hr.forceDisallow_=!0}static isAvailable(){return hr.forceAllow_?!0:!hr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fD()&&!pD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=mb(n),s=EE(i,OD);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[ND]="t",i[OE]=e,i[ME]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mp{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lD(),window[CD+this.uniqueCallbackIdentifier]=e,window[SD+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OE]=this.myID,e[ME]=this.myPW,e[LE]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VE+i.length<=$E;){const o=this.pendingSegs.shift();i=i+"&"+PD+s+"="+o.seg+"&"+xD+s+"="+o.ts+"&"+DD+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(MD)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=16384,VD=45e3;let wc=null;typeof MozWebSocket<"u"?wc=MozWebSocket:typeof WebSocket<"u"&&(wc=WebSocket);class Sn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ha(this.connId),this.stats_=Op(n),this.connURL=Sn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[TE]=Np,typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(o[RE]=CE),n&&(o[AE]=n),i&&(o[kE]=i),s&&(o[Fd]=s),r&&(o[PE]=r),NE(e,xE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let i;Eb(),this.mySock=new wc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wc!==null&&!Sn.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=oa(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=EE(n,$D);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hr,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Sn&&Sn.isAvailable();let i=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Sn];else{const s=this.transports_=[];for(const r of ha.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ha.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ha.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=6e4,UD=5e3,BD=10*1024,zD=100*1024,Dh="t",U_="d",jD="s",B_="r",HD="e",z_="o",j_="a",H_="n",q_="p",qD="h";class WD{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ha("c:"+this.id+":"),this.transportManager_=new ha(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=$o(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dh in e){const n=e[Dh];n===j_?this.upgradeIfSecondaryHealthy_():n===B_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),i=go("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:q_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:j_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:H_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),i=go("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(Dh,e);if(U_ in e){const i=e[U_];if(n===qD){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===H_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jD?this.onConnectionShutdown_(i):n===B_?this.onReset_(i):n===HD?$d("Server Error: "+i):n===z_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$d("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Np!==i&&pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),$o(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$o(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:q_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends UE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=32,K_=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new qe("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zi(t){return t.pieces_.length-t.pieceNum_}function je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function BE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function KD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function mt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof qe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new qe(n,0)}function ge(t){return t.pieceNum_>=t.pieces_.length}function bn(t,e){const n=ye(t),i=ye(e);if(n===null)return e;if(n===i)return bn(je(t),je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HE(t,e){if(Zi(t)!==Zi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Pn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Zi(t)>Zi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class GD{constructor(e,n){this.errorPrefix_=n,this.parts_=zE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gu(this.parts_[i]);qE(this)}}function QD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gu(e),qE(t)}function YD(t){const e=t.parts_.pop();t.byteLength_-=gu(e),t.parts_.length>0&&(t.byteLength_-=1)}function qE(t){if(t.byteLength_>K_)throw new Error(t.errorPrefix_+"has a key path longer than "+K_+" bytes ("+t.byteLength_+").");if(t.parts_.length>W_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+W_+") or object contains a cycle "+ms(t))}function ms(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends UE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Lp}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=1e3,XD=60*5*1e3,G_=30*1e3,JD=1.3,ZD=3e4,eN="server_kill",Q_=3;class bi extends FE{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bi.nextPersistentConnectionId_++,this.log_=Ha("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=XD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Eb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Et(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ra,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;bi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ki(e,"w")){const i=kr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=G_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ik(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Et(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$d("Unrecognized action received from server: "+Et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZD&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+bi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new WD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{pn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(eN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&pn(h),l())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ad(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Dp(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new qe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q_&&(this.reconnectDelay_=G_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yE.replace(/\./g,"-")]=1,vp()?e["framework.cordova"]=1:bb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bc.getInstance().currentlyOnline();return Ad(this.interruptReasons_)&&e}}bi.nextPersistentConnectionId_=0;bi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ve(xr,e),s=new ve(xr,n);return this.compare(i,s)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;class WE extends bu{static get __EMPTY_NODE(){return kl}static set __EMPTY_NODE(e){kl=e}compare(e,n){return to(e.name,n.name)}isDefinedOn(e){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(Ns,kl)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,kl)}toString(){return".key"}}const br=new WE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},hn=class So{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??So.RED,this.left=s??Gn.EMPTY_NODE,this.right=r??Gn.EMPTY_NODE}copy(e,n,i,s,r){return new So(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Gn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,So.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,So.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};hn.RED=!0;hn.BLACK=!1;class tN{copy(e,n,i,s,r){return this}insert(e,n,i){return new hn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Gn=class Yl{constructor(e,n=Yl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,hn.BLACK,null,null))}remove(e){return new Yl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,hn.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pl(this.root_,null,this.comparator_,!0,e)}};Gn.EMPTY_NODE=new tN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t,e){return to(t.name,e.name)}function $p(t,e){return to(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;function iN(t){Ud=t}const KE=function(t){return typeof t=="number"?"number:"+IE(t):"string:"+t},GE=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ki(e,".sv"),"Priority must be a string or number.")}else $(t===Ud||t.isEmpty(),"priority of unexpected type.");$(t===Ud||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y_;class dt{constructor(e,n=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GE(this.priorityNode_)}static set __childrenNodeConstructor(e){Y_=e}static get __childrenNodeConstructor(){return Y_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:ye(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ye(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:($(i!==".priority"||Zi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+KE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=IE(this.value_):e+=this.value_,this.lazyHash_=wE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=dt.VALUE_TYPE_ORDER.indexOf(n),r=dt.VALUE_TYPE_ORDER.indexOf(i);return $(s>=0,"Unknown leaf type: "+n),$(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QE,YE;function sN(t){QE=t}function rN(t){YE=t}class oN extends bu{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?to(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(Ns,new dt("[PRIORITY-POST]",YE))}makePost(e,n){const i=QE(e);return new ve(n,new dt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Vt=new oN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=Math.log(2);class lN{constructor(e){const n=r=>parseInt(Math.log(r)/aN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ec=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new hn(d,h.node,hn.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=s(l,f),y=s(f+1,c);return h=t[f],d=n?n(h):h,new hn(d,h.node,hn.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,b=h;h-=m;const I=s(v+1,b),C=t[v],E=n?n(C):C;f(new hn(E,C.node,y,null,I))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,hn.BLACK):(d(v,hn.BLACK),d(v,hn.RED))}return u},o=new lN(t.length),a=r(o);return new Gn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh;const ir={};class vi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(ir&&Vt,"ChildrenNode.ts has not been loaded"),Nh=Nh||new vi({".priority":ir},{".priority":Vt}),Nh}get(e){const n=kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Gn?n:null}hasIndex(e){return ki(this.indexSet_,e.toString())}addIndex(e,n){$(e!==br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ve.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ec(i,e.getCompare()):a=ir;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new vi(u,c)}addToIndexes(e,n){const i=dc(this.indexes_,(s,r)=>{const o=kr(this.indexSet_,r);if($(o,"Missing index implementation for "+r),s===ir)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ec(a,o.getCompare())}else return ir;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new vi(i,this.indexSet_)}removeFromIndexes(e,n){const i=dc(this.indexes_,s=>{if(s===ir)return s;{const r=n.get(e.name);return r?s.remove(new ve(e.name,r)):s}});return new vi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class ke{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&GE(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yo||(yo=new ke(new Gn($p),null,vi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yo}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yo:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ve(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?yo:this.priorityNode_;return new ke(s,o,r)}}updateChild(e,n){const i=ye(e);if(i===null)return n;{$(ye(e)!==".priority"||Zi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(je(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Vt,(o,a)=>{n[o]=a.val(e),i++,r&&ke.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+KE(this.getPriority().val())+":"),this.forEachChild(Vt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":wE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ve(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wa?-1:0}withIndex(e){if(e===br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Vt),s=n.getIterator(Vt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===br?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cN extends ke{constructor(){super(new Gn($p),ke.EMPTY_NODE,vi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const Wa=new cN;Object.defineProperties(ve,{MIN:{value:new ve(xr,ke.EMPTY_NODE)},MAX:{value:new ve(Ns,Wa)}});WE.__EMPTY_NODE=ke.EMPTY_NODE;dt.__childrenNodeConstructor=ke;iN(Wa);rN(Wa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=!0;function Ot(t,e=null){if(t===null)return ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new dt(n,Ot(e))}if(!(t instanceof Array)&&uN){const n=[];let i=!1;if(En(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ot(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return ke.EMPTY_NODE;const r=Ec(n,nN,o=>o.name,$p);if(i){const o=Ec(n,Vt.getCompare());return new ke(r,Ot(e),new vi({".priority":o},{".priority":Vt}))}else return new ke(r,Ot(e),vi.Default)}else{let n=ke.EMPTY_NODE;return En(t,(i,s)=>{if(ki(t,i)&&i.substring(0,1)!=="."){const r=Ot(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ot(e))}}sN(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN extends bu{constructor(e){super(),this.indexPath_=e,$(!ge(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?to(e.name,n.name):r}makePost(e,n){const i=Ot(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,i);return new ve(n,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,Wa);return new ve(Ns,e)}toString(){return zE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN extends bu{compare(e,n){const i=e.node.compareTo(n.node);return i===0?to(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const i=Ot(e);return new ve(n,i)}toString(){return".value"}}const fN=new dN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){return{type:"value",snapshotNode:t}}function mN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function X_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _N(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xr}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ns}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vt}copy(){const e=new Vp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Vt?n="$priority":t.index_===fN?n="$value":t.index_===br?n="$key":($(t.index_ instanceof hN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Et(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Et(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Et(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Et(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Z_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Vt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends FE{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ha("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ic.getListenId_(e,i),a={};this.listens_[o]=a;const l=J_(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),kr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Ic.getListenId_(e,n);delete this.listens_[i]}get(e){const n=J_(e._queryParams),i=e._path.toString(),s=new ra;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oa(a.responseText)}catch{pn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&pn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return{value:null,children:new Map}}function XE(t,e,n){if(ge(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ye(e);t.children.has(i)||t.children.set(i,Tc());const s=t.children.get(i);e=je(e),XE(s,e,n)}}function Bd(t,e,n){t.value!==null?n(e,t.value):vN(t,(i,s)=>{const r=new qe(e.toString()+"/"+i);Bd(s,r,n)})}function vN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&En(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=10*1e3,bN=30*1e3,EN=5*60*1e3;class IN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wN(e);const i=ey+(bN-ey)*Math.random();$o(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;En(e,(s,r)=>{r>0&&ki(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),$o(this.reportStats_.bind(this),Math.floor(Math.random()*2*EN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qn||(Qn={}));function JE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ZE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function e0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Qn.ACK_USER_WRITE,this.source=JE()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new Ac(Ve(),n,this.revert)}}else return $(ye(this.path)===e,"operationForChild called for unrelated child."),new Ac(je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Qn.OVERWRITE}operationForChild(e){return ge(this.path)?new Os(this.source,Ve(),this.snap.getImmediateChild(e)):new Os(this.source,je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Qn.MERGE}operationForChild(e){if(ge(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new Os(this.source,Ve(),n.value):new da(this.source,Ve(),n)}else return $(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new da(this.source,je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function TN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_N(o.childName,o.snapshotNode))}),vo(t,s,"child_removed",e,i,n),vo(t,s,"child_added",e,i,n),vo(t,s,"child_moved",r,i,n),vo(t,s,"child_changed",e,i,n),vo(t,s,"value",e,i,n),s}function vo(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>RN(t,a,l)),o.forEach(a=>{const l=AN(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function AN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RN(t,e,n){if(e.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const i=new ve(e.childName,e.snapshotNode),s=new ve(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){return{eventCache:t,serverCache:e}}function Vo(t,e,n,i){return t0(new Fp(e,n,i),t.serverCache)}function n0(t,e,n,i){return t0(t.eventCache,new Fp(e,n,i))}function zd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh;const CN=()=>(Oh||(Oh=new Gn(dD)),Oh);class ze{constructor(e,n=CN()){this.value=e,this.children=n}static fromObject(e){let n=new ze(null);return En(e,(i,s)=>{n=n.set(new qe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(ge(e))return null;{const i=ye(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(je(e),n);return r!=null?{path:mt(new qe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const n=ye(e),i=this.children.get(n);return i!==null?i.subtree(je(e)):new ze(null)}}set(e,n){if(ge(e))return new ze(n,this.children);{const i=ye(e),r=(this.children.get(i)||new ze(null)).set(je(e),n),o=this.children.insert(i,r);return new ze(this.value,o)}}remove(e){if(ge(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const n=ye(e),i=this.children.get(n);if(i){const s=i.remove(je(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ze(null):new ze(this.value,r)}else return this}}get(e){if(ge(e))return this.value;{const n=ye(e),i=this.children.get(n);return i?i.get(je(e)):null}}setTree(e,n){if(ge(e))return n;{const i=ye(e),r=(this.children.get(i)||new ze(null)).setTree(je(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ze(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(mt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ge(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(je(e),mt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,i){if(ge(e))return this;{this.value&&i(n,this.value);const s=ye(e),r=this.children.get(s);return r?r.foreachOnPath_(je(e),mt(n,s),i):new ze(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(mt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.writeTree_=e}static empty(){return new On(new ze(null))}}function Fo(t,e,n){if(ge(e))return new On(new ze(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=bn(s,e);return r=r.updateChild(o,n),new On(t.writeTree_.set(s,r))}else{const s=new ze(n),r=t.writeTree_.setTree(e,s);return new On(r)}}}function ty(t,e,n){let i=t;return En(n,(s,r)=>{i=Fo(i,mt(e,s),r)}),i}function ny(t,e){if(ge(e))return On.empty();{const n=t.writeTree_.setTree(e,new ze(null));return new On(n)}}function jd(t,e){return Gs(t,e)!=null}function Gs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bn(n.path,e)):null}function iy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Vt,(i,s)=>{e.push(new ve(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ve(i,s.value))}),e}function Gi(t,e){if(ge(e))return t;{const n=Gs(t,e);return n!=null?new On(new ze(n)):new On(t.writeTree_.subtree(e))}}function Hd(t){return t.writeTree_.isEmpty()}function Dr(t,e){return i0(Ve(),t.writeTree_,e)}function i0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=i0(mt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(mt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e){return c0(e,t)}function SN(t,e,n,i,s){$(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Fo(t.visibleWrites,e,n)),t.lastWriteId=i}function kN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function PN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xN(a,i.path)?s=!1:Pn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return DN(t),!0;if(i.snap)t.visibleWrites=ny(t.visibleWrites,i.path);else{const a=i.children;En(a,l=>{t.visibleWrites=ny(t.visibleWrites,mt(i.path,l))})}return!0}else return!1}function xN(t,e){if(t.snap)return Pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pn(mt(t.path,n),e))return!0;return!1}function DN(t){t.visibleWrites=r0(t.allWrites,NN,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function NN(t){return t.visible}function r0(t,e,n){let i=On.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Pn(n,o)?(a=bn(n,o),i=Fo(i,a,r.snap)):Pn(o,n)&&(a=bn(o,n),i=Fo(i,Ve(),r.snap.getChild(a)));else if(r.children){if(Pn(n,o))a=bn(n,o),i=ty(i,a,r.children);else if(Pn(o,n))if(a=bn(o,n),ge(a))i=ty(i,Ve(),r.children);else{const l=kr(r.children,ye(a));if(l){const c=l.getChild(je(a));i=Fo(i,Ve(),c)}}}else throw Xr("WriteRecord should have .snap or .children")}}return i}function o0(t,e,n,i,s){if(!i&&!s){const r=Gs(t.visibleWrites,e);if(r!=null)return r;{const o=Gi(t.visibleWrites,e);if(Hd(o))return n;if(n==null&&!jd(o,Ve()))return null;{const a=n||ke.EMPTY_NODE;return Dr(o,a)}}}else{const r=Gi(t.visibleWrites,e);if(!s&&Hd(r))return n;if(!s&&n==null&&!jd(r,Ve()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Pn(c.path,e)||Pn(e,c.path))},a=r0(t.allWrites,o,e),l=n||ke.EMPTY_NODE;return Dr(a,l)}}}function ON(t,e,n){let i=ke.EMPTY_NODE;const s=Gs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Vt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Gi(t.visibleWrites,e);return n.forEachChild(Vt,(o,a)=>{const l=Dr(Gi(r,new qe(o)),a);i=i.updateImmediateChild(o,l)}),iy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Gi(t.visibleWrites,e);return iy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function MN(t,e,n,i,s){$(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=mt(e,n);if(jd(t.visibleWrites,r))return null;{const o=Gi(t.visibleWrites,r);return Hd(o)?s.getChild(n):Dr(o,s.getChild(n))}}function LN(t,e,n,i){const s=mt(e,n),r=Gs(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Gi(t.visibleWrites,s);return Dr(o,i.getNode().getImmediateChild(n))}else return null}function $N(t,e){return Gs(t.visibleWrites,e)}function VN(t,e,n,i,s,r,o){let a;const l=Gi(t.visibleWrites,e),c=Gs(l,Ve());if(c!=null)a=c;else if(n!=null)a=Dr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function FN(){return{visibleWrites:On.empty(),allWrites:[],lastWriteId:-1}}function qd(t,e,n,i){return o0(t.writeTree,t.treePath,e,n,i)}function a0(t,e){return ON(t.writeTree,t.treePath,e)}function sy(t,e,n,i){return MN(t.writeTree,t.treePath,e,n,i)}function Rc(t,e){return $N(t.writeTree,mt(t.treePath,e))}function UN(t,e,n,i,s,r){return VN(t.writeTree,t.treePath,e,n,i,s,r)}function Up(t,e,n){return LN(t.writeTree,t.treePath,e,n)}function l0(t,e){return c0(mt(t.treePath,e),t.writeTree)}function c0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,X_(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,gN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,mN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,X_(i,e.snapshotNode,s.oldSnap));else throw Xr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const u0=new zN;class Bp{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Up(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ms(this.viewCache_),r=UN(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function jN(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HN(t,e,n,i,s){const r=new BN;let o,a;if(n.type===Qn.OVERWRITE){const c=n;c.source.fromUser?o=Wd(t,e,c.path,c.snap,i,s,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ge(c.path),o=Cc(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Qn.MERGE){const c=n;c.source.fromUser?o=WN(t,e,c.path,c.children,i,s,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kd(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Qn.ACK_USER_WRITE){const c=n;c.revert?o=QN(t,e,c.path,i,s,r):o=KN(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Qn.LISTEN_COMPLETE)o=GN(t,e,n.path,i,r);else throw Xr("Unknown operation type: "+n.type);const l=r.getChanges();return qN(e,o,l),{viewCache:o,changes:l}}function qN(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(pN(zd(e)))}}function h0(t,e,n,i,s,r){const o=e.eventCache;if(Rc(i,n)!=null)return e;{let a,l;if(ge(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ms(e),u=c instanceof ke?c:ke.EMPTY_NODE,h=a0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=qd(i,Ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ye(n);if(c===".priority"){$(Zi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=sy(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=je(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=sy(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Up(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Vo(e,a,o.isFullyInitialized()||ge(n),t.filter.filtersNodes())}}function Cc(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ge(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&Zi(n)>1)return e;const m=je(n),v=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,u0,null)}const h=n0(e,c,l.isFullyInitialized()||ge(n),u.filtersNodes()),d=new Bp(s,h,r);return h0(t,h,n,s,d,a)}function Wd(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Bp(s,e,r);if(ge(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Vo(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Vo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=je(n),f=a.getNode().getImmediateChild(h);let m;if(ge(d))m=i;else{const y=u.getCompleteChild(h);y!=null?BE(d)===".priority"&&y.getChild(jE(d)).isEmpty()?m=y:m=y.updateChild(d,i):m=ke.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Vo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ry(t,e){return t.eventCache.isCompleteForChild(e)}function WN(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=mt(n,l);ry(e,ye(u))&&(a=Wd(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=mt(n,l);ry(e,ye(u))||(a=Wd(t,a,u,c,s,r,o))}),a}function oy(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Kd(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ge(n)?c=i:c=new ze(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=oy(t,f,d);l=Cc(t,l,new qe(h),m,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=oy(t,m,d);l=Cc(t,l,new qe(h),y,s,r,o,a)}}),l}function KN(t,e,n,i,s,r,o){if(Rc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ge(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cc(t,e,n,l.getNode().getChild(n),s,r,a,o);if(ge(n)){let c=new ze(null);return l.getNode().forEachChild(br,(u,h)=>{c=c.set(new qe(u),h)}),Kd(t,e,n,c,s,r,a,o)}else return e}else{let c=new ze(null);return i.foreach((u,h)=>{const d=mt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Kd(t,e,n,c,s,r,a,o)}}function GN(t,e,n,i,s){const r=e.serverCache,o=n0(e,r.getNode(),r.isFullyInitialized()||ge(n),r.isFiltered());return h0(t,o,n,i,u0,s)}function QN(t,e,n,i,s,r){let o;if(Rc(i,n)!=null)return e;{const a=new Bp(i,e,s),l=e.eventCache.getNode();let c;if(ge(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qd(i,Ms(e));else{const h=e.serverCache.getNode();$(h instanceof ke,"serverChildren would be complete if leaf node"),u=a0(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ye(n);let h=Up(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,je(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ke.EMPTY_NODE,je(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qd(i,Ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Rc(i,Ve())!=null,Vo(e,c,o,t.filter.filtersNodes())}}function YN(t,e){const n=Ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ge(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function ay(t,e,n,i){e.type===Qn.MERGE&&e.source.queryId!==null&&($(Ms(t.viewCache_),"We should always have a full cache before handling merges"),$(zd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=HN(t.processor_,s,e,n,i);return jN(t.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,XN(t,r.changes,r.viewCache.eventCache.getNode(),null)}function XN(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return TN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ly;function JN(t){$(!ly,"__referenceConstructor has already been defined"),ly=t}function zp(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return $(r!=null,"SyncTree gave us an op for an invalid query."),ay(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ay(o,e,n,i));return r}}function jp(t,e){let n=null;for(const i of t.views.values())n=n||YN(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cy;function ZN(t){$(!cy,"__referenceConstructor has already been defined"),cy=t}class uy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=FN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eO(t,e,n,i,s){return SN(t.pendingWriteTree_,e,n,i,s),s?Iu(t,new Os(JE(),e,n)):[]}function dr(t,e,n=!1){const i=kN(t.pendingWriteTree_,e);if(PN(t.pendingWriteTree_,e)){let r=new ze(null);return i.snap!=null?r=r.set(Ve(),!0):En(i.children,o=>{r=r.set(new qe(o),!0)}),Iu(t,new Ac(i.path,r,n))}else return[]}function Eu(t,e,n){return Iu(t,new Os(ZE(),e,n))}function tO(t,e,n){const i=ze.fromObject(n);return Iu(t,new da(ZE(),e,i))}function nO(t,e,n,i){const s=m0(t,i);if(s!=null){const r=g0(s),o=r.path,a=r.queryId,l=bn(o,e),c=new Os(e0(a),l,n);return _0(t,o,c)}else return[]}function iO(t,e,n,i){const s=m0(t,i);if(s){const r=g0(s),o=r.path,a=r.queryId,l=bn(o,e),c=ze.fromObject(n),u=new da(e0(a),l,c);return _0(t,o,u)}else return[]}function d0(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bn(o,e),c=jp(a,l);if(c)return c});return o0(s,e,r,n,!0)}function Iu(t,e){return f0(e,t.syncPointTree_,null,s0(t.pendingWriteTree_,Ve()))}function f0(t,e,n,i){if(ge(t.path))return p0(t,e,n,i);{const s=e.get(Ve());n==null&&s!=null&&(n=jp(s,Ve()));let r=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=l0(i,o);r=r.concat(f0(a,l,c,u))}return s&&(r=r.concat(zp(s,t,i,n))),r}}function p0(t,e,n,i){const s=e.get(Ve());n==null&&s!=null&&(n=jp(s,Ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=l0(i,o),u=t.operationForChild(o);u&&(r=r.concat(p0(u,a,l,c)))}),s&&(r=r.concat(zp(s,t,i,n))),r}function m0(t,e){return t.tagToQueryMap.get(e)}function g0(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function _0(t,e,n){const i=t.syncPointTree_.get(e);$(i,"Missing sync point for query tag that we're tracking");const s=s0(t.pendingWriteTree_,e);return zp(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hp(n)}node(){return this.node_}}class qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=mt(this.path_,e);return new qp(this.syncTree_,n)}node(){return d0(this.syncTree_,this.path_)}}const sO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hy=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return oO(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},oO=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&$(!1,"Unexpected increment value: "+i);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},aO=function(t,e,n,i){return Wp(e,new qp(n,t),i)},lO=function(t,e,n){return Wp(t,new Hp(e),n)};function Wp(t,e,n){const i=t.getPriority().val(),s=hy(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=hy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new dt(a,Ot(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new dt(s))),o.forEachChild(Vt,(a,l)=>{const c=Wp(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Gp(t,e){let n=e instanceof qe?e:new qe(e),i=t,s=ye(n);for(;s!==null;){const r=kr(i.node.children,s)||{children:{},childCount:0};i=new Kp(s,i,r),n=je(n),s=ye(n)}return i}function no(t){return t.node.value}function y0(t,e){t.node.value=e,Gd(t)}function v0(t){return t.node.childCount>0}function cO(t){return no(t)===void 0&&!v0(t)}function Tu(t,e){En(t.node.children,(n,i)=>{e(new Kp(n,t,i))})}function w0(t,e,n,i){n&&!i&&e(t),Tu(t,s=>{w0(s,e,!0,i)}),n&&i&&e(t)}function uO(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ka(t){return new qe(t.parent===null?t.name:Ka(t.parent)+"/"+t.name)}function Gd(t){t.parent!==null&&hO(t.parent,t.name,t)}function hO(t,e,n){const i=cO(n),s=ki(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Gd(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Gd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/[\[\].#$\/\u0000-\u001F\u007F]/,fO=/[\[\].#$\u0000-\u001F\u007F]/,Mh=10*1024*1024,b0=function(t){return typeof t=="string"&&t.length!==0&&!dO.test(t)},pO=function(t){return typeof t=="string"&&t.length!==0&&!fO.test(t)},mO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pO(t)},E0=function(t,e,n){const i=n instanceof qe?new GD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ms(i));if(typeof e=="function")throw new Error(t+"contains a function "+ms(i)+" with contents = "+e.toString());if(bE(e))throw new Error(t+"contains "+e.toString()+" "+ms(i));if(typeof e=="string"&&e.length>Mh/3&&gu(e)>Mh)throw new Error(t+"contains a string greater than "+Mh+" utf8 bytes "+ms(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(En(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!b0(o)))throw new Error(t+" contains an invalid key ("+o+") "+ms(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QD(i,o),E0(t,a,i),YD(i)}),s&&r)throw new Error(t+' contains ".value" child '+ms(i)+" in addition to actual children.")}},gO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!b0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mO(n))throw new Error(ck(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yO(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!HE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Qs(t,e,n){yO(t,n),vO(t,i=>Pn(i,e)||Pn(e,i))}function vO(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(wO(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ss&&Nt("event: "+n.toString()),qa(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="repo_interrupt",EO=25;class IO{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _O,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tc(),this.transactionQueueTree_=new Kp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TO(t,e,n){if(t.stats_=Op(t.repoInfo_),t.forceRestClient_||yD())t.server_=new Ic(t.repoInfo_,(i,s,r,o)=>{dy(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Et(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new bi(t.repoInfo_,e,(i,s,r,o)=>{dy(t,i,s,r,o)},i=>{fy(t,i)},i=>{RO(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=TD(t.repoInfo_,()=>new IN(t.stats_,t.server_)),t.infoData_=new yN,t.infoSyncTree_=new uy({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Eu(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qp(t,"connected",!1),t.serverSyncTree_=new uy({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Qs(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function AO(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function I0(t){return sO({timestamp:AO(t)})}function dy(t,e,n,i,s){t.dataUpdateCount++;const r=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=dc(n,c=>Ot(c));o=iO(t.serverSyncTree_,r,l,s)}else{const l=Ot(n);o=nO(t.serverSyncTree_,r,l,s)}else if(i){const l=dc(n,c=>Ot(c));o=tO(t.serverSyncTree_,r,l)}else{const l=Ot(n);o=Eu(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Xp(t,r)),Qs(t.eventQueue_,a,o)}function fy(t,e){Qp(t,"connected",e),e===!1&&SO(t)}function RO(t,e){En(e,(n,i)=>{Qp(t,n,i)})}function Qp(t,e,n){const i=new qe("/.info/"+e),s=Ot(n);t.infoData_.updateSnapshot(i,s);const r=Eu(t.infoSyncTree_,i,s);Qs(t.eventQueue_,i,r)}function CO(t){return t.nextWriteId_++}function SO(t){T0(t,"onDisconnectEvents");const e=I0(t),n=Tc();Bd(t.onDisconnect_,Ve(),(s,r)=>{const o=aO(s,r,t.serverSyncTree_,e);XE(n,s,o)});let i=[];Bd(n,Ve(),(s,r)=>{i=i.concat(Eu(t.serverSyncTree_,s,r));const o=DO(t,s);Xp(t,o)}),t.onDisconnect_=Tc(),Qs(t.eventQueue_,Ve(),i)}function kO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bO)}function T0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Nt(n,...e)}function A0(t,e,n){return d0(t.serverSyncTree_,e,n)||ke.EMPTY_NODE}function Yp(t,e=t.transactionQueueTree_){if(e||Au(t,e),no(e)){const n=C0(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&PO(t,Ka(e),n)}else v0(e)&&Tu(e,n=>{Yp(t,n)})}function PO(t,e,n){const i=n.map(c=>c.currentWriteId),s=A0(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=bn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{T0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(dr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Au(t,Gp(t.transactionQueueTree_,e)),Yp(t,t.transactionQueueTree_),Qs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)qa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{pn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Xp(t,e)}},o)}function Xp(t,e){const n=R0(t,e),i=Ka(n),s=C0(t,n);return xO(t,s,i),i}function xO(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=bn(n,l.path);let u=!1,h;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=EO)u=!0,h="maxretry",s=s.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=A0(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){E0("transaction failed: Data returned ",f,l.path);let m=Ot(f);typeof f=="object"&&f!=null&&ki(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,b=I0(t),I=lO(m,d,b);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=I,l.currentWriteId=CO(t),o.splice(o.indexOf(v),1),s=s.concat(eO(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(dr(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(dr(t.serverSyncTree_,l.currentWriteId,!0))}Qs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Au(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)qa(i[a]);Yp(t,t.transactionQueueTree_)}function R0(t,e){let n,i=t.transactionQueueTree_;for(n=ye(e);n!==null&&no(i)===void 0;)i=Gp(i,n),e=je(e),n=ye(e);return i}function C0(t,e){const n=[];return S0(t,e,n),n.sort((i,s)=>i.order-s.order),n}function S0(t,e,n){const i=no(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Tu(e,s=>{S0(t,s,n)})}function Au(t,e){const n=no(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,y0(e,n.length>0?n:void 0)}Tu(e,i=>{Au(t,i)})}function DO(t,e){const n=Ka(R0(t,e)),i=Gp(t.transactionQueueTree_,e);return uO(i,s=>{Lh(t,s)}),Lh(t,i),w0(i,s=>{Lh(t,s)}),n}function Lh(t,e){const n=no(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?y0(e,void 0):n.length=r+1,Qs(t.eventQueue_,Ka(e),s);for(let o=0;o<i.length;o++)qa(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function OO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):pn(`Invalid query segment '${n}' in query '${t}'`)}return e}const py=function(t,e){const n=MO(t),i=n.namespace;n.domain==="firebase.com"&&Ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uD();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bD(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new qe(n.pathString)}},MO=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=NO(t.substring(u,h)));const d=OO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Jp{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ge(this._path)?null:BE(this._path)}get ref(){return new io(this._repo,this._path)}get _queryIdentifier(){const e=Z_(this._queryParams),n=Dp(e);return n==="{}"?"default":n}get _queryObject(){return Z_(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Jp))return!1;const n=this._repo===e._repo,i=HE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+KD(this._path)}}class io extends Jp{constructor(e,n){super(e,n,new Vp,!1)}get parent(){const e=jE(this._path);return e===null?null:new io(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JN(io);ZN(io);/**
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
 */const LO="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let $O=!1;function VO(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=py(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[LO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=py(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Vd(Vd.OWNER):new wD(t.name,t.options,e);gO("Invalid Firebase Database URL",o),ge(o.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const h=UO(a,t,u,new vD(t.name,n));return new BO(h,t)}function FO(t,e){const n=Qd[e];(!n||n[t.key]!==t)&&Ds(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kO(t),delete n[t.key]}function UO(t,e,n,i){let s=Qd[e.name];s||(s={},Qd[e.name]=s);let r=s[t.toURLString()];return r&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new IO(t,$O,n,i),s[t.toURLString()]=r,r}class BO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new io(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ds("Cannot call "+e+" on a deleted database.")}}/**
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
 */function zO(t){rD(rs),ln(new Jt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return VO(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Tt(M_,L_,t),Tt(M_,L_,"esm2017")}bi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zO();var jO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Zp=Zp||{},ae=jO||self;function Ru(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ga(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HO(t){return Object.prototype.hasOwnProperty.call(t,$h)&&t[$h]||(t[$h]=++qO)}var $h="closure_uid_"+(1e9*Math.random()>>>0),qO=0;function WO(t,e,n){return t.call.apply(t.bind,arguments)}function KO(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=WO:Ft=KO,Ft.apply(null,arguments)}function xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function yt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function os(){this.s=this.s,this.o=this.o}var GO=0;os.prototype.s=!1;os.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GO!=0)&&HO(this)};os.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function em(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function my(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ru(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var QO=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",()=>{},e),ae.removeEventListener("test",()=>{},e)}catch{}return t}();function fa(t){return/^[\s\xa0]*$/.test(t)}function Cu(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function qn(t){return Cu().indexOf(t)!=-1}function tm(t){return tm[" "](t),t}tm[" "]=function(){};function YO(t,e){var n=zM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var XO=qn("Opera"),Nr=qn("Trident")||qn("MSIE"),P0=qn("Edge"),Yd=P0||Nr,x0=qn("Gecko")&&!(Cu().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge"))&&!(qn("Trident")||qn("MSIE"))&&!qn("Edge"),JO=Cu().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge");function D0(){var t=ae.document;return t?t.documentMode:void 0}var Xd;e:{var Vh="",Fh=function(){var t=Cu();if(x0)return/rv:([^\);]+)(\)|;)/.exec(t);if(P0)return/Edge\/([\d\.]+)/.exec(t);if(Nr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JO)return/WebKit\/(\S+)/.exec(t);if(XO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fh&&(Vh=Fh?Fh[1]:""),Nr){var Uh=D0();if(Uh!=null&&Uh>parseFloat(Vh)){Xd=String(Uh);break e}}Xd=Vh}var Jd;if(ae.document&&Nr){var gy=D0();Jd=gy||parseInt(Xd,10)||void 0}else Jd=void 0;var ZO=Jd;function pa(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(x0){e:{try{tm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pa.$.h.call(this)}}yt(pa,Ut);var eM={2:"touch",3:"pen",4:"mouse"};pa.prototype.h=function(){pa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qa="closure_listenable_"+(1e6*Math.random()|0),tM=0;function nM(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++tM,this.fa=this.ia=!1}function Su(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function nm(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function iM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function N0(t){const e={};for(const n in t)e[n]=t[n];return e}const _y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O0(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<_y.length;r++)n=_y[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ku(t){this.src=t,this.g={},this.h=0}ku.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ef(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new nM(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Zd(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=k0(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Su(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ef(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var im="closure_lm_"+(1e6*Math.random()|0),Bh={};function M0(t,e,n,i,s){if(i&&i.once)return $0(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)M0(t,e[r],n,i,s);return null}return n=om(n),t&&t[Qa]?t.O(e,n,Ga(i)?!!i.capture:!!i,s):L0(t,e,n,!1,i,s)}function L0(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ga(s)?!!s.capture:!!s,a=rm(t);if(a||(t[im]=a=new ku(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=sM(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)QO||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(F0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sM(){function t(n){return e.call(t.src,t.listener,n)}const e=rM;return t}function $0(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$0(t,e[r],n,i,s);return null}return n=om(n),t&&t[Qa]?t.P(e,n,Ga(i)?!!i.capture:!!i,s):L0(t,e,n,!0,i,s)}function V0(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)V0(t,e[r],n,i,s);else i=Ga(i)?!!i.capture:!!i,n=om(n),t&&t[Qa]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ef(r,n,i,s),-1<n&&(Su(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=rm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ef(e,n,i,s)),(n=-1<t?e[t]:null)&&sm(n))}function sm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qa])Zd(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(F0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=rm(e))?(Zd(n,t),n.h==0&&(n.src=null,e[im]=null)):Su(t)}}}function F0(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function rM(t,e){if(t.fa)t=!0;else{e=new pa(e,this);var n=t.listener,i=t.la||t.src;t.ia&&sm(t),t=n.call(i,e)}return t}function rm(t){return t=t[im],t instanceof ku?t:null}var zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function om(t){return typeof t=="function"?t:(t[zh]||(t[zh]=function(e){return t.handleEvent(e)}),t[zh])}function _t(){os.call(this),this.i=new ku(this),this.S=this,this.J=null}yt(_t,os);_t.prototype[Qa]=!0;_t.prototype.removeEventListener=function(t,e,n,i){V0(this,t,e,n,i)};function At(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var s=e;e=new Ut(i,t),O0(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Dl(o,i,!0,e)&&s}if(o=e.g=t,s=Dl(o,i,!0,e)&&s,s=Dl(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Dl(o,i,!1,e)&&s}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Su(n[i]);delete t.g[e],t.h--}}this.J=null};_t.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};_t.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Dl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zd(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var am=ae.JSON.stringify;class oM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function aM(){var t=lm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lM{constructor(){this.h=this.g=null}add(e,n){const i=U0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var U0=new oM(()=>new cM,t=>t.reset());class cM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function hM(t){ae.setTimeout(()=>{throw t},0)}let ma,ga=!1,lm=new lM,B0=()=>{const t=ae.Promise.resolve(void 0);ma=()=>{t.then(dM)}};var dM=()=>{for(var t;t=aM();){try{t.h.call(t.g)}catch(n){hM(n)}var e=U0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ga=!1};function Pu(t,e){_t.call(this),this.h=t||1,this.g=e||ae,this.j=Ft(this.qb,this),this.l=Date.now()}yt(Pu,_t);V=Pu.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(cm(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Pu.$.N.call(this),cm(this),delete this.g};function um(t,e,n){if(typeof t=="function")n&&(t=Ft(t,n));else if(t&&typeof t.handleEvent=="function")t=Ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function z0(t){t.g=um(()=>{t.g=null,t.i&&(t.i=!1,z0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fM extends os{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:z0(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _a(t){os.call(this),this.h=t,this.g={}}yt(_a,os);var yy=[];function j0(t,e,n,i){Array.isArray(n)||(n&&(yy[0]=n.toString()),n=yy);for(var s=0;s<n.length;s++){var r=M0(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function H0(t){nm(t.g,function(e,n){this.g.hasOwnProperty(n)&&sm(e)},t),t.g={}}_a.prototype.N=function(){_a.$.N.call(this),H0(this)};_a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xu(){this.g=!0}xu.prototype.Ea=function(){this.g=!1};function pM(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function mM(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function fr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_M(t,n)+(i?" "+i:"")})}function gM(t,e){t.info(function(){return"TIMEOUT: "+e})}xu.prototype.info=function(){};function _M(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return am(n)}catch{return e}}var Ys={},vy=null;function Du(){return vy=vy||new _t}Ys.Ta="serverreachability";function q0(t){Ut.call(this,Ys.Ta,t)}yt(q0,Ut);function ya(t){const e=Du();At(e,new q0(e))}Ys.STAT_EVENT="statevent";function W0(t,e){Ut.call(this,Ys.STAT_EVENT,t),this.stat=e}yt(W0,Ut);function Xt(t){const e=Du();At(e,new W0(e,t))}Ys.Ua="timingevent";function K0(t,e){Ut.call(this,Ys.Ua,t),this.size=e}yt(K0,Ut);function Ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var Nu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},G0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hm(){}hm.prototype.h=null;function wy(t){return t.h||(t.h=t.i())}function Q0(){}var Xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dm(){Ut.call(this,"d")}yt(dm,Ut);function fm(){Ut.call(this,"c")}yt(fm,Ut);var tf;function Ou(){}yt(Ou,hm);Ou.prototype.g=function(){return new XMLHttpRequest};Ou.prototype.i=function(){return{}};tf=new Ou;function Ja(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new _a(this),this.P=yM,t=Yd?125:void 0,this.V=new Pu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Y0}function Y0(){this.i=null,this.g="",this.h=!1}var yM=45e3,nf={},Sc={};V=Ja.prototype;V.setTimeout=function(t){this.P=t};function sf(t,e,n){t.L=1,t.v=Lu(Ti(e)),t.s=n,t.S=!0,X0(t,null)}function X0(t,e){t.G=Date.now(),Za(t),t.A=Ti(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),rI(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Y0,t.g=RI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new fM(Ft(t.Pa,t,t.g),t.O)),j0(t.U,t.g,"readystatechange",t.nb),e=t.I?N0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ya(),pM(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&Yn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Yn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yd||this.g&&(this.h.h||this.g.ja()||Ty(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ya(3):ya(2)),Mu(this);var n=this.g.da();this.ca=n;t:if(J0(this)){var i=Ty(this.g);t="";var s=i.length,r=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Uo(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,mM(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fa(a)){var c=a;break t}}c=null}if(n=c)fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rf(this,n);else{this.i=!1,this.o=3,Xt(12),ws(this),Uo(this);break e}}this.S?(Z0(this,u,o),Yd&&this.i&&u==3&&(j0(this.U,this.V,"tick",this.mb),this.V.start())):(fr(this.j,this.m,o,null),rf(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?EI(this.l,this):(this.i=!1,Za(this)))}else FM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),ws(this),Uo(this)}}}catch{}finally{}};function J0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Z0(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=vM(t,n),s==Sc){e==4&&(t.o=4,Xt(14),i=!1),fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==nf){t.o=4,Xt(15),fr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else fr(t.j,t.m,s,null),rf(t,s);J0(t)&&s!=Sc&&s!=nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vm(e),e.M=!0,Xt(11))):(fr(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),Uo(t))}V.mb=function(){if(this.g){var t=Yn(this.g),e=this.g.ja();this.C<e.length&&(Mu(this),Z0(this,t,e),this.i&&t!=4&&Za(this))}};function vM(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Sc:(n=Number(e.substring(n,i)),isNaN(n)?nf:(i+=1,i+n>e.length?Sc:(e=e.slice(i,i+n),t.C=i+n,e)))}V.cancel=function(){this.J=!0,ws(this)};function Za(t){t.Y=Date.now()+t.P,eI(t,t.P)}function eI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ya(Ft(t.lb,t),e)}function Mu(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gM(this.j,this.A),this.L!=2&&(ya(),Xt(17)),ws(this),this.o=2,Uo(this)):eI(this,this.Y-t)};function Uo(t){t.l.H==0||t.J||EI(t.l,t)}function ws(t){Mu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,cm(t.V),H0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function rf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||of(n.i,t))){if(!t.K&&of(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xc(n),Fu(n);else break e;ym(n),Xt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ya(Ft(n.ib,n),6e3));if(1>=lI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bs(n,11)}else if((t.K||n.g==t)&&xc(n),!fa(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(pm(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,He(i.I,i.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=AI(i,i.J?i.pa:null,i.Y),o.K){cI(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Mu(a),Za(a)),i.g=o}else wI(i);0<n.j.length&&Uu(n)}else c[0]!="stop"&&c[0]!="close"||bs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?bs(n,7):_m(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ya(4)}catch{}}function wM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ru(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function bM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ru(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function tI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ru(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bM(t),i=wM(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var nI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ks(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ks){this.h=t.h,kc(this,t.j),this.s=t.s,this.g=t.g,Pc(this,t.m),this.l=t.l;var e=t.i,n=new va;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),by(this,n),this.o=t.o}else t&&(e=String(t).match(nI))?(this.h=!1,kc(this,e[1]||"",!0),this.s=ko(e[2]||""),this.g=ko(e[3]||"",!0),Pc(this,e[4]),this.l=ko(e[5]||"",!0),by(this,e[6]||"",!0),this.o=ko(e[7]||"")):(this.h=!1,this.i=new va(null,this.h))}ks.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Po(e,Ey,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Po(e,Ey,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Po(n,n.charAt(0)=="/"?AM:TM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Po(n,CM)),t.join("")};function Ti(t){return new ks(t)}function kc(t,e,n){t.j=n?ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function by(t,e,n){e instanceof va?(t.i=e,SM(t.i,t.h)):(n||(e=Po(e,RM)),t.i=new va(e,t.h))}function He(t,e,n){t.i.set(e,n)}function Lu(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Po(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ey=/[#\/\?@]/g,TM=/[#\?:]/g,AM=/[#\?]/g,RM=/[#\?@]/g,CM=/#/g;function va(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function as(t){t.g||(t.g=new Map,t.h=0,t.i&&EM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=va.prototype;V.add=function(t,e){as(this),this.i=null,t=so(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iI(t,e){as(t),e=so(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sI(t,e){return as(t),e=so(t,e),t.g.has(e)}V.forEach=function(t,e){as(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};V.ta=function(){as(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};V.Z=function(t){as(this);let e=[];if(typeof t=="string")sI(this,t)&&(e=e.concat(this.g.get(so(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return as(this),this.i=null,t=so(this,t),sI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rI(t,e,n){iI(t,e),0<n.length&&(t.i=null,t.g.set(so(t,e),em(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function so(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SM(t,e){e&&!t.j&&(as(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(iI(this,i),rI(this,s,n))},t)),t.j=e}var kM=class{constructor(t,e){this.g=t,this.map=e}};function oI(t){this.l=t||PM,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PM=10;function aI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lI(t){return t.h?1:t.g?t.g.size:0}function of(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pm(t,e){t.g?t.g.add(e):t.h=e}function cI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oI.prototype.cancel=function(){if(this.i=uI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return em(t.i)}var xM=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function DM(){this.g=new xM}function NM(t,e,n){const i=n||"";try{tI(t,function(s,r){let o=s;Ga(s)&&(o=am(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function OM(t,e){const n=new xu;if(ae.Image){const i=new Image;i.onload=xl(Nl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xl(Nl,n,i,"TestLoadImage: error",!1,e),i.onabort=xl(Nl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xl(Nl,n,i,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Nl(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function el(t){this.l=t.fc||null,this.j=t.ob||!1}yt(el,hm);el.prototype.g=function(){return new $u(this.l,this.j)};el.prototype.i=function(t){return function(){return t}}({});function $u(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yt($u,_t);var mm=0;V=$u.prototype;V.open=function(t,e){if(this.readyState!=mm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wa(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tl(this)),this.readyState=mm};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wa(this)),this.g&&(this.readyState=3,wa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function hI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tl(this):wa(this),this.readyState==3&&hI(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,tl(this))};V.Ya=function(t){this.g&&(this.response=t,tl(this))};V.ka=function(){this.g&&tl(this)};function tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wa(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MM=ae.JSON.parse;function Je(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dI,this.L=this.M=!1}yt(Je,_t);var dI="",LM=/^https?$/i,$M=["POST","PUT"];V=Je.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tf.g(),this.C=this.u?wy(this.u):wy(tf),this.g.onreadystatechange=Ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Iy(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ae.FormData&&t instanceof ae.FormData,!(0<=k0($M,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mI(this),0<this.B&&((this.L=VM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.ua,this)):this.A=um(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Iy(this,r)}};function VM(t){return Nr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Zp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Iy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fI(t),Vu(t)}function fI(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Vu(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vu(this,!0)),Je.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?pI(this):this.kb())};V.kb=function(){pI(this)};function pI(t){if(t.h&&typeof Zp<"u"&&(!t.C[1]||Yn(t)!=4||t.da()!=2)){if(t.v&&Yn(t)==4)um(t.La,0,t);else if(At(t,"readystatechange"),Yn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(nI)[1]||null;!s&&ae.self&&ae.self.location&&(s=ae.self.location.protocol.slice(0,-1)),i=!LM.test(s?s.toLowerCase():"")}n=i}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var r=2<Yn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",fI(t)}}finally{Vu(t)}}}}function Vu(t,e){if(t.g){mI(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=i}catch{}}}function mI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Yn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MM(e)}};function Ty(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case dI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function FM(t){const e={};t=(t.g&&2<=Yn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(fa(t[i]))continue;var n=uM(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}iM(e,function(i){return i.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gI(t){let e="";return nm(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function gm(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=gI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _I(t){this.Ga=0,this.j=[],this.l=new xu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wo("baseRetryDelayMs",5e3,t),this.hb=wo("retryDelaySeedMs",1e4,t),this.eb=wo("forwardChannelMaxRetries",2,t),this.xa=wo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new oI(t&&t.concurrentRequestLimit),this.Ja=new DM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=_I.prototype;V.ra=8;V.H=1;function _m(t){if(yI(t),t.H==3){var e=t.W++,n=Ti(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),nl(t,n),e=new Ja(t,t.l,e),e.L=2,e.v=Lu(Ti(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=RI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Za(e)}TI(t)}function Fu(t){t.g&&(vm(t),t.g.cancel(),t.g=null)}function yI(t){Fu(t),t.u&&(ae.clearTimeout(t.u),t.u=null),xc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Uu(t){if(!aI(t.i)&&!t.m){t.m=!0;var e=t.Na;ma||B0(),ga||(ma(),ga=!0),lm.add(e,t),t.C=0}}function UM(t,e){return lI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ya(Ft(t.Na,t,e),II(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ja(this,this.l,t);let r=this.s;if(this.U&&(r?(r=N0(r),O0(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vI(this,s,e),n=Ti(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),nl(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(gI(r)))+"&"+e:this.o&&gm(n,this.o,r)),pm(this.i,s),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),s.aa=!0,sf(s,n,null)):sf(s,n,e),this.H=2}}else this.H==3&&(t?Ay(this,t):this.j.length==0||aI(this.i)||Ay(this))};function Ay(t,e){var n;e?n=e.m:n=t.W++;const i=Ti(t.I);He(i,"SID",t.K),He(i,"RID",n),He(i,"AID",t.V),nl(t,i),t.o&&t.s&&gm(i,t.o,t.s),n=new Ja(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=vI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),pm(t.i,n),sf(n,i,e)}function nl(t,e){t.na&&nm(t.na,function(n,i){He(e,i,n)}),t.h&&tI({},function(n,i){He(e,i,n)})}function vI(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ft(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{NM(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function wI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ma||B0(),ga||(ma(),ga=!0),lm.add(e,t),t.A=0}}function ym(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ya(Ft(t.Ma,t),II(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ya(Ft(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),Fu(this),bI(this))};function vm(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new Ja(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ti(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),nl(t,e),t.o&&t.s&&gm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Lu(Ti(e)),n.s=null,n.S=!0,X0(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Fu(this),ym(this),Xt(19))};function xc(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function EI(t,e){var n=null;if(t.g==e){xc(t),vm(t),t.g=null;var i=2}else if(of(t.i,e))n=e.F,cI(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Du(),At(i,new K0(i,n)),Uu(t)}else wI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&UM(t,e)||i==2&&ym(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:bs(t,5);break;case 4:bs(t,10);break;case 3:bs(t,6);break;default:bs(t,2)}}}function II(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Ft(t.pb,t);n||(n=new ks("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||kc(n,"https"),Lu(n)),OM(n.toString(),i)}else Xt(2);t.H=0,t.h&&t.h.za(e),TI(t),yI(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function TI(t){if(t.H=0,t.ma=[],t.h){const e=uI(t.i);(e.length!=0||t.j.length!=0)&&(my(t.ma,e),my(t.ma,t.j),t.i.i.length=0,em(t.j),t.j.length=0),t.h.ya()}}function AI(t,e,n){var i=n instanceof ks?Ti(n):new ks(n);if(i.g!="")e&&(i.g=e+"."+i.g),Pc(i,i.m);else{var s=ae.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ks(null);i&&kc(r,i),e&&(r.g=e),s&&Pc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&He(i,n,e),He(i,"VER",t.ra),nl(t,i),i}function RI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Je(new el({ob:!0})):new Je(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function CI(){}V=CI.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Dc(){if(Nr&&!(10<=Number(ZO)))throw Error("Environmental error: no available transport.")}Dc.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){_t.call(this),this.g=new _I(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ro(this)}yt(yn,_t);yn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=AI(t,null,t.Y),Uu(t)};yn.prototype.close=function(){_m(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=am(t),t=n);e.j.push(new kM(e.fb++,t)),e.H==3&&Uu(e)};yn.prototype.N=function(){this.g.h=null,delete this.j,_m(this.g),delete this.g,yn.$.N.call(this)};function SI(t){dm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}yt(SI,dm);function kI(){fm.call(this),this.status=1}yt(kI,fm);function ro(t){this.g=t}yt(ro,CI);ro.prototype.Ba=function(){At(this.g,"a")};ro.prototype.Aa=function(t){At(this.g,new SI(t))};ro.prototype.za=function(t){At(this.g,new kI)};ro.prototype.ya=function(){At(this.g,"b")};function BM(){this.blockSize=-1}function Ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}yt(Ln,BM);Ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jh(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)jh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){jh(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){jh(this,i),s=0;break}}this.h=s,this.i+=e};Ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Me(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var zM={};function wm(t){return-128<=t&&128>t?YO(t,function(e){return new Me([e|0],0>e?-1:0)}):new Me([t|0],0>t?-1:0)}function Xn(t){if(isNaN(t)||!isFinite(t))return Er;if(0>t)return bt(Xn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=af;return new Me(e,0)}function PI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return bt(PI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xn(Math.pow(e,8)),i=Er,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Xn(Math.pow(e,r)),i=i.R(r).add(Xn(o))):(i=i.R(n),i=i.add(Xn(o)))}return i}var af=4294967296,Er=wm(0),lf=wm(1),Ry=wm(16777216);V=Me.prototype;V.ea=function(){if(wn(this))return-bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:af+i)*e,e*=af}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(wi(this))return"0";if(wn(this))return"-"+bt(this).toString(t);for(var e=Xn(Math.pow(t,6)),n=this,i="";;){var s=Oc(n,e).g;n=Nc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,wi(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function wi(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wn(t){return t.h==-1}V.X=function(t){return t=Nc(this,t),wn(t)?-1:wi(t)?0:1};function bt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Me(n,~t.h).add(lf)}V.abs=function(){return wn(this)?bt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Me(n,n[n.length-1]&-2147483648?-1:0)};function Nc(t,e){return t.add(bt(e))}V.R=function(t){if(wi(this)||wi(t))return Er;if(wn(this))return wn(t)?bt(this).R(bt(t)):bt(bt(this).R(t));if(wn(t))return bt(this.R(bt(t)));if(0>this.X(Ry)&&0>t.X(Ry))return Xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,Ol(n,2*i+2*s),n[2*i+2*s+1]+=r*l,Ol(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Ol(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Ol(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Me(n,0)};function Ol(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bo(t,e){this.g=t,this.h=e}function Oc(t,e){if(wi(e))throw Error("division by zero");if(wi(t))return new bo(Er,Er);if(wn(t))return e=Oc(bt(t),e),new bo(bt(e.g),bt(e.h));if(wn(e))return e=Oc(t,bt(e)),new bo(bt(e.g),e.h);if(30<t.g.length){if(wn(t)||wn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lf,i=e;0>=i.X(t);)n=Cy(n),i=Cy(i);var s=sr(n,1),r=sr(i,1);for(i=sr(i,2),n=sr(n,2);!wi(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=sr(i,1),n=sr(n,1)}return e=Nc(t,s.R(e)),new bo(s,e)}for(s=Er;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Xn(n),o=r.R(e);wn(o)||0<o.X(t);)n-=i,r=Xn(n),o=r.R(e);wi(r)&&(r=lf),s=s.add(r),t=Nc(t,o)}return new bo(s,t)}V.gb=function(t){return Oc(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Me(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Me(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Me(n,this.h^t.h)};function Cy(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Me(n,t.h)}function sr(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Me(s,t.h)}Dc.prototype.createWebChannel=Dc.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;Nu.NO_ERROR=0;Nu.TIMEOUT=8;Nu.HTTP_ERROR=6;G0.COMPLETE="complete";Q0.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Je.prototype.listenOnce=Je.prototype.P;Je.prototype.getLastError=Je.prototype.Sa;Je.prototype.getLastErrorCode=Je.prototype.Ia;Je.prototype.getStatus=Je.prototype.da;Je.prototype.getResponseJson=Je.prototype.Wa;Je.prototype.getResponseText=Je.prototype.ja;Je.prototype.send=Je.prototype.ha;Je.prototype.setWithCredentials=Je.prototype.Oa;Ln.prototype.digest=Ln.prototype.l;Ln.prototype.reset=Ln.prototype.reset;Ln.prototype.update=Ln.prototype.j;Me.prototype.add=Me.prototype.add;Me.prototype.multiply=Me.prototype.R;Me.prototype.modulo=Me.prototype.gb;Me.prototype.compare=Me.prototype.X;Me.prototype.toNumber=Me.prototype.ea;Me.prototype.toString=Me.prototype.toString;Me.prototype.getBits=Me.prototype.D;Me.fromNumber=Xn;Me.fromString=PI;var jM=function(){return new Dc},HM=function(){return Du()},Hh=Nu,qM=G0,WM=Ys,Sy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},KM=el,Ml=Q0,GM=Je,QM=Ln,Ir=Me;const ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Zr("@firebase/firestore");function Py(){return Ls.logLevel}function G(t,...e){if(Ls.logLevel<=Ee.DEBUG){const n=e.map(bm);Ls.debug(`Firestore (${oo}): ${t}`,...n)}}function Ai(t,...e){if(Ls.logLevel<=Ee.ERROR){const n=e.map(bm);Ls.error(`Firestore (${oo}): ${t}`,...n)}}function Or(t,...e){if(Ls.logLevel<=Ee.WARN){const n=e.map(bm);Ls.warn(`Firestore (${oo}): ${t}`,...n)}}function bm(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+t;throw Ai(e),new Error(e)}function Oe(t,e){t||ie()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class XM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JM{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ni,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ni)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oe(typeof i.accessToken=="string"),new xI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new xt(e)}}class ZM{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eL{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new ZM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new tL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function iL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=iL(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ce(t,e){return t<e?-1:t>e?1:0}function Mr(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new rt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new rt(0,0))}static max(){return new se(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,i){n===void 0?n=0:n>e.length&&ie(),i===void 0?i=e.length-n:i>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends ba{construct(e,n,i){return new Ke(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends ba{construct(e,n,i){return new $t(e,n,i)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ke.fromString(e))}static fromName(e){return new ne(Ke.fromString(e).popFirst(5))}static empty(){return new ne(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ke(e.slice()))}}function rL(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(i===1e9?new rt(n+1,0):new rt(n,i));return new es(s,ne.empty(),e)}function oL(t){return new es(t.readTime,t.key,-1)}class es{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new es(se.min(),ne.empty(),-1)}static max(){return new es(se.max(),ne.empty(),-1)}}function aL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const lL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==lL)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,i)=>{n(e)})}static reject(e){return new O((n,i)=>{i(e)})}static waitFor(e){return new O((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=O.resolve(!1);for(const i of e)n=n.next(s=>s?O.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new O((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new O((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function sl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Em{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Em.ae=-1;function rl(t){return t==null}function Mc(t){return t===0&&1/t==-1/0}function uL(t){return typeof t=="number"&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??wt.RED,this.left=s??wt.EMPTY,this.right=r??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new wt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,i,s,r){return this}insert(e,n,i){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Bt(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Bt($t.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class OI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new OI("Invalid base64 string: "+r):r}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const hL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=hL.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
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
 */function Im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tm(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?Tm(e):e}function Ea(t){const e=ts(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:fL(t)?9007199254740991:10:ie()}function oi(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=ts(s.timestampValue),a=ts(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $s(s.bytesValue).isEqual($s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return st(s.geoPointValue.latitude)===st(r.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return st(s.integerValue)===st(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=st(s.doubleValue),a=st(r.doubleValue);return o===a?Mc(o)===Mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mr(t.arrayValue.values||[],e.arrayValue.values||[],oi);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(xy(o)!==xy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!oi(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function Ta(t,e){return(t.values||[]).find(n=>oi(n,e))!==void 0}function Lr(t,e){if(t===e)return 0;const n=Vs(t),i=Vs(e);if(n!==i)return Ce(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=st(r.integerValue||r.doubleValue),l=st(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ny(t.timestampValue,e.timestampValue);case 4:return Ny(Ea(t),Ea(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(r,o){const a=$s(r),l=$s(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ce(a[c],l[c]);if(u!==0)return u}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ce(st(r.latitude),st(o.latitude));return a!==0?a:Ce(st(r.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Lr(a[c],l[c]);if(u)return u}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===$l.mapValue&&o===$l.mapValue)return 0;if(r===$l.mapValue)return 1;if(o===$l.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ce(l[h],u[h]);if(d!==0)return d;const f=Lr(a[l[h]],c[u[h]]);if(f!==0)return f}return Ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ie()}}function Ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=ts(t),i=ts(e),s=Ce(n.seconds,i.seconds);return s!==0?s:Ce(n.nanos,i.nanos)}function $r(t){return cf(t)}function cf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=ts(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=cf(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${cf(n.fields[o])}`;return s+"}"}(t.mapValue):ie()}function uf(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function Oy(t){return!!t&&"nullValue"in t}function My(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xl(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Bo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=$t.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Bo(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return oi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Xs(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Qt(Bo(this.value))}}function MI(t){const e=[];return Xs(t.fields,(n,i)=>{const s=new $t([n]);if(Xl(i)){const r=MI(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,se.min(),se.min(),se.min(),Qt.empty(),0)}static newFoundDocument(e,n,i,s){return new pt(e,1,n,se.min(),i,s,0)}static newNoDocument(e,n){return new pt(e,2,n,se.min(),se.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,se.min(),se.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function Ly(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),n.key):i=Lr(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function $y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!oi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function pL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class LI{}class ct extends LI{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new gL(e,n,i):n==="array-contains"?new vL(e,i):n==="in"?new wL(e,i):n==="not-in"?new bL(e,i):n==="array-contains-any"?new EL(e,i):new ct(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new _L(e,i):new yL(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lr(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Lr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ai extends LI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new ai(e,n)}matches(e){return $I(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $I(t){return t.op==="and"}function VI(t){return mL(t)&&$I(t)}function mL(t){for(const e of t.filters)if(e instanceof ai)return!1;return!0}function hf(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+$r(t.value);if(VI(t))return t.filters.map(e=>hf(e)).join(",");{const e=t.filters.map(n=>hf(n)).join(",");return`${t.op}(${e})`}}function FI(t,e){return t instanceof ct?function(i,s){return s instanceof ct&&i.op===s.op&&i.field.isEqual(s.field)&&oi(i.value,s.value)}(t,e):t instanceof ai?function(i,s){return s instanceof ai&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&FI(o,s.filters[a]),!0):!1}(t,e):void ie()}function UI(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${$r(n.value)}`}(t):t instanceof ai?function(n){return n.op.toString()+" {"+n.getFilters().map(UI).join(" ,")+"}"}(t):"Filter"}class gL extends ct{constructor(e,n,i){super(e,n,i),this.key=ne.fromName(i.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class _L extends ct{constructor(e,n){super(e,"in",n),this.keys=BI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yL extends ct{constructor(e,n){super(e,"not-in",n),this.keys=BI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ne.fromName(i.referenceValue))}class vL extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&Ta(n.arrayValue,this.value)}}class wL extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ta(this.value.arrayValue,n)}}class bL extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ta(this.value.arrayValue,n)}}class EL extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ta(this.value.arrayValue,i))}}/**
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
 */class IL{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Vy(t,e=null,n=[],i=[],s=null,r=null,o=null){return new IL(t,e,n,i,s,r,o)}function Rm(t){const e=he(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>hf(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),rl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>$r(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>$r(i)).join(",")),e.he=n}return e.he}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$y(t.startAt,e.startAt)&&$y(t.endAt,e.endAt)}function df(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function TL(t,e,n,i,s,r,o,a){return new Bu(t,e,n,i,s,r,o,a)}function zu(t){return new Bu(t)}function Fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AL(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function RL(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function CL(t){return t.collectionGroup!==null}function Tr(t){const e=he(t);if(e.Pe===null){e.Pe=[];const n=RL(e),i=AL(e);if(n!==null&&i===null)n.isKeyField()||e.Pe.push(new zo(n)),e.Pe.push(new zo($t.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new zo($t.keyField(),r))}}}return e.Pe}function Ri(t){const e=he(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Vy(e.path,e.collectionGroup,Tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Tr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new zo(r.field,o))}const i=e.endAt?new Lc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Lc(e.startAt.position,e.startAt.inclusive):null;e.Ie=Vy(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.Ie}function ff(t,e,n){return new Bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return Cm(Ri(t),Ri(e))&&t.limitType===e.limitType}function zI(t){return`${Rm(Ri(t))}|lt:${t.limitType}`}function pf(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>UI(s)).join(", ")}]`),rl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>$r(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>$r(s)).join(",")),`Target(${i})`}(Ri(t))}; limitType=${t.limitType})`}function Hu(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):ne.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Tr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=Ly(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Tr(i),s)||i.endAt&&!function(o,a,l){const c=Ly(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Tr(i),s))}(t,e)}function SL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jI(t){return(e,n)=>{let i=!1;for(const s of Tr(t)){const r=kL(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function kL(t,e,n){const i=t.field.isKeyField()?ne.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Lr(l,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return NI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=new Qe(ne.comparator);function Ci(){return PL}const HI=new Qe(ne.comparator);function xo(...t){let e=HI;for(const n of t)e=e.insert(n.key,n);return e}function qI(t){let e=HI;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Es(){return jo()}function WI(){return jo()}function jo(){return new ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const xL=new Qe(ne.comparator),DL=new Bt(ne.comparator);function me(...t){let e=DL;for(const n of t)e=e.add(n);return e}const NL=new Bt(Ce);function OL(){return NL}/**
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
 */function KI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function GI(t){return{integerValue:""+t}}function QI(t,e){return uL(e)?GI(e):KI(t,e)}/**
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
 */class qu{constructor(){this._=void 0}}function ML(t,e,n){return t instanceof $c?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Im(r)&&(r=Tm(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Vr?XI(t,e):t instanceof Fr?JI(t,e):function(s,r){const o=YI(s,r),a=Uy(o)+Uy(s.Te);return uf(o)&&uf(s.Te)?GI(a):KI(s.serializer,a)}(t,e)}function LL(t,e,n){return t instanceof Vr?XI(t,e):t instanceof Fr?JI(t,e):n}function YI(t,e){return t instanceof Aa?function(i){return uf(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class $c extends qu{}class Vr extends qu{constructor(e){super(),this.elements=e}}function XI(t,e){const n=ZI(e);for(const i of t.elements)n.some(s=>oi(s,i))||n.push(i);return{arrayValue:{values:n}}}class Fr extends qu{constructor(e){super(),this.elements=e}}function JI(t,e){let n=ZI(e);for(const i of t.elements)n=n.filter(s=>!oi(s,i));return{arrayValue:{values:n}}}class Aa extends qu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Uy(t){return st(t.integerValue||t.doubleValue)}function ZI(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.field=e,this.transform=n}}function $L(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Vr&&s instanceof Vr||i instanceof Fr&&s instanceof Fr?Mr(i.elements,s.elements,oi):i instanceof Aa&&s instanceof Aa?oi(i.Te,s.Te):i instanceof $c&&s instanceof $c}(t.transform,e.transform)}class VL{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function eT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new km(t.key,Yt.none()):new ol(t.key,t.data,Yt.none());{const n=t.data,i=Qt.empty();let s=new Bt($t.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ls(t.key,i,new fn(s.toArray()),Yt.none())}}function FL(t,e,n){t instanceof ol?function(s,r,o){const a=s.value.clone(),l=zy(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(s,r,o){if(!Jl(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=zy(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(tT(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ho(t,e,n,i){return t instanceof ol?function(r,o,a,l){if(!Jl(r.precondition,o))return a;const c=r.value.clone(),u=jy(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof ls?function(r,o,a,l){if(!Jl(r.precondition,o))return a;const c=jy(r.fieldTransforms,l,o),u=o.data;return u.setAll(tT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Jl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function UL(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=YI(i.transform,s||null);r!=null&&(n===null&&(n=Qt.empty()),n.set(i.field,r))}return n||null}function By(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Mr(i,s,(r,o)=>$L(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends Wu{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ls extends Wu{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function tT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function zy(t,e,n){const i=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,LL(o,a,n[s]))}return i}function jy(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,ML(r,o,e))}return i}class km extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nT extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&FL(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ho(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ho(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=WI();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=eT(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Mr(this.mutations,e.mutations,(n,i)=>By(n,i))&&Mr(this.baseMutations,e.baseMutations,(n,i)=>By(n,i))}}class Pm{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Oe(e.mutations.length===i.length);let s=function(){return xL}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Pm(e,n,i,s)}}/**
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
 */class zL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,_e;function iT(t){switch(t){default:return ie();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function sT(t){if(t===void 0)return Ai("GRPC error has no .code"),k.UNKNOWN;switch(t){case nt.OK:return k.OK;case nt.CANCELLED:return k.CANCELLED;case nt.UNKNOWN:return k.UNKNOWN;case nt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case nt.INTERNAL:return k.INTERNAL;case nt.UNAVAILABLE:return k.UNAVAILABLE;case nt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case nt.NOT_FOUND:return k.NOT_FOUND;case nt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case nt.ABORTED:return k.ABORTED;case nt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case nt.DATA_LOSS:return k.DATA_LOSS;default:return ie()}}(_e=nt||(nt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vl}static getOrCreateInstance(){return Vl===null&&(Vl=new xm),Vl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Vl=null;/**
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
 */function HL(){return new TextEncoder}/**
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
 */const qL=new Ir([4294967295,4294967295],0);function Hy(t){const e=HL().encode(t),n=new QM;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ir([n,i],0),new Ir([s,r],0)]}class Dm{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(i<0)throw new Do(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ir.fromNumber(this.de)}Re(e,n,i){let s=e.add(n.multiply(Ir.fromNumber(i)));return s.compare(qL)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Hy(e),[i,s]=qy(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);if(!this.Ve(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Dm(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Hy(e),[i,s]=qy(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);this.me(o)}}me(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Ku(se.min(),s,new Qe(Ce),Ci(),me())}}class al{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new al(i,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,i,s){this.fe=e,this.removedTargetIds=n,this.key=i,this.ge=s}}class rT{constructor(e,n){this.targetId=e,this.pe=n}}class oT{constructor(e,n,i=Ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Wy{constructor(){this.ye=0,this.we=Gy(),this.Se=Ht.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=me(),n=me(),i=me();return this.we.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ie()}}),new al(this.Se,this.be,e,n,i)}xe(){this.De=!1,this.we=Gy()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class WL{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Ci(),this.$e=Ky(),this.Ue=new Qe(Ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const i=this.He(n);switch(e.state){case 0:this.Je(n)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),i.Fe(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((i,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,i;const s=e.targetId,r=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(df(a))if(r===0){const l=new ne(a.path);this.ze(s,l,pt.newNoDocument(l,se.min()))}else Oe(r===1);else{const l=this.et(s);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=xm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var y,v,b,I,C,E;const x={localCacheCount:f,existenceFilterCount:m.count},H=m.unchangedNames;return H&&(x.bloomFilter={applied:h===0,hashCount:(y=H==null?void 0:H.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(I=(b=(v=H==null?void 0:H.bits)===null||v===void 0?void 0:v.bitmap)===null||b===void 0?void 0:b.length)!==null&&I!==void 0?I:0,padding:(E=(C=H==null?void 0:H.bits)===null||C===void 0?void 0:C.padding)!==null&&E!==void 0?E:0},d&&(x.bloomFilter.mightContain=d)),x}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=$s(r).toUint8Array()}catch(h){if(h instanceof OI)return Or("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Dm(l,o,a)}catch(h){return Or(h instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const i=this.qe.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&df(a.target)){const l=new ne(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,pt.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let i=me();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const s=new Ku(e,n,this.Ue,this.Ke,i);return this.Ke=Ci(),this.$e=Ky(),this.Ue=new Qe(Ce),s}Ge(e,n){if(!this.Je(e))return;const i=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,i),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,i){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),i&&(this.Ke=this.Ke.insert(n,i))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Wy,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Bt(Ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Wy),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Ky(){return new Qe(ne.comparator)}function Gy(){return new Qe(ne.comparator)}const KL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),GL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),QL=(()=>({and:"AND",or:"OR"}))();class YL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mf(t,e){return t.useProto3Json||rl(e)?e:{value:e}}function Vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XL(t,e){return Vc(t,e.toTimestamp())}function mn(t){return Oe(!!t),se.fromTimestamp(function(n){const i=ts(n);return new rt(i.seconds,i.nanos)}(t))}function Nm(t,e){return function(i){return new Ke(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function lT(t){const e=Ke.fromString(t);return Oe(fT(e)),e}function Fc(t,e){return Nm(t.databaseId,e.path)}function qo(t,e){const n=lT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(cT(n))}function gf(t,e){return Nm(t.databaseId,e)}function JL(t){const e=lT(t);return e.length===4?Ke.emptyPath():cT(e)}function Ra(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cT(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qy(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function ZL(t,e){return"found"in e?function(i,s){Oe(!!s.found),s.found.name,s.found.updateTime;const r=qo(i,s.found.name),o=mn(s.found.updateTime),a=s.found.createTime?mn(s.found.createTime):se.min(),l=new Qt({mapValue:{fields:s.found.fields}});return pt.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(i,s){Oe(!!s.missing),Oe(!!s.readTime);const r=qo(i,s.missing),o=mn(s.readTime);return pt.newNoDocument(r,o)}(t,e):ie()}function e$(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Oe(u===void 0||typeof u=="string"),Ht.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:sT(c.code);return new W(u,c.message||"")}(o);n=new oT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=qo(t,i.document.name),r=mn(i.document.updateTime),o=i.document.createTime?mn(i.document.createTime):se.min(),a=new Qt({mapValue:{fields:i.document.fields}}),l=pt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Zl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=qo(t,i.document),r=i.readTime?mn(i.readTime):se.min(),o=pt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=qo(t,i.document),r=i.removedTargetIds||[];n=new Zl([],r,s,null)}else{if(!("filter"in e))return ie();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new jL(s,r),a=i.targetId;n=new rT(a,o)}}return n}function uT(t,e){let n;if(e instanceof ol)n={update:Qy(t,e.key,e.value)};else if(e instanceof km)n={delete:Fc(t,e.key)};else if(e instanceof ls)n={update:Qy(t,e.key,e.data),updateMask:c$(e.fieldMask)};else{if(!(e instanceof nT))return ie();n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof $c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ie()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:XL(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ie()}(t,e.precondition)),n}function t$(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?mn(s.updateTime):mn(r);return o.isEqual(se.min())&&(o=mn(r)),new VL(o,s.transformResults||[])}(n,e))):[]}function n$(t,e){return{documents:[gf(t,e.path)]}}function i$(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=gf(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gf(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return dT(ai.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:or(h.field),direction:o$(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=mf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function s$(t){let e=JL(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Oe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=hT(h);return d instanceof ai&&VI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new zo(ar(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,rl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Lc(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Lc(f,d)}(n.endAt)),TL(e,s,o,r,a,"F",l,c)}function r$(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ar(n.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ar(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ar(n.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ar(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ai.create(n.compositeFilter.filters.map(i=>hT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function o$(t){return KL[t]}function a$(t){return GL[t]}function l$(t){return QL[t]}function or(t){return{fieldPath:t.canonicalString()}}function ar(t){return $t.fromServerFormat(t.fieldPath)}function dT(t){return t instanceof ct?function(n){if(n.op==="=="){if(My(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NAN"}};if(Oy(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(My(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NAN"}};if(Oy(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(n.field),op:a$(n.op),value:n.value}}}(t):t instanceof ai?function(n){const i=n.getFilters().map(s=>dT(s));return i.length===1?i[0]:{compositeFilter:{op:l$(n.op),filters:i}}}(t):ie()}function c$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,i,s,r=se.min(),o=se.min(),a=Ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(e){this.ct=e}}function h$(t){const e=s$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
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
 */class d${constructor(){this.sn=new f$}addToCollectionParentIndex(e,n){return this.sn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(es.min())}updateCollectionGroup(e,n,i){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class f${constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Bt(Ke.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Bt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ur(0)}static On(){return new Ur(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(){this.changes=new ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?O.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Ho(i.mutation,s,fn.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,me()).next(()=>i))}getLocalViewOfDocuments(e,n,i=me()){const s=Es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=xo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Es();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,me()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ci();const o=jo(),a=function(){return jo()}();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ls)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ho(u.mutation,c,u.mutation.getFieldMask(),rt.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new m$(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=jo();let s=new Qe((o,a)=>o-a),r=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||fn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||me()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=WI();u.forEach(d=>{if(!r.has(d)){const f=eT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return ne.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):O.resolve(Es());let a=-1,l=r;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,me())).next(u=>({batchId:a,changes:qI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(i=>{let s=xo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=xo();return this.indexManager.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const l=function(u,h){return new Bu(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,pt.newInvalidDocument(c)))});let o=xo();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ho(c.mutation,l,fn.empty(),rt.now()),Hu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class _${constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return O.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:h$(s.bundledQuery),readTime:mn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class y${constructor(){this.overlays=new Qe(ne.comparator),this.cr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Es();return O.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ht(e,n,r)}),O.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.cr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(i)),O.resolve()}getOverlaysForCollection(e,n,i){const s=Es(),r=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=Es(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Es(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return O.resolve(a)}ht(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(i.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new zL(n,i));let r=this.cr.get(n);r===void 0&&(r=me(),this.cr.set(n,r)),this.cr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.lr=new Bt(ft.hr),this.Pr=new Bt(ft.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const i=new ft(e,n);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Er(new ft(e,n))}dr(e,n){e.forEach(i=>this.removeReference(i,n))}Ar(e){const n=new ne(new Ke([])),i=new ft(n,e),s=new ft(n,e+1),r=[];return this.Pr.forEachInRange([i,s],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new ne(new Ke([])),i=new ft(n,e),s=new ft(n,e+1);let r=me();return this.Pr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ft(e,0),i=this.lr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ft{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return ne.comparator(e.key,n.key)||Ce(e.mr,n.mr)}static Ir(e,n){return Ce(e.mr,n.mr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Bt(ft.hr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BL(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new ft(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.wr(i),r=s<0?0:s;return O.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([i,s],o=>{const a=this.yr(o.mr);r.push(a)}),O.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Bt(Ce);return n.forEach(s=>{const r=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{i=i.add(a.mr)})}),O.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ne.isDocumentKey(r)||(r=r.child(""));const o=new ft(new ne(r),0);let a=new Bt(Ce);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),O.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(i=>{const s=this.yr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return O.forEach(n.mutations,s=>{const r=new ft(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,n){const i=new ft(n,0),s=this.pr.firstAfterOrEqual(i);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w${constructor(e){this.Dr=e,this.docs=function(){return new Qe(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return O.resolve(i?i.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let i=Ci();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():pt.newInvalidDocument(s))}),O.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ci();const o=n.path,a=new ne(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||aL(oL(u),i)<=0||(s.has(u.key)||Hu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ie()}vr(e,n){return O.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new b$(this)}getSize(e){return O.resolve(this.size)}}class b$ extends p${constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(i)}),O.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(e){this.persistence=e,this.Cr=new ao(n=>Rm(n),Cm),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Om,this.targetCount=0,this.Or=Ur.xn()}forEachTarget(e,n){return this.Cr.forEach((i,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Fr&&(this.Fr=n),O.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Ur(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Ln(n),O.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(r).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cr.get(n)||null;return O.resolve(i)}addMatchingKeys(e,n,i){return this.Mr.Tr(n,i),O.resolve()}removeMatchingKeys(e,n,i){this.Mr.dr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),O.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Mr.Vr(n);return O.resolve(i)}containsKey(e,n){return O.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e,n){this.Nr={},this.overlays={},this.Br=new Em(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new E$(this),this.indexManager=new d$,this.remoteDocumentCache=function(s){return new w$(s)}(i=>this.referenceDelegate.qr(i)),this.serializer=new u$(n),this.Qr=new _$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Nr[e.toKey()];return i||(i=new v$(n,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,i){G("MemoryPersistence","Starting transaction:",e);const s=new T$(this.Br.next());return this.referenceDelegate.Kr(),i(s).next(r=>this.referenceDelegate.$r(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ur(e,n){return O.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,n)))}}class T$ extends cL{constructor(e){super(),this.currentSequenceNumber=e}}class Mm{constructor(e){this.persistence=e,this.Wr=new Om,this.Gr=null}static zr(e){return new Mm(e)}get jr(){if(this.Gr)return this.Gr;throw ie()}addReference(e,n,i){return this.Wr.addReference(i,n),this.jr.delete(i.toString()),O.resolve()}removeReference(e,n,i){return this.Wr.removeReference(i,n),this.jr.add(i.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.jr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.jr,i=>{const s=ne.fromPath(i);return this.Hr(e,s).next(r=>{r||n.removeEntry(s,se.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(i=>{i?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return O.or([()=>O.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Li=i,this.ki=s}static qi(e,n){let i=me(),s=me();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Lm(e,n.fromCache,i,s)}}/**
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
 */class A${constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.$i(e,n).next(r=>r||this.Ui(e,n,s,i)).next(r=>r||this.Wi(e,n))}$i(e,n){if(Fy(n))return O.resolve(null);let i=Ri(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ff(n,null,"F"),i=Ri(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=me(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,ff(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,i,s){return Fy(n)||s.isEqual(se.min())?this.Wi(e,n):this.Ki.getDocuments(e,i).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,i,s)?this.Wi(e,n):(Py()<=Ee.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pf(n)),this.ji(e,o,n,rL(s,-1)))})}Gi(e,n){let i=new Bt(jI(e));return n.forEach((s,r)=>{Hu(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Wi(e,n){return Py()<=Ee.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",pf(n)),this.Ki.getDocumentsMatchingQuery(e,n,es.min())}ji(e,n,i,s){return this.Ki.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class R${constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Qe(Ce),this.Yi=new ao(r=>Rm(r),Cm),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g$(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function C$(t,e,n,i){return new R$(t,e,n,i)}async function pT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.es(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=me();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function S$(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=O.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(y=>{const v=c.docVersions.get(m);Oe(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function mT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function k$(t,e){const n=he(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ht.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(y,v,b){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Ci(),c=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(P$(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(se.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return O.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function P$(t,e,n){let i=me(),s=me();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ci();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function x$(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function D$(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.kr.getTargetData(i,e).next(r=>r?(s=r,O.resolve(s)):n.kr.allocateTargetId(i).next(o=>(s=new Bi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.kr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function _f(t,e,n){const i=he(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!sl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Yy(t,e,n){const i=he(t);let s=se.min(),r=me();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=he(l),d=h.Yi.get(u);return d!==void 0?O.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,Ri(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?r:me())).next(a=>(N$(i,SL(e),a),{documents:a,ss:r})))}function N$(t,e,n){let i=t.Zi.get(e)||se.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Zi.set(e,i)}class Xy{constructor(){this.activeTargetIds=OL()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O${constructor(){this.Hs=new Xy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,i){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Xy,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M${Ys(e){}shutdown(){}}/**
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
 */class Jy{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fl=null;function qh(){return Fl===null?Fl=function(){return 268435456+Math.round(2147483648*Math.random())}():Fl++,"0x"+Fl.toString(16)}/**
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
 */const L$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class V$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=i+"://"+n.host,this.Eo=`projects/${s}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Ro(){return!1}Vo(n,i,s,r,o){const a=qh(),l=this.mo(n,i);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,s).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Or("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,i,s,r,o,a){return this.Vo(n,i,s,r,o)}fo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}mo(n,i){const s=L$[n];return`${this.To}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,i,s){const r=qh();return new Promise((o,a)=>{const l=new GM;l.setWithCredentials(!0),l.listenOnce(qM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hh.NO_ERROR:const u=l.getResponseJson();G(kt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Hh.TIMEOUT:G(kt,`RPC '${e}' ${r} timed out`),a(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const h=l.getStatus();if(G(kt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(b)>=0?b:k.UNKNOWN}(f.status);a(new W(m,f.message))}else a(new W(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(k.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{G(kt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);G(kt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=qh(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jM(),a=HM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new KM({})),this.fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");G(kt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new $$({so:v=>{f?G(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(G(kt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),G(kt,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,b,I)=>{v.listen(b,C=>{try{I(C)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,Ml.EventType.OPEN,()=>{f||G(kt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Ml.EventType.CLOSE,()=>{f||(f=!0,G(kt,`RPC '${e}' stream ${s} transport closed`),m.Po())}),y(h,Ml.EventType.ERROR,v=>{f||(f=!0,Or(kt,`RPC '${e}' stream ${s} transport errored:`,v),m.Po(new W(k.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ml.EventType.MESSAGE,v=>{var b;if(!f){const I=v.data[0];Oe(!!I);const C=I,E=C.error||((b=C[0])===null||b===void 0?void 0:b.error);if(E){G(kt,`RPC '${e}' stream ${s} received error:`,E);const x=E.status;let H=function(le){const Ae=nt[le];if(Ae!==void 0)return sT(Ae)}(x),J=E.message;H===void 0&&(H=k.INTERNAL,J="Unknown error status: "+x+" with message "+E.message),f=!0,m.Po(new W(H,J)),h.close()}else G(kt,`RPC '${e}' stream ${s} received:`,I),m.Io(I)}}),y(a,WM.STAT_EVENT,v=>{v.stat===Sy.PROXY?G(kt,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Sy.NOPROXY&&G(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Wh(){return typeof document<"u"?document:null}/**
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
 */function Gu(t){return new YL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-i);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.Bo=i,this.Lo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new $m(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Ai(n.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.ko===n&&this.e_(i,s)},i=>{e(()=>{const s=new W(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(s)})})}e_(e,n){const i=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{i(()=>this.t_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F$ extends gT{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=e$(this.serializer,e),i=function(r){if(!("targetChange"in r))return se.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?mn(o.readTime):se.min()}(e);return this.listener.r_(n,i)}i_(e){const n={};n.database=Ra(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=df(l)?{documents:n$(r,l)}:{query:i$(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aT(r,o.resumeToken);const c=mf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Vc(r,o.snapshotVersion.toTimestamp());const c=mf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=r$(this.serializer,e);i&&(n.labels=i),this.Ho(n)}s_(e){const n={};n.database=Ra(this.serializer),n.removeTarget=e,this.Ho(n)}}class U$ extends gT{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=t$(e.writeResults,e.commitTime),i=mn(e.commitTime);return this.listener.u_(i,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Ra(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>uT(this.serializer,i))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B$ extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Vo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(k.UNKNOWN,s.toString())})}yo(e,n,i,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(k.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class z${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ai(n),this.d_=!1):G("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{Js(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=he(l);c.y_.add(4),await ll(c),c.b_.set("Unknown"),c.y_.delete(4),await Qu(c)}(this))})}),this.b_=new z$(i,s)}}async function Qu(t){if(Js(t))for(const e of t.w_)await e(!0)}async function ll(t){for(const e of t.w_)await e(!1)}function _T(t,e){const n=he(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Um(n)?Fm(n):lo(n).Uo()&&Vm(n,e))}function yT(t,e){const n=he(t),i=lo(n);n.p_.delete(e),i.Uo()&&vT(n,e),n.p_.size===0&&(i.Uo()?i.zo():Js(n)&&n.b_.set("Unknown"))}function Vm(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).i_(e)}function vT(t,e){t.D_.Be(e),lo(t).s_(e)}function Fm(t){t.D_=new WL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.b_.A_()}function Um(t){return Js(t)&&!lo(t).$o()&&t.p_.size>0}function Js(t){return he(t).y_.size===0}function wT(t){t.D_=void 0}async function H$(t){t.p_.forEach((e,n)=>{Vm(t,e)})}async function q$(t,e){wT(t),Um(t)?(t.b_.m_(e),Fm(t)):t.b_.set("Unknown")}async function W$(t,e,n){if(t.b_.set("Online"),e instanceof oT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(i){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Uc(t,i)}else if(e instanceof Zl?t.D_.We(e):e instanceof rT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(se.min()))try{const i=await mT(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(Ht.EMPTY_BYTE_STRING,u.snapshotVersion)),vT(r,l);const h=new Bi(u.target,l,c,u.sequenceNumber);Vm(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){G("RemoteStore","Failed to raise snapshot:",i),await Uc(t,i)}}async function Uc(t,e,n){if(!sl(e))throw e;t.y_.add(1),await ll(t),t.b_.set("Offline"),n||(n=()=>mT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Qu(t)})}function bT(t,e){return e().catch(n=>Uc(t,n,e))}async function Yu(t){const e=he(t),n=ns(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;K$(e);)try{const s=await x$(e.localStore,i);if(s===null){e.g_.length===0&&n.zo();break}i=s.batchId,G$(e,s)}catch(s){await Uc(e,s)}ET(e)&&IT(e)}function K$(t){return Js(t)&&t.g_.length<10}function G$(t,e){t.g_.push(e);const n=ns(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ET(t){return Js(t)&&!ns(t).$o()&&t.g_.length>0}function IT(t){ns(t).start()}async function Q$(t){ns(t).l_()}async function Y$(t){const e=ns(t);for(const n of t.g_)e.a_(n.mutations)}async function X$(t,e,n){const i=t.g_.shift(),s=Pm.from(i,e,n);await bT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yu(t)}async function J$(t,e){e&&ns(t).__&&await async function(i,s){if(function(o){return iT(o)&&o!==k.ABORTED}(s.code)){const r=i.g_.shift();ns(i).Go(),await bT(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Yu(i)}}(t,e),ET(t)&&IT(t)}async function Zy(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const i=Js(n);n.y_.add(3),await ll(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Qu(n)}async function Z$(t,e){const n=he(t);e?(n.y_.delete(2),await Qu(n)):e||(n.y_.add(2),await ll(n),n.b_.set("Unknown"))}function lo(t){return t.v_||(t.v_=function(n,i,s){const r=he(n);return r.P_(),new F$(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:H$.bind(null,t),uo:q$.bind(null,t),r_:W$.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Um(t)?Fm(t):t.b_.set("Unknown")):(await t.v_.stop(),wT(t))})),t.v_}function ns(t){return t.C_||(t.C_=function(n,i,s){const r=he(n);return r.P_(),new U$(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:Q$.bind(null,t),uo:J$.bind(null,t),c_:Y$.bind(null,t),u_:X$.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Yu(t)):(await t.C_.stop(),t.g_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Bm(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zm(t,e){if(Ai("AsyncQueue",`${e}: ${t}`),sl(t))return new W(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ne.comparator(n.key,i.key):(n,i)=>ne.comparator(n.key,i.key),this.keyedMap=xo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ar;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.F_=new Qe(ne.comparator)}track(e){const n=e.doc.key,i=this.F_.get(n);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(n,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(n):e.type===1&&i.type===2?this.F_=this.F_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ie():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Br{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Br(e,n,Ar.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.x_=void 0,this.listeners=[]}}class tV{constructor(){this.queries=new ao(e=>zI(e),ju),this.onlineState="Unknown",this.O_=new Set}}async function jm(t,e){const n=he(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new eV),s)try{r.x_=await n.onListen(i)}catch(o){const a=zm(o,`Initialization of query '${pf(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&qm(n)}async function Hm(t,e){const n=he(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function nV(t,e){const n=he(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(s)&&(i=!0);o.x_=s}}i&&qm(n)}function iV(t,e,n){const i=he(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function qm(t){t.O_.forEach(e=>{e.next()})}class Wm{constructor(e,n,i){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Br(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.key=e}}class AT{constructor(e){this.key=e}}class sV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=me(),this.mutatedKeys=me(),this.na=jI(e),this.ra=new Ar(this.na)}get ia(){return this.X_}sa(e,n){const i=n?n.oa:new ev,s=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Hu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(i.track({type:3,doc:f}),v=!0):this._a(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Br(this.query,e.ra,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new ev,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=me(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const n=[];return e.forEach(i=>{this.ta.has(i)||n.push(new AT(i))}),this.ta.forEach(i=>{e.has(i)||n.push(new TT(i))}),n}ha(e){this.X_=e.ss,this.ta=me();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Br.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class rV{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class oV{constructor(e){this.key=e,this.Ia=!1}}class aV{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ao(a=>zI(a),ju),this.da=new Map,this.Aa=new Set,this.Ra=new Qe(ne.comparator),this.Va=new Map,this.ma=new Om,this.fa={},this.ga=new Map,this.pa=Ur.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function lV(t,e){const n=yV(t);let i,s;const r=n.Ea.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Pa();else{const o=await D$(n.localStore,Ri(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await cV(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&_T(n.remoteStore,o)}return s}async function cV(t,e,n,i,s){t.wa=(h,d,f)=>async function(y,v,b,I){let C=v.view.sa(b);C.zi&&(C=await Yy(y.localStore,v.query,!1).then(({documents:H})=>v.view.sa(H,C)));const E=I&&I.targetChanges.get(v.targetId),x=v.view.applyChanges(C,y.isPrimaryClient,E);return nv(y,v.targetId,x.ca),x.snapshot}(t,h,d,f);const r=await Yy(t.localStore,e,!0),o=new sV(e,r.ss),a=o.sa(r.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);nv(t,n,c.ca);const u=new rV(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function uV(t,e){const n=he(t),i=n.Ea.get(e),s=n.da.get(i.targetId);if(s.length>1)return n.da.set(i.targetId,s.filter(r=>!ju(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await _f(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),yT(n.remoteStore,i.targetId),yf(n,i.targetId)}).catch(il)):(yf(n,i.targetId),await _f(n.localStore,i.targetId,!0))}async function hV(t,e,n){const i=vV(t);try{const s=await function(o,a){const l=he(o),c=rt.now(),u=a.reduce((f,m)=>f.add(m.key),me());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ci(),y=me();return l.Xi.getEntries(f,u).next(v=>{m=v,m.forEach((b,I)=>{I.isValidDocument()||(y=y.add(b))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const b=[];for(const I of a){const C=UL(I,h.get(I.key).overlayedDocument);C!=null&&b.push(new ls(I.key,C,MI(C.value.mapValue),Yt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,b,a)}).next(v=>{d=v;const b=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,b)})}).then(()=>({batchId:d.batchId,changes:qI(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Qe(Ce)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,s.batchId,n),await cl(i,s.changes),await Yu(i.remoteStore)}catch(s){const r=zm(s,"Failed to persist write");n.reject(r)}}async function RT(t,e){const n=he(t);try{const i=await k$(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Va.get(r);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Oe(o.Ia):s.removedDocuments.size>0&&(Oe(o.Ia),o.Ia=!1))}),await cl(n,i,e)}catch(i){await il(i)}}function tv(t,e,n){const i=he(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=he(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&qm(l)}(i.eventManager,e),s.length&&i.Ta.r_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dV(t,e,n){const i=he(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Va.get(e),r=s&&s.key;if(r){let o=new Qe(ne.comparator);o=o.insert(r,pt.newNoDocument(r,se.min()));const a=me().add(r),l=new Ku(se.min(),new Map,new Qe(Ce),o,a);await RT(i,l),i.Ra=i.Ra.remove(r),i.Va.delete(e),Km(i)}else await _f(i.localStore,e,!1).then(()=>yf(i,e,n)).catch(il)}async function fV(t,e){const n=he(t),i=e.batch.batchId;try{const s=await S$(n.localStore,e);ST(n,i,null),CT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await cl(n,s)}catch(s){await il(s)}}async function pV(t,e,n){const i=he(t);try{const s=await function(o,a){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Oe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);ST(i,e,n),CT(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await cl(i,s)}catch(s){await il(s)}}function CT(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function ST(t,e,n){const i=he(t);let s=i.fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fa[i.currentUser.toKey()]=s}}function yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(i=>{t.ma.containsKey(i)||kT(t,i)})}function kT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(yT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Km(t))}function nv(t,e,n){for(const i of n)i instanceof TT?(t.ma.addReference(i.key,e),mV(t,i)):i instanceof AT?(G("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||kT(t,i.key)):ie()}function mV(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(G("SyncEngine","New document in limbo: "+n),t.Aa.add(i),Km(t))}function Km(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new ne(Ke.fromString(e)),i=t.pa.next();t.Va.set(i,new oV(n)),t.Ra=t.Ra.insert(n,i),_T(t.remoteStore,new Bi(Ri(zu(n.path)),i,"TargetPurposeLimboResolution",Em.ae))}}async function cl(t,e,n){const i=he(t),s=[],r=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Lm.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Ta.r_(s),await async function(l,c){const u=he(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,d=>O.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!sl(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(i.localStore,r))}async function gV(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const i=await pT(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new W(k.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await cl(n,i.ts)}}function _V(t,e){const n=he(t),i=n.Va.get(e);if(i&&i.Ia)return me().add(i.key);{let s=me();const r=n.da.get(e);if(!r)return s;for(const o of r){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function yV(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_V.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dV.bind(null,e),e.Ta.r_=nV.bind(null,e.eventManager),e.Ta.Sa=iV.bind(null,e.eventManager),e}function vV(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pV.bind(null,e),e}class iv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return C$(this.persistence,new A$,e.initialUser,this.serializer)}createPersistence(e){return new I$(Mm.zr,this.serializer)}createSharedClientState(e){return new O$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>tv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gV.bind(null,this.syncEngine),await Z$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tV}()}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),i=function(r){return new V$(r)}(e.databaseInfo);return function(r,o,a,l){return new B$(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new j$(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tv(this.syncEngine,n,0),function(){return Jy.v()?new Jy:new M$}())}createSyncEngine(e,n){return function(s,r,o,a,l,c,u){const h=new aV(s,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=he(n);G("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await ll(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Ai("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new W(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const o=he(s),a=Ra(o.serializer)+"/documents",l={documents:r.map(d=>Fc(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=ZL(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Oe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new km(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=ne.fromPath(i);this.mutations.push(new nT(s,this.precondition(s)))}),await async function(i,s){const r=he(i),o=Ra(r.serializer)+"/documents",a={writes:s.map(l=>uT(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ie();n=se.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new W(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?Yt.exists(!1):Yt.updateTime(n):Yt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new W(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Yt.updateTime(n)}return Yt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class EV{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.qa=i.maxAttempts,this.Ko=new $m(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new bV(this.datastore),n=this.Ka(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.$a(s)}))}).catch(i=>{this.$a(i)})})}Ka(e){try{const n=this.updateFunction(e);return!rl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!iT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=xt.UNAUTHENTICATED,this.clientId=DI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{G("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(G("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=zm(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await pT(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AV(t);G("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Zy(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Zy(e.remoteStore,r)),t._onlineComponents=e}function TV(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TV(n))throw n;Or("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new iv)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new iv);return t._offlineComponents}async function Qm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await sv(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await sv(t,new wV))),t._onlineComponents}function RV(t){return Qm(t).then(e=>e.syncEngine)}function CV(t){return Qm(t).then(e=>e.datastore)}async function Bc(t){const e=await Qm(t),n=e.eventManager;return n.onListen=lV.bind(null,e.syncEngine),n.onUnlisten=uV.bind(null,e.syncEngine),n}function SV(t,e,n={}){const i=new ni;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Gm({next:d=>{o.enqueueAndForget(()=>Hm(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Wm(zu(a.path),u,{includeMetadataChanges:!0,W_:!0});return jm(r,h)}(await Bc(t),t.asyncQueue,e,n,i)),i.promise}function kV(t,e,n={}){const i=new ni;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Gm({next:d=>{o.enqueueAndForget(()=>Hm(r,h)),d.fromCache&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Wm(a,u,{includeMetadataChanges:!0,W_:!0});return jm(r,h)}(await Bc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function PT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e,n){if(!n)throw new W(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PV(t,e,n,i){if(e===!0&&i===!0)throw new W(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!ne.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if(ne.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ym(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ym(t);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lv{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PT((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new YM;switch(i.type){case"firstParty":return new eL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=rv.get(n);i&&(G("ComponentProvider","Removing Datastore"),rv.delete(n),i.terminate())}(this),Promise.resolve()}}function xV(t,e,n,i={}){var s;const r=(t=gn(t,Xu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=xt.MOCK_USER;else{a=XS(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xt(c)}t._authCredentials=new XM(new xI(a,l))}}/**
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
 */class ul{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ul(this.firestore,e,this._query)}}class zt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Qi extends ul{constructor(e,n,i){super(e,n,zu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new ne(e))}withConverter(e){return new Qi(this.firestore,e,this._path)}}function DT(t,e,...n){if(t=ot(t),xT("collection","path",e),t instanceof Xu){const i=Ke.fromString(e,...n);return av(i),new Qi(t,null,i)}{if(!(t instanceof zt||t instanceof Qi))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ke.fromString(e,...n));return av(i),new Qi(t.firestore,null,i)}}function Wn(t,e,...n){if(t=ot(t),arguments.length===1&&(e=DI.V()),xT("doc","path",e),t instanceof Xu){const i=Ke.fromString(e,...n);return ov(i),new zt(t,null,new ne(i))}{if(!(t instanceof zt||t instanceof Qi))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ke.fromString(e,...n));return ov(i),new zt(t.firestore,t instanceof Qi?t.converter:null,new ne(i))}}/**
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
 */class DV{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new $m(this,"async_queue_retry"),this.Xa=()=>{const n=Wh();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Wh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new ni;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!sl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Ai("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=Bm.createAndSchedule(this,e,n,i,r=>this.ru(r));return this.ja.push(s),s}eu(){this.Ha&&ie()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function cv(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class is extends Xu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new DV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NT(this),this._firestoreClient.terminate()}}function NV(t,e){const n=typeof t=="object"?t:_u(),i=typeof t=="string"?t:e||"(default)",s=qs(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=YS("firestore");r&&xV(s,...r)}return s}function hl(t){return t._firestoreClient||NT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NT(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new dL(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,PT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new IV(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(Ht.fromBase64String(e))}catch(n){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class co{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV=/^__.*__$/;class MV{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}class OT{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ls(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Zu{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.Pu(e),s}Iu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return zc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(MT(this.uu)&&OV.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class LV{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Gu(e)}Ru(e,n,i,s=!1){return new Zu({uu:e,methodName:n,Au:i,path:$t.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xm(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new LV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LT(t,e,n,i,s,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,s);Jm("Data must be an object, but it was:",o,i);const a=UT(i,o);let l,c;if(r.merge)l=new fn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=vf(e,h,n);if(!o.contains(d))throw new W(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zT(u,d)||u.push(d)}l=new fn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new MV(new Qt(a),l,c)}class eh extends co{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}function $T(t,e,n){return new Zu({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class $V extends co{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=$T(this,e,!0),i=this.Vu.map(r=>uo(r,n)),s=new Vr(i);return new Sm(e.path,s)}isEqual(e){return this===e}}class VV extends co{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=$T(this,e,!0),i=this.Vu.map(r=>uo(r,n)),s=new Fr(i);return new Sm(e.path,s)}isEqual(e){return this===e}}class FV extends co{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Aa(e.serializer,QI(e.serializer,this.mu));return new Sm(e.path,n)}isEqual(e){return this===e}}function VT(t,e,n,i){const s=t.Ru(1,e,n);Jm("Data must be an object, but it was:",s,i);const r=[],o=Qt.empty();Xs(i,(l,c)=>{const u=Zm(e,l,n);c=ot(c);const h=s.Iu(u);if(c instanceof eh)r.push(u);else{const d=uo(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new fn(r);return new OT(o,a,s.fieldTransforms)}function FT(t,e,n,i,s,r){const o=t.Ru(1,e,n),a=[vf(e,i,n)],l=[s];if(r.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(vf(e,r[d])),l.push(r[d+1]);const c=[],u=Qt.empty();for(let d=a.length-1;d>=0;--d)if(!zT(c,a[d])){const f=a[d];let m=l[d];m=ot(m);const y=o.Iu(f);if(m instanceof eh)c.push(f);else{const v=uo(m,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new fn(c);return new OT(u,h,o.fieldTransforms)}function uo(t,e){if(BT(t=ot(t)))return Jm("Unsupported field value:",e,t),UT(t,e);if(t instanceof co)return function(i,s){if(!MT(s.uu))throw s.Eu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=uo(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=ot(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return QI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=rt.fromDate(i);return{timestampValue:Vc(s.serializer,r)}}if(i instanceof rt){const r=new rt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Vc(s.serializer,r)}}if(i instanceof Ju)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Fs)return{bytesValue:aT(s.serializer,i._byteString)};if(i instanceof zt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Nm(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Eu(`Unsupported field value: ${Ym(i)}`)}(t,e)}function UT(t,e){const n={};return NI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(i,s)=>{const r=uo(s,e.lu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function BT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Ju||t instanceof Fs||t instanceof zt||t instanceof co)}function Jm(t,e,n){if(!BT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Ym(n);throw i==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function vf(t,e,n){if((e=ot(e))instanceof dl)return e._internalPath;if(typeof e=="string")return Zm(t,e);throw zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const UV=new RegExp("[~\\*/\\[\\]]");function Zm(t,e,n){if(e.search(UV)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dl(...e.split("."))._internalPath}catch{throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new W(k.INVALID_ARGUMENT,a+t+l)}function zT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jc{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BV extends jc{data(){return super.data()}}function jT(t,e){return typeof e=="string"?Zm(t,e):e instanceof dl?e._internalPath:e._delegate._internalPath}/**
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
 */function HT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qT{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Xs(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Ju(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Tm(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=ts(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ke.fromString(e);Oe(fT(i));const s=new Ia(i.get(1),i.get(3)),r=new ne(i.popFirst(5));return s.isEqual(n)||Ai(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function WT(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class zV extends qT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}/**
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
 */class pr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eg extends jc{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(jT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ec extends eg{data(e={}){return super.data(e)}}class KT{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new pr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ec(this._firestore,this._userDataWriter,i.key,i,new pr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ec(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new ec(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:jV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function th(t){t=gn(t,zt);const e=gn(t.firestore,is);return SV(hl(e),t._key).then(n=>QT(e,t,n))}class nh extends qT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function HV(t){t=gn(t,ul);const e=gn(t.firestore,is),n=hl(e),i=new nh(e);return HT(t._query),kV(n,t._query).then(s=>new KT(e,i,t,s))}function uv(t,e,n){t=gn(t,zt);const i=gn(t.firestore,is),s=WT(t.converter,e,n);return GT(i,[LT(Xm(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yt.none())])}function qV(t,e,n,...i){t=gn(t,zt);const s=gn(t.firestore,is),r=Xm(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof dl?FT(r,"updateDoc",t._key,e,n,i):VT(r,"updateDoc",t._key,e),GT(s,[o.toMutation(t._key,Yt.exists(!0))])}function tg(t,...e){var n,i,s;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cv(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(cv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof zt)c=gn(t.firestore,is),u=zu(t._key.path),l={next:h=>{e[o]&&e[o](QT(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gn(t,ul);c=gn(h.firestore,is),u=h._query;const d=new nh(c);l={next:f=>{e[o]&&e[o](new KT(c,d,h,f))},error:e[o+1],complete:e[o+2]},HT(t._query)}return function(d,f,m,y){const v=new Gm(y),b=new Wm(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>jm(await Bc(d),b)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Hm(await Bc(d),b))}}(hl(c),u,a,l)}function GT(t,e){return function(i,s){const r=new ni;return i.asyncQueue.enqueueAndForget(async()=>hV(await RV(i),s,r)),r.promise}(hl(t),e)}function QT(t,e,n){const i=n.docs.get(e._key),s=new nh(t);return new eg(t,s,e._key,i,new pr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const WV={maxAttempts:5};function Eo(t,e){if((t=ot(t)).firestore!==e)throw new W(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class KV extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=Xm(n)}get(n){const i=Eo(n,this._firestore),s=new zV(this._firestore);return this._transaction.lookup([i._key]).then(r=>{if(!r||r.length!==1)return ie();const o=r[0];if(o.isFoundDocument())return new jc(this._firestore,s,o.key,o,i.converter);if(o.isNoDocument())return new jc(this._firestore,s,i._key,null,i.converter);throw ie()})}set(n,i,s){const r=Eo(n,this._firestore),o=WT(r.converter,i,s),a=LT(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,s);return this._transaction.set(r._key,a),this}update(n,i,s,...r){const o=Eo(n,this._firestore);let a;return a=typeof(i=ot(i))=="string"||i instanceof dl?FT(this._dataReader,"Transaction.update",o._key,i,s,r):VT(this._dataReader,"Transaction.update",o._key,i),this._transaction.update(o._key,a),this}delete(n){const i=Eo(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Eo(e,this._firestore),i=new nh(this._firestore);return super.get(e).then(s=>new eg(this._firestore,i,n._key,s._document,new pr(!1,!1),n.converter))}}function GV(t,e,n){t=gn(t,is);const i=Object.assign(Object.assign({},WV),n);return function(r){if(r.maxAttempts<1)throw new W(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(r,o,a){const l=new ni;return r.asyncQueue.enqueueAndForget(async()=>{const c=await CV(r);new EV(r.asyncQueue,c,a,o,l).run()}),l.promise}(hl(t),s=>e(new KV(t,s)),i)}function QV(...t){return new $V("arrayUnion",t)}function YV(...t){return new VV("arrayRemove",t)}function XV(t){return new FV("increment",t)}(function(e,n=!0){(function(s){oo=s})(rs),ln(new Jt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new is(new JM(i.getProvider("auth-internal")),new nL(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Tt(ky,"4.1.0",e),Tt(ky,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebasestorage.googleapis.com",JV="storageBucket",ZV=2*60*1e3,eF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends In{constructor(e,n,i=0){super(Gh(e),`Firebase Storage: ${n} (${Gh(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ci.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var li;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(li||(li={}));function Gh(t){return"storage/"+t}function tF(){const t="An unknown error occurred, please check the error payload for server response.";return new ci(li.UNKNOWN,t)}function nF(){return new ci(li.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iF(){return new ci(li.CANCELED,"User canceled the upload/download.")}function sF(t){return new ci(li.INVALID_URL,"Invalid URL '"+t+"'.")}function rF(t){return new ci(li.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hv(t){return new ci(li.INVALID_ARGUMENT,t)}function XT(){return new ci(li.APP_DELETED,"The Firebase app was deleted.")}function oF(t){return new ci(li.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=xn.makeFromUrl(e,n)}catch{return new xn(e,"")}if(i.path==="")return i;throw rF(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},y=n===YT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",b=new RegExp(`^https?://${y}/${s}/${v}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<C.length;E++){const x=C[E],H=x.regex.exec(e);if(H){const J=H[x.indices.bucket];let Y=H[x.indices.path];Y||(Y=""),i=new xn(J,Y),x.postModify(i);break}}if(i==null)throw sF(e);return i}}class aF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...b){if(c){d();return}if(v){d(),u.call(null,v,...b);return}if(l()||o){d(),u.call(null,v,...b);return}i<64&&(i*=2);let C;a===1?(a=2,C=0):C=(i+Math.random())*1e3,h(C)}let m=!1;function y(v){m||(m=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function cF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uF(t){return t!==void 0}function dv(t,e,n,i){if(i<e)throw hv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw hv(`Invalid value for '${t}'. Expected ${n} or less.`)}function hF(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hc||(Hc={}));/**
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
 */function dF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ul(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Hc.NO_ERROR,l=r.getStatus();if(!a||dF(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Hc.ABORT;i(!1,new Ul(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Ul(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uF(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=tF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?XT():iF();o(l)}else{const l=nF();o(l)}};this.canceled_?n(!1,new Ul(!1,null,!0)):this.backoffId_=lF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ul{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function pF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _F(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yF(t,e,n,i,s,r,o=!0){const a=hF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gF(c,e),pF(c,n),mF(c,r),_F(c,i),new fF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class qc{constructor(e,n){this._service=e,n instanceof xn?this._location=n:this._location=xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qc(e,n)}get root(){const e=new xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wF(this._location.path)}get storage(){return this._service}get parent(){const e=vF(this._location.path);if(e===null)return null;const n=new xn(this._location.bucket,e);return new qc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oF(e)}}function fv(t,e){const n=e==null?void 0:e[JV];return n==null?null:xn.makeFromBucketSpec(n,t)}class bF{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=YT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZV,this._maxUploadRetryTime=eF,this._requests=new Set,s!=null?this._bucket=xn.makeFromBucketSpec(s,this._host):this._bucket=fv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xn.makeFromBucketSpec(this._url,e):this._bucket=fv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new aF(XT());{const o=yF(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const pv="@firebase/storage",mv="0.11.2";/**
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
 */const EF="storage";function IF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bF(n,i,s,e,rs)}function TF(){ln(new Jt(EF,IF,"PUBLIC").setMultipleInstances(!0)),Tt(pv,mv,""),Tt(pv,mv,"esm2017")}TF();const Qh=new WeakMap;function JT(t,e){return Qh.has(e)||Qh.set(e,t||{f:{},r:{},s:{},u:{}}),Qh.get(e)}function AF(t,e,n,i){if(!t)return n;const[s,r]=ZT(t);if(!s)return n;const o=JT(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function RF(t,e,n,i){if(!t)return;const[s,r]=ZT(t);if(!s)return;const o=JT(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Kn),a}function ZT(t){return Y1(t)||X1(t)?["f",t.path]:J1(t)?["r",t.toString()]:Z1(t)?["s",t.toString()]:[]}const Yh=new WeakMap;function CF(t,e,n){const i=za();Yh.has(i)||Yh.set(i,new Map);const s=Yh.get(i),r=RF(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):Kn}const SF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function wf(t,e,n,i){if(!G1(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof rt||m instanceof Ju)h[f]=m;else if(xp(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Ws(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",s),s}const ng={reset:!1,wait:!0,maxRefDepth:2,converter:SF,snapshotOptions:{serverTimestamps:"estimate"}};function Wc(t){for(const e in t)t[e].unsub()}function bf(t,e,n,i,s,r,o,a,l){const[c,u]=wf(i.data(t.snapshotOptions),Pp(e,n),s,t);r.set(e,n,c),Ef(t,e,n,s,u,r,o,a,l)}function kF({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=Kn;return a.once?th(t).then(u=>{u.exists()?bf(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=tg(t,u=>{u.exists()?bf(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Wc(l)}}function Ef(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=i[y],b=s[y],I=`${n}.${y}`;if(f[I]=!0,v)if(v.path!==b.path)v.unsub();else return;i[y]={data:()=>Pp(e,I),unsub:kF({ref:b,target:e,path:I,depth:o,ops:r,resolve:m.bind(null,I),reject:l},t),path:b.path}})}function PF(t,e,n,i,s,r){const o=Object.assign({},ng,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Fe(c?[]:t.value);c||n.set(t,h,[]);const f=i;let m,y=Kn;const v=[],b={added:({newIndex:C,doc:E})=>{v.splice(C,0,Object.create(null));const x=v[C],[H,J]=wf(E.data(l),void 0,x,o);n.add(j(d),C,H),Ef(o,d,`${h}.${C}`,x,J,n,0,i.bind(null,E),s)},modified:({oldIndex:C,newIndex:E,doc:x})=>{const H=j(d),J=v[C],Y=H[C],[le,Ae]=wf(x.data(l),Y,J,o);v.splice(E,0,J),n.remove(H,C),n.add(H,E,le),Ef(o,d,`${h}.${E}`,J,Ae,n,0,i,s)},removed:({oldIndex:C})=>{const E=j(d);n.remove(E,C),Wc(v.splice(C,1)[0])}};function I(C){const E=C.docChanges(a);if(!m&&E.length){m=!0;let x=0;const H=E.length,J=Object.create(null);for(let Y=0;Y<H;Y++)J[E[Y].doc.id]=!0;i=Y=>{Y&&Y.id in J&&++x>=H&&(c&&(n.set(t,h,j(d)),d=t),f(j(d)),i=Kn)}}E.forEach(x=>{b[x.type](x)}),E.length||(c&&(n.set(t,h,j(d)),d=t),i(j(d)))}return u?HV(e).then(I).catch(s):y=tg(e,I,s),C=>{if(y(),C){const E=typeof C=="function"?C():[];n.set(t,h,E)}v.forEach(Wc)}}function xF(t,e,n,i,s,r){const o=Object.assign({},ng,r),a="value",l=Object.create(null);i=eD(i,()=>Pp(t,a));let c=Kn;function u(h){h.exists()?bf(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?th(e).then(u).catch(s):c=tg(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Wc(l)}}const gv=Symbol();function eA(t,e){let n=Kn;const i=Object.assign({},ng,e),s=j(t),r=i.target||Fe();nD()&&(i.once=!0);const o=AF(s,i.ssrKey,gv,za()),a=o!==gv;a&&(r.value=o);let l=!a;const c=Fe(!1),u=Fe(),h=$w(),d=tp();let f=Kn;function m(){let b=j(t);const I=new Promise((C,E)=>{if(n(i.reset),!b)return n=Kn,C(null);c.value=l,l=!0,b.converter||(b=b.withConverter(i.converter)),n=(xp(b)?xF:PF)(r,b,DF,C,E,i)}).catch(C=>(h.value===I&&(u.value=C),Promise.reject(C))).finally(()=>{h.value===I&&(c.value=!1)});h.value=I}let y=Kn;Xe(t)&&(y=qi(t,m)),m(),s&&(f=CF(h.value,s,i.ssrKey)),cb()&&Yw(()=>h.value),d&&bw(v);function v(b=i.reset){y(),f(),n(b)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const DF={set:(t,e,n)=>W1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function tA(t,e){return eA(t,{target:Fe([]),...e})}function nA(t,e){return eA(t,e)}function NF(t){return(e,n)=>{const i=iD(e,n).run(()=>Fe(t));gE.set(e,i),sD(i,e)}}function OF(t){return q1?dE(za(t)):null}function MF(t,{firebaseApp:e,modules:n=[]}){t.provide(mE,e);for(const i of n)i(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let iA;const ih=t=>iA=t,sA=Symbol();function If(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wo||(Wo={}));function LF(){const t=ep(!0),e=t.run(()=>Fe({}));let n=[],i=[];const s=lu({install(r){ih(s),s._a=r,r.provide(sA,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!y1?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const rA=()=>{};function _v(t,e,n,i=rA){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&tp()&&bw(s),s}function rr(t,...e){t.slice().forEach(n=>{n(...e)})}const $F=t=>t();function Tf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];If(s)&&If(i)&&t.hasOwnProperty(n)&&!Xe(i)&&!ji(i)?t[n]=Tf(s,i):t[n]=i}return t}const VF=Symbol();function FF(t){return!If(t)||!t.hasOwnProperty(VF)}const{assign:Oi}=Object;function UF(t){return!!(Xe(t)&&t.effect)}function BF(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=cC(n.state.value[t]);return Oi(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=lu(Re(()=>{ih(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=oA(t,c,e,n,i,!0),l}function oA(t,e,n={},i,s,r){let o;const a=Oi({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const m=i.state.value[t];!r&&!m&&(i.state.value[t]={}),Fe({});let y;function v(Y){let le;c=u=!1,typeof Y=="function"?(Y(i.state.value[t]),le={type:Wo.patchFunction,storeId:t,events:f}):(Tf(i.state.value[t],Y),le={type:Wo.patchObject,payload:Y,storeId:t,events:f});const Ae=y=Symbol();up().then(()=>{y===Ae&&(c=!0)}),u=!0,rr(h,le,i.state.value[t])}const b=r?function(){const{state:le}=n,Ae=le?le():{};this.$patch(ht=>{Oi(ht,Ae)})}:rA;function I(){o.stop(),h=[],d=[],i._s.delete(t)}function C(Y,le){return function(){ih(i);const Ae=Array.from(arguments),ht=[],Ct=[];function St(we){ht.push(we)}function ui(we){Ct.push(we)}rr(d,{args:Ae,name:Y,store:x,after:St,onError:ui});let tn;try{tn=le.apply(this&&this.$id===t?this:x,Ae)}catch(we){throw rr(Ct,we),we}return tn instanceof Promise?tn.then(we=>(rr(ht,we),we)).catch(we=>(rr(Ct,we),Promise.reject(we))):(rr(ht,tn),tn)}}const E={_p:i,$id:t,$onAction:_v.bind(null,d),$patch:v,$reset:b,$subscribe(Y,le={}){const Ae=_v(h,Y,le.detached,()=>ht()),ht=o.run(()=>qi(()=>i.state.value[t],Ct=>{(le.flush==="sync"?u:c)&&Y({storeId:t,type:Wo.direct,events:f},Ct)},Oi({},l,le)));return Ae},$dispose:I},x=Yr(E);i._s.set(t,x);const H=i._a&&i._a.runWithContext||$F,J=i._e.run(()=>(o=ep(),H(()=>o.run(e))));for(const Y in J){const le=J[Y];if(Xe(le)&&!UF(le)||ji(le))r||(m&&FF(le)&&(Xe(le)?le.value=m[Y]:Tf(le,m[Y])),i.state.value[t][Y]=le);else if(typeof le=="function"){const Ae=C(Y,le);J[Y]=Ae,a.actions[Y]=le}}return Oi(x,J),Oi(Ie(x),J),Object.defineProperty(x,"$state",{get:()=>i.state.value[t],set:Y=>{v(le=>{Oi(le,Y)})}}),i._p.forEach(Y=>{Oi(x,o.run(()=>Y({store:x,app:i._a,pinia:i,options:a})))}),m&&r&&n.hydrate&&n.hydrate(x.$state,m),c=!0,u=!0,x}function zF(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=KC();return a=a||(c?sn(sA,null):null),a&&ih(a),a=iA,a._s.has(i)||(r?oA(i,e,s,a):BF(i,s,a)),a._s.get(i)}return o.$id=i,o}const jF=(t,e)=>e.some(n=>t instanceof n);let yv,vv;function HF(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qF(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aA=new WeakMap,Af=new WeakMap,lA=new WeakMap,Xh=new WeakMap,ig=new WeakMap;function WF(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Yi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aA.set(n,t)}).catch(()=>{}),ig.set(e,t),e}function KF(t){if(Af.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Af.set(t,e)}let Rf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GF(t){Rf=t(Rf)}function QF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Jh(this),e,...n);return lA.set(i,e.sort?e.sort():[e]),Yi(i)}:qF().includes(t)?function(...e){return t.apply(Jh(this),e),Yi(aA.get(this))}:function(...e){return Yi(t.apply(Jh(this),e))}}function YF(t){return typeof t=="function"?QF(t):(t instanceof IDBTransaction&&KF(t),jF(t,HF())?new Proxy(t,Rf):t)}function Yi(t){if(t instanceof IDBRequest)return WF(t);if(Xh.has(t))return Xh.get(t);const e=YF(t);return e!==t&&(Xh.set(t,e),ig.set(e,t)),e}const Jh=t=>ig.get(t);function XF(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Yi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Yi(o.result),l.oldVersion,l.newVersion,Yi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const JF=["get","getKey","getAll","getAllKeys","count"],ZF=["put","add","delete","clear"],Zh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ZF.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||JF.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Zh.set(e,r),r}GF(t=>({...t,get:(e,n,i)=>wv(e,n)||t.get(e,n,i),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));const cA="@firebase/installations",sg="0.6.4";/**
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
 */const uA=1e4,hA=`w:${sg}`,dA="FIS_v2",e2="https://firebaseinstallations.googleapis.com/v1",t2=60*60*1e3,n2="installations",i2="Installations";/**
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
 */const s2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new ss(n2,i2,s2);function fA(t){return t instanceof In&&t.code.includes("request-failed")}/**
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
 */function pA({projectId:t}){return`${e2}/projects/${t}/installations`}function mA(t){return{token:t.token,requestStatus:2,expiresIn:o2(t.expiresIn),creationTime:Date.now()}}async function gA(t,e){const i=(await e.json()).error;return Us.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _A({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function r2(t,{refreshToken:e}){const n=_A(t);return n.append("Authorization",a2(e)),n}async function yA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function o2(t){return Number(t.replace("s","000"))}function a2(t){return`${dA} ${t}`}/**
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
 */async function l2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=pA(t),s=_A(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:dA,appId:t.appId,sdkVersion:hA},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yA(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:mA(c.authToken)}}else throw await gA("Create Installation",l)}/**
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
 */function vA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function c2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const u2=/^[cdef][\w-]{21}$/,Cf="";function h2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=d2(t);return u2.test(n)?n:Cf}catch{return Cf}}function d2(t){return c2(t).substr(0,22)}/**
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
 */function sh(t){return`${t.appName}!${t.appId}`}/**
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
 */const wA=new Map;function bA(t,e){const n=sh(t);EA(n,e),f2(n,e)}function EA(t,e){const n=wA.get(t);if(n)for(const i of n)i(e)}function f2(t,e){const n=p2();n&&n.postMessage({key:t,fid:e}),m2()}let Is=null;function p2(){return!Is&&"BroadcastChannel"in self&&(Is=new BroadcastChannel("[Firebase] FID Change"),Is.onmessage=t=>{EA(t.data.key,t.data.fid)}),Is}function m2(){wA.size===0&&Is&&(Is.close(),Is=null)}/**
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
 */const g2="firebase-installations-database",_2=1,Bs="firebase-installations-store";let ed=null;function rg(){return ed||(ed=XF(g2,_2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bs)}}})),ed}async function Kc(t,e){const n=sh(t),s=(await rg()).transaction(Bs,"readwrite"),r=s.objectStore(Bs),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&bA(t,e.fid),e}async function IA(t){const e=sh(t),i=(await rg()).transaction(Bs,"readwrite");await i.objectStore(Bs).delete(e),await i.done}async function rh(t,e){const n=sh(t),s=(await rg()).transaction(Bs,"readwrite"),r=s.objectStore(Bs),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&bA(t,a.fid),a}/**
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
 */async function og(t){let e;const n=await rh(t.appConfig,i=>{const s=y2(i),r=v2(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Cf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function y2(t){const e=t||{fid:h2(),registrationStatus:0};return TA(e)}function v2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Us.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=w2(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b2(t)}:{installationEntry:e}}async function w2(t,e){try{const n=await l2(t,e);return Kc(t.appConfig,n)}catch(n){throw fA(n)&&n.customData.serverCode===409?await IA(t.appConfig):await Kc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b2(t){let e=await bv(t.appConfig);for(;e.registrationStatus===1;)await vA(100),e=await bv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await og(t);return i||n}return e}function bv(t){return rh(t,e=>{if(!e)throw Us.create("installation-not-found");return TA(e)})}function TA(t){return E2(t)?{fid:t.fid,registrationStatus:0}:t}function E2(t){return t.registrationStatus===1&&t.registrationTime+uA<Date.now()}/**
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
 */async function I2({appConfig:t,heartbeatServiceProvider:e},n){const i=T2(t,n),s=r2(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:hA,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yA(()=>fetch(i,a));if(l.ok){const c=await l.json();return mA(c)}else throw await gA("Generate Auth Token",l)}function T2(t,{fid:e}){return`${pA(t)}/${e}/authTokens:generate`}/**
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
 */async function ag(t,e=!1){let n;const i=await rh(t.appConfig,r=>{if(!AA(r))throw Us.create("not-registered");const o=r.authToken;if(!e&&C2(o))return r;if(o.requestStatus===1)return n=A2(t,e),r;{if(!navigator.onLine)throw Us.create("app-offline");const a=k2(r);return n=R2(t,a),a}});return n?await n:i.authToken}async function A2(t,e){let n=await Ev(t.appConfig);for(;n.authToken.requestStatus===1;)await vA(100),n=await Ev(t.appConfig);const i=n.authToken;return i.requestStatus===0?ag(t,e):i}function Ev(t){return rh(t,e=>{if(!AA(e))throw Us.create("not-registered");const n=e.authToken;return P2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function R2(t,e){try{const n=await I2(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Kc(t.appConfig,i),n}catch(n){if(fA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IA(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kc(t.appConfig,i)}throw n}}function AA(t){return t!==void 0&&t.registrationStatus===2}function C2(t){return t.requestStatus===2&&!S2(t)}function S2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+t2}function k2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function P2(t){return t.requestStatus===1&&t.requestTime+uA<Date.now()}/**
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
 */async function x2(t){const e=t,{installationEntry:n,registrationPromise:i}=await og(e);return i?i.catch(console.error):ag(e).catch(console.error),n.fid}/**
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
 */async function D2(t,e=!1){const n=t;return await N2(n),(await ag(n,e)).token}async function N2(t){const{registrationPromise:e}=await og(t);e&&await e}/**
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
 */function O2(t){if(!t||!t.options)throw td("App Configuration");if(!t.name)throw td("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw td(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function td(t){return Us.create("missing-app-config-values",{valueName:t})}/**
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
 */const RA="installations",M2="installations-internal",L2=t=>{const e=t.getProvider("app").getImmediate(),n=O2(e),i=qs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$2=t=>{const e=t.getProvider("app").getImmediate(),n=qs(e,RA).getImmediate();return{getId:()=>x2(n),getToken:s=>D2(n,s)}};function V2(){ln(new Jt(RA,L2,"PUBLIC")),ln(new Jt(M2,$2,"PRIVATE"))}V2();Tt(cA,sg);Tt(cA,sg,"esm2017");/**
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
 */const Gc="analytics",F2="firebase_id",U2="origin",B2=60*1e3,z2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lg="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new Zr("@firebase/analytics");/**
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
 */const j2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_n=new ss("analytics","Analytics",j2);/**
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
 */function H2(t){if(!t.startsWith(lg)){const e=_n.create("invalid-gtag-resource",{gtagURL:t});return rn.warn(e.message),""}return t}function CA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function q2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function W2(t,e){const n=q2("firebase-js-sdk-policy",{createScriptURL:H2}),i=document.createElement("script"),s=`${lg}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function K2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function G2(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await CA(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){rn.error(a)}t("config",s,r)}async function Q2(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await CA(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){rn.error(r)}}function Y2(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Q2(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await G2(t,e,n,i,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){rn.error(a)}}return s}function X2(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Y2(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function J2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lg)&&n.src.includes(t))return n;return null}/**
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
 */const Z2=30,eU=1e3;class tU{constructor(e={},n=eU){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const SA=new tU;function nU(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function iU(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:nU(i)},r=z2.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw _n.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function sU(t,e=SA,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw _n.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw _n.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new aU;return setTimeout(async()=>{a.abort()},n!==void 0?n:B2),kA({appId:i,apiKey:s,measurementId:r},o,a,e)}async function kA(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=SA){var r;const{appId:o,measurementId:a}=t;try{await rU(i,e)}catch(l){if(a)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await iU(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!oU(c)){if(s.deleteThrottleMetadata(o),a)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?s_(n,s.intervalMillis,Z2):s_(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),rn.debug(`Calling attemptFetch again in ${u} millis`),kA(t,h,i,s)}}function rU(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(_n.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oU(t){if(!(t instanceof In)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class aU{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lU(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function cU(){if(wp())try{await Ib()}catch(t){return rn.warn(_n.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return rn.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uU(t,e,n,i,s,r,o){var a;const l=sU(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>rn.error(f)),e.push(l);const c=cU().then(f=>{if(f)return i.getId()}),[u,h]=await Promise.all([l,c]);J2(r)||W2(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[U2]="firebase",d.update=!0,h!=null&&(d[F2]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class hU{constructor(e){this.app=e}_delete(){return delete Ko[this.app.options.appId],Promise.resolve()}}let Ko={},Iv=[];const Tv={};let nd="dataLayer",dU="gtag",Av,PA,Rv=!1;function fU(){const t=[];if(wb()&&t.push("This is a browser extension environment."),ZS()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=_n.create("invalid-analytics-context",{errorInfo:e});rn.warn(n.message)}}function pU(t,e,n){fU();const i=t.options.appId;if(!i)throw _n.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _n.create("no-api-key");if(Ko[i]!=null)throw _n.create("already-exists",{id:i});if(!Rv){K2(nd);const{wrappedGtag:r,gtagCore:o}=X2(Ko,Iv,Tv,nd,dU);PA=r,Av=o,Rv=!0}return Ko[i]=uU(t,Iv,Tv,e,Av,nd,n),new hU(t)}function mU(t=_u()){t=ot(t);const e=qs(t,Gc);return e.isInitialized()?e.getImmediate():gU(t)}function gU(t,e={}){const n=qs(t,Gc);if(n.isInitialized()){const s=n.getImmediate();if(aa(e,n.getOptions()))return s;throw _n.create("already-initialized")}return n.initialize({options:e})}function _U(t,e,n,i){t=ot(t),lU(PA,Ko[t.app.options.appId],e,n,i).catch(s=>rn.error(s))}const Cv="@firebase/analytics",Sv="0.10.0";function yU(){ln(new Jt(Gc,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return pU(i,s,n)},"PUBLIC")),ln(new Jt("analytics-internal",t,"PRIVATE")),Tt(Cv,Sv),Tt(Cv,Sv,"esm2017");function t(e){try{const n=e.getProvider(Gc).getImmediate();return{logEvent:(i,s,r)=>_U(n,i,s,r)}}catch(n){throw _n.create("interop-component-reg-failed",{reason:n})}}}yU();const cg=Cb({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),dn=NV(cg);mU(cg);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof window<"u";function vU(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function id(t,e){const n={};for(const i in e){const s=e[i];n[i]=$n(s)?s.map(t):t(s)}return n}const Go=()=>{},$n=Array.isArray,wU=/\/$/,bU=t=>t.replace(wU,"");function sd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=AU(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function EU(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kv(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function IU(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&zr(e.matched[i],n.matched[s])&&xA(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xA(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TU(t[n],e[n]))return!1;return!0}function TU(t,e){return $n(t)?Pv(t,e):$n(e)?Pv(e,t):t===e}function Pv(t,e){return $n(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function AU(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ca;(function(t){t.pop="pop",t.push="push"})(Ca||(Ca={}));var Qo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qo||(Qo={}));function RU(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bU(t)}const CU=/^[^#]+#/;function SU(t,e){return t.replace(CU,"#")+e}function kU(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const oh=()=>({left:window.pageXOffset,top:window.pageYOffset});function PU(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kU(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xv(t,e){return(history.state?history.state.position-e:-1)+t}const Sf=new Map;function xU(t,e){Sf.set(t,e)}function DU(t){const e=Sf.get(t);return Sf.delete(t),e}let NU=()=>location.protocol+"//"+location.host;function DA(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),kv(l,"")}return kv(n,t)+i+s}function OU(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=DA(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else i(f);s.forEach(b=>{b(n.value,m,{delta:v,type:Ca.pop,direction:v?v>0?Qo.forward:Qo.back:Qo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ne({},d.state,{scroll:oh()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Dv(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?oh():null}}function MU(t){const{history:e,location:n}=window,i={value:DA(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:NU()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ne({},e.state,Dv(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ne({},s.value,e.state,{forward:l,scroll:oh()});r(u.current,u,!0);const h=Ne({},Dv(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function LU(t){t=RU(t);const e=MU(t),n=OU(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ne({location:"",base:t,go:i,createHref:SU.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $U(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),LU(t)}function VU(t){return typeof t=="string"||t&&typeof t=="object"}function NA(t){return typeof t=="string"||typeof t=="symbol"}const Ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},OA=Symbol("");var Nv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nv||(Nv={}));function jr(t,e){return Ne(new Error,{type:t,[OA]:!0},e)}function di(t,e){return t instanceof Error&&OA in t&&(e==null||!!(t.type&e))}const Ov="[^/]+?",FU={sensitive:!1,strict:!1,start:!0,end:!0},UU=/[.+*?^${}()[\]/\\]/g;function BU(t,e){const n=Ne({},FU,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(UU,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:b}=d;r.push({name:m,repeatable:y,optional:v});const I=b||Ov;if(I!==Ov){f+=10;try{new RegExp(`(${I})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${I}): `+E.message)}}let C=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(C=v&&c.length<2?`(?:/${C})`:"/"+C),v&&(C+="?"),s+=C,f+=20,v&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,b=m in c?c[m]:"";if($n(b)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const I=$n(b)?b.join("/"):b;if(!I)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=I}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function zU(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jU(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=zU(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Mv(i))return 1;if(Mv(s))return-1}return s.length-i.length}function Mv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HU={type:0,value:""},qU=/[a-zA-Z0-9_]/;function WU(t){if(!t)return[[]];if(t==="/")return[[HU]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:qU.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function KU(t,e,n){const i=BU(WU(t.path),n),s=Ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GU(t,e){const n=[],i=new Map;e=Vv({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,m=QU(u);m.aliasOf=d&&d.record;const y=Vv(e,u),v=[m];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of C)v.push(Ne({},m,{components:d?d.record.components:m.components,path:E,aliasOf:d?d.record:m}))}let b,I;for(const C of v){const{path:E}=C;if(h&&E[0]!=="/"){const x=h.record.path,H=x[x.length-1]==="/"?"":"/";C.path=h.record.path+(E&&H+E)}if(b=KU(C,h,y),d?d.alias.push(b):(I=I||b,I!==b&&I.alias.push(b),f&&u.name&&!$v(b)&&o(u.name)),m.children){const x=m.children;for(let H=0;H<x.length;H++)r(x[H],b,d&&d.children[H])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return I?()=>{o(I)}:Go}function o(u){if(NA(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&jU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!MA(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$v(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw jr(1,{location:u});y=d.record.name,f=Ne(Lv(h.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&Lv(u.params,d.keys.map(I=>I.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(I=>I.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?i.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw jr(1,{location:u,currentLocation:h});y=d.record.name,f=Ne({},h.params,u.params),m=d.stringify(f)}const v=[];let b=d;for(;b;)v.unshift(b.record),b=b.parent;return{name:y,path:m,params:f,matched:v,meta:XU(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Lv(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function QU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function $v(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XU(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Vv(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function MA(t,e){return e.children.some(n=>n===t||MA(t,n))}const LA=/#/g,JU=/&/g,ZU=/\//g,e4=/=/g,t4=/\?/g,$A=/\+/g,n4=/%5B/g,i4=/%5D/g,VA=/%5E/g,s4=/%60/g,FA=/%7B/g,r4=/%7C/g,UA=/%7D/g,o4=/%20/g;function ug(t){return encodeURI(""+t).replace(r4,"|").replace(n4,"[").replace(i4,"]")}function a4(t){return ug(t).replace(FA,"{").replace(UA,"}").replace(VA,"^")}function kf(t){return ug(t).replace($A,"%2B").replace(o4,"+").replace(LA,"%23").replace(JU,"%26").replace(s4,"`").replace(FA,"{").replace(UA,"}").replace(VA,"^")}function l4(t){return kf(t).replace(e4,"%3D")}function c4(t){return ug(t).replace(LA,"%23").replace(t4,"%3F")}function u4(t){return t==null?"":c4(t).replace(ZU,"%2F")}function Qc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function h4(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace($A," "),o=r.indexOf("="),a=Qc(o<0?r:r.slice(0,o)),l=o<0?null:Qc(r.slice(o+1));if(a in e){let c=e[a];$n(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fv(t){let e="";for(let n in t){const i=t[n];if(n=l4(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}($n(i)?i.map(r=>r&&kf(r)):[i&&kf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function d4(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=$n(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const f4=Symbol(""),Uv=Symbol(""),ah=Symbol(""),hg=Symbol(""),Pf=Symbol("");function Io(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Li(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(jr(4,{from:n,to:e})):h instanceof Error?a(h):VU(h)?a(jr(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rd(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(p4(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Li(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=vU(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Li(d,n,i,r,o)()}))}}return s}function p4(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bv(t){const e=sn(ah),n=sn(hg),i=Re(()=>e.resolve(j(t.to))),s=Re(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zr.bind(null,u));if(d>-1)return d;const f=zv(l[c-2]);return c>1&&zv(u)===f&&h[h.length-1].path!==f?h.findIndex(zr.bind(null,l[c-2])):d}),r=Re(()=>s.value>-1&&y4(n.params,i.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&xA(n.params,i.value.params));function a(l={}){return _4(l)?e[j(t.replace)?"replace":"push"](j(t.to)).catch(Go):Promise.resolve()}return{route:i,href:Re(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const m4=Rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bv,setup(t,{slots:e}){const n=Yr(Bv(t)),{options:i}=sn(ah),s=Re(()=>({[jv(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[jv(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:db("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),g4=m4;function _4(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function y4(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!$n(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function zv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jv=(t,e,n)=>t??e??n,v4=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=sn(Pf),s=Re(()=>t.route||i.value),r=sn(Uv,0),o=Re(()=>{let c=j(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Re(()=>s.value.matched[o.value]);Hl(Uv,Re(()=>o.value+1)),Hl(f4,a),Hl(Pf,s);const l=Fe();return qi(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!zr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Hv(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=db(d,Ne({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Hv(n.default,{Component:v,route:c})||v}}});function Hv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BA=v4;function w4(t){const e=GU(t.routes,t),n=t.parseQuery||h4,i=t.stringifyQuery||Fv,s=t.history,r=Io(),o=Io(),a=Io(),l=$w(Ni);let c=Ni;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=id.bind(null,_=>""+_),h=id.bind(null,u4),d=id.bind(null,Qc);function f(_,T){let S,F;return NA(_)?(S=e.getRecordMatcher(_),F=T):F=_,e.addRoute(F,S)}function m(_){const T=e.getRecordMatcher(_);T&&e.removeRoute(T)}function y(){return e.getRoutes().map(_=>_.record)}function v(_){return!!e.getRecordMatcher(_)}function b(_,T){if(T=Ne({},T||l.value),typeof _=="string"){const w=sd(n,_,T.path),A=e.resolve({path:w.path},T),R=s.createHref(w.fullPath);return Ne(w,A,{params:d(A.params),hash:Qc(w.hash),redirectedFrom:void 0,href:R})}let S;if("path"in _)S=Ne({},_,{path:sd(n,_.path,T.path).path});else{const w=Ne({},_.params);for(const A in w)w[A]==null&&delete w[A];S=Ne({},_,{params:h(w)}),T.params=h(T.params)}const F=e.resolve(S,T),D=_.hash||"";F.params=u(d(F.params));const p=EU(i,Ne({},_,{hash:a4(D),path:F.path})),g=s.createHref(p);return Ne({fullPath:p,hash:D,query:i===Fv?d4(_.query):_.query||{}},F,{redirectedFrom:void 0,href:g})}function I(_){return typeof _=="string"?sd(n,_,l.value.path):Ne({},_)}function C(_,T){if(c!==_)return jr(8,{from:T,to:_})}function E(_){return J(_)}function x(_){return E(Ne(I(_),{replace:!0}))}function H(_){const T=_.matched[_.matched.length-1];if(T&&T.redirect){const{redirect:S}=T;let F=typeof S=="function"?S(_):S;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=I(F):{path:F},F.params={}),Ne({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function J(_,T){const S=c=b(_),F=l.value,D=_.state,p=_.force,g=_.replace===!0,w=H(S);if(w)return J(Ne(I(w),{state:typeof w=="object"?Ne({},D,w.state):D,force:p,replace:g}),T||S);const A=S;A.redirectedFrom=T;let R;return!p&&IU(i,F,S)&&(R=jr(16,{to:A,from:F}),vn(F,F,!0,!1)),(R?Promise.resolve(R):Ae(A,F)).catch(P=>di(P)?di(P,2)?P:An(P):Te(P,A,F)).then(P=>{if(P){if(di(P,2))return J(Ne({replace:g},I(P.to),{state:typeof P.to=="object"?Ne({},D,P.to.state):D,force:p}),T||A)}else P=Ct(A,F,!0,g,D);return ht(A,F,P),P})}function Y(_,T){const S=C(_,T);return S?Promise.reject(S):Promise.resolve()}function le(_){const T=Pi.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(_):_()}function Ae(_,T){let S;const[F,D,p]=b4(_,T);S=rd(F.reverse(),"beforeRouteLeave",_,T);for(const w of F)w.leaveGuards.forEach(A=>{S.push(Li(A,_,T))});const g=Y.bind(null,_,T);return S.push(g),Ze(S).then(()=>{S=[];for(const w of r.list())S.push(Li(w,_,T));return S.push(g),Ze(S)}).then(()=>{S=rd(D,"beforeRouteUpdate",_,T);for(const w of D)w.updateGuards.forEach(A=>{S.push(Li(A,_,T))});return S.push(g),Ze(S)}).then(()=>{S=[];for(const w of p)if(w.beforeEnter)if($n(w.beforeEnter))for(const A of w.beforeEnter)S.push(Li(A,_,T));else S.push(Li(w.beforeEnter,_,T));return S.push(g),Ze(S)}).then(()=>(_.matched.forEach(w=>w.enterCallbacks={}),S=rd(p,"beforeRouteEnter",_,T),S.push(g),Ze(S))).then(()=>{S=[];for(const w of o.list())S.push(Li(w,_,T));return S.push(g),Ze(S)}).catch(w=>di(w,8)?w:Promise.reject(w))}function ht(_,T,S){a.list().forEach(F=>le(()=>F(_,T,S)))}function Ct(_,T,S,F,D){const p=C(_,T);if(p)return p;const g=T===Ni,w=lr?history.state:{};S&&(F||g?s.replace(_.fullPath,Ne({scroll:g&&w&&w.scroll},D)):s.push(_.fullPath,D)),l.value=_,vn(_,T,S,g),An()}let St;function ui(){St||(St=s.listen((_,T,S)=>{if(!us.listening)return;const F=b(_),D=H(F);if(D){J(Ne(D,{replace:!0}),F).catch(Go);return}c=F;const p=l.value;lr&&xU(xv(p.fullPath,S.delta),oh()),Ae(F,p).catch(g=>di(g,12)?g:di(g,2)?(J(g.to,F).then(w=>{di(w,20)&&!S.delta&&S.type===Ca.pop&&s.go(-1,!1)}).catch(Go),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Te(g,F,p))).then(g=>{g=g||Ct(F,p,!1),g&&(S.delta&&!di(g,8)?s.go(-S.delta,!1):S.type===Ca.pop&&di(g,20)&&s.go(-1,!1)),ht(F,p,g)}).catch(Go)}))}let tn=Io(),we=Io(),De;function Te(_,T,S){An(_);const F=we.list();return F.length?F.forEach(D=>D(_,T,S)):console.error(_),Promise.reject(_)}function Tn(){return De&&l.value!==Ni?Promise.resolve():new Promise((_,T)=>{tn.add([_,T])})}function An(_){return De||(De=!_,ui(),tn.list().forEach(([T,S])=>_?S(_):T()),tn.reset()),_}function vn(_,T,S,F){const{scrollBehavior:D}=t;if(!lr||!D)return Promise.resolve();const p=!S&&DU(xv(_.fullPath,0))||(F||!S)&&history.state&&history.state.scroll||null;return up().then(()=>D(_,T,p)).then(g=>g&&PU(g)).catch(g=>Te(g,_,T))}const vt=_=>s.go(_);let hi;const Pi=new Set,us={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:b,options:t,push:E,replace:x,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:Tn,install(_){const T=this;_.component("RouterLink",g4),_.component("RouterView",BA),_.config.globalProperties.$router=T,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>j(l)}),lr&&!hi&&l.value===Ni&&(hi=!0,E(s.location).catch(D=>{}));const S={};for(const D in Ni)Object.defineProperty(S,D,{get:()=>l.value[D],enumerable:!0});_.provide(ah,T),_.provide(hg,Dw(S)),_.provide(Pf,l);const F=_.unmount;Pi.add(_),_.unmount=function(){Pi.delete(_),Pi.size<1&&(c=Ni,St&&St(),St=null,l.value=Ni,hi=!1,De=!1),F()}}};function Ze(_){return _.reduce((T,S)=>T.then(()=>le(S)),Promise.resolve())}return us}function b4(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>zr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>zr(c,l))||s.push(l))}return[n,i,s]}function E4(){return sn(ah)}function I4(){return sn(hg)}const zA=zF("settings",()=>({installEvent:Fe()})),T4=Rt({__name:"App",setup(t){const e=Ks(),n=E4(),i=I4();return qi(e,async(s,r)=>{if(!s&&r&&i.meta.requiresAuth)return n.push({name:"login"});if(s&&typeof i.query.redirect=="string")return n.push(i.query.redirect)}),window.addEventListener("beforeinstallprompt",s=>{zA().installEvent=s}),(s,r)=>(X(),si(j(BA)))}}),A4="modulepreload",R4=function(t){return"/"+t},qv={},C4=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=R4(r),r in qv)return;qv[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":A4,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function Q(t,e,n,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S4=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},k4=(t,e,n)=>{e.constructor.createProperty(n,t)};function Le(t){return(e,n)=>n!==void 0?k4(t,e,n):S4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function cs(t){return Le({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jA=({finisher:t,descriptor:e})=>(n,i)=>{var s;if(i===void 0){const r=(s=n.originalKey)!==null&&s!==void 0?s:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fn(t,e){return jA({descriptor:n=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var od;const P4=((od=window.HTMLSlotElement)===null||od===void 0?void 0:od.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function x4(t){const{slot:e,selector:n}=t??{};return jA({descriptor:i=>({get(){var s;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),a=o!=null?P4(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tc=window,dg=tc.ShadowRoot&&(tc.ShadyCSS===void 0||tc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fg=Symbol(),Wv=new WeakMap;let HA=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==fg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(dg&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Wv.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Wv.set(n,e))}return e}toString(){return this.cssText}};const D4=t=>new HA(typeof t=="string"?t:t+"",void 0,fg),en=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new HA(n,t,fg)},N4=(t,e)=>{dg?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),s=tc.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)})},Kv=dg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return D4(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ad;const Yc=window,Gv=Yc.trustedTypes,O4=Gv?Gv.emptyScript:"",Qv=Yc.reactiveElementPolyfillSupport,xf={toAttribute(t,e){switch(e){case Boolean:t=t?O4:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},qA=(t,e)=>e!==t&&(e==e||t==t),ld={attribute:!0,type:String,converter:xf,reflect:!1,hasChanged:qA},Df="finalized";let cr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const s=this._$Ep(i,n);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,n=ld){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(s){const r=this[e];this[n]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ld}static finalize(){if(this.hasOwnProperty(Df))return!1;this[Df]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of i)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(Kv(s))}else e!==void 0&&n.push(Kv(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return N4(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=ld){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:xf).toAttribute(n,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:xf;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||qA)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};cr[Df]=!0,cr.elementProperties=new Map,cr.elementStyles=[],cr.shadowRootOptions={mode:"open"},Qv==null||Qv({ReactiveElement:cr}),((ad=Yc.reactiveElementVersions)!==null&&ad!==void 0?ad:Yc.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cd;const Xc=window,Hr=Xc.trustedTypes,Yv=Hr?Hr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Nf="$lit$",Ui=`lit$${(Math.random()+"").slice(9)}$`,WA="?"+Ui,M4=`<${WA}>`,zs=document,Sa=()=>zs.createComment(""),ka=t=>t===null||typeof t!="object"&&typeof t!="function",KA=Array.isArray,L4=t=>KA(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ud=`[ 	
\f\r]`,To=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xv=/-->/g,Jv=/>/g,fs=RegExp(`>|${ud}(?:([^\\s"'>=/]+)(${ud}*=${ud}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zv=/'/g,ew=/"/g,GA=/^(?:script|style|textarea|title)$/i,$4=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Mt=$4(1),js=Symbol.for("lit-noChange"),de=Symbol.for("lit-nothing"),tw=new WeakMap,Ts=zs.createTreeWalker(zs,129,null,!1);function QA(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yv!==void 0?Yv.createHTML(e):e}const V4=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=To;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===To?u[1]==="!--"?o=Xv:u[1]!==void 0?o=Jv:u[2]!==void 0?(GA.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=fs):u[3]!==void 0&&(o=fs):o===fs?u[0]===">"?(o=s??To,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?fs:u[3]==='"'?ew:Zv):o===ew||o===Zv?o=fs:o===Xv||o===Jv?o=To:(o=fs,s=void 0);const f=o===fs&&t[a+1].startsWith("/>")?" ":"";r+=o===To?l+M4:h>=0?(i.push(c),l.slice(0,h)+Nf+l.slice(h)+Ui+f):l+Ui+(h===-2?(i.push(void 0),a):f)}return[QA(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class Pa{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=V4(e,n);if(this.el=Pa.createElement(c,i),Ts.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Ts.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(Nf)||d.startsWith(Ui)){const f=u[o++];if(h.push(d),f!==void 0){const m=s.getAttribute(f.toLowerCase()+Nf).split(Ui),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:y[2],strings:m,ctor:y[1]==="."?U4:y[1]==="?"?z4:y[1]==="@"?j4:lh})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(GA.test(s.tagName)){const h=s.textContent.split(Ui),d=h.length-1;if(d>0){s.textContent=Hr?Hr.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],Sa()),Ts.nextNode(),l.push({type:2,index:++r});s.append(h[d],Sa())}}}else if(s.nodeType===8)if(s.data===WA)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(Ui,h+1))!==-1;)l.push({type:7,index:r}),h+=Ui.length-1}r++}}static createElement(e,n){const i=zs.createElement("template");return i.innerHTML=e,i}}function qr(t,e,n=t,i){var s,r,o,a;if(e===js)return e;let l=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=ka(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=qr(t,l._$AS(t,e.values),l,i)),e}class F4{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:zs).importNode(i,!0);Ts.currentNode=r;let o=Ts.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new fl(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new H4(o,this,e)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Ts.nextNode(),a++)}return Ts.currentNode=zs,r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class fl{constructor(e,n,i,s){var r;this.type=2,this._$AH=de,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=qr(this,e,n),ka(e)?e===de||e==null||e===""?(this._$AH!==de&&this._$AR(),this._$AH=de):e!==this._$AH&&e!==js&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):L4(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==de&&ka(this._$AH)?this._$AA.nextSibling.data=e:this.$(zs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Pa.createElement(QA(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const o=new F4(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let n=tw.get(e.strings);return n===void 0&&tw.set(e.strings,n=new Pa(e)),n}T(e){KA(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new fl(this.k(Sa()),this.k(Sa()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class lh{constructor(e,n,i,s,r){this.type=1,this._$AH=de,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=de}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=qr(this,e,n,0),o=!ka(e)||e!==this._$AH&&e!==js,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=qr(this,a[i+l],n,l),c===js&&(c=this._$AH[l]),o||(o=!ka(c)||c!==this._$AH[l]),c===de?e=de:e!==de&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===de?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let U4=class extends lh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===de?void 0:e}};const B4=Hr?Hr.emptyScript:"";let z4=class extends lh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==de?this.element.setAttribute(this.name,B4):this.element.removeAttribute(this.name)}};class j4 extends lh{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=qr(this,e,n,0))!==null&&i!==void 0?i:de)===js)return;const s=this._$AH,r=e===de&&s!==de||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==de&&(s===de||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class H4{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){qr(this,e)}}const nw=Xc.litHtmlPolyfillSupport;nw==null||nw(Pa,fl),((cd=Xc.litHtmlVersions)!==null&&cd!==void 0?cd:Xc.litHtmlVersions=[]).push("2.8.0");const q4=(t,e,n)=>{var i,s;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new fl(e.insertBefore(Sa(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hd,dd;let on=class extends cr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=q4(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return js}};on.finalized=!0,on._$litElement$=!0,(hd=globalThis.litElementHydrateSupport)===null||hd===void 0||hd.call(globalThis,{LitElement:on});const iw=globalThis.litElementPolyfillSupport;iw==null||iw({LitElement:on});((dd=globalThis.litElementVersions)!==null&&dd!==void 0?dd:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class W4 extends on{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Mt`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const K4=en`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Of=class extends W4{};Of.styles=[K4];Of=Q([Vn("md-elevation")],Of);const YA=t=>(Ma("data-v-eabfc1cc"),t=t(),La(),t),G4=YA(()=>U("md-elevation",null,null,-1)),Q4={class:"title headline-large"},Y4={class:"content body-large"},X4={key:1,class:"card"},J4=YA(()=>U("md-elevation",null,null,-1)),Z4={class:"title headline-large"},eB={class:"content body-large"},tB=Rt({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const i=$a("RouterLink");return t.path?(X(),si(i,{key:0,to:t.path,class:"route card"},{default:Gt(()=>[U("div",null,[G4,U("div",Q4,[zn(e.$slots,"title",{},void 0,!0)]),U("div",Y4,[zn(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):(X(),re("div",X4,[J4,U("div",Z4,[zn(e.$slots,"title",{},void 0,!0)]),U("div",eB,[zn(e.$slots,"content",{},void 0,!0)])]))}}});const pl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fd=pl(tB,[["__scopeId","data-v-eabfc1cc"]]),nB=t=>(Ma("data-v-27e31cd3"),t=t(),La(),t),iB=["src"],sB=nB(()=>U("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),rB=Rt({__name:"AccountImage",setup(t){var i;const e=Ks(),n=Fe((i=e.value)==null?void 0:i.providerData[0].photoURL);return(s,r)=>{const o=$a("RouterLink");return X(),re("div",null,[j(e)?(X(),si(o,{key:0,to:"/myAccount"},{default:Gt(()=>[U("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,iB)]),_:1})):(X(),si(o,{key:1,to:"/myAccount"},{default:Gt(()=>[sB]),_:1}))])}}});const oB=pl(rB,[["__scopeId","data-v-27e31cd3"]]),xa=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aB extends on{render(){return Mt`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const lB=en`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Mf=class extends aB{};Mf.styles=[lB];Mf=Q([Vn("md-icon")],Mf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XA=Symbol("attachableController");let nc;nc=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[XA])==null||e.hostConnected()});class JA{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[XA]=this,nc==null||nc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const cB=["focusin","focusout","pointerdown"];class pg extends on{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new JA(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var n;if(!e[sw]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[sw]=!0}}onControlChange(e,n){for(const i of cB)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}Q([Le({type:Boolean,reflect:!0})],pg.prototype,"visible",void 0);Q([Le({type:Boolean,reflect:!0})],pg.prototype,"inward",void 0);const sw=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const uB=en`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Lf=class extends pg{};Lf.styles=[uB];Lf=Q([Vn("md-focus-ring")],Lf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hB={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dB=t=>(...e)=>({_$litDirective$:t,values:e});let fB=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml=dB(class extends fB{constructor(t){var e;if(super(t),t.type!==hB.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const s=t.element.classList;this.it.forEach(r=>{r in e||(s.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return js}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Da={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pB=450,rw=225,mB=.2,gB=10,_B=75,yB=.35,vB="::after",wB="forwards";var Kt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Kt||(Kt={}));const bB=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],EB=150;class gl extends on{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Kt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new JA(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Mt`<div class="surface ${ml(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Kt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Kt.HOLDING){this.state=Kt.WAITING_FOR_CLICK;return}if(this.state===Kt.TOUCH_DELAY){this.state=Kt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Kt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Kt.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,EB)}),this.state===Kt.TOUCH_DELAY&&(this.state=Kt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Kt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Kt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),i=Math.max(e,n),s=Math.max(yB*i,_B),r=Math.floor(i*mB),a=Math.sqrt(n**2+e**2)+gB;this.initialSize=r,this.rippleScale=`${(a+s)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:i}=window,{left:s,top:r}=this.getBoundingClientRect(),o=n+s,a=i+r,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:i}=this.getBoundingClientRect(),s={x:(i-this.initialSize)/2,y:(n-this.initialSize)/2};let r;return e instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(e):r={x:i/2,y:n/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:s}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:i}=this.getTranslationCoordinates(e),s=`${n.x}px, ${n.y}px`,r=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:vB,duration:pB,easing:Da.STANDARD,fill:wB})}async endPressAnimation(){this.state=Kt.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=rw){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,rw-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:i,left:s,bottom:r,right:o}=this.getBoundingClientRect();return e>=s&&e<=o&&n>=i&&n<=r}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const i of bB)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}}Q([Le({type:Boolean,reflect:!0})],gl.prototype,"disabled",void 0);Q([cs()],gl.prototype,"hovered",void 0);Q([cs()],gl.prototype,"pressed",void 0);Q([Fn(".surface")],gl.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const IB=en`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let $f=class extends gl{};$f.styles=[IB];$f=Q([Vn("md-ripple")],$f);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ZA=Symbol.for(""),TB=t=>{if((t==null?void 0:t.r)===ZA)return t==null?void 0:t._$litStatic$},Jc=(t,...e)=>({_$litStatic$:e.reduce((n,i,s)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:ZA}),ow=new Map,AB=t=>(e,...n)=>{const i=n.length;let s,r;const o=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(r=n[c],(s=TB(r))!==void 0);)l+=s+e[++c],u=!0;c!==i&&a.push(r),o.push(l),c++}if(c===i&&o.push(e[i]),u){const h=o.join("$$lit$$");(e=ow.get(h))===void 0&&(o.raw=o,ow.set(h,e=o)),n=a}return t(e,...n)},eR=AB(Mt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ch=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];ch.map(mg);function mg(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function RB(t,{focusable:e}={}){if(e!==!1&&t.addInitializer(n=>{n.addController({hostConnected(){n.hasAttribute("tabindex")||(n.tabIndex=0)}})}),!("role"in Element.prototype)){for(const n of ch)t.createProperty(n,{attribute:mg(n),reflect:!0});t.createProperty("role",{reflect:!0})}}function CB(t,e){if(SB(e))return e;if(!("role"in t))throw new Error("Missing setupHostAria()");let n=[],i=!1;for(const r of ch){let o=null;Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get(){return i?t[r]:o},set(a){const l=()=>{t[r]=a};if(!i){o=a,n.push(l);return}l()}})}let s=null;return Object.defineProperty(e,"role",{enumerable:!0,configurable:!0,get(){return i?t.getAttribute("role"):s},set(r){const o=()=>{r===null?t.removeAttribute("role"):t.setAttribute("role",r)};if(!i){s=r,n.push(o);return}o()}}),t.addController({hostConnected(){if(!i){i=!0;for(const r of n)r();n=[]}}}),e}function SB(t){return"role"in t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function gg(t){for(const e of ch)t.createProperty(e,{attribute:mg(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wr=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tR(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async i=>{const{type:s,[Wr]:r}=n,{form:o}=r;if(!(!o||s==="button")&&(await new Promise(a=>{a()}),!i.defaultPrevented)){if(s==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),r.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function aw(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var nR;class Zt extends on{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=aw(this,this.flipIconInRtl),this[nR]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Wr].form}get labels(){return this[Wr].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Jc`div`:Jc`button`,{ariaLabel:n,ariaHasPopup:i,ariaExpanded:s}=this,r=n&&this.ariaLabelSelected,o=this.toggle?this.selected:de;let a=de;return this.href||(a=r&&this.selected?this.ariaLabelSelected:n),eR`<${e}
        class="icon-button ${ml(this.getRenderClasses())}"
        id="button"
        aria-label="${a||de}"
        aria-haspopup="${!this.href&&i||de}"
        aria-expanded="${!this.href&&s||de}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?de:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():de}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Mt`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||de}"
        aria-label="${e||de}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Mt`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Mt`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`}renderTouchTarget(){return Mt`<span class="touch"></span>`}renderFocusRing(){return Mt`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Mt`<md-ripple
      for=${this.href?"link":de}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=aw(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}nR=Wr;gg(Zt),tR(Zt);Zt.formAssociated=!0;Zt.shadowRootOptions={mode:"open",delegatesFocus:!0};Q([Le({type:Boolean,reflect:!0})],Zt.prototype,"disabled",void 0);Q([Le({type:Boolean,attribute:"flip-icon-in-rtl"})],Zt.prototype,"flipIconInRtl",void 0);Q([Le()],Zt.prototype,"href",void 0);Q([Le()],Zt.prototype,"target",void 0);Q([Le({attribute:"aria-label-selected"})],Zt.prototype,"ariaLabelSelected",void 0);Q([Le({type:Boolean})],Zt.prototype,"toggle",void 0);Q([Le({type:Boolean,reflect:!0})],Zt.prototype,"selected",void 0);Q([Le()],Zt.prototype,"type",void 0);Q([Le()],Zt.prototype,"value",void 0);Q([cs()],Zt.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const kB=en`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const PB=en`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-size: 0;height:var(--_state-layer-size);width:var(--_state-layer-size)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Vf=class extends Zt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Vf.styles=[kB,PB];Vf=Q([Vn("md-icon-button")],Vf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class uh extends on{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}Q([Le({type:Boolean,reflect:!0})],uh.prototype,"inset",void 0);Q([Le({type:Boolean,reflect:!0,attribute:"inset-start"})],uh.prototype,"insetStart",void 0);Q([Le({type:Boolean,reflect:!0,attribute:"inset-end"})],uh.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const xB=en`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ff=class extends uh{};Ff.styles=[xB];Ff=Q([Vn("md-divider")],Ff);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function DB(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(n);return i||e.preventDefault(),i}function NB(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function iR(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!OB(t)}function OB(t){const e=Uf;return e&&(t.preventDefault(),t.stopImmediatePropagation()),MB(),e}let Uf=!1;async function MB(){Uf=!0,await null,Uf=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LB={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Da.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Da.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},$B={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Da.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Da.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class at extends on{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>LB,this.getCloseAnimation=()=>$B,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const n=this.dialog;if(!n.open||this.isOpening){this.open=!1;return}const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return Mt`
      <div class="scrim"></div>
      <dialog
        class=${ml(n)}
        aria-label=${i||de}
        aria-labelledby=${this.hasHeadline?"headline":de}
        role=${this.type==="alert"?"alertdialog":de}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||de}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||de}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!DB(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:i,container:s,headline:r,content:o,actions:a}=this;if(!n||!i||!s||!r||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,m=[[n,c??[]],[i,u??[]],[s,l??[]],[r,h??[]],[o,d??[]],[a,f??[]]],y=[];for(const[v,b]of m)for(const I of b)y.push(v.animate(...I));await Promise.all(y.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:i}=e;n===this.topAnchor&&(this.isAtScrollTop=i),n===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}}gg(at);at.shadowRootOptions={...on.shadowRootOptions,delegatesFocus:!0};Q([Le({type:Boolean})],at.prototype,"open",null);Q([Le({attribute:!1})],at.prototype,"returnValue",void 0);Q([Le()],at.prototype,"type",void 0);Q([Fn("dialog")],at.prototype,"dialog",void 0);Q([Fn(".scrim")],at.prototype,"scrim",void 0);Q([Fn(".container")],at.prototype,"container",void 0);Q([Fn(".headline")],at.prototype,"headline",void 0);Q([Fn(".content")],at.prototype,"content",void 0);Q([Fn(".actions")],at.prototype,"actions",void 0);Q([cs()],at.prototype,"isAtScrollTop",void 0);Q([cs()],at.prototype,"isAtScrollBottom",void 0);Q([Fn(".scroller")],at.prototype,"scroller",void 0);Q([Fn(".top.anchor")],at.prototype,"topAnchor",void 0);Q([Fn(".bottom.anchor")],at.prototype,"bottomAnchor",void 0);Q([cs()],at.prototype,"hasHeadline",void 0);Q([cs()],at.prototype,"hasActions",void 0);Q([cs()],at.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const VB=en`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-font: var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));--_headline-line-height: var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));--_headline-size: var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));--_headline-weight: var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_supporting-text-size: var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_supporting-text-weight: var(--md-dialog-supporting-text-weight, var(--md-ref-typeface-weight-regular, 400));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font-family:var(--_headline-font);font-size:var(--_headline-size);line-height:var(--_headline-line-height);font-weight:var(--_headline-weight);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);height:min-content;position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Bf=class extends at{};Bf.styles=[VB];Bf=Q([Vn("md-dialog")],Bf);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _g=en`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var sR;class qt extends on{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Wr].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[sR]=this.attachInternals(),this.handleActivationClick=e=>{!iR(e)||!this.buttonElement||(this.focus(),NB(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?Jc`a`:Jc`button`,{ariaLabel:i,ariaHasPopup:s,ariaExpanded:r}=this;return eR`
      <${n}
        class="button ${ml(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||de}"
        aria-haspopup="${s||de}"
        aria-expanded="${r||de}"
        href=${this.href||de}
        target=${this.target||de}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var i,s;const e=this.disabled&&!this.href,n=Mt`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Mt`
      ${(i=this.renderElevation)==null?void 0:i.call(this)}
      ${(s=this.renderOutline)==null?void 0:s.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?de:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:de}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}sR=Wr;gg(qt),tR(qt);qt.formAssociated=!0;qt.shadowRootOptions={mode:"open",delegatesFocus:!0};Q([Le({type:Boolean,reflect:!0})],qt.prototype,"disabled",void 0);Q([Le()],qt.prototype,"href",void 0);Q([Le()],qt.prototype,"target",void 0);Q([Le({type:Boolean,attribute:"trailing-icon"})],qt.prototype,"trailingIcon",void 0);Q([Le({type:Boolean,attribute:"has-icon"})],qt.prototype,"hasIcon",void 0);Q([Le()],qt.prototype,"type",void 0);Q([Le()],qt.prototype,"value",void 0);Q([Fn(".button")],qt.prototype,"buttonElement",void 0);Q([x4({slot:"icon",flatten:!0})],qt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FB extends qt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const UB=en`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zf=class extends FB{};zf.styles=[_g,UB];zf=Q([Vn("md-text-button")],zf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class BB extends qt{renderOutline(){return Mt`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const zB=en`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let jf=class extends BB{};jf.styles=[_g,zB];jf=Q([Vn("md-outlined-button")],jf);const hh=t=>(Ma("data-v-d890dc55"),t=t(),La(),t),jB={key:0,id:"user"},HB={class:"body-large admonitions"},qB={key:0,class:"section slots"},WB=hh(()=>U("div",{class:"label"}," Slot prenotati: ",-1)),KB={key:0},GB={key:1,class:"bookedSlots"},QB=hh(()=>U("md-elevation",null,null,-1)),YB=["onClick"],XB=hh(()=>U("md-icon",null,"close",-1)),JB=[XB],ZB=["open"],ez=hh(()=>U("div",{slot:"headline"},"Conferma rimozione",-1)),tz={key:0,slot:"content",id:"form-id",method:"dialog"},nz={key:0},iz={slot:"actions"},sz={key:1,class:"section button"},rz=Rt({__name:"UserView",setup(t){var h,d;const e=Ks(),n=nA(Wn(dn,`users/${(h=e.value)==null?void 0:h.uid}`)),i=tA(DT(dn,`users/${(d=e.value)==null?void 0:d.uid}/availabilities`)),s=zA(),r=Fe(!1),o=Fe(),a=Re(()=>i.value.filter(f=>f.date.toDate()>new Date));function l(f){r.value=!0,o.value=f}async function c(){var I,C;if(o.value===null)return;const f=(I=o.value)==null?void 0:I.id,m=(C=e.value)==null?void 0:C.uid,y=Wn(dn,`users/${m}/availabilities/${f}`),v=Wn(dn,`users/${m}`),b=Wn(dn,`availabilities/${f}`);await GV(dn,async E=>{var x;E.update(b,{players:YV(v)}),E.delete(y),((x=o.value)==null?void 0:x.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&E.update(v,{admonitionCount:XV(1)})}),r.value=!1}function u(){s.installEvent,s.installEvent&&s.installEvent.prompt()}return(f,m)=>{const y=$a("RouterLink");return j(n)?(X(),re("div",jB,[U("div",null,[U("h2",null,Ye(j(n).username),1)]),U("div",null,[U("div",HB," Ammonizioni: "+Ye(j(n).admonitionCount),1)]),a.value.length>0?(X(),re("div",qB,[WB,j(n).admonitionCount>=2?(X(),re("div",KB," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):it("",!0),a.value.length>0?(X(),re("div",GB,[(X(!0),re(et,null,mi(a.value,v=>(X(),re("div",{class:"bookedSlot",key:v.id},[QB,Dt(" "+Ye(v.date.toDate().getDate())+" "+Ye(j(xa)[v.date.toDate().getMonth()])+" "+Ye(v.timeSlot)+" ",1),U("md-icon-button",{onClick:b=>l(v)},JB,8,YB),U("md-dialog",{class:"removeDialog",type:"alert",open:r.value},[ez,o.value?(X(),re("form",tz,[U("div",null," Sei sicuro di voler disdire per il "+Ye(o.value.date.toDate().getDate())+" "+Ye(j(xa)[o.value.date.toDate().getMonth()])+" "+Ye(o.value.timeSlot)+"? ",1),o.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?(X(),re("p",nz," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):it("",!0)])):it("",!0),U("div",iz,[U("md-text-button",{form:"form-id",value:"cancel",onClick:m[0]||(m[0]=b=>r.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:c},"Disdici")])],8,ZB)]))),128))])):it("",!0)])):it("",!0),j(n).role==="admin"?(X(),re("div",sz,[Be(y,{to:"/adminPanel"},{default:Gt(()=>[Dt(" Admin ")]),_:1})])):it("",!0),j(s)&&j(s).installEvent?(X(),re("div",{key:2,class:"section button",onClick:u}," Installa app ")):it("",!0)])):it("",!0)}}});const rR=pl(rz,[["__scopeId","data-v-d890dc55"]]),oz=t=>(Ma("data-v-a529ec71"),t=t(),La(),t),az={id:"home"},lz=oz(()=>U("h1",{class:"title display-medium"},"Fonti Paintball",-1)),cz={class:"content"},uz=Rt({__name:"HomeView",setup(t){const e=Fe(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),dp(()=>window.removeEventListener("resize",n));const i=Ks();return(s,r)=>(X(),re("div",az,[e.value<900||!j(i)?(X(),si(oB,{key:0})):it("",!0),lz,U("div",cz,[U("main",null,[Be(fd,{path:"/rules"},{title:Gt(()=>[Dt(" Regolamento ")]),content:Gt(()=>[Dt(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),Be(fd,{path:"/availability"},{title:Gt(()=>[Dt(" Calendario ")]),content:Gt(()=>[Dt(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),Be(fd,null,{title:Gt(()=>[Dt(" Statistiche giocatori ")]),content:Gt(()=>[Dt(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&j(i)?(X(),si(rR,{key:0})):it("",!0)])]))}});const hz=pl(uz,[["__scopeId","data-v-a529ec71"]]);function yg(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Zs=yg();function oR(t){Zs=t}const aR=/[&<>"']/,dz=new RegExp(aR.source,"g"),lR=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,fz=new RegExp(lR.source,"g"),pz={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lw=t=>pz[t];function Pt(t,e){if(e){if(aR.test(t))return t.replace(dz,lw)}else if(lR.test(t))return t.replace(fz,lw);return t}const mz=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cR(t){return t.replace(mz,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const gz=/(^|[^\[])\^/g;function xe(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(i,s)=>(s=typeof s=="object"&&"source"in s?s.source:s,s=s.replace(gz,"$1"),t=t.replace(i,s),n),getRegex:()=>new RegExp(t,e)};return n}const _z=/[^\w:]/g,yz=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function cw(t,e,n){if(t){let i;try{i=decodeURIComponent(cR(n)).replace(_z,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!yz.test(n)&&(n=Ez(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Bl={},vz=/^[^:]+:\/*[^/]*$/,wz=/^([^:]+:)[\s\S]*$/,bz=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Ez(t,e){Bl[" "+t]||(vz.test(t)?Bl[" "+t]=t+"/":Bl[" "+t]=ic(t,"/",!0)),t=Bl[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(wz,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(bz,"$1")+e:t+e}const Zc={exec:()=>null};function uw(t,e){const n=t.replace(/\|/g,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=n.split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i}function ic(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i;){const r=t.charAt(i-s-1);if(r===e&&!n)s++;else if(r!==e&&n)s++;else break}return t.slice(0,i-s)}function Iz(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let i=0,s=0;for(;s<n;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return-1}function Tz(t,e){!t||t.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(t.sanitize||t.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(t.highlight||t.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),t.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),t.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),t.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),t.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(t.headerIds||t.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function hw(t,e,n,i){const s=e.href,r=e.title?Pt(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:s,title:r,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:r,text:Pt(o)}}function Az(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=i.length?s.slice(i.length):s}).join(`
`)}class eu{constructor(e){Se(this,"options");Se(this,"rules");Se(this,"lexer");this.options=e||Zs}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:ic(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=Az(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const s=ic(i,"#");(this.options.pedantic||!s||/ $/.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=n[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(i);return this.lexer.state.top=s,{type:"blockquote",raw:n[0],tokens:r,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i,s,r,o,a,l,c,u,h,d,f,m,y=n[1].trim();const v=y.length>1,b={type:"list",raw:"",ordered:v,start:v?+y.slice(0,-1):"",loose:!1,items:[]};y=v?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=v?y:"[*+-]");const I=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(n=I.exec(e))||this.rules.block.hr.test(e)));){if(i=n[0],e=e.substring(i.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,E=>" ".repeat(3*E.length)),h=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(h)&&(i+=h+`
`,e=e.substring(h.length+1),m=!0),!m){const E=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),H=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),J=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],h=d,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(H.test(h)||J.test(h)||E.test(h)||x.test(e)));){if(h.search(/[^ ]/)>=o||!h.trim())f+=`
`+h.slice(o);else{if(l||u.search(/[^ ]/)>=4||H.test(u)||J.test(u)||x.test(u))break;f+=`
`+h}!l&&!h.trim()&&(l=!0),i+=d+`
`,e=e.substring(d.length+1),u=h.slice(o)}}b.loose||(c?b.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(f),s&&(r=s[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:i,task:!!s,checked:r,loose:!1,text:f}),b.raw+=i}b.items[b.items.length-1].raw=i.trimRight(),b.items[b.items.length-1].text=f.trimRight(),b.raw=b.raw.trimRight();const C=b.items.length;for(a=0;a<C;a++)if(this.lexer.state.top=!1,b.items[a].tokens=this.lexer.blockTokens(b.items[a].text,[]),!b.loose){const E=b.items[a].tokens.filter(H=>H.type==="space"),x=E.length>0&&E.some(H=>/\n.*\n/.test(H.raw));b.loose=x}if(b.loose)for(a=0;a<C;a++)b.items[a].loose=!0;return b}}html(e){const n=this.rules.block.html.exec(e);if(n){const i={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):Pt(n[0]),r=i;r.type="paragraph",r.text=s,r.tokens=this.lexer.inline(s)}return i}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),s=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:r}}}table(e){const n=this.rules.block.table.exec(e);if(n){const i={type:"table",raw:n[0],header:uw(n[1]).map(s=>({text:s})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){let s=i.align.length,r,o,a,l;for(r=0;r<s;r++)/^ *-+: *$/.test(i.align[r])?i.align[r]="right":/^ *:-+: *$/.test(i.align[r])?i.align[r]="center":/^ *:-+ *$/.test(i.align[r])?i.align[r]="left":i.align[r]=null;for(s=i.rows.length,r=0;r<s;r++)i.rows[r]=uw(i.rows[r],i.header.length).map(c=>({text:c}));for(s=i.header.length,o=0;o<s;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(s=i.rows.length,o=0;o<s;o++)for(l=i.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return i}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Pt(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Pt(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=ic(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=Iz(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(i)?s=s.slice(1):s=s.slice(1,-1)),hw(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let s=(i[2]||i[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s){const r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return hw(i,s,i[0],this.lexer)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let a,l,c=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(s=h.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...e].slice(0,o+s.index+l+1).join("");if(Math.min(o,l)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const s=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return s&&r&&(i=i.substring(1,i.length-1)),i=Pt(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const i=this.rules.inline.autolink.exec(e);if(i){let s,r;return i[2]==="@"?(s=Pt(this.options.mangle?n(i[1]):i[1]),r="mailto:"+s):(s=Pt(i[1]),r=s),{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let i;if(i=this.rules.inline.url.exec(e)){let s,r;if(i[2]==="@")s=Pt(this.options.mangle?n(i[0]):i[0]),r="mailto:"+s;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);s=Pt(i[0]),i[1]==="www."?r="http://"+i[0]:r=i[0]}return{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const i=this.rules.inline.text.exec(e);if(i){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Pt(i[0]):i[0]:s=Pt(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:s}}}}const Z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Zc,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Z._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;Z._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;Z.def=xe(Z.def).replace("label",Z._label).replace("title",Z._title).getRegex();Z.bullet=/(?:[*+-]|\d{1,9}[.)])/;Z.listItemStart=xe(/^( *)(bull) */).replace("bull",Z.bullet).getRegex();Z.list=xe(Z.list).replace(/bull/g,Z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Z.def.source+")").getRegex();Z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";Z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;Z.html=xe(Z.html,"i").replace("comment",Z._comment).replace("tag",Z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();Z.lheading=xe(Z.lheading).replace(/bull/g,Z.bullet).getRegex();Z.paragraph=xe(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.blockquote=xe(Z.blockquote).replace("paragraph",Z.paragraph).getRegex();Z.normal={...Z};Z.gfm={...Z.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};Z.gfm.table=xe(Z.gfm.table).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.gfm.paragraph=xe(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex();Z.pedantic={...Z.normal,html:xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Zc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xe(Z.normal._paragraph).replace("hr",Z.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const B={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Zc,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Zc,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};B._punctuation="\\p{P}$+<=>`^|~";B.punctuation=xe(B.punctuation,"u").replace(/punctuation/g,B._punctuation).getRegex();B.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;B.anyPunctuation=/\\[punct]/g;B._escapes=/\\([punct])/g;B._comment=xe(Z._comment).replace("(?:-->|$)","-->").getRegex();B.emStrong.lDelim=xe(B.emStrong.lDelim,"u").replace(/punct/g,B._punctuation).getRegex();B.emStrong.rDelimAst=xe(B.emStrong.rDelimAst,"gu").replace(/punct/g,B._punctuation).getRegex();B.emStrong.rDelimUnd=xe(B.emStrong.rDelimUnd,"gu").replace(/punct/g,B._punctuation).getRegex();B.anyPunctuation=xe(B.anyPunctuation,"gu").replace(/punct/g,B._punctuation).getRegex();B._escapes=xe(B._escapes,"gu").replace(/punct/g,B._punctuation).getRegex();B._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;B._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;B.autolink=xe(B.autolink).replace("scheme",B._scheme).replace("email",B._email).getRegex();B._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;B.tag=xe(B.tag).replace("comment",B._comment).replace("attribute",B._attribute).getRegex();B._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;B._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;B._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;B.link=xe(B.link).replace("label",B._label).replace("href",B._href).replace("title",B._title).getRegex();B.reflink=xe(B.reflink).replace("label",B._label).replace("ref",Z._label).getRegex();B.nolink=xe(B.nolink).replace("ref",Z._label).getRegex();B.reflinkSearch=xe(B.reflinkSearch,"g").replace("reflink",B.reflink).replace("nolink",B.nolink).getRegex();B.normal={...B};B.pedantic={...B.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:xe(/^!?\[(label)\]\((.*?)\)/).replace("label",B._label).getRegex(),reflink:xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",B._label).getRegex()};B.gfm={...B.normal,escape:xe(B.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};B.gfm.url=xe(B.gfm.url,"i").replace("email",B.gfm._extended_email).getRegex();B.breaks={...B.gfm,br:xe(B.br).replace("{2,}","*").getRegex(),text:xe(B.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Rz(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function dw(t){let e="",n,i;const s=t.length;for(n=0;n<s;n++)i=t.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class Jn{constructor(e){Se(this,"tokens");Se(this,"options");Se(this,"state");Se(this,"tokenizer");Se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Zs,this.options.tokenizer=this.options.tokenizer||new eu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Z.normal,inline:B.normal};this.options.pedantic?(n.block=Z.pedantic,n.inline=B.pedantic):this.options.gfm&&(n.block=Z.gfm,this.options.breaks?n.inline=B.breaks:n.inline=B.gfm),this.tokenizer.rules=n}static get rules(){return{block:Z,inline:B}}static lex(e,n){return new Jn(n).lex(e)}static lexInline(e,n){return new Jn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i),o=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,s,r,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e,dw)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,dw))){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(r,Rz)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class tu{constructor(e){Se(this,"options");this.options=e||Zs}code(e,n,i){const s=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(i=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+Pt(s)+'">'+(i?e:Pt(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:Pt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i,s){if(this.options.headerIds){const r=this.options.headerPrefix+s.slug(i);return`<h${n} id="${r}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,i){const s=n?"ol":"ul",r=n&&i!==1?' start="'+i+'"':"";return"<"+s+r+`>
`+e+"</"+s+`>
`}listitem(e,n,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){if(e=cw(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image(e,n,i){if(e=cw(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s=`<img src="${e}" alt="${i}"`;return n&&(s+=` title="${n}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class vg{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class wg{constructor(){Se(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let i=e,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[e];do s++,i=e+"-"+s;while(this.seen.hasOwnProperty(i))}return n||(this.seen[e]=s,this.seen[i]=0),i}slug(e,n={}){const i=this.serialize(e);return this.getNextSafeSlug(i,n.dryrun)}}class Zn{constructor(e){Se(this,"options");Se(this,"renderer");Se(this,"textRenderer");Se(this,"slugger");this.options=e||Zs,this.options.renderer=this.options.renderer||new tu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new vg,this.slugger=new wg}static parse(e,n){return new Zn(n).parse(e)}static parseInline(e,n){return new Zn(n).parseInline(e)}parse(e,n=!0){let i="",s,r,o,a,l,c,u,h,d,f,m,y,v,b,I,C,E,x,H;const J=e.length;for(s=0;s<J;s++){if(f=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(H=this.options.extensions.renderers[f.type].call({parser:this},f),H!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){i+=H||"";continue}switch(f.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(f.tokens),f.depth,cR(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(f.text,f.lang,!!f.escaped);continue}case"table":{for(h="",u="",a=f.header.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(f.header[r].tokens),{header:!0,align:f.align[r]});for(h+=this.renderer.tablerow(u),d="",a=f.rows.length,r=0;r<a;r++){for(c=f.rows[r],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(u)}i+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(f.tokens),i+=this.renderer.blockquote(d);continue}case"list":{for(m=f.ordered,y=f.start,v=f.loose,a=f.items.length,d="",r=0;r<a;r++)I=f.items[r],C=I.checked,E=I.task,b="",I.task&&(x=this.renderer.checkbox(!!C),v?I.tokens.length>0&&I.tokens[0].type==="paragraph"?(I.tokens[0].text=x+" "+I.tokens[0].text,I.tokens[0].tokens&&I.tokens[0].tokens.length>0&&I.tokens[0].tokens[0].type==="text"&&(I.tokens[0].tokens[0].text=x+" "+I.tokens[0].tokens[0].text)):I.tokens.unshift({type:"text",text:x}):b+=x),b+=this.parse(I.tokens,v),d+=this.renderer.listitem(b,E,!!C);i+=this.renderer.list(d,m,y);continue}case"html":{i+=this.renderer.html(f.text,f.block);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;s+1<J&&e[s+1].type==="text";)f=e[++s],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);i+=n?this.renderer.paragraph(d):d;continue}default:{const Y='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(Y),"";throw new Error(Y)}}}return i}parseInline(e,n){n=n||this.renderer;let i="",s,r,o;const a=e.length;for(s=0;s<a;s++){if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){i+=o||"";continue}switch(r.type){case"escape":{i+=n.text(r.text);break}case"html":{i+=n.html(r.text);break}case"link":{i+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{i+=n.image(r.href,r.title,r.text);break}case"strong":{i+=n.strong(this.parseInline(r.tokens,n));break}case"em":{i+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{i+=n.codespan(r.text);break}case"br":{i+=n.br();break}case"del":{i+=n.del(this.parseInline(r.tokens,n));break}case"text":{i+=n.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}}class Yo{constructor(e){Se(this,"options");this.options=e||Zs}preprocess(e){return e}postprocess(e){return e}}Se(Yo,"passThroughHooks",new Set(["preprocess","postprocess"]));var Oa,Hf,nu,uR;class Cz{constructor(...e){mh(this,Oa);mh(this,nu);Se(this,"defaults",yg());Se(this,"options",this.setOptions);Se(this,"parse",yl(this,Oa,Hf).call(this,Jn.lex,Zn.parse));Se(this,"parseInline",yl(this,Oa,Hf).call(this,Jn.lexInline,Zn.parseInline));Se(this,"Parser",Zn);Se(this,"parser",Zn.parse);Se(this,"Renderer",tu);Se(this,"TextRenderer",vg);Se(this,"Lexer",Jn);Se(this,"lexer",Jn.lex);Se(this,"Tokenizer",eu);Se(this,"Slugger",wg);Se(this,"Hooks",Yo);this.use(...e)}walkTokens(e,n){let i=[];for(const s of e)switch(i=i.concat(n.call(this,s)),s.type){case"table":{for(const r of s.header)i=i.concat(this.walkTokens(r.tokens,n));for(const r of s.rows)for(const o of r)i=i.concat(this.walkTokens(o.tokens,n));break}case"list":{i=i.concat(this.walkTokens(s.items,n));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{i=i.concat(this.walkTokens(s[r],n))}):s.tokens&&(i=i.concat(this.walkTokens(s.tokens,n)))}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=n.renderers[r.name];o?n.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),s.extensions=n),i.renderer){const r=this.defaults.renderer||new tu(this.defaults);for(const o in i.renderer){const a=i.renderer[o],l=o,c=r[l];r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h||""}}s.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new eu(this.defaults);for(const o in i.tokenizer){const a=i.tokenizer[o],l=o,c=r[l];r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new Yo;for(const o in i.hooks){const a=i.hooks[o],l=o,c=r[l];Yo.passThroughHooks.has(o)?r[l]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(d=>c.call(r,d));const h=a.call(r,u);return c.call(r,h)}:r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens;s.walkTokens=function(o){let a=[];return a.push(i.walkTokens.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}Oa=new WeakSet,Hf=function(e,n){return(i,s,r)=>{typeof s=="function"&&(r=s,s=null);const o={...s},a={...this.defaults,...o},l=yl(this,nu,uR).call(this,!!a.silent,!!a.async,r);if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(Tz(a,r),a.hooks&&(a.hooks.options=a),r){const c=a.highlight;let u;try{a.hooks&&(i=a.hooks.preprocess(i)),u=e(i,a)}catch(f){return l(f)}const h=f=>{let m;if(!f)try{a.walkTokens&&this.walkTokens(u,a.walkTokens),m=n(u,a),a.hooks&&(m=a.hooks.postprocess(m))}catch(y){f=y}return a.highlight=c,f?l(f):r(null,m)};if(!c||c.length<3||(delete a.highlight,!u.length))return h();let d=0;this.walkTokens(u,f=>{f.type==="code"&&(d++,setTimeout(()=>{c(f.text,f.lang,(m,y)=>{if(m)return h(m);y!=null&&y!==f.text&&(f.text=y,f.escaped=!0),d--,d===0&&h()})},0))}),d===0&&h();return}if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(c=>e(c,a)).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>n(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(l);try{a.hooks&&(i=a.hooks.preprocess(i));const c=e(i,a);a.walkTokens&&this.walkTokens(c,a.walkTokens);let u=n(c,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(c){return l(c)}}},nu=new WeakSet,uR=function(e,n,i){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+Pt(s.message+"",!0)+"</pre>";if(n)return Promise.resolve(r);if(i){i(null,r);return}return r}if(n)return Promise.reject(s);if(i){i(s);return}throw s}};const Hs=new Cz;function Pe(t,e,n){return Hs.parse(t,e,n)}Pe.options=Pe.setOptions=function(t){return Hs.setOptions(t),Pe.defaults=Hs.defaults,oR(Pe.defaults),Pe};Pe.getDefaults=yg;Pe.defaults=Zs;Pe.use=function(...t){return Hs.use(...t),Pe.defaults=Hs.defaults,oR(Pe.defaults),Pe};Pe.walkTokens=function(t,e){return Hs.walkTokens(t,e)};Pe.parseInline=Hs.parseInline;Pe.Parser=Zn;Pe.parser=Zn.parse;Pe.Renderer=tu;Pe.TextRenderer=vg;Pe.Lexer=Jn;Pe.lexer=Jn.lex;Pe.Tokenizer=eu;Pe.Slugger=wg;Pe.Hooks=Yo;Pe.parse=Pe;Pe.options;Pe.setOptions;Pe.use;Pe.walkTokens;Pe.parseInline;Zn.parse;Jn.lex;const Sz=["innerHTML"],fw=1.3,kz=Rt({__name:"RulesView",setup(t){const e=`
# Come funziona
Per prenotare basta aprire il calendario e prenotare uno degli slot già aperti o crearne uno nuovo cliccando su un giorno. Gli slot disponibili ogni giorno sono due:
- mattina: 8:00/10:30 circa
- pomeriggio: 17:00/19:30 circa

Si gioca se si raggiunge il numero necessario di giocatori. **Gli orari potrebbero variare e anche se si raggiunge il numero necessario di giocatori si potrebbe non giocare**. Per ogni slot prenotato i giocatori riceveranno una conferma e gli orari esatti nel caso in cui si giochi.

# Regolamento
- Ogni giocatore può segnarsi per un numero illimitato di slot. Ogni giorno ci sono 2 slot disponibili: uno per la mattina e uno per il pomeriggio
- Segnarsi per uno slot vuol dire dare la disponibilità a giocare a paintball per quel giorno e quella fascia oraria
- Ogni slot ha 3 posti disponibili
- La prenotazione dà la garanzia di giocare nel caso in cui venga raggiunto il numero necessario di giocatori (4) e nel caso in cui venga fatta una partita
- Raggiungere il numero necessario di giocatori non garantisce che venga fatta una partita
- I giocatori che prenotano uno slot e annullano e/o non si presentano vengono ammoniti
- Questo regolamento potrà subire variazioni. Sarà premura di chi lo accetta accertarsi di aver letto l'ultima rulesVersione
- I giocatori sono responsabili dell'attrezzatura offerta e, in caso di danno, del pagamento della riparazione/sostituzione dell'attrezzatura danneggiata
- Potrebbe essere richiesta una quota per l'acquisto dei paintballs (correlata al numero dei paintballs usati dal giocatore)

## Ammonizioni
Essere ammoniti implica avere delle limitazioni.

Il giocatore con **una ammonizione**:
- può prenotarsi ma se un giocatore senza ammonizione vuole prendere il suo slot avrà la precedenza. Da ciò deriva che il giocatore ammonito non ha la garanzia di giocare anche se ha prenotato

Il giocatore con **due ammonizioni**:
- non può prenotarsi
- verrà contattato solo come possibile sostituto
- ogni rifiuto costerà una ammonizione aggiuntiva
- i giocatori con meno ammonizioni hanno la precedenza sui giocatori con più ammonizioni

## Riduzione ammonizioni
- Ogni presenza eliminerà una ammonizione
- Il giocatore con una sola ammonizione dovrà partecipare a due partite per eliminare la restante ammonizione

**Le ammonizioni sono retroattive ed hanno perciò effetto anche sulle prenotazioni effettuate prima della ricezione delle ammonizioni.**

# Abbigliamento e protezioni
L'unica protezione fornita è un casco che copre interamente viso e orecchie. 
Sono consigliati pantaloni lunghi e scarpe da trekking (o comunque adatte al bosco). 
Altre protezioni utili potrebbero essere: ginocchiere, guanti, protezione per il collo, pettorina rinforzata.
<br />

**NB:** 
Questa webapp è stata creata in poco tempo, ci sono sicuramente bug e dimenticanze (che si spera verranno risolte in futuro). Qualunque cosa permessa dall'app ma non dal regolamento e qualunque altro utilizzo scorretto dell'app varrà due ammonizioni 

<br />
<br />

v. ${fw}
`;localStorage.setItem("lastRulesRead",fw.toString());const n=Pe(e);return(i,s)=>(X(),re("div",{class:"output",innerHTML:j(n)},null,8,Sz))}});/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Pz=en`@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-icon-color: CanvasText;--md-radio-hover-icon-color: CanvasText;--md-radio-focus-icon-color: CanvasText;--md-radio-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xz{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=n=>{const i=n.key==="ArrowDown",s=n.key==="ArrowUp",r=n.key==="ArrowLeft",o=n.key==="ArrowRight";if(!r&&!o&&!i&&!s)return;const a=this.getNamedSiblings();if(!a.length)return;n.preventDefault();const c=getComputedStyle(this.host).direction==="rtl"?r||i:o||i,u=a.indexOf(this.host);let h=c?u+1:u-1;for(;h!==u;){h>=a.length?h=0:h<0&&(h=a.length-1);const d=a[h];if(d.hasAttribute("disabled")){c?h++:h--;continue}for(const f of a)f!==d&&(f.checked=!1,f.tabIndex=-1,f.blur());d.checked=!0,d.tabIndex=0,d.focus(),d.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.getNamedSiblings())e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.getNamedSiblings(),n=e.find(i=>i.checked);if(n||this.focused){const i=n||this.host;i.tabIndex=0;for(const s of e)s!==i&&(s.tabIndex=-1);return}for(const i of e)i.tabIndex=0}getNamedSiblings(){const e=this.host.getAttribute("name");return!e||!this.root?[]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var hR;const qf=Symbol("checked");let Dz=0;class ho extends on{get checked(){return this[qf]}set checked(e){const n=this.checked;if(n===e)return;this[qf]=e;const i=String(e);this.internals.setFormValue(this.checked?this.value:null,i),this.requestUpdate("checked",n),this.selectionController.handleCheckedChange()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.maskId=`cutout${++Dz}`,this[hR]=!1,this.disabled=!1,this.value="on",this.selectionController=new xz(this),this.internals=CB(this,this.attachInternals()),this.addController(this.selectionController),this.internals.role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Mt`
      <div class="container ${ml(e)}" aria-hidden="true">
        <md-ripple part="ripple" .control=${this}
            ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
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
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
        >
      </div>
    `}updated(){this.internals.ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(iR(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}}hR=qf;RB(ho);ho.formAssociated=!0;Q([Le({type:Boolean})],ho.prototype,"checked",null);Q([Le({type:Boolean,reflect:!0})],ho.prototype,"disabled",void 0);Q([Le()],ho.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Nz=en`:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);outline:none;position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Wf=class extends ho{};Wf.styles=[Nz,Pz];Wf=Q([Vn("md-radio")],Wf);const Oz=U("span",{"aria-hidden":"true"},"Mattina",-1),Mz=U("span",{"aria-hidden":"true"},"Pomeriggio",-1),Lz={props:{date:{type:Date,required:!0}},methods:{onSelect(t){this.$emit("select",{timeSlot:t})}}},$z=Rt({...Lz,__name:"BookSlot",setup(t){return(e,n)=>(X(),re("div",null,[U("h2",null,"Dai la disponibilità per il "+Ye(t.date.getDate())+" "+Ye(j(xa)[t.date.getMonth()]),1),U("form",null,[U("label",null,[U("md-radio",{onChange:n[0]||(n[0]=i=>e.onSelect("mattina")),type:"radio",name:"time",value:"mattina","aria-label":"Mattina","touch-target":"wrapper",checked:""},null,32),Oz]),U("label",null,[U("md-radio",{onChange:n[1]||(n[1]=i=>e.onSelect("pomeriggio")),type:"radio",name:"time",value:"pomeriggio","aria-label":"Pomeriggio","touch-target":"wrapper"},null,32),Mz])])]))}});const Vz={props:{date:{type:Date,required:!0},time:{type:String,required:!0}}},Fz=Rt({...Vz,__name:"ExistingSlot",setup(t){return(e,n)=>(X(),re("div",null,[U("h2",null,"Dai la disponibilità per il "+Ye(t.date.getDate())+" "+Ye(j(xa)[t.date.getMonth()])+" "+Ye(t.time),1)]))}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Uz extends qt{renderElevation(){return Mt`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Bz=en`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const zz=en`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kf=class extends Uz{};Kf.styles=[_g,zz,Bz];Kf=Q([Vn("md-filled-tonal-button")],Kf);var jz=Object.defineProperty,Hz=(t,e,n)=>e in t?jz(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zl=(t,e,n)=>(Hz(t,typeof e!="symbol"?e+"":e,n),n);const _l=()=>dh(new Date),qz=(t,e,n)=>{switch(e){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return bg(t,n);default:return t}},Wz=t=>[...Array(7)].map((e,n)=>fo(t,n)),fo=(t,e)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds()),bg=(t,e)=>fo(t,(e-t.getDay()-7)%-7),Kz=(t,e)=>fo(bg(t,e),7),Na=t=>new Date(t.getFullYear(),t.getMonth()),Gz=t=>Math.ceil(t.getDate()/7),Qz=(t,e,n)=>new Date(t.getFullYear()+(e=="year"?n:0),t.getMonth()+(e=="month"?n:0),t.getDate()+(e=="week"?n*7:0)),Eg=t=>("0"+String(t.getMonth()+1)).slice(-2),Ig=t=>("0"+String(t.getDate())).slice(-2),dR=t=>t.getFullYear()+"-"+Eg(t),Yz=t=>dR(t)+"-"+Ig(t),Xz=t=>Eg(t)+"-"+Ig(t),Jz=(t,e,n)=>{if(t.getHours()===0&&t.getMinutes()===0&&t.getSeconds()===0)return"";if(!fh()){var i=new Date().getTimezoneOffset()*6e4;return new Date(t.getTime()-i).toISOString().slice(11,16)}return t.toLocaleTimeString(e,n)},Zz=(t,e,n,i)=>{const s=t.getFullYear()===e.getFullYear(),r=pR(t,e),o=n!=="year"&&n!=="month";let a=[];return a.push(i[t.getMonth()]),o&&(a.push(" "),a.push(t.getDate())),s||(a.push(o?", ":" "),a.push(t.getFullYear())),!r||!s?(a.push(" – "),r||a.push(i[e.getMonth()]),o&&a.push(" ")):o&&a.push(" – "),o?(a.push(e.getDate()),a.push(", ")):a.push(" "),a.push(e.getFullYear()),a.join("")},fR=(t,e)=>{const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return(n-i)/864e5},e9=(t,e)=>!!t&&!!e&&fR(t,e)===0,t9=(t,e)=>!!t&&!!e&&t.getTime()===e.getTime(),pR=(t,e)=>!!t&&!!e&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth(),n9=t=>Na(t)<Na(_l()),i9=t=>Na(t)>Na(_l()),s9=t=>dh(t)>_l(),r9=t=>dh(t)<_l(),o9=t=>t.getMonth()!==fo(t,7).getMonth(),a9=t=>t.getMonth()!==fo(t,1).getMonth(),mR=t=>{let e=[...Array(7)].map(n=>0);return t.split(/\D/,7).forEach((n,i)=>e[i]=Number(n)),e[1]--,new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},Gf=t=>typeof t=="string"?mR(t):new Date(t),dh=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},l9=t=>t.substring(0,2),fh=()=>typeof Intl<"u",c9=(t,e)=>{if(!fh())return[...Array(12)].map(i=>"");const n=new Intl.DateTimeFormat(t,{month:e});return[...Array(12)].map((i,s)=>n.format(new Date(2017,s,1)))},u9=(t,e,n)=>{if(!fh())return[...Array(7)].map(s=>"");const i=new Intl.DateTimeFormat(t,{weekday:e});return[...Array(7)].map((s,r)=>i.format(new Date(2017,0,(r+1+n)%7)))},h9=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),d9=(t,e)=>{const n=t.classes?[...t.classes]:[];return e&&n.push("isHovered"),{originalItem:t,startDate:Gf(t.startDate),endDate:Gf(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id,url:t.url,tooltip:t.tooltip??t.title}},q={addDays:fo,beginningOfMonth:Na,beginningOfPeriod:qz,beginningOfWeek:bg,dateOnly:dh,dayDiff:fR,daysOfWeek:Wz,endOfWeek:Kz,formattedPeriod:Zz,formattedTime:Jz,fromIsoStringToLocalDate:mR,getDefaultBrowserLocale:h9,getFormattedMonthNames:c9,getFormattedWeekdayNames:u9,incrementPeriod:Qz,instanceOfMonth:Gz,isFutureMonth:i9,isInFuture:s9,isInPast:r9,isLastDayOfMonth:a9,isLastInstanceOfMonth:o9,isoMonthDay:Xz,isoYearMonth:dR,isoYearMonthDay:Yz,isPastMonth:n9,isSameDate:e9,isSameDateTime:t9,isSameMonth:pR,languageCode:l9,normalizeItem:d9,paddedDay:Ig,paddedMonth:Eg,supportsIntl:fh,today:_l,toLocalDate:Gf};class f9{constructor(){zl(this,"currentDragItem"),zl(this,"dateSelectionOrigin"),zl(this,"currentHoveredItemId",""),zl(this,"CalendarMath",q)}}const p9={class:"cv-header-days"},m9={key:0,class:"cv-weeknumber"},g9=["aria-multiselectable"],_9={key:0,class:"cv-weeknumber"},y9={class:"cv-weekdays"},v9=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],w9={class:"cv-day-number"},b9=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],E9=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],I9=Rt({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(t,{emit:e}){const n=t,i=Yr(new f9),s=Re(()=>n.locale||q.getDefaultBrowserLocale()),r=Re(()=>n.showDate?q.dateOnly(n.showDate):q.today()),o=Re(()=>q.beginningOfPeriod(r.value,n.displayPeriodUom,n.startingDayOfWeek)),a=Re(()=>q.addDays(q.incrementPeriod(o.value,n.displayPeriodUom,n.displayPeriodCount),-1)),l=Re(()=>{const _=q.beginningOfWeek(q.beginningOfPeriod(o.value,"year",0),n.startingDayOfWeek),T=q.beginningOfWeek(o.value,n.startingDayOfWeek);return 1+Math.floor(q.dayDiff(_,T)/7)}),c=Re(()=>q.beginningOfWeek(o.value,n.startingDayOfWeek)),u=Re(()=>q.endOfWeek(a.value,n.startingDayOfWeek)),h=Re(()=>{const _=Math.floor((q.dayDiff(c.value,u.value)+1)/7);return[...Array(_)].map((T,S)=>q.addDays(c.value,S*7))}),d=Re(()=>q.getFormattedMonthNames(s.value,n.monthNameFormat)),f=Re(()=>q.getFormattedWeekdayNames(s.value,n.weekdayNameFormat,n.startingDayOfWeek)),m=Re(()=>n.items?n.items.map(_=>q.normalizeItem(_,_.id===i.currentHoveredItemId)):[]),y=Re(()=>q.beginningOfPeriod(q.today(),n.displayPeriodUom,n.startingDayOfWeek)),v=Re(()=>q.addDays(q.incrementPeriod(y.value,n.displayPeriodUom,n.displayPeriodCount),-1)),b=Re(()=>q.formattedPeriod(o.value,a.value,n.displayPeriodUom,d.value)),I=Re(()=>{const _=y.value,T=o.value;return n.currentPeriodLabel?n.currentPeriodLabel==="icons"?n.currentPeriodLabelIcons[Math.sign(_.getTime()-T.getTime())+1]:n.currentPeriodLabel:q.formattedPeriod(_,v.value,n.displayPeriodUom,d.value)}),C=Re(()=>({previousYear:Y(-12),previousPeriod:Y(-1),nextPeriod:Y(1),previousFullPeriod:Y(-n.displayPeriodCount),nextFullPeriod:Y(n.displayPeriodCount),nextYear:Y(12),currentPeriod:y.value,currentPeriodLabel:I.value,periodStart:o.value,periodEnd:a.value,displayLocale:s.value,displayFirstDate:c.value,displayLastDate:u.value,monthNames:d.value,fixedItems:m.value,periodLabel:b.value})),E=Re(()=>({periodStart:o,periodEnd:a,displayFirstDate:c,displayLastDate:u}));qi(()=>E,_=>{n.periodChangedCallback&&(e("period-changed"),n.periodChangedCallback(_,"watch"))},{immediate:!0,deep:!0});const x=(_,T)=>{n.disablePast&&q.isInPast(_)||n.disableFuture&&q.isInFuture(_)||e("click-date",_,An(_,_),T)},H=(_,T)=>e("click-item",_,T),J=_=>"dow"+(_+n.startingDayOfWeek)%7,Y=_=>{const T=q.incrementPeriod(o.value,n.displayPeriodUom,_),S=q.incrementPeriod(T,n.displayPeriodUom,n.displayPeriodCount);return n.disablePast&&S<=q.today()||n.disableFuture&&T>q.today()?null:T},le=(_,T)=>{i.currentHoveredItemId=_.id,n.doEmitItemMouseEvents&&e("item-mouseenter",_,T)},Ae=(_,T)=>{i.currentHoveredItemId="",n.doEmitItemMouseEvents&&e("item-mouseleave",_,T)},ht=(_,T)=>{var S,F;if(!n.enableDateSelection)return!1;(S=T.dataTransfer)==null||S.setData("text",_.toString());let D=new Image;return D.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(F=T.dataTransfer)==null||F.setDragImage(D,10,10),i.dateSelectionOrigin=_,e("date-selection-start",St(_),T),!0},Ct=(_,T)=>{var S;return n.enableDragDrop?((S=T.dataTransfer)==null||S.setData("text",_.id),i.currentDragItem=_,i.dateSelectionOrigin=void 0,e("drag-start",_,T),!0):!1},St=_=>_<=i.dateSelectionOrigin?[_,i.dateSelectionOrigin]:[i.dateSelectionOrigin,_],ui=(_,T)=>{n.enableDragDrop&&e("drag-over-date",i.currentDragItem,_,T)},tn=(_,T)=>{n.enableDateSelection&&i.dateSelectionOrigin&&e("date-selection",St(_),T),n.enableDragDrop&&(e("drag-enter-date",i.currentDragItem,_,T),T.target.classList.add("draghover"))},we=(_,T)=>{n.enableDateSelection&&n.selectionStart||!n.enableDragDrop||(e("drag-leave-date",i.currentDragItem,_,T),T.target.classList.remove("draghover"))},De=(_,T)=>{if(n.enableDateSelection&&i.dateSelectionOrigin){e("date-selection-finish",St(_),T);return}n.enableDragDrop&&(e("drop-on-date",i.currentDragItem,_,T),T.target.classList.remove("draghover"))},Te=(_,T)=>_.startDate<T.startDate?-1:T.startDate<_.startDate?1:_.endDate>T.endDate?-1:T.endDate>_.endDate?1:_.id<T.id?-1:1,Tn=_=>An(_,q.addDays(_,6)),An=(_,T)=>m.value.filter(S=>S.endDate>=_&&q.dateOnly(S.startDate)<=T,this).sort(Te),vn=_=>!!m.value.find(T=>T.endDate>=_&&q.dateOnly(T.startDate)<=_),vt=_=>!(!n.selectionStart||!n.selectionEnd||_<q.dateOnly(n.selectionStart)||_>q.dateOnly(n.selectionEnd)),hi=_=>{const T=Tn(_),S=[],F=[[],[],[],[],[],[],[]];if(!T)return S;for(let D=0;D<T.length;D++){const p=Object.assign({},T[D],{classes:[...T[D].classes],itemRow:0}),g=p.startDate<_,w=g?0:q.dayDiff(_,p.startDate),A=Math.min(7-w,q.dayDiff(q.addDays(_,w),p.endDate)+1);g&&p.classes.push("continued"),q.dayDiff(_,p.endDate)>6&&p.classes.push("toBeContinued"),q.isInPast(p.endDate)&&p.classes.push("past"),p.originalItem.url&&p.classes.push("hasUrl");for(let R=0;R<7;R++)if(R===w){let P=0;for(;F[R][P];)P++;p.itemRow=P,F[R][P]=!0}else R<w+A&&(F[R][p.itemRow]=!0);p.classes.push(`offset${w}`),p.classes.push(`span${A}`),S.push(p)}return S},Pi=_=>{const T='<span class="startTime">'+q.formattedTime(_.startDate,s.value,n.timeFormatOptions)+"</span>";let S="";return q.isSameDateTime(_.startDate,_.endDate)||(S='<span class="endTime">'+q.formattedTime(_.endDate,s.value,n.timeFormatOptions)+"</span>"),T+S},us=_=>n.showTimes?Pi(_)+" "+_.title:_.title,Ze=_=>{const T=_.itemRow,S=n.itemContentHeight,F=n.itemBorderHeight;return`calc(${n.itemTop} + ${T}*${S} + ${T}*${F})`};return(_,T)=>(X(),re("div",{"aria-label":"Calendar",class:pi(["cv-wrapper",`locale-${j(q).languageCode(j(s))}`,`locale-${j(s)}`,`y${j(o).getFullYear()}`,`m${j(q).paddedMonth(j(o))}`,`period-${t.displayPeriodUom}`,`periodCount-${t.displayPeriodCount}`,{past:j(q).isPastMonth(j(o)),future:j(q).isFutureMonth(j(o)),noIntl:!j(q).supportsIntl}])},[zn(_.$slots,"header",{headerProps:j(C)}),U("div",p9,[t.displayWeekNumbers?(X(),re("div",m9)):it("",!0),(X(!0),re(et,null,mi(j(f),(S,F)=>zn(_.$slots,"dayHeader",{index:J(F),label:S},()=>[(X(),re("div",{key:J(F),class:pi([J(F),"cv-header-day"])},Ye(S),3))])),256))]),U("div",{"aria-multiselectable":t.enableDateSelection,class:"cv-weeks"},[(X(!0),re(et,null,mi(j(h),(S,F)=>(X(),re("div",{key:`${F}-week`,class:pi(["cv-week",`week${F+1}`,`ws${j(q).isoYearMonthDay(S)}`])},[t.displayWeekNumbers?(X(),re("div",_9,[zn(_.$slots,"weekNumber",{date:S,numberInYear:j(l)+F,numberInPeriod:F+1},()=>[U("span",null,Ye(j(l)+F),1)])])):it("",!0),U("div",y9,[(X(!0),re(et,null,mi(j(q).daysOfWeek(S),(D,p)=>(X(),re("div",{key:J(p),draggable:t.enableDateSelection,class:pi(["cv-day",J(p),`d${j(q).isoYearMonthDay(D)}`,`d${j(q).isoMonthDay(D)}`,`d${j(q).paddedDay(D)}`,`instance${j(q).instanceOfMonth(D)}`,{today:j(q).isSameDate(D,j(q).today()),outsideOfMonth:!j(q).isSameMonth(D,j(r)),past:j(q).isInPast(D),future:j(q).isInFuture(D),last:j(q).isLastDayOfMonth(D),lastInstance:j(q).isLastInstanceOfMonth(D),hasItems:vn(D),selectionStart:j(q).isSameDate(D,t.selectionStart),selectionEnd:j(q).isSameDate(D,t.selectionEnd)},...t.dateClasses&&t.dateClasses[j(q).isoYearMonthDay(D)]||[]]),"aria-grabbed":t.enableDateSelection?vt(D):void 0,"aria-label":D.getDate().toString(),"aria-selected":vt(D),"aria-dropeffect":t.enableDragDrop&&i.currentDragItem?"move":t.enableDateSelection&&i.dateSelectionOrigin?"execute":"none",onClick:g=>x(D,g),onDragstart:g=>ht(D,g),onDrop:nr(g=>De(D,g),["prevent"]),onDragover:nr(g=>ui(D,g),["prevent"]),onDragenter:nr(g=>tn(D,g),["prevent"]),onDragleave:nr(g=>we(D,g),["prevent"])},[U("div",w9,Ye(D.getDate()),1),zn(_.$slots,"dayContent",{day:D})],42,v9))),128)),n.enableHtmlTitles?(X(!0),re(et,{key:0},mi(hi(S),D=>zn(_.$slots,"item",{value:D,weekStartDate:S,top:Ze(D)},()=>[(X(),re("div",{key:D.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?D==i.currentDragItem:void 0,class:pi([D.classes,"cv-item"]),title:D.tooltip||D.title,style:Jo(`top:${Ze(D)};${D.originalItem.style}`),onDragstart:p=>Ct(D,p),onMouseenter:p=>le(D,p),onMouseleave:p=>Ae(D,p),onClick:nr(p=>H(D,p),["stop"]),innerHTML:us(D)},null,46,b9))])),256)):(X(!0),re(et,{key:1},mi(hi(S),D=>zn(_.$slots,"item",{value:D,weekStartDate:S,top:Ze(D)},()=>[(X(),re("div",{key:D.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?D==i.currentDragItem:void 0,class:pi([D.classes,"cv-item"]),title:D.tooltip||D.title,style:Jo(`top:${Ze(D)};${D.originalItem.style}`),onDragstart:p=>Ct(D,p),onMouseenter:p=>le(D,p),onMouseleave:p=>Ae(D,p),onClick:nr(p=>H(D,p),["stop"])},Ye(us(D)),47,E9)),Dt(" div> ")])),256))])],2))),128))],8,g9)],2))}}),T9={class:"calendarHeader"},A9=U("md-icon",null,"chevron_left",-1),R9=[A9],C9=U("md-icon",null,"today",-1),S9=[C9],k9=U("md-icon",null,"chevron_right",-1),P9=[k9],x9={class:"date"},D9=Rt({__name:"CalendarHeader",props:{headerProps:{type:Object,required:!0}},emits:["input"],setup(t,{emit:e}){const n=t;function i(){e("input",n.headerProps.nextPeriod)}function s(){e("input",n.headerProps.currentPeriod)}function r(){e("input",n.headerProps.previousPeriod)}return(o,a)=>(X(),re("div",T9,[U("div",{class:"navButtons"},[U("md-icon-button",{onClick:r},R9),U("md-icon-button",{onClick:s},S9),U("md-icon-button",{onClick:i},P9)]),U("div",x9,Ye(j(xa)[n.headerProps.periodStart.getMonth()]),1)]))}});const N9={class:"calendarContainer"},O9={id:"calendar-component"},M9=Rt({__name:"Calendar",emits:["onClickDay","onClickItem"],setup(t,{emit:e}){var d;let n=Fe(new Date);const i=(d=Ks().value)==null?void 0:d.uid;function s(f){return f.map(y=>{const v=y.id.substring(0,8),b=y.id.charAt(y.id.length-1);let I;if(b==="M")I=8;else if(b==="P")I=15;else throw new Error("Formato ID non riconosciuto");const C=new Date(parseInt(v.substring(0,4),10),parseInt(v.substring(4,6),10)-1,parseInt(v.substring(6,8),10),I),E=new Date(C);E.setHours(C.getHours()+4);const x=y.players||y.users,H=x.filter(J=>J.id===i).length>0;return{id:y.id,startDate:C,endDate:E,title:x.length>=3?"Al completo":`${3-x.length} posti disponibili`,classes:H?["bookedByUser"]:["green"],slotAvailables:3-x.length,playersNames:x.map(J=>J.username),bookedByUser:H}})}const r=DT(dn,"availabilities"),o=tA(r,{wait:!0}),a=Re(()=>s(o.value));function l(f,m){return m.filter(y=>y.slotAvailables===0&&y.startDate.getFullYear()===f.getFullYear()&&y.startDate.getMonth()===f.getMonth()&&y.startDate.getDate()===f.getDate())}function c(f){n.value=f}function u(f){l(f,a.value).length>=1||e("onClickDay",f)}function h(f){f.endDate<new Date||e("onClickItem",f)}return(f,m)=>(X(),re("div",N9,[U("div",O9,[Be(j(I9),{"show-date":j(n),class:"theme-default",onClickDate:u,onClickItem:h,items:a.value,"disable-past":!0,"current-period-label":"icons","display-period-uom":"month",startingDayOfWeek:1},{header:Gt(({headerProps:y})=>[Be(D9,{headerProps:y,onInput:c},null,8,["headerProps"])]),_:1},8,["show-date","items"])])]))}});const L9={class:"squadGen"},$9={key:0,class:"squads"},V9={class:"squad"},F9=Rt({__name:"SquadGenerator",props:{players:{}},setup(t){const e=t,n=Fe();function i(r){const o=[],a=r.slice().sort(()=>Math.random()-.5);for(let l=a.length-1;l>=0;l--)l%2!==0&&o.push(a.splice(l,1)[0]);return[a,o]}function s(){n.value=i(e.players)}return(r,o)=>(X(),re("div",L9,[n.value&&n.value.length>0?(X(),re("div",$9,[(X(!0),re(et,null,mi(n.value,(a,l)=>(X(),re("div",V9,[U("b",null," Squadra "+Ye(l+1),1),(X(!0),re(et,null,mi(a,c=>(X(),re("div",null,Ye(c),1))),256))]))),256))])):it("",!0),U("md-filled-tonal-button",{onClick:s}," Genera squadre ")]))}});const U9={class:"availabilityView"},B9=U("div",{class:"istruzioni"}," Per prenotare, clicca su un giorno vuoto o su uno slot già creato ",-1),z9=["open"],j9=U("div",{slot:"headline"},"Non puoi prenotare",-1),H9=U("form",{id:"form",slot:"content",method:"dialog"}," Hai ricevuto due o più ammonizioni e non puoi più prenotare. Dai un'occhiata al regolamento se vuoi sapere come ridurre le tue ammonizioni. ",-1),q9={slot:"actions"},W9=["open"],K9=U("div",{slot:"headline"},"Slot prenotato",-1),G9={slot:"content",id:"form-id",method:"dialog"},Q9=["open"],Y9=U("div",{slot:"headline"},"Prenota slot",-1),X9={slot:"content",id:"form-id",method:"dialog"},J9={key:0,class:"error-text alert"},Z9={key:3,class:"clausola"},ej={slot:"actions"},tj={key:0},nj=U("a",{target:"_blank",rel:"noopener noreferrer",href:"https://calendar.google.com/calendar/embed?src=rho5n91oc32t7pdipjecqvpe9s%40group.calendar.google.com&ctz=Europe%2FRome"},[U("md-filled-tonal-button",{id:"addToCalendar"},[Dt(" Aggiungi calendario a Google Calendar "),U("md-icon",{slot:"icon"},"calendar_add_on")])],-1),ij=1.3,sj=Rt({__name:"AvailabilityView",setup(t){var C;const e=Fe(!1),n=Fe(!1),i=Fe(!1),s=Fe(new Date),r=Fe("mattina"),o=Fe(!1),a=Fe(!1),l=Fe(!1),c=Fe(!1),u=Fe(!1),h=Fe([]),d=(C=Ks().value)==null?void 0:C.uid,f=nA(Wn(dn,`users/${d}`));function m(E,x){return`availabilities/${E.getFullYear()}${(E.getMonth()+1).toString().padStart(2,"0")}${E.getDate().toString().padStart(2,"0")}-${x==="mattina"?"M":"P"}`}async function y(){if(c.value=!1,s.value==null||r.value==null){console.error("Ma che cazz");return}o.value=!0;const E=Wn(dn,m(s.value,r.value)),x=Wn(dn,`users/${d}/${m(s.value,r.value)}`);(await th(E)).exists()?qV(E,{players:QV(Wn(dn,`users/${d}`))}):uv(E,{players:[Wn(dn,`users/${d}`)]}),uv(x,{date:s.value,timeSlot:r.value}),o.value=!1,a.value=!0,n.value=!1,e.value=!1}function v(E){var x;if(((x=f.value)==null?void 0:x.admonitionCount)>=2){l.value=!0;return}i.value=!I(),c.value=!0,a.value=!1,s.value=E,n.value=!1,e.value=!0}function b(E){var x;if(i.value=!I(),E.originalItem.bookedByUser){u.value=!0,h.value=["Danilo",...E.originalItem.playersNames];return}if(((x=f.value)==null?void 0:x.admonitionCount)>=2){l.value=!0;return}a.value=!1,c.value=!0,E.originalItem.slotAvailables>0&&(r.value=E.id.charAt(E.id.length-1)==="M"?"mattina":"pomeriggio",s.value=E.startDate,n.value=!0,e.value=!1)}function I(){const E=localStorage.getItem("lastRulesRead");return E!=null&&E===ij.toString()}return(E,x)=>{const H=$a("RouterLink");return X(),re("div",U9,[B9,Be(M9,{onOnClickDay:v,onOnClickItem:b}),U("md-dialog",{type:"alert",open:l.value},[j9,H9,U("div",q9,[U("md-text-button",{form:"form",value:"ok",onClick:x[0]||(x[0]=J=>l.value=!1)},"OK")])],8,z9),U("md-dialog",{type:"alert",open:u.value,onClose:x[1]||(x[1]=J=>u.value=!1)},[K9,U("div",G9,[Dt(" Giocatori: "),U("ul",null,[(X(!0),re(et,null,mi(h.value,J=>(X(),re("li",null,Ye(J),1))),256))]),Be(F9,{players:h.value},null,8,["players"])])],40,W9),U("md-dialog",{type:"alert",open:c.value},[Y9,U("form",X9,[i.value?(X(),re("div",J9,[Dt("Dall'ultima volta che hai letto il regolamento ci sono state delle modifiche! Leggi il "),Be(H,{class:"link",to:"/rules"},{default:Gt(()=>[Dt("regolamento aggiornato qui")]),_:1})])):it("",!0),e.value&&!o.value?(X(),si($z,{key:1,date:s.value,onSelect:x[2]||(x[2]=J=>r.value=J.timeSlot)},null,8,["date"])):it("",!0),n.value&&!o.value?(X(),si(Fz,{key:2,date:s.value,time:r.value},null,8,["date","time"])):it("",!0),!o.value&&(e.value||n.value)?(X(),re("div",Z9,[Dt("Confermando accetti "),Be(H,{class:"link",to:"/rules"},{default:Gt(()=>[Dt(" il regolamento")]),_:1})])):it("",!0)]),U("div",ej,[U("md-text-button",{form:"form-id",value:"cancel",onClick:x[3]||(x[3]=J=>c.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:y},"Conferma")])],8,Q9),a.value?(X(),re("div",tj,"Prenotato")):it("",!0),nj])}}});const rj="/assets/btn_google_light_normal_ios-464e961b.svg",oj={key:0},aj={key:1},lj=new gi,cj=Rt({__name:"Login",setup(t){const e=OF();function n(){Cx(e,lj).catch(s=>{console.error("Failed signinRedirect",s)})}Qw(()=>{Ox(e).catch(s=>{console.error("Failed redirect result",s)})});const i=Ks();return(s,r)=>(X(),re(et,null,[j(i)?it("",!0):(X(),re("p",oj,"Effettua il login con Google")),U("img",{onClick:n,alt:"Login button",class:"loginBtn",src:rj,width:"125",height:"125"}),j(i)?(X(),re("p",aj,"Loggato come "+Ye(j(i).providerData[0].displayName),1)):it("",!0)],64))}});const uj=t=>(Ma("data-v-715d64c9"),t=t(),La(),t),hj=uj(()=>U("div",null,"Ritorna alla home",-1)),dj=Rt({__name:"LoginView",setup(t){return(e,n)=>{const i=$a("RouterLink");return X(),re("main",null,[Be(cj),Be(i,{to:"/"},{default:Gt(()=>[hj]),_:1})])}}});const fj=pl(dj,[["__scopeId","data-v-715d64c9"]]),gR=w4({history:$U("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:hz},{path:"/login",name:"login",component:fj},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:sj},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:rR},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:kz},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>C4(()=>import("./AdminView-026f294f.js"),["assets/AdminView-026f294f.js","assets/AdminView-db567cca.css"])}]});gR.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await O_())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await O_();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const i=await th(Wn(dn,`users/${n.uid}`));if(!i.exists()||((e=i.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const ph=US(T4);ph.use(LF());ph.use(gR);ph.use(MF,{firebaseApp:cg,modules:[NF()]});ph.mount("#app");export{et as F,pl as _,Re as a,re as b,DT as c,Rt as d,U as e,dn as f,it as g,La as h,xa as m,X as o,Ma as p,mi as r,Ye as t,tA as u};
