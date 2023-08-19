(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Dh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},mi=[],Xt=()=>{},cw=()=>!1,uw=/^on[^a-z]/,El=t=>uw.test(t),xh=t=>t.startsWith("onUpdate:"),He=Object.assign,Mh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hw=Object.prototype.hasOwnProperty,de=(t,e)=>hw.call(t,e),G=Array.isArray,_i=t=>go(t)==="[object Map]",Tl=t=>go(t)==="[object Set]",qf=t=>go(t)==="[object Date]",se=t=>typeof t=="function",Fe=t=>typeof t=="string",Br=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",o_=t=>Re(t)&&se(t.then)&&se(t.catch),a_=Object.prototype.toString,go=t=>a_.call(t),dw=t=>go(t).slice(8,-1),l_=t=>go(t)==="[object Object]",Lh=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ga=Dh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fw=/-(\w)/g,vn=Il(t=>t.replace(fw,(e,n)=>n?n.toUpperCase():"")),pw=/\B([A-Z])/g,Ki=Il(t=>t.replace(pw,"-$1").toLowerCase()),wl=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=Il(t=>t?`on${wl(t)}`:""),$r=(t,e)=>!Object.is(t,e),ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},c_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gw=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Kf;const mu=()=>Kf||(Kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?vw(s):Vh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Re(t))return t}}const mw=/;(?![^(]*\))/g,_w=/:([^]+)/,yw=/\/\*[^]*?\*\//g;function vw(t){const e={};return t.replace(yw,"").split(mw).forEach(n=>{if(n){const s=n.split(_w);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fh(t){let e="";if(Fe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Fh(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ew="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tw=Dh(Ew);function u_(t){return!!t||t===""}function Iw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Al(t[s],e[s]);return n}function Al(t,e){if(t===e)return!0;let n=qf(t),s=qf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Br(t),s=Br(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?Iw(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Al(t[o],e[o]))return!1}}return String(t)===String(e)}function ww(t,e){return t.findIndex(n=>Al(n,e))}const KL=t=>Fe(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===a_||!se(t.toString))?JSON.stringify(t,h_,2):String(t),h_=(t,e)=>e&&e.__v_isRef?h_(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Tl(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!G(e)&&!l_(e)?String(e):e;let Pt;class d_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function f_(t){return new d_(t)}function Aw(t,e=Pt){e&&e.active&&e.effects.push(t)}function p_(){return Pt}function Rw(t){Pt&&Pt.cleanups.push(t)}const Uh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},g_=t=>(t.w&hs)>0,m_=t=>(t.n&hs)>0,Cw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hs},Sw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];g_(i)&&!m_(i)?i.delete(t):e[n++]=i,i.w&=~hs,i.n&=~hs}e.length=n}},_u=new WeakMap;let mr=0,hs=1;const yu=30;let qt;const Ls=Symbol(""),vu=Symbol("");class Bh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Aw(this,s)}run(){if(!this.active)return this.fn();let e=qt,n=is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,is=!0,hs=1<<++mr,mr<=yu?Cw(this):zf(this),this.fn()}finally{mr<=yu&&Sw(this),hs=1<<--mr,qt=this.parent,is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(zf(this),this.onStop&&this.onStop(),this.active=!1)}}function zf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let is=!0;const __=[];function zi(){__.push(is),is=!1}function Gi(){const t=__.pop();is=t===void 0?!0:t}function St(t,e,n){if(is&&qt){let s=_u.get(t);s||_u.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Uh()),y_(i)}}function y_(t,e){let n=!1;mr<=yu?m_(t)||(t.n|=hs,n=!g_(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function Vn(t,e,n,s,i,r){const o=_u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Lh(n)&&a.push(o.get("length")):(a.push(o.get(Ls)),_i(t)&&a.push(o.get(vu)));break;case"delete":G(t)||(a.push(o.get(Ls)),_i(t)&&a.push(o.get(vu)));break;case"set":_i(t)&&a.push(o.get(Ls));break}if(a.length===1)a[0]&&Eu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Eu(Uh(l))}}function Eu(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Gf(s);for(const s of n)s.computed||Gf(s)}function Gf(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bw=Dh("__proto__,__v_isRef,__isVue"),v_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),Pw=$h(),kw=$h(!1,!0),Nw=$h(!0),Qf=Ow();function Ow(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zi();const s=pe(this)[e].apply(this,n);return Gi(),s}}),t}function Dw(t){const e=pe(this);return St(e,"has",t),e.hasOwnProperty(t)}function $h(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Qw:A_:e?w_:I_).get(s))return s;const o=G(s);if(!t){if(o&&de(Qf,i))return Reflect.get(Qf,i,r);if(i==="hasOwnProperty")return Dw}const a=Reflect.get(s,i,r);return(Br(i)?v_.has(i):bw(i))||(t||St(s,"get",i),e)?a:tt(a)?o&&Lh(i)?a:a.value:Re(a)?t?C_(a):Cl(a):a}}const xw=E_(),Mw=E_(!0);function E_(t=!1){return function(n,s,i,r){let o=n[s];if(Pi(o)&&tt(o)&&!tt(i))return!1;if(!t&&(!ka(i)&&!Pi(i)&&(o=pe(o),i=pe(i)),!G(n)&&tt(o)&&!tt(i)))return o.value=i,!0;const a=G(n)&&Lh(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?$r(i,o)&&Vn(n,"set",s,i):Vn(n,"add",s,i)),l}}function Lw(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vn(t,"delete",e,void 0),s}function Vw(t,e){const n=Reflect.has(t,e);return(!Br(e)||!v_.has(e))&&St(t,"has",e),n}function Fw(t){return St(t,"iterate",G(t)?"length":Ls),Reflect.ownKeys(t)}const T_={get:Pw,set:xw,deleteProperty:Lw,has:Vw,ownKeys:Fw},Uw={get:Nw,set(t,e){return!0},deleteProperty(t,e){return!0}},Bw=He({},T_,{get:kw,set:Mw}),jh=t=>t,Rl=t=>Reflect.getPrototypeOf(t);function Ko(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=Rl(i),a=s?jh:n?Kh:jr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function zo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Go(t,e=!1){return t=t.__v_raw,!e&&St(pe(t),"iterate",Ls),Reflect.get(t,"size",t)}function Yf(t){t=pe(t);const e=pe(this);return Rl(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function Xf(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=Rl(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?$r(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Jf(t){const e=pe(this),{has:n,get:s}=Rl(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vn(e,"delete",t,void 0),r}function Zf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function Qo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?jh:t?Kh:jr;return!t&&St(a,"iterate",Ls),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Yo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=_i(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?jh:e?Kh:jr;return!e&&St(r,"iterate",l?vu:Ls),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:this}}function $w(){const t={get(r){return Ko(this,r)},get size(){return Go(this)},has:zo,add:Yf,set:Xf,delete:Jf,clear:Zf,forEach:Qo(!1,!1)},e={get(r){return Ko(this,r,!1,!0)},get size(){return Go(this)},has:zo,add:Yf,set:Xf,delete:Jf,clear:Zf,forEach:Qo(!1,!0)},n={get(r){return Ko(this,r,!0)},get size(){return Go(this,!0)},has(r){return zo.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Qo(!0,!1)},s={get(r){return Ko(this,r,!0,!0)},get size(){return Go(this,!0)},has(r){return zo.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yo(r,!1,!1),n[r]=Yo(r,!0,!1),e[r]=Yo(r,!1,!0),s[r]=Yo(r,!0,!0)}),[t,n,e,s]}const[jw,Hw,Ww,qw]=$w();function Hh(t,e){const n=e?t?qw:Ww:t?Hw:jw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const Kw={get:Hh(!1,!1)},zw={get:Hh(!1,!0)},Gw={get:Hh(!0,!1)},I_=new WeakMap,w_=new WeakMap,A_=new WeakMap,Qw=new WeakMap;function Yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xw(t){return t.__v_skip||!Object.isExtensible(t)?0:Yw(dw(t))}function Cl(t){return Pi(t)?t:Wh(t,!1,T_,Kw,I_)}function R_(t){return Wh(t,!1,Bw,zw,w_)}function C_(t){return Wh(t,!0,Uw,Gw,A_)}function Wh(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Xw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function yi(t){return Pi(t)?yi(t.__v_raw):!!(t&&t.__v_isReactive)}function Pi(t){return!!(t&&t.__v_isReadonly)}function ka(t){return!!(t&&t.__v_isShallow)}function S_(t){return yi(t)||Pi(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function qh(t){return Pa(t,"__v_skip",!0),t}const jr=t=>Re(t)?Cl(t):t,Kh=t=>Re(t)?C_(t):t;function b_(t){is&&qt&&(t=pe(t),y_(t.dep||(t.dep=Uh())))}function P_(t,e){t=pe(t);const n=t.dep;n&&Eu(n)}function tt(t){return!!(t&&t.__v_isRef===!0)}function rs(t){return N_(t,!1)}function k_(t){return N_(t,!0)}function N_(t,e){return tt(t)?t:new Jw(t,e)}class Jw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:jr(e)}get value(){return b_(this),this._value}set value(e){const n=this.__v_isShallow||ka(e)||Pi(e);e=n?e:pe(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),P_(this))}}function at(t){return tt(t)?t.value:t}const Zw={get:(t,e,n)=>at(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function O_(t){return yi(t)?t:new Proxy(t,Zw)}class eA{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Bh(e,()=>{this._dirty||(this._dirty=!0,P_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return b_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tA(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=Xt):(s=t.get,i=t.set),new eA(s,i,r||!i,n)}function os(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Sl(r,e,n)}return i}function Bt(t,e,n,s){if(se(t)){const r=os(t,e,n,s);return r&&o_(r)&&r.catch(o=>{Sl(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}function Sl(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){os(l,null,10,[t,o,a]);return}}nA(t,n,i,s)}function nA(t,e,n,s=!0){console.error(t)}let Hr=!1,Tu=!1;const ht=[];let ln=0;const vi=[];let kn=null,Ss=0;const D_=Promise.resolve();let zh=null;function x_(t){const e=zh||D_;return t?e.then(this?t.bind(this):t):e}function sA(t){let e=ln+1,n=ht.length;for(;e<n;){const s=e+n>>>1;Wr(ht[s])<t?e=s+1:n=s}return e}function Gh(t){(!ht.length||!ht.includes(t,Hr&&t.allowRecurse?ln+1:ln))&&(t.id==null?ht.push(t):ht.splice(sA(t.id),0,t),M_())}function M_(){!Hr&&!Tu&&(Tu=!0,zh=D_.then(V_))}function iA(t){const e=ht.indexOf(t);e>ln&&ht.splice(e,1)}function rA(t){G(t)?vi.push(...t):(!kn||!kn.includes(t,t.allowRecurse?Ss+1:Ss))&&vi.push(t),M_()}function ep(t,e=Hr?ln+1:0){for(;e<ht.length;e++){const n=ht[e];n&&n.pre&&(ht.splice(e,1),e--,n())}}function L_(t){if(vi.length){const e=[...new Set(vi)];if(vi.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,s)=>Wr(n)-Wr(s)),Ss=0;Ss<kn.length;Ss++)kn[Ss]();kn=null,Ss=0}}const Wr=t=>t.id==null?1/0:t.id,oA=(t,e)=>{const n=Wr(t)-Wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function V_(t){Tu=!1,Hr=!0,ht.sort(oA);const e=Xt;try{for(ln=0;ln<ht.length;ln++){const n=ht[ln];n&&n.active!==!1&&os(n,null,14)}}finally{ln=0,ht.length=0,L_(),Hr=!1,zh=null,(ht.length||vi.length)&&V_()}}function aA(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(c_))}let a,l=s[a=bc(e)]||s[a=bc(vn(e))];!l&&r&&(l=s[a=bc(Ki(e))]),l&&Bt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(c,t,6,i)}}function F_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=F_(c,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):He(o,r),Re(t)&&s.set(t,o),o)}function bl(t,e){return!t||!El(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Ki(e))||de(t,e))}let nt=null,Pl=null;function Na(t){const e=nt;return nt=t,Pl=t&&t.type.__scopeId||null,e}function lA(t){Pl=t}function cA(){Pl=null}function ci(t,e=nt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fp(-1);const r=Na(e);let o;try{o=t(...i)}finally{Na(r),s._d&&fp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Pc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:_}=t;let v,T;const R=Na(t);try{if(n.shapeFlag&4){const w=i||s;v=an(u.call(w,w,h,r,f,d,m)),T=l}else{const w=e;v=an(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),T=e.props?l:uA(l)}}catch(w){br.length=0,Sl(w,t,1),v=We($t)}let S=v;if(T&&_!==!1){const w=Object.keys(T),{shapeFlag:B}=S;w.length&&B&7&&(o&&w.some(xh)&&(T=hA(T,o)),S=ds(S,T))}return n.dirs&&(S=ds(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),v=S,Na(R),v}const uA=t=>{let e;for(const n in t)(n==="class"||n==="style"||El(n))&&((e||(e={}))[n]=t[n]);return e},hA=(t,e)=>{const n={};for(const s in t)(!xh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dA(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?tp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!bl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tp(s,o,c):!0:!!o;return!1}function tp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!bl(n,r))return!0}return!1}function fA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pA=t=>t.__isSuspense;function gA(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):rA(t)}const Xo={};function Ei(t,e,n){return U_(t,e,n)}function U_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){var a;const l=p_()===((a=Ge)==null?void 0:a.scope)?Ge:null;let c,u=!1,h=!1;if(tt(t)?(c=()=>t.value,u=ka(t)):yi(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(w=>yi(w)||ka(w)),c=()=>t.map(w=>{if(tt(w))return w.value;if(yi(w))return ks(w);if(se(w))return os(w,l,2)})):se(t)?e?c=()=>os(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Bt(t,l,3,[f])}:c=Xt,e&&s){const w=c;c=()=>ks(w())}let d,f=w=>{d=R.onStop=()=>{os(w,l,4)}},m;if(Kr)if(f=Xt,e?n&&Bt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const w=d0();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Xt;let _=h?new Array(t.length).fill(Xo):Xo;const v=()=>{if(R.active)if(e){const w=R.run();(s||u||(h?w.some((B,j)=>$r(B,_[j])):$r(w,_)))&&(d&&d(),Bt(e,l,3,[w,_===Xo?void 0:h&&_[0]===Xo?[]:_,f]),_=w)}else R.run()};v.allowRecurse=!!e;let T;i==="sync"?T=v:i==="post"?T=()=>Rt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>Gh(v));const R=new Bh(c,T);e?n?v():_=R.run():i==="post"?Rt(R.run.bind(R),l&&l.suspense):R.run();const S=()=>{R.stop(),l&&l.scope&&Mh(l.scope.effects,R)};return m&&m.push(S),S}function mA(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?B_(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=Ge;ki(this);const a=U_(i,r.bind(s),n);return o?ki(o):Vs(),a}function B_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ks(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))ks(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)ks(t[n],e);else if(Tl(t)||_i(t))t.forEach(n=>{ks(n,e)});else if(l_(t))for(const n in t)ks(t[n],e);return t}function zL(t,e){const n=nt;if(n===null)return t;const s=Ml(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&ks(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ts(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(zi(),Bt(l,n,8,[t.el,a,t,e]),Gi())}}function _A(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return q_(()=>{t.isMounted=!0}),K_(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],$_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},yA={name:"BaseTransition",props:$_,setup(t,{slots:e}){const n=td(),s=_A();let i;return()=>{const r=e.default&&H_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==$t){o=_;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return kc(o);const c=np(o);if(!c)return kc(o);const u=Iu(c,a,s,n);wu(c,u);const h=n.subTree,d=h&&np(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,f=!0)}if(d&&d.type!==$t&&(!bs(c,d)||f)){const _=Iu(d,a,s,n);if(wu(d,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},kc(o);l==="in-out"&&c.type!==$t&&(_.delayLeave=(v,T,R)=>{const S=j_(s,d);S[String(d.key)]=d,v._leaveCb=()=>{T(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return o}}},vA=yA;function j_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Iu(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:T,onAppearCancelled:R}=e,S=String(t.key),w=j_(n,t),B=(F,ie)=>{F&&Bt(F,s,9,ie)},j=(F,ie)=>{const re=ie[1];B(F,ie),G(F)?F.every(De=>De.length<=1)&&re():F.length<=1&&re()},te={mode:r,persisted:o,beforeEnter(F){let ie=a;if(!n.isMounted)if(i)ie=_||a;else return;F._leaveCb&&F._leaveCb(!0);const re=w[S];re&&bs(t,re)&&re.el._leaveCb&&re.el._leaveCb(),B(ie,[F])},enter(F){let ie=l,re=c,De=u;if(!n.isMounted)if(i)ie=v||l,re=T||c,De=R||u;else return;let H=!1;const ve=F._enterCb=Et=>{H||(H=!0,Et?B(De,[F]):B(re,[F]),te.delayedLeave&&te.delayedLeave(),F._enterCb=void 0)};ie?j(ie,[F,ve]):ve()},leave(F,ie){const re=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ie();B(h,[F]);let De=!1;const H=F._leaveCb=ve=>{De||(De=!0,ie(),ve?B(m,[F]):B(f,[F]),F._leaveCb=void 0,w[re]===t&&delete w[re])};w[re]=t,d?j(d,[F,H]):H()},clone(F){return Iu(F,e,n,s)}};return te}function kc(t){if(Nl(t))return t=ds(t),t.children=null,t}function np(t){return Nl(t)?t.children?t.children[0]:void 0:t}function wu(t,e){t.shapeFlag&6&&t.component?wu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function H_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Vt?(o.patchFlag&128&&i++,s=s.concat(H_(o.children,e,a))):(e||o.type!==$t)&&s.push(a!=null?ds(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function kl(t,e){return se(t)?(()=>He({name:t.name},e,{setup:t}))():t}const Rr=t=>!!t.type.__asyncLoader,Nl=t=>t.type.__isKeepAlive;function EA(t,e){W_(t,"a",e)}function TA(t,e){W_(t,"da",e)}function W_(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ol(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Nl(i.parent.vnode)&&IA(s,e,n,i),i=i.parent}}function IA(t,e,n,s){const i=Ol(e,t,s,!0);z_(()=>{Mh(s[e],i)},n)}function Ol(t,e,n=Ge,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zi(),ki(n);const a=Bt(e,n,t,o);return Vs(),Gi(),a});return s?i.unshift(r):i.push(r),r}}const Hn=t=>(e,n=Ge)=>(!Kr||t==="sp")&&Ol(t,(...s)=>e(...s),n),wA=Hn("bm"),q_=Hn("m"),AA=Hn("bu"),RA=Hn("u"),K_=Hn("bum"),z_=Hn("um"),G_=Hn("sp"),CA=Hn("rtg"),SA=Hn("rtc");function bA(t,e=Ge){Ol("ec",t,e)}const Q_="components";function PA(t,e){return NA(Q_,t,!0,e)||t}const kA=Symbol.for("v-ndc");function NA(t,e,n=!0,s=!1){const i=nt||Ge;if(i){const r=i.type;if(t===Q_){const a=c0(r,!1);if(a&&(a===e||a===vn(e)||a===wl(vn(e))))return r}const o=sp(i[t]||r[t],e)||sp(i.appContext[t],e);return!o&&s?r:o}}function sp(t,e){return t&&(t[e]||t[vn(e)]||t[wl(vn(e))])}function GL(t,e,n,s){let i;const r=n&&n[s];if(G(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function OA(t,e,n={},s,i){if(nt.isCE||nt.parent&&Rr(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),We("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),mo();const o=r&&Y_(r(n)),a=Jh(Vt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Y_(t){return t.some(e=>xa(e)?!(e.type===$t||e.type===Vt&&!Y_(e.children)):!0)?t:null}const Au=t=>t?ly(t)?Ml(t)||t.proxy:Au(t.parent):null,Cr=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$emit:t=>t.emit,$options:t=>Qh(t),$forceUpdate:t=>t.f||(t.f=()=>Gh(t.update)),$nextTick:t=>t.n||(t.n=x_.bind(t.proxy)),$watch:t=>mA.bind(t)}),Nc=(t,e)=>t!==be&&!t.__isScriptSetup&&de(t,e),DA={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Nc(s,e))return o[e]=1,s[e];if(i!==be&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==be&&de(n,e))return o[e]=4,n[e];Ru&&(o[e]=0)}}const u=Cr[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&de(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Nc(i,e)?(i[e]=n,!0):s!==be&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&de(t,o)||Nc(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(Cr,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ip(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ru=!0;function xA(t){const e=Qh(t),n=t.proxy,s=t.ctx;Ru=!1,e.beforeCreate&&rp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:R,destroyed:S,unmounted:w,render:B,renderTracked:j,renderTriggered:te,errorCaptured:F,serverPrefetch:ie,expose:re,inheritAttrs:De,components:H,directives:ve,filters:Et}=e;if(c&&MA(c,s,null),o)for(const Ae in o){const me=o[Ae];se(me)&&(s[Ae]=me.bind(n))}if(i){const Ae=i.call(n,n);Re(Ae)&&(t.data=Cl(Ae))}if(Ru=!0,r)for(const Ae in r){const me=r[Ae],bn=se(me)?me.bind(n,n):se(me.get)?me.get.bind(n,n):Xt,qn=!se(me)&&se(me.set)?me.set.bind(n):Xt,sn=Kt({get:bn,set:qn});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>sn.value,set:At=>sn.value=At})}if(a)for(const Ae in a)X_(a[Ae],s,n,Ae);if(l){const Ae=se(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(me=>{_a(me,Ae[me])})}u&&rp(u,t,"c");function Ve(Ae,me){G(me)?me.forEach(bn=>Ae(bn.bind(n))):me&&Ae(me.bind(n))}if(Ve(wA,h),Ve(q_,d),Ve(AA,f),Ve(RA,m),Ve(EA,_),Ve(TA,v),Ve(bA,F),Ve(SA,j),Ve(CA,te),Ve(K_,R),Ve(z_,w),Ve(G_,ie),G(re))if(re.length){const Ae=t.exposed||(t.exposed={});re.forEach(me=>{Object.defineProperty(Ae,me,{get:()=>n[me],set:bn=>n[me]=bn})})}else t.exposed||(t.exposed={});B&&t.render===Xt&&(t.render=B),De!=null&&(t.inheritAttrs=De),H&&(t.components=H),ve&&(t.directives=ve)}function MA(t,e,n=Xt){G(t)&&(t=Cu(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Ot(i.from||s,i.default,!0):r=Ot(i.from||s):r=Ot(i),tt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rp(t,e,n){Bt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function X_(t,e,n,s){const i=s.includes(".")?B_(n,s):()=>n[s];if(Fe(t)){const r=e[t];se(r)&&Ei(i,r)}else if(se(t))Ei(i,t.bind(n));else if(Re(t))if(G(t))t.forEach(r=>X_(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&Ei(i,r,t)}}function Qh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Oa(l,c,o,!0)),Oa(l,e,o)),Re(e)&&r.set(e,l),l}function Oa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Oa(t,r,n,!0),i&&i.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=LA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LA={data:op,props:ap,emits:ap,methods:_r,computed:_r,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:_r,directives:_r,watch:FA,provide:op,inject:VA};function op(t,e){return e?t?function(){return He(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function VA(t,e){return _r(Cu(t),Cu(e))}function Cu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function _r(t,e){return t?He(Object.create(null),t,e):e}function ap(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:He(Object.create(null),ip(t),ip(e??{})):e}function FA(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function J_(){return{app:null,config:{isNativeTag:cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UA=0;function BA(t,e){return function(s,i=null){se(s)||(s=He({},s)),i!=null&&!Re(i)&&(i=null);const r=J_(),o=new Set;let a=!1;const l=r.app={_uid:UA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:f0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=We(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ml(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Da=l;try{return c()}finally{Da=null}}};return l}}let Da=null;function _a(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=Ge||nt;if(s||Da){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Da._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function $A(t,e,n,s=!1){const i={},r={};Pa(r,xl,1),t.propsDefaults=Object.create(null),Z_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:R_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(bl(t.emitsOptions,d))continue;const f=e[d];if(l)if(de(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=vn(d);i[m]=Su(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Z_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Ki(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Su(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],c=!0)}c&&Vn(t,"set","$attrs")}function Z_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ga(l))continue;const c=e[l];let u;i&&de(i,u=vn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:bl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Su(i,l,h,c[h],t,!de(c,h))}}return o}function Su(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ki(i),s=c[n]=l.call(null,e),Vs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ki(n))&&(s=!0))}return s}function ey(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=ey(h,e,!0);He(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,mi),mi;if(G(r))for(let u=0;u<r.length;u++){const h=vn(r[u]);lp(h)&&(o[h]=be)}else if(r)for(const u in r){const h=vn(u);if(lp(h)){const d=r[u],f=o[h]=G(d)||se(d)?{type:d}:He({},d);if(f){const m=hp(Boolean,f.type),_=hp(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||de(f,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&s.set(t,c),c}function lp(t){return t[0]!=="$"}function cp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function up(t,e){return cp(t)===cp(e)}function hp(t,e){return G(e)?e.findIndex(n=>up(n,t)):se(e)&&up(e,t)?0:-1}const ty=t=>t[0]==="_"||t==="$stable",Yh=t=>G(t)?t.map(an):[an(t)],HA=(t,e,n)=>{if(e._n)return e;const s=ci((...i)=>Yh(e(...i)),n);return s._c=!1,s},ny=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ty(i))continue;const r=t[i];if(se(r))e[i]=HA(i,r,s);else if(r!=null){const o=Yh(r);e[i]=()=>o}}},sy=(t,e)=>{const n=Yh(e);t.slots.default=()=>n},WA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Pa(e,"_",n)):ny(e,t.slots={})}else t.slots={},e&&sy(t,e);Pa(t.slots,xl,1)},qA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(He(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ny(e,i)),o=e}else e&&(sy(t,e),o={default:1});if(r)for(const a in i)!ty(a)&&!(a in o)&&delete i[a]};function bu(t,e,n,s,i=!1){if(G(t)){t.forEach((d,f)=>bu(d,e&&(G(e)?e[f]:e),n,s,i));return}if(Rr(s)&&!i)return;const r=s.shapeFlag&4?Ml(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,de(h,c)&&(h[c]=null)):tt(c)&&(c.value=null)),se(l))os(l,a,12,[o,u]);else{const d=Fe(l),f=tt(l);if(d||f){const m=()=>{if(t.f){const _=d?de(h,l)?h[l]:u[l]:l.value;i?G(_)&&Mh(_,r):G(_)?_.includes(r)||_.push(r):d?(u[l]=[r],de(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Rt(m,n)):m()}}}const Rt=gA;function KA(t){return zA(t)}function zA(t,e){const n=mu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Xt,insertStaticContent:m}=t,_=(p,g,y,E=null,A=null,b=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!bs(p,g)&&(E=I(p),At(p,A,b,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:K,shapeFlag:U}=g;switch(P){case Dl:v(p,g,y,E);break;case $t:T(p,g,y,E);break;case Oc:p==null&&R(g,y,E,L);break;case Vt:H(p,g,y,E,A,b,L,N,O);break;default:U&1?B(p,g,y,E,A,b,L,N,O):U&6?ve(p,g,y,E,A,b,L,N,O):(U&64||U&128)&&P.process(p,g,y,E,A,b,L,N,O,D)}K!=null&&A&&bu(K,p&&p.ref,b,g||p,!g)},v=(p,g,y,E)=>{if(p==null)s(g.el=a(g.children),y,E);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},T=(p,g,y,E)=>{p==null?s(g.el=l(g.children||""),y,E):g.el=p.el},R=(p,g,y,E)=>{[p.el,p.anchor]=m(p.children,g,y,E,p.el,p.anchor)},S=({el:p,anchor:g},y,E)=>{let A;for(;p&&p!==g;)A=d(p),s(p,y,E),p=A;s(g,y,E)},w=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=d(p),i(p),p=y;i(g)},B=(p,g,y,E,A,b,L,N,O)=>{L=L||g.type==="svg",p==null?j(g,y,E,A,b,L,N,O):ie(p,g,A,b,L,N,O)},j=(p,g,y,E,A,b,L,N)=>{let O,P;const{type:K,props:U,shapeFlag:z,transition:J,dirs:oe}=p;if(O=p.el=o(p.type,b,U&&U.is,U),z&8?u(O,p.children):z&16&&F(p.children,O,null,E,A,b&&K!=="foreignObject",L,N),oe&&Ts(p,null,E,"created"),te(O,p,p.scopeId,L,E),U){for(const Ie in U)Ie!=="value"&&!ga(Ie)&&r(O,Ie,null,U[Ie],b,p.children,E,A,it);"value"in U&&r(O,"value",null,U.value),(P=U.onVnodeBeforeMount)&&on(P,E,p)}oe&&Ts(p,null,E,"beforeMount");const Ce=(!A||A&&!A.pendingBranch)&&J&&!J.persisted;Ce&&J.beforeEnter(O),s(O,g,y),((P=U&&U.onVnodeMounted)||Ce||oe)&&Rt(()=>{P&&on(P,E,p),Ce&&J.enter(O),oe&&Ts(p,null,E,"mounted")},A)},te=(p,g,y,E,A)=>{if(y&&f(p,y),E)for(let b=0;b<E.length;b++)f(p,E[b]);if(A){let b=A.subTree;if(g===b){const L=A.vnode;te(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,y,E,A,b,L,N,O=0)=>{for(let P=O;P<p.length;P++){const K=p[P]=N?Xn(p[P]):an(p[P]);_(null,K,g,y,E,A,b,L,N)}},ie=(p,g,y,E,A,b,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:P,dirs:K}=g;O|=p.patchFlag&16;const U=p.props||be,z=g.props||be;let J;y&&Is(y,!1),(J=z.onVnodeBeforeUpdate)&&on(J,y,g,p),K&&Ts(g,p,y,"beforeUpdate"),y&&Is(y,!0);const oe=A&&g.type!=="foreignObject";if(P?re(p.dynamicChildren,P,N,y,E,oe,b):L||me(p,g,N,null,y,E,oe,b,!1),O>0){if(O&16)De(N,g,U,z,y,E,A);else if(O&2&&U.class!==z.class&&r(N,"class",null,z.class,A),O&4&&r(N,"style",U.style,z.style,A),O&8){const Ce=g.dynamicProps;for(let Ie=0;Ie<Ce.length;Ie++){const Ue=Ce[Ie],Wt=U[Ue],ri=z[Ue];(ri!==Wt||Ue==="value")&&r(N,Ue,Wt,ri,A,p.children,y,E,it)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&P==null&&De(N,g,U,z,y,E,A);((J=z.onVnodeUpdated)||K)&&Rt(()=>{J&&on(J,y,g,p),K&&Ts(g,p,y,"updated")},E)},re=(p,g,y,E,A,b,L)=>{for(let N=0;N<g.length;N++){const O=p[N],P=g[N],K=O.el&&(O.type===Vt||!bs(O,P)||O.shapeFlag&70)?h(O.el):y;_(O,P,K,null,E,A,b,L,!0)}},De=(p,g,y,E,A,b,L)=>{if(y!==E){if(y!==be)for(const N in y)!ga(N)&&!(N in E)&&r(p,N,y[N],null,L,g.children,A,b,it);for(const N in E){if(ga(N))continue;const O=E[N],P=y[N];O!==P&&N!=="value"&&r(p,N,P,O,L,g.children,A,b,it)}"value"in E&&r(p,"value",y.value,E.value)}},H=(p,g,y,E,A,b,L,N,O)=>{const P=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(s(P,y,E),s(K,y,E),F(g.children,y,K,A,b,L,N,O)):U>0&&U&64&&z&&p.dynamicChildren?(re(p.dynamicChildren,z,y,A,b,L,N),(g.key!=null||A&&g===A.subTree)&&Xh(p,g,!0)):me(p,g,y,K,A,b,L,N,O)},ve=(p,g,y,E,A,b,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?A.ctx.activate(g,y,E,L,O):Et(g,y,E,A,b,L,O):Sn(p,g,O)},Et=(p,g,y,E,A,b,L)=>{const N=p.component=i0(p,E,A);if(Nl(p)&&(N.ctx.renderer=D),r0(N),N.asyncDep){if(A&&A.registerDep(N,Ve),!p.el){const O=N.subTree=We($t);T(null,O,g,y)}return}Ve(N,p,g,y,A,b,L)},Sn=(p,g,y)=>{const E=g.component=p.component;if(dA(p,g,y))if(E.asyncDep&&!E.asyncResolved){Ae(E,g,y);return}else E.next=g,iA(E.update),E.update();else g.el=p.el,E.vnode=g},Ve=(p,g,y,E,A,b,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:U,u:z,parent:J,vnode:oe}=p,Ce=K,Ie;Is(p,!1),K?(K.el=oe.el,Ae(p,K,L)):K=oe,U&&ma(U),(Ie=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ie,J,K,oe),Is(p,!0);const Ue=Pc(p),Wt=p.subTree;p.subTree=Ue,_(Wt,Ue,h(Wt.el),I(Wt),p,A,b),K.el=Ue.el,Ce===null&&fA(p,Ue.el),z&&Rt(z,A),(Ie=K.props&&K.props.onVnodeUpdated)&&Rt(()=>on(Ie,J,K,oe),A)}else{let K;const{el:U,props:z}=g,{bm:J,m:oe,parent:Ce}=p,Ie=Rr(g);if(Is(p,!1),J&&ma(J),!Ie&&(K=z&&z.onVnodeBeforeMount)&&on(K,Ce,g),Is(p,!0),U&&_e){const Ue=()=>{p.subTree=Pc(p),_e(U,p.subTree,p,A,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=Pc(p);_(null,Ue,y,E,p,A,b),g.el=Ue.el}if(oe&&Rt(oe,A),!Ie&&(K=z&&z.onVnodeMounted)){const Ue=g;Rt(()=>on(K,Ce,Ue),A)}(g.shapeFlag&256||Ce&&Rr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&Rt(p.a,A),p.isMounted=!0,g=y=E=null}},O=p.effect=new Bh(N,()=>Gh(P),p.scope),P=p.update=()=>O.run();P.id=p.uid,Is(p,!0),P()},Ae=(p,g,y)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,jA(p,g.props,E,y),qA(p,g.children,y),zi(),ep(),Gi()},me=(p,g,y,E,A,b,L,N,O=!1)=>{const P=p&&p.children,K=p?p.shapeFlag:0,U=g.children,{patchFlag:z,shapeFlag:J}=g;if(z>0){if(z&128){qn(P,U,y,E,A,b,L,N,O);return}else if(z&256){bn(P,U,y,E,A,b,L,N,O);return}}J&8?(K&16&&it(P,A,b),U!==P&&u(y,U)):K&16?J&16?qn(P,U,y,E,A,b,L,N,O):it(P,A,b,!0):(K&8&&u(y,""),J&16&&F(U,y,E,A,b,L,N,O))},bn=(p,g,y,E,A,b,L,N,O)=>{p=p||mi,g=g||mi;const P=p.length,K=g.length,U=Math.min(P,K);let z;for(z=0;z<U;z++){const J=g[z]=O?Xn(g[z]):an(g[z]);_(p[z],J,y,null,A,b,L,N,O)}P>K?it(p,A,b,!0,!1,U):F(g,y,E,A,b,L,N,O,U)},qn=(p,g,y,E,A,b,L,N,O)=>{let P=0;const K=g.length;let U=p.length-1,z=K-1;for(;P<=U&&P<=z;){const J=p[P],oe=g[P]=O?Xn(g[P]):an(g[P]);if(bs(J,oe))_(J,oe,y,null,A,b,L,N,O);else break;P++}for(;P<=U&&P<=z;){const J=p[U],oe=g[z]=O?Xn(g[z]):an(g[z]);if(bs(J,oe))_(J,oe,y,null,A,b,L,N,O);else break;U--,z--}if(P>U){if(P<=z){const J=z+1,oe=J<K?g[J].el:E;for(;P<=z;)_(null,g[P]=O?Xn(g[P]):an(g[P]),y,oe,A,b,L,N,O),P++}}else if(P>z)for(;P<=U;)At(p[P],A,b,!0),P++;else{const J=P,oe=P,Ce=new Map;for(P=oe;P<=z;P++){const bt=g[P]=O?Xn(g[P]):an(g[P]);bt.key!=null&&Ce.set(bt.key,P)}let Ie,Ue=0;const Wt=z-oe+1;let ri=!1,jf=0;const ar=new Array(Wt);for(P=0;P<Wt;P++)ar[P]=0;for(P=J;P<=U;P++){const bt=p[P];if(Ue>=Wt){At(bt,A,b,!0);continue}let rn;if(bt.key!=null)rn=Ce.get(bt.key);else for(Ie=oe;Ie<=z;Ie++)if(ar[Ie-oe]===0&&bs(bt,g[Ie])){rn=Ie;break}rn===void 0?At(bt,A,b,!0):(ar[rn-oe]=P+1,rn>=jf?jf=rn:ri=!0,_(bt,g[rn],y,null,A,b,L,N,O),Ue++)}const Hf=ri?GA(ar):mi;for(Ie=Hf.length-1,P=Wt-1;P>=0;P--){const bt=oe+P,rn=g[bt],Wf=bt+1<K?g[bt+1].el:E;ar[P]===0?_(null,rn,y,Wf,A,b,L,N,O):ri&&(Ie<0||P!==Hf[Ie]?sn(rn,y,Wf,2):Ie--)}}},sn=(p,g,y,E,A=null)=>{const{el:b,type:L,transition:N,children:O,shapeFlag:P}=p;if(P&6){sn(p.component.subTree,g,y,E);return}if(P&128){p.suspense.move(g,y,E);return}if(P&64){L.move(p,g,y,D);return}if(L===Vt){s(b,g,y);for(let U=0;U<O.length;U++)sn(O[U],g,y,E);s(p.anchor,g,y);return}if(L===Oc){S(p,g,y);return}if(E!==2&&P&1&&N)if(E===0)N.beforeEnter(b),s(b,g,y),Rt(()=>N.enter(b),A);else{const{leave:U,delayLeave:z,afterLeave:J}=N,oe=()=>s(b,g,y),Ce=()=>{U(b,()=>{oe(),J&&J()})};z?z(b,oe,Ce):Ce()}else s(b,g,y)},At=(p,g,y,E=!1,A=!1)=>{const{type:b,props:L,ref:N,children:O,dynamicChildren:P,shapeFlag:K,patchFlag:U,dirs:z}=p;if(N!=null&&bu(N,null,y,p,!0),K&256){g.ctx.deactivate(p);return}const J=K&1&&z,oe=!Rr(p);let Ce;if(oe&&(Ce=L&&L.onVnodeBeforeUnmount)&&on(Ce,g,p),K&6)qo(p.component,y,E);else{if(K&128){p.suspense.unmount(y,E);return}J&&Ts(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,y,A,D,E):P&&(b!==Vt||U>0&&U&64)?it(P,g,y,!1,!0):(b===Vt&&U&384||!A&&K&16)&&it(O,g,y),E&&si(p)}(oe&&(Ce=L&&L.onVnodeUnmounted)||J)&&Rt(()=>{Ce&&on(Ce,g,p),J&&Ts(p,null,g,"unmounted")},y)},si=p=>{const{type:g,el:y,anchor:E,transition:A}=p;if(g===Vt){ii(y,E);return}if(g===Oc){w(p);return}const b=()=>{i(y),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:N}=A,O=()=>L(y,b);N?N(p.el,b,O):O()}else b()},ii=(p,g)=>{let y;for(;p!==g;)y=d(p),i(p),p=y;i(g)},qo=(p,g,y)=>{const{bum:E,scope:A,update:b,subTree:L,um:N}=p;E&&ma(E),A.stop(),b&&(b.active=!1,At(L,p,g,y)),N&&Rt(N,g),Rt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},it=(p,g,y,E=!1,A=!1,b=0)=>{for(let L=b;L<p.length;L++)At(p[L],g,y,E,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,y)=>{p==null?g._vnode&&At(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,y),ep(),L_(),g._vnode=p},D={p:_,um:At,m:sn,r:si,mt:Et,mc:F,pc:me,pbc:re,n:I,o:t};let q,_e;return e&&([q,_e]=e(D)),{render:V,hydrate:q,createApp:BA(V,q)}}function Is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xh(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Xn(i[r]),a.el=o.el),n||Xh(o,a)),a.type===Dl&&(a.el=o.el)}}function GA(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const QA=t=>t.__isTeleport,Sr=t=>t&&(t.disabled||t.disabled===""),dp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Pu=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},YA={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:m,createText:_,createComment:v}}=c,T=Sr(e.props);let{shapeFlag:R,children:S,dynamicChildren:w}=e;if(t==null){const B=e.el=_(""),j=e.anchor=_("");f(B,n,s),f(j,n,s);const te=e.target=Pu(e.props,m),F=e.targetAnchor=_("");te&&(f(F,te),o=o||dp(te));const ie=(re,De)=>{R&16&&u(S,re,De,i,r,o,a,l)};T?ie(n,j):te&&ie(te,F)}else{e.el=t.el;const B=e.anchor=t.anchor,j=e.target=t.target,te=e.targetAnchor=t.targetAnchor,F=Sr(t.props),ie=F?n:j,re=F?B:te;if(o=o||dp(j),w?(d(t.dynamicChildren,w,ie,i,r,o,a),Xh(t,e,!0)):l||h(t,e,ie,re,i,r,o,a,!1),T)F||Jo(e,n,B,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=Pu(e.props,m);De&&Jo(e,De,null,c,0)}else F&&Jo(e,j,te,c,1)}iy(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!Sr(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const m=l[f];i(m,e,n,!0,!!m.dynamicChildren)}},move:Jo,hydrate:XA};function Jo(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Sr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function XA(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Pu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Sr(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}iy(e)}return e.anchor&&o(e.anchor)}const QL=YA;function iy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Vt=Symbol.for("v-fgt"),Dl=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Oc=Symbol.for("v-stc"),br=[];let Gt=null;function mo(t=!1){br.push(Gt=t?null:[])}function JA(){br.pop(),Gt=br[br.length-1]||null}let qr=1;function fp(t){qr+=t}function ry(t){return t.dynamicChildren=qr>0?Gt||mi:null,JA(),qr>0&&Gt&&Gt.push(t),t}function oy(t,e,n,s,i,r){return ry(Zh(t,e,n,s,i,r,!0))}function Jh(t,e,n,s,i){return ry(We(t,e,n,s,i,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const xl="__vInternal",ay=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||tt(t)||se(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function Zh(t,e=null,n=null,s=0,i=null,r=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ay(e),ref:e&&ya(e),scopeId:Pl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:nt};return a?(ed(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),qr>0&&!o&&Gt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gt.push(l),l}const We=ZA;function ZA(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===kA)&&(t=$t),xa(t)){const a=ds(t,e,!0);return n&&ed(a,n),qr>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(u0(t)&&(t=t.__vccOpts),e){e=e0(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Fh(a)),Re(l)&&(S_(l)&&!G(l)&&(l=He({},l)),e.style=Vh(l))}const o=Fe(t)?1:pA(t)?128:QA(t)?64:Re(t)?4:se(t)?2:0;return Zh(t,e,n,s,i,o,r,!0)}function e0(t){return t?S_(t)||xl in t?He({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?t0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ay(a),ref:e&&e.ref?n&&i?G(i)?i.concat(ya(e)):[i,ya(e)]:ya(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function va(t=" ",e=0){return We(Dl,null,t,e)}function YL(t="",e=!1){return e?(mo(),Jh($t,null,t)):We($t,null,t)}function an(t){return t==null||typeof t=="boolean"?We($t):G(t)?We(Vt,null,t.slice()):typeof t=="object"?Xn(t):We(Dl,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function ed(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(xl in e)?e._ctx=nt:i===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[va(e)]):n=8);t.children=e,t.shapeFlag|=n}function t0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fh([e.class,s.class]));else if(i==="style")e.style=Vh([e.style,s.style]);else if(El(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){Bt(t,e,7,[n,s])}const n0=J_();let s0=0;function i0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||n0,r={uid:s0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new d_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ey(s,i),emitsOptions:F_(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=aA.bind(null,r),t.ce&&t.ce(r),r}let Ge=null;const td=()=>Ge||nt;let nd,oi,pp="__VUE_INSTANCE_SETTERS__";(oi=mu()[pp])||(oi=mu()[pp]=[]),oi.push(t=>Ge=t),nd=t=>{oi.length>1?oi.forEach(e=>e(t)):oi[0](t)};const ki=t=>{nd(t),t.scope.on()},Vs=()=>{Ge&&Ge.scope.off(),nd(null)};function ly(t){return t.vnode.shapeFlag&4}let Kr=!1;function r0(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,i=ly(t);$A(t,n,i,e),WA(t,s);const r=i?o0(t,e):void 0;return Kr=!1,r}function o0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qh(new Proxy(t.ctx,DA));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?l0(t):null;ki(t),zi();const r=os(s,t,0,[t.props,i]);if(Gi(),Vs(),o_(r)){if(r.then(Vs,Vs),e)return r.then(o=>{gp(t,o,e)}).catch(o=>{Sl(o,t,0)});t.asyncDep=r}else gp(t,r,e)}else cy(t,e)}function gp(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=O_(e)),cy(t,n)}let mp;function cy(t,e,n){const s=t.type;if(!t.render){if(!e&&mp&&!s.render){const i=s.template||Qh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=He(He({isCustomElement:r,delimiters:a},o),l);s.render=mp(i,c)}}t.render=s.render||Xt}ki(t),zi(),xA(t),Gi(),Vs()}function a0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function l0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return a0(t)},slots:t.slots,emit:t.emit,expose:e}}function Ml(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(O_(qh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}}))}function c0(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function u0(t){return se(t)&&"__vccOpts"in t}const Kt=(t,e)=>tA(t,e,Kr);function sd(t,e,n){const s=arguments.length;return s===2?Re(e)&&!G(e)?xa(e)?We(t,null,[e]):We(t,e):We(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xa(n)&&(n=[n]),We(t,e,n))}const h0=Symbol.for("v-scx"),d0=()=>Ot(h0),f0="3.3.4",p0="http://www.w3.org/2000/svg",Ps=typeof document<"u"?document:null,_p=Ps&&Ps.createElement("template"),g0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ps.createElementNS(p0,t):Ps.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ps.createTextNode(t),createComment:t=>Ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_p.innerHTML=s?`<svg>${t}</svg>`:t;const a=_p.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function m0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _0(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&ku(s,r,"");for(const r in n)ku(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yp=/\s*!important$/;function ku(t,e,n){if(G(n))n.forEach(s=>ku(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=y0(t,e);yp.test(n)?t.setProperty(Ki(s),n.replace(yp,""),"important"):t[s]=n}}const vp=["Webkit","Moz","ms"],Dc={};function y0(t,e){const n=Dc[e];if(n)return n;let s=vn(e);if(s!=="filter"&&s in t)return Dc[e]=s;s=wl(s);for(let i=0;i<vp.length;i++){const r=vp[i]+s;if(r in t)return Dc[e]=r}return e}const Ep="http://www.w3.org/1999/xlink";function v0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ep,e.slice(6,e.length)):t.setAttributeNS(Ep,e,n);else{const r=Tw(e);n==null||r&&!u_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function E0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=u_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function uy(t,e,n,s){t.addEventListener(e,n,s)}function T0(t,e,n,s){t.removeEventListener(e,n,s)}function I0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=w0(e);if(s){const c=r[e]=C0(s,i);uy(t,a,c,l)}else o&&(T0(t,a,o,l),r[e]=void 0)}}const Tp=/(?:Once|Passive|Capture)$/;function w0(t){let e;if(Tp.test(t)){e={};let s;for(;s=t.match(Tp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ki(t.slice(2)),e]}let xc=0;const A0=Promise.resolve(),R0=()=>xc||(A0.then(()=>xc=0),xc=Date.now());function C0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(S0(s,n.value),e,5,[s])};return n.value=t,n.attached=R0(),n}function S0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ip=/^on[a-z]/,b0=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?m0(t,s,i):e==="style"?_0(t,n,s):El(e)?xh(e)||I0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):P0(t,e,s,i))?E0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),v0(t,e,s,i))};function P0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ip.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ip.test(e)&&Fe(n)?!1:e in t}const zn="transition",lr="animation",hy=(t,{slots:e})=>sd(vA,k0(t),e);hy.displayName="Transition";const dy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hy.props=He({},$_,dy);const ws=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},wp=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function k0(t){const e={};for(const H in t)H in dy||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=N0(i),_=m&&m[0],v=m&&m[1],{onBeforeEnter:T,onEnter:R,onEnterCancelled:S,onLeave:w,onLeaveCancelled:B,onBeforeAppear:j=T,onAppear:te=R,onAppearCancelled:F=S}=e,ie=(H,ve,Et)=>{As(H,ve?u:a),As(H,ve?c:o),Et&&Et()},re=(H,ve)=>{H._isLeaving=!1,As(H,h),As(H,f),As(H,d),ve&&ve()},De=H=>(ve,Et)=>{const Sn=H?te:R,Ve=()=>ie(ve,H,Et);ws(Sn,[ve,Ve]),Ap(()=>{As(ve,H?l:r),Gn(ve,H?u:a),wp(Sn)||Rp(ve,s,_,Ve)})};return He(e,{onBeforeEnter(H){ws(T,[H]),Gn(H,r),Gn(H,o)},onBeforeAppear(H){ws(j,[H]),Gn(H,l),Gn(H,c)},onEnter:De(!1),onAppear:De(!0),onLeave(H,ve){H._isLeaving=!0;const Et=()=>re(H,ve);Gn(H,h),x0(),Gn(H,d),Ap(()=>{H._isLeaving&&(As(H,h),Gn(H,f),wp(w)||Rp(H,s,v,Et))}),ws(w,[H,Et])},onEnterCancelled(H){ie(H,!1),ws(S,[H])},onAppearCancelled(H){ie(H,!0),ws(F,[H])},onLeaveCancelled(H){re(H),ws(B,[H])}})}function N0(t){if(t==null)return null;if(Re(t))return[Mc(t.enter),Mc(t.leave)];{const e=Mc(t);return[e,e]}}function Mc(t){return gw(t)}function Gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function As(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ap(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let O0=0;function Rp(t,e,n,s){const i=t._endId=++O0,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=D0(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function D0(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${zn}Delay`),r=s(`${zn}Duration`),o=Cp(i,r),a=s(`${lr}Delay`),l=s(`${lr}Duration`),c=Cp(a,l);let u=null,h=0,d=0;e===zn?o>0&&(u=zn,h=o,d=r.length):e===lr?c>0&&(u=lr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?zn:lr:null,d=u?u===zn?r.length:l.length:0);const f=u===zn&&/\b(transform|all)(,|$)/.test(s(`${zn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Cp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Sp(n)+Sp(t[s])))}function Sp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function x0(){return document.body.offsetHeight}const bp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ma(e,n):e},XL={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Tl(e);uy(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?c_(Ma(o)):Ma(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=bp(s)},mounted(t,{value:e}){Pp(t,e)},beforeUpdate(t,e,n){t._assign=bp(n)},updated(t,{value:e}){Pp(t,e)}};function Pp(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Tl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ma(r);if(n)G(e)?r.selected=ww(e,o)>-1:r.selected=e.has(o);else if(Al(Ma(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ma(t){return"_value"in t?t._value:t.value}const M0=["ctrl","shift","alt","meta"],L0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>M0.some(n=>t[`${n}Key`]&&!e.includes(n))},JL=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=L0[e[i]];if(r&&r(n,e))return}return t(n,...s)},V0=He({patchProp:b0},g0);let kp;function F0(){return kp||(kp=KA(V0))}const U0=(...t)=>{const e=F0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=B0(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function B0(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Qi(e)},Qi=function(t){return new Error("Firebase Database ("+fy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(py(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new j0;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class j0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gy=function(t){const e=py(t);return Ll.encodeByteArray(e,!0)},La=function(t){return gy(t).replace(/\./g,"")},Va=function(t){try{return Ll.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return my(void 0,t)}function my(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!W0(n)||(t[n]=my(t[n],e[n]));return t}function W0(t){return t!=="__proto__"}/**
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
 */function q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const K0=()=>q0().__FIREBASE_DEFAULTS__,z0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},G0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Va(t[1]);return e&&JSON.parse(e)},id=()=>{try{return K0()||z0()||G0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_y=t=>{var e,n;return(n=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Q0=t=>{const e=_y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yy=()=>{var t;return(t=id())===null||t===void 0?void 0:t.config},vy=t=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Y0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[La(JSON.stringify(n)),La(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function X0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ey(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ty(){return fy.NODE_ADMIN===!0}function Iy(){try{return typeof indexedDB=="object"}catch{return!1}}function Z0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eR,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,s)}}function tR(t,e){return t.replace(nR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Gr(Va(r[0])||""),n=Gr(Va(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sR=function(t){const e=wy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iR=function(t){const e=wy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ua(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Np(r)&&Np(o)){if(!Ua(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function oR(t,e){const n=new aR(t,e);return n.subscribe.bind(n)}class aR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}function cR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rs="[DEFAULT]";/**
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
 */class hR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fR(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dR(t){return t===Rs?void 0:t}function fR(t){return t.instantiationMode==="EAGER"}/**
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
 */class pR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const gR={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},mR=fe.INFO,_R={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},yR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_R[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=mR,this._logHandler=yR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const vR=(t,e)=>e.some(n=>t instanceof n);let Op,Dp;function ER(){return Op||(Op=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TR(){return Dp||(Dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ay=new WeakMap,Ou=new WeakMap,Ry=new WeakMap,Vc=new WeakMap,od=new WeakMap;function IR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(as(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ay.set(n,t)}).catch(()=>{}),od.set(e,t),e}function wR(t){if(Ou.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return as(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AR(t){Du=t(Du)}function RR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fc(this),e,...n);return Ry.set(s,e.sort?e.sort():[e]),as(s)}:TR().includes(t)?function(...e){return t.apply(Fc(this),e),as(Ay.get(this))}:function(...e){return as(t.apply(Fc(this),e))}}function CR(t){return typeof t=="function"?RR(t):(t instanceof IDBTransaction&&wR(t),vR(t,ER())?new Proxy(t,Du):t)}function as(t){if(t instanceof IDBRequest)return IR(t);if(Vc.has(t))return Vc.get(t);const e=CR(t);return e!==t&&(Vc.set(t,e),od.set(e,t)),e}const Fc=t=>od.get(t);function SR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=as(o);return s&&o.addEventListener("upgradeneeded",l=>{s(as(o.result),l.oldVersion,l.newVersion,as(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bR=["get","getKey","getAll","getAllKeys","count"],PR=["put","add","delete","clear"],Uc=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=PR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Uc.set(e,r),r}AR(t=>({...t,get:(e,n,s)=>xp(e,n)||t.get(e,n,s),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
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
 */class kR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",Mp="0.9.15";/**
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
 */const $s=new _o("@firebase/app"),OR="@firebase/app-compat",DR="@firebase/analytics-compat",xR="@firebase/analytics",MR="@firebase/app-check-compat",LR="@firebase/app-check",VR="@firebase/auth",FR="@firebase/auth-compat",UR="@firebase/database",BR="@firebase/database-compat",$R="@firebase/functions",jR="@firebase/functions-compat",HR="@firebase/installations",WR="@firebase/installations-compat",qR="@firebase/messaging",KR="@firebase/messaging-compat",zR="@firebase/performance",GR="@firebase/performance-compat",QR="@firebase/remote-config",YR="@firebase/remote-config-compat",XR="@firebase/storage",JR="@firebase/storage-compat",ZR="@firebase/firestore",eC="@firebase/firestore-compat",tC="firebase",nC="10.1.0";/**
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
 */const Mu="[DEFAULT]",sC={[xu]:"fire-core",[OR]:"fire-core-compat",[xR]:"fire-analytics",[DR]:"fire-analytics-compat",[LR]:"fire-app-check",[MR]:"fire-app-check-compat",[VR]:"fire-auth",[FR]:"fire-auth-compat",[UR]:"fire-rtdb",[BR]:"fire-rtdb-compat",[$R]:"fire-fn",[jR]:"fire-fn-compat",[HR]:"fire-iid",[WR]:"fire-iid-compat",[qR]:"fire-fcm",[KR]:"fire-fcm-compat",[zR]:"fire-perf",[GR]:"fire-perf-compat",[QR]:"fire-rc",[YR]:"fire-rc-compat",[XR]:"fire-gcs",[JR]:"fire-gcs-compat",[ZR]:"fire-fst",[eC]:"fire-fst-compat","fire-js":"fire-js",[tC]:"fire-js-all"};/**
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
 */const Ba=new Map,Lu=new Map;function iC(t,e){try{t.container.addComponent(e)}catch(n){$s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Lu.has(e))return $s.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of Ba.values())iC(n,t);return!0}function ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ls=new Yi("app","Firebase",rC);/**
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
 */class oC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=nC;function Cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ls.create("bad-app-name",{appName:String(i)});if(n||(n=yy()),!n)throw ls.create("no-options");const r=Ba.get(i);if(r){if(Ua(n,r.options)&&Ua(s,r.config))return r;throw ls.create("duplicate-app",{appName:i})}const o=new pR(i);for(const l of Lu.values())o.addComponent(l);const a=new oC(n,s,o);return Ba.set(i,a),a}function ld(t=Mu){const e=Ba.get(t);if(!e&&t===Mu&&yy())return Cy();if(!e)throw ls.create("no-app",{appName:t});return e}function Dt(t,e,n){var s;let i=(s=sC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$s.warn(a.join(" "));return}En(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aC="firebase-heartbeat-database",lC=1,Qr="firebase-heartbeat-store";let Bc=null;function Sy(){return Bc||(Bc=SR(aC,lC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}}).catch(t=>{throw ls.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function cC(t){try{return await(await Sy()).transaction(Qr).objectStore(Qr).get(by(t))}catch(e){if(e instanceof Rn)$s.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$s.warn(n.message)}}}async function Lp(t,e){try{const s=(await Sy()).transaction(Qr,"readwrite");await s.objectStore(Qr).put(e,by(t)),await s.done}catch(n){if(n instanceof Rn)$s.warn(n.message);else{const s=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$s.warn(s.message)}}}function by(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uC=1024,hC=30*24*60*60*1e3;class dC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=hC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vp(),{heartbeatsToSend:n,unsentEntries:s}=fC(this._heartbeatsCache.heartbeats),i=La(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vp(){return new Date().toISOString().substring(0,10)}function fC(t,e=uC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iy()?Z0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gC(t){En(new Zt("platform-logger",e=>new kR(e),"PRIVATE")),En(new Zt("heartbeat",e=>new dC(e),"PRIVATE")),Dt(xu,Mp,t),Dt(xu,Mp,"esm2017"),Dt("fire-js","")}gC("");function cd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mC=Py,ky=new Yi("auth","Firebase",Py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new _o("@firebase/auth");function _C(t,...e){$a.logLevel<=fe.WARN&&$a.warn(`Auth (${_s}): ${t}`,...e)}function Ea(t,...e){$a.logLevel<=fe.ERROR&&$a.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw ud(t,...e)}function gn(t,...e){return ud(t,...e)}function Ny(t,e,n){const s=Object.assign(Object.assign({},mC()),{[e]:n});return new Yi("auth","Firebase",s).create(e,{appName:t.name})}function yC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Tn(t,"argument-error"),Ny(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ud(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ky.create(t,...e)}function ee(t,e,...n){if(!t)throw ud(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ea(e),new Error(e)}function Fn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vC(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vC()||X0()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||Ey()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new yo(3e4,6e4);function Dy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vo(t,e,n,s,i={}){return xy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Oy.fetch()(My(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function xy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},IC),e);try{const i=new RC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ny(t,u,c);Tn(t,u)}}catch(i){if(i instanceof Rn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function AC(t,e,n,s,i={}){const r=await vo(t,e,n,s,i);return"mfaPendingCredential"in r&&Tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function My(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?hd(t.config,i):`${t.config.apiScheme}://${i}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),wC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return vo(t,"POST","/v1/accounts:delete",e)}async function SC(t,e){return vo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bC(t,e=!1){const n=yt(t),s=await n.getIdToken(e),i=dd(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pr($c(i.auth_time)),issuedAtTime:Pr($c(i.iat)),expirationTime:Pr($c(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function dd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Va(n);return i?JSON.parse(i):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PC(t){const e=dd(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&kC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Yr(t,SC(n,{idToken:s}));ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xC(r.providerUserInfo):[],a=DC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ly(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function OC(t){const e=yt(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xC(t){return t.map(e=>{var{providerId:n}=e,s=cd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e){const n=await xy(t,{},async()=>{const s=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=My(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Oy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await MC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xr;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ly(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bC(this,e)}reload(){return OC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yr(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:w,isAnonymous:B,providerData:j,stsTokenManager:te}=n;ee(S&&te,e,"internal-error");const F=Xr.fromJSON(this.name,te);ee(typeof S=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),ee(typeof w=="boolean",e,"internal-error"),ee(typeof B=="boolean",e,"internal-error"),Qn(f,e.name),Qn(m,e.name),Qn(_,e.name),Qn(v,e.name),Qn(T,e.name),Qn(R,e.name);const ie=new Fs({uid:S,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:B,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:F,createdAt:T,lastLoginAt:R});return j&&Array.isArray(j)&&(ie.providerData=j.map(re=>Object.assign({},re))),v&&(ie._redirectEventId=v),ie}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xr;i.updateFromServerResponse(n);const r=new Fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ja(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Map;function On(t){Fn(t instanceof Function,"Expected a class definition");let e=Bp.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bp.set(t,e),e)}/**
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
 */class Vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vy.type="NONE";const $p=Vy;/**
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
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ti(On($p),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||On($p);const o=Ta(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Fs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ti(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ti(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jy(e))return"Blackberry";if(Hy(e))return"Webos";if(fd(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fy(t=_t()){return/firefox\//i.test(t)}function fd(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(t=_t()){return/crios\//i.test(t)}function By(t=_t()){return/iemobile/i.test(t)}function $y(t=_t()){return/android/i.test(t)}function jy(t=_t()){return/blackberry/i.test(t)}function Hy(t=_t()){return/webos/i.test(t)}function Fl(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LC(t=_t()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VC(){return J0()&&document.documentMode===10}function Wy(t=_t()){return Fl(t)||$y(t)||Hy(t)||jy(t)||/windows phone/i.test(t)||By(t)}function FC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e=[]){let n;switch(t){case"Browser":n=jp(_t());break;case"Worker":n=`${jp(_t())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${s}`}async function Ky(t,e){return vo(t,"GET","/v2/recaptchaConfig",Dy(t,e))}function Hp(t){return t!==void 0&&t.enterprise!==void 0}class zy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",UC().appendChild(s)})}function BC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $C="https://www.google.com/recaptcha/enterprise.js?render=",jC="recaptcha-enterprise",HC="NO_RECAPTCHA";class WC{constructor(e){this.type=jC,this.auth=Ji(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ky(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Hp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(HC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Hp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gy($C+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class qC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wp(this),this.idTokenSubscription=new Wp(this),this.beforeStateQueue=new qC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}async initializeRecaptchaConfig(){const e=await Ky(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new WC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return yt(t)}class Wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oR(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e){const n=ad(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ua(r,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function GC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QC(t,e,n){const s=Ji(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Qy(e),{host:o,port:a}=YC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XC()}function Qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YC(t){const e=Qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e){return AC(t,"POST","/v1/accounts:signInWithIdp",Dy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="http://localhost";class js extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=cd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new js(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ii(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:JC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Eo{constructor(){super("facebook.com")}static credential(e){return js._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return js._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return es.credential(n,s)}catch{return null}}}es.GOOGLE_SIGN_IN_METHOD="google.com";es.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Eo{constructor(){super("github.com")}static credential(e){return js._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Eo{constructor(){super("twitter.com")}static credential(e,n){return js._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Fs._fromIdTokenResponse(e,s,i),o=Kp(s);return new Oi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Kp(s);return new Oi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Rn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ha(e,n,s,i)}}function Xy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,r,e,s):r})}async function ZC(t,e,n=!1){const s=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",s)}/**
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
 */async function eS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Yr(t,Xy(s,i,e,t),n);ee(r.idToken,s,"internal-error");const o=dd(r.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),Oi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e,n=!1){const s="signIn",i=await Xy(t,s,e),r=await Oi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Jy(t,e,n,s){return yt(t).onIdTokenChanged(e,n,s)}function nS(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}const Wa="__sak";/**
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
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(){const t=_t();return fd(t)||Fl(t)}const iS=1e3,rS=10;class ev extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sS()&&FC(),this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);VC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const oS=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
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
 */function aS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ul(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await aS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=gd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function cS(t){mn().location.href=t}/**
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
 */function sv(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function uS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dS(){return sv()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",fS=1,qa="firebaseLocalStorage",rv="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function pS(){const t=indexedDB.deleteDatabase(iv);return new To(t).toPromise()}function Fu(){const t=indexedDB.open(iv,fS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qa,{keyPath:rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qa)?e(s):(s.close(),await pS(),e(await Fu()))})})}async function zp(t,e,n){const s=Bl(t,!0).put({[rv]:e,value:n});return new To(s).toPromise()}async function gS(t,e){const n=Bl(t,!1).get(e),s=await new To(n).toPromise();return s===void 0?null:s.value}function Gp(t,e){const n=Bl(t,!0).delete(e);return new To(n).toPromise()}const mS=800,_S=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_S)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(dS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uS(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fu();return await zp(e,Wa,"1"),await Gp(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Bl(i,!1).getAll();return new To(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const yS=ov;new yo(3e4,6e4);/**
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
 */function av(t,e){return e?On(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class md extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vS(t){return tS(t.auth,new md(t),t.bypassAuthState)}function ES(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),eS(n,new md(t),t.bypassAuthState)}async function TS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),ZC(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vS;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return ES;default:Tn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new yo(2e3,1e4);async function ZL(t,e,n){const s=Ji(t);yC(t,e,pd);const i=av(s,n);return new Ns(s,"signInViaPopup",e,i).executeNotNull()}class Ns extends lv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IS.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="pendingRedirect",Ia=new Map;class AS extends lv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const s=await RS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RS(t,e){const n=bS(e),s=SS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function CS(t,e){Ia.set(t._key(),e)}function SS(t){return On(t._redirectPersistence)}function bS(t){return Ta(wS,t.config.apiKey,t.name)}async function eV(t,e){return await Ji(t)._initializationPromise,cv(t,e,!1)}async function cv(t,e,n=!1){const s=Ji(t),i=av(s,e),o=await new AS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=10*60*1e3;class kS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!uv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return vo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xS=/^https?/;async function MS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OS(t);for(const n of e)try{if(LS(n))return}catch{}Tn(t,"unauthorized-domain")}function LS(t){const e=Vu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xS.test(n))return!1;if(DS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const VS=new yo(3e4,6e4);function Yp(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FS(t){return new Promise((e,n)=>{var s,i,r;function o(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(gn(t,"network-request-failed"))},timeout:VS.get()})}if(!((i=(s=mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mn().gapi)===null||r===void 0)&&r.load)o();else{const a=BC("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Gy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function US(t){return wa=wa||FS(t),wa}/**
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
 */const BS=new yo(5e3,15e3),$S="__/auth/iframe",jS="emulator/auth/iframe",HS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hd(e,jS):`https://${t.config.authDomain}/${$S}`,s={apiKey:e.apiKey,appName:t.name,v:_s},i=WS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xi(s).slice(1)}`}async function KS(t){const e=await US(t),n=mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:qS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{r(o)},BS.get());function l(){mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const zS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GS=500,QS=600,YS="_blank",XS="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JS(t,e,n,s=GS,i=QS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=_t().toLowerCase();n&&(a=Uy(c)?YS:n),Fy(c)&&(e=e||XS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(LC(c)&&a!=="_self")return ZS(e||"",a),new Xp(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Xp(h)}function ZS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const eb="__/auth/handler",tb="emulator/auth/handler",nb=encodeURIComponent("fac");async function Jp(t,e,n,s,i,r){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:_s,eventId:i};if(e instanceof pd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Eo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${nb}=${encodeURIComponent(l)}`:"";return`${sb(t)}?${Xi(a).slice(1)}${c}`}function sb({config:t}){return t.emulator?hd(t,tb):`https://${t.authDomain}/${eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=cv,this._overrideRedirectResult=CS}async _openPopup(e,n,s,i){var r;Fn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Jp(e,n,s,Vu(),i);return JS(e,o,gd())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Jp(e,n,s,Vu(),i);return cS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await KS(e),s=new kS(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[jc];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wy()||fd()||Fl()}}const rb=ib;var Zp="@firebase/auth",eg="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lb(t){En(new Zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(t)},c=new KC(s,i,r,l);return GC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),En(new Zt("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(s=>new ob(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Zp,eg,ab(t)),Dt(Zp,eg,"esm2017")}/**
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
 */const cb=5*60,ub=vy("authIdTokenMaxAge")||cb;let tg=null;const hb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ub)return;const i=n==null?void 0:n.token;tg!==i&&(tg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hv(t=ld()){const e=ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zC(t,{popupRedirectResolver:rb,persistence:[yS,oS,nv]}),s=vy("authTokenSyncURL");if(s){const r=hb(s);nS(n,r,()=>r(n.currentUser)),Jy(n,o=>r(o))}const i=_y("auth");return i&&QC(n,`http://${i}`),n}lb("Browser");var db=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Map,pb={activated:!1,tokenObservers:[]};function en(t){return fb.get(t)||Object.assign({},pb)}const ng={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new zr,await mb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new zr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function mb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ka=new Yi("appCheck","AppCheck",_b);function dv(t){if(!en(t).activated)throw Ka.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="firebase-app-check-database",vb=1,Uu="firebase-app-check-store";let ea=null;function Eb(){return ea||(ea=new Promise((t,e)=>{try{const n=indexedDB.open(yb,vb);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ka.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Uu,{keyPath:"compositeKey"})}}}catch(n){e(Ka.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ea)}function Tb(t,e){return Ib(wb(t),e)}async function Ib(t,e){const s=(await Eb()).transaction(Uu,"readwrite"),r=s.objectStore(Uu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ka.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function wb(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new _o("@firebase/app-check");function sg(t,e){return Iy()?Tb(t,e).catch(n=>{Bu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={error:"UNKNOWN_ERROR"};function Rb(t){return Ll.encodeString(JSON.stringify(t),!1)}async function $u(t,e=!1){const n=t.app;dv(n);const s=en(n);let i=s.token,r;if(i&&!yr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(yr(l)?i=l:await sg(n,void 0))}if(!e&&i&&yr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await en(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Bu.warn(l.message):Bu.error(l),r=l}let a;return i?r?yr(i)?a={token:i.token,internalError:r}:a=rg(r):(a={token:i.token},s.token=i,await sg(n,i)):a=rg(r),o&&Pb(n,a),a}async function Cb(t){const e=t.app;dv(e);const{provider:n}=en(e);{const{token:s}=await n.getToken();return{token:s}}}function Sb(t,e,n,s){const{app:i}=t,r=en(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&yr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ig(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ig(t))}function fv(t,e){const n=en(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ig(t){const{app:e}=t,n=en(e);let s=n.tokenRefresher;s||(s=bb(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function bb(t){const{app:e}=t;return new gb(async()=>{const n=en(e);let s;if(n.token?s=await $u(t,!0):s=await $u(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=en(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},ng.RETRIAL_MIN_WAIT,ng.RETRIAL_MAX_WAIT)}function Pb(t,e){const n=en(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function yr(t){return t.expireTimeMillis-Date.now()>0}function rg(t){return{token:Rb(Ab),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=en(this.app);for(const n of e)fv(this.app,n.next);return Promise.resolve()}}function Nb(t,e){return new kb(t,e)}function Ob(t){return{getToken:e=>$u(t,e),getLimitedUseToken:()=>Cb(t),addTokenListener:e=>Sb(t,"INTERNAL",e),removeTokenListener:e=>fv(t.app,e)}}const Db="@firebase/app-check",xb="0.8.0",Mb="app-check",og="app-check-internal";function Lb(){En(new Zt(Mb,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Nb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(og).initialize()})),En(new Zt(og,t=>{const e=t.getProvider("app-check").getImmediate();return Ob(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dt(Db,xb)}Lb();var Vb="firebase",Fb="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Vb,Fb,"app");const pv=Symbol("firebaseApp");function Io(t){return td()&&Ot(pv,null)||ld(t)}const un=()=>{},Ub=typeof window<"u";function _d(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Bb(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Xs(t){return!!t&&typeof t=="object"}const $b=Object.prototype;function jb(t){return Xs(t)&&Object.getPrototypeOf(t)===$b}function yd(t){return Xs(t)&&t.type==="document"}function Hb(t){return Xs(t)&&t.type==="collection"}function Wb(t){return yd(t)||Hb(t)}function qb(t){return Xs(t)&&t.type==="query"}function Kb(t){return Xs(t)&&"ref"in t}function zb(t){return Xs(t)&&typeof t.bucket=="string"}function Gb(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Qb=Symbol.for("v-scx");function Yb(){return!!Ot(Qb,0)}const ta=new WeakMap;function Xb(t,e){if(!ta.has(t)){const n=f_(!0);ta.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ta.delete(t)}}return ta.get(t)}const gv=new WeakMap;function Jb(t){return gv.get(Io(t))}const na=new WeakMap;function mv(t){const e=Io(t);if(!na.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{na.set(e,r),n(r.value)}];na.set(e,i)}return na.get(e)}function Zb(t){const e=mv(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function eP(t,e){const n=hv(e);Jy(n,s=>{const i=mv();t.value=s,Array.isArray(i)&&i[1](t)})}const ag="@firebase/database",lg="1.0.1";/**
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
 */let _v="";function tP(t){_v=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nP(e)}}catch{}return new sP},Os=yv("localStorage"),ju=yv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new _o("@firebase/database"),iP=function(){let t=1;return function(){return t++}}(),vv=function(t){const e=uR(t),n=new rR;n.update(e);const s=n.digest();return Ll.encodeByteArray(s)},wo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wo.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let Us=null,cg=!0;const rP=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wi.logLevel=fe.VERBOSE,Us=wi.log.bind(wi),e&&ju.set("logging_enabled",!0)):typeof t=="function"?Us=t:(Us=null,ju.remove("logging_enabled"))},lt=function(...t){if(cg===!0&&(cg=!1,Us===null&&ju.get("logging_enabled")===!0&&rP(!0)),Us){const e=wo.apply(null,t);Us(e)}},Ao=function(t){return function(...e){lt(t,...e)}},Hu=function(...t){const e="FIREBASE INTERNAL ERROR: "+wo(...t);wi.error(e)},Hs=function(...t){const e=`FIREBASE FATAL ERROR: ${wo(...t)}`;throw wi.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+wo(...t);wi.warn(e)},oP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ev=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Di="[MIN_NAME]",Ws="[MAX_NAME]",Zi=function(t,e){if(t===e)return 0;if(t===Di||e===Ws)return-1;if(e===Di||t===Ws)return 1;{const n=ug(t),s=ug(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},lP=function(t,e){return t===e?0:t<e?-1:1},cr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},vd=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=et(e[s]),n+=":",n+=vd(t[e[s]]);return n+="}",n},Tv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Iv=function(t){x(!Ev(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},cP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},hP=new RegExp("^-?(0*)\\d{1,10}$"),dP=-2147483648,fP=2147483647,ug=function(t){if(hP.test(t)){const e=Number(t);if(e>=dP&&e<=fP)return e}return null},Ro=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},pP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class gP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Wu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="5",wv="v",Av="s",Rv="r",Cv="f",Sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bv="ls",Pv="p",qu="ac",kv="websocket",Nv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ov(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===kv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yP(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.counters_={}}incrementCounter(e,n=1){Wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return H0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc={},Wc={};function Td(t){const e=t.toString();return Hc[e]||(Hc[e]=new vP),Hc[e]}function EP(t,e){const n=t.toString();return Wc[n]||(Wc[n]=e()),Wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ro(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="start",IP="close",wP="pLPCommand",AP="pRTLPCB",Dv="id",xv="pw",Mv="ser",RP="cb",CP="seg",SP="ts",bP="d",PP="dframe",Lv=1870,Vv=30,kP=Lv-Vv,NP=25e3,OP=3e4;class fi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ao(e),this.stats_=Td(n),this.urlFn=l=>(this.appCheckToken&&(l[qu]=this.appCheckToken),Ov(n,Nv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OP)),aP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hg)this.id=a,this.password=l;else if(o===IP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[hg]="t",s[Mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[RP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wv]=Ed,this.transportSessionId&&(s[Av]=this.transportSessionId),this.lastSessionId&&(s[bv]=this.lastSessionId),this.applicationId&&(s[Pv]=this.applicationId),this.appCheckToken&&(s[qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(s[Rv]=Cv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fi.forceAllow_=!0}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){return fi.forceAllow_?!0:!fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cP()&&!uP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gy(n),i=Tv(s,kP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[PP]="t",s[Dv]=e,s[xv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iP(),window[wP+this.uniqueCallbackIdentifier]=e,window[AP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dv]=this.myID,e[xv]=this.myPW,e[Mv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vv+s.length<=Lv;){const o=this.pendingSegs.shift();s=s+"&"+CP+i+"="+o.seg+"&"+SP+i+"="+o.ts+"&"+bP+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(NP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=16384,xP=45e3;let za=null;typeof MozWebSocket<"u"?za=MozWebSocket:typeof WebSocket<"u"&&(za=WebSocket);class zt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ao(this.connId),this.stats_=Td(n),this.connURL=zt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wv]=Ed,typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(o[Rv]=Cv),n&&(o[Av]=n),s&&(o[bv]=s),i&&(o[qu]=i),r&&(o[Pv]=r),Ov(e,kv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Os.set("previous_websocket_failure",!0);try{let s;Ty(),this.mySock=new za(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&za!==null&&!zt.forceDisallow_}static previouslyFailed(){return Os.isInMemoryStorage||Os.get("previous_websocket_failure")===!0}markConnectionHealthy(){Os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Gr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tv(n,DP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fi,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let s=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of Jr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=6e4,LP=5e3,VP=10*1024,FP=100*1024,qc="t",dg="d",UP="s",fg="r",BP="e",pg="o",gg="a",mg="n",_g="p",$P="h";class jP{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ao("c:"+this.id+":"),this.transportManager_=new Jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=kr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qc in e){const n=e[qc];n===gg?this.upgradeIfSecondaryHealthy_():n===fg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cr("t",e),s=cr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_g,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cr("t",e),s=cr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cr(qc,e);if(dg in e){const s=e[dg];if(n===$P){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===UP?this.onConnectionShutdown_(s):n===fg?this.onReset_(s):n===BP?Hu("Server Error: "+s):n===pg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ed!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),kr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_g,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Uv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ga}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=32,vg=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Oe("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function Bv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $v(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Oe(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=ue(t),s=ue(e);if(n===null)return e;if(n===s)return Ut(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Hv(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class WP{constructor(e,n){this.errorPrefix_=n,this.parts_=$v(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vl(this.parts_[s]);Wv(this)}}function qP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vl(e),Wv(t)}function KP(t){const e=t.parts_.pop();t.byteLength_-=Vl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wv(t){if(t.byteLength_>vg)throw new Error(t.errorPrefix_+"has a key path longer than "+vg+" bytes ("+t.byteLength_+").");if(t.parts_.length>yg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yg+") or object contains a cycle "+Cs(t))}function Cs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Uv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new wd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=1e3,zP=60*5*1e3,Eg=30*1e3,GP=1.3,QP=3e4,YP="server_kill",Tg=3;class Mn extends Fv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ao("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ur,this.maxReconnectDelay_=zP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ty())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(et(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Mn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wn(e,"w")){const s=Ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hu("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QP&&(this.reconnectDelay_=ur),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new jP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{xt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(YP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nu(this.interruptReasons_)&&(this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>vd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tg&&(this.reconnectDelay_=Eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_v.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:Ey()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ga.getInstance().currentlyOnline();return Nu(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $l{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(Di,e),i=new he(Di,n);return this.compare(s,i)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;class qv extends $l{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(e){sa=e}compare(e,n){return Zi(e.name,n.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Ws,sa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,sa)}toString(){return".key"}}const Ai=new qv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kt=class vr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??vr.RED,this.left=i??hn.EMPTY_NODE,this.right=r??hn.EMPTY_NODE}copy(e,n,s,i,r){return new vr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kt.RED=!0;kt.BLACK=!1;class XP{copy(e,n,s,i,r){return this}insert(e,n,s){return new kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let hn=class Aa{constructor(e,n=Aa.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Aa(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new Aa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ia(this.root_,null,this.comparator_,!0,e)}};hn.EMPTY_NODE=new XP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t,e){return Zi(t.name,e.name)}function Ad(t,e){return Zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;function ZP(t){Ku=t}const Kv=function(t){return typeof t=="number"?"number:"+Iv(t):"string:"+t},zv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wn(e,".sv"),"Priority must be a string or number.")}else x(t===Ku||t.isEmpty(),"priority of unexpected type.");x(t===Ku||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ig;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ig=e}static get __childrenNodeConstructor(){return Ig}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ue(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Iv(this.value_):e+=this.value_,this.lazyHash_=vv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gv,Qv;function ek(t){Gv=t}function tk(t){Qv=t}class nk extends $l{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Zi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Ws,new Ke("[PRIORITY-POST]",Qv))}makePost(e,n){const s=Gv(e);return new he(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ft=new nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=Math.log(2);class ik{constructor(e){const n=r=>parseInt(Math.log(r)/sk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new kt(d,h.node,kt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),_=i(f+1,c);return h=t[f],d=n?n(h):h,new kt(d,h.node,kt.BLACK,m,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,_){const v=h-m,T=h;h-=m;const R=i(v+1,T),S=t[v],w=n?n(S):S;f(new kt(w,S.node,_,null,R))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?d(v,kt.BLACK):(d(v,kt.BLACK),d(v,kt.RED))}return u},o=new ik(t.length),a=r(o);return new hn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;const ai={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ai&&ft,"ChildrenNode.ts has not been loaded"),Kc=Kc||new Dn({".priority":ai},{".priority":ft}),Kc}get(e){const n=Ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return Wn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(he.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Qa(s,e.getCompare()):a=ai;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Dn(u,c)}addToIndexes(e,n){const s=Fa(this.indexes_,(i,r)=>{const o=Ni(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qa(a,o.getCompare())}else return ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Dn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Fa(this.indexes_,i=>{if(i===ai)return i;{const r=n.get(e.name);return r?i.remove(new he(e.name,r)):i}});return new Dn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hr||(hr=new ye(new hn(Ad),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hr:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?hr:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{x(ue(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ft,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kv(this.getPriority().val())+":"),this.forEachChild(ft,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new he(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ft),i=n.getIterator(ft);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rk extends ye{constructor(){super(new hn(Ad),ye.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const Co=new rk;Object.defineProperties(he,{MIN:{value:new he(Di,ye.EMPTY_NODE)},MAX:{value:new he(Ws,Co)}});qv.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;ZP(Co);tk(Co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=!0;function ct(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ct(e))}if(!(t instanceof Array)&&ok){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ct(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=Qa(n,JP,o=>o.name,Ad);if(s){const o=Qa(n,ft.getCompare());return new ye(r,ct(e),new Dn({".priority":o},{".priority":ft}))}else return new ye(r,ct(e),Dn.Default)}else{let n=ye.EMPTY_NODE;return Ht(t,(s,i)=>{if(Wn(t,s)&&s.substring(0,1)!=="."){const r=ct(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ct(e))}}ek(ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak extends $l{constructor(e){super(),this.indexPath_=e,x(!le(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Zi(e.name,n.name):r}makePost(e,n){const s=ct(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,Co);return new he(Ws,e)}toString(){return $v(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk extends $l{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Zi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=ct(e);return new he(n,s)}toString(){return".value"}}const ck=new lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){return{type:"value",snapshotNode:t}}function hk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Di}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new Rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ag(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ft?n="$priority":t.index_===ck?n="$value":t.index_===Ai?n="$key":(x(t.index_ instanceof ak,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ft&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Fv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ao("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ya.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ag(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ni(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ya.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ag(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gr(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return{value:null,children:new Map}}function Yv(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ue(e);t.children.has(s)||t.children.set(s,Xa());const i=t.children.get(s);e=Pe(e),Yv(i,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):gk(t,(s,i)=>{const r=new Oe(e.toString()+"/"+s);zu(i,r,n)})}function gk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=10*1e3,_k=30*1e3,yk=5*60*1e3;class vk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mk(e);const s=Cg+(_k-Cg)*Math.random();kr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&Wn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),kr(this.reportStats_.bind(this),Math.floor(Math.random()*2*yk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function Xv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=Xv()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new Ja(we(),n,this.revert)}}else return x(ue(this.path)===e,"operationForChild called for unrelated child."),new Ja(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return le(this.path)?new qs(this.source,we(),this.snap.getImmediateChild(e)):new qs(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new qs(this.source,we(),n.value):new Zr(this.source,we(),n)}else return x(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ek(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fk(o.childName,o.snapshotNode))}),dr(t,i,"child_removed",e,s,n),dr(t,i,"child_added",e,s,n),dr(t,i,"child_moved",r,s,n),dr(t,i,"child_changed",e,s,n),dr(t,i,"value",e,s,n),i}function dr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ik(t,a,l)),o.forEach(a=>{const l=Tk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Tk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ik(t,e,n){if(e.childName==null||n.childName==null)throw Qi("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){return{eventCache:t,serverCache:e}}function Nr(t,e,n,s){return eE(new Cd(e,n,s),t.serverCache)}function tE(t,e,n,s){return eE(t.eventCache,new Cd(e,n,s))}function Gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;const wk=()=>(zc||(zc=new hn(lP)),zc);class Se{constructor(e,n=wk()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Ht(e,(s,i)=>{n=n.set(new Oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(le(e))return null;{const s=ue(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Pe(e),n);return r!=null?{path:Qe(new Oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new Se(null)}}set(e,n){if(le(e))return new Se(n,this.children);{const s=ue(e),r=(this.children.get(s)||new Se(null)).set(Pe(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const i=s.remove(Pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(le(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(le(e))return n;{const s=ue(e),r=(this.children.get(s)||new Se(null)).setTree(Pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(le(e))return null;{const r=ue(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),Qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const i=ue(e),r=this.children.get(i);return r?r.foreachOnPath_(Pe(e),Qe(n,i),s):new Se(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Se(null))}}function Or(t,e,n){if(le(e))return new Jt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new Jt(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new Jt(r)}}}function Sg(t,e,n){let s=t;return Ht(n,(i,r)=>{s=Or(s,Qe(e,i),r)}),s}function bg(t,e){if(le(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Jt(n)}}function Qu(t,e){return Js(t,e)!=null}function Js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function Pg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ft,(s,i)=>{e.push(new he(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new he(s,i.value))}),e}function cs(t,e){if(le(e))return t;{const n=Js(t,e);return n!=null?new Jt(new Se(n)):new Jt(t.writeTree_.subtree(e))}}function Yu(t){return t.writeTree_.isEmpty()}function xi(t,e){return nE(we(),t.writeTree_,e)}function nE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nE(Qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return lE(e,t)}function Ak(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Or(t.visibleWrites,e,n)),t.lastWriteId=s}function Rk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ck(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Sk(a,s.path)?i=!1:Qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return bk(t),!0;if(s.snap)t.visibleWrites=bg(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=bg(t.visibleWrites,Qe(s.path,l))})}return!0}else return!1}function Sk(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Qe(t.path,n),e))return!0;return!1}function bk(t){t.visibleWrites=iE(t.allWrites,Pk,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pk(t){return t.visible}function iE(t,e,n){let s=Jt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qt(n,o)?(a=Ut(n,o),s=Or(s,a,r.snap)):Qt(o,n)&&(a=Ut(o,n),s=Or(s,we(),r.snap.getChild(a)));else if(r.children){if(Qt(n,o))a=Ut(n,o),s=Sg(s,a,r.children);else if(Qt(o,n))if(a=Ut(o,n),le(a))s=Sg(s,we(),r.children);else{const l=Ni(r.children,ue(a));if(l){const c=l.getChild(Pe(a));s=Or(s,we(),c)}}}else throw Qi("WriteRecord should have .snap or .children")}}return s}function rE(t,e,n,s,i){if(!s&&!i){const r=Js(t.visibleWrites,e);if(r!=null)return r;{const o=cs(t.visibleWrites,e);if(Yu(o))return n;if(n==null&&!Qu(o,we()))return null;{const a=n||ye.EMPTY_NODE;return xi(o,a)}}}else{const r=cs(t.visibleWrites,e);if(!i&&Yu(r))return n;if(!i&&n==null&&!Qu(r,we()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qt(c.path,e)||Qt(e,c.path))},a=iE(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return xi(a,l)}}}function kk(t,e,n){let s=ye.EMPTY_NODE;const i=Js(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ft,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cs(t.visibleWrites,e);return n.forEachChild(ft,(o,a)=>{const l=xi(cs(r,new Oe(o)),a);s=s.updateImmediateChild(o,l)}),Pg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cs(t.visibleWrites,e);return Pg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Nk(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(Qu(t.visibleWrites,r))return null;{const o=cs(t.visibleWrites,r);return Yu(o)?i.getChild(n):xi(o,i.getChild(n))}}function Ok(t,e,n,s){const i=Qe(e,n),r=Js(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cs(t.visibleWrites,i);return xi(o,s.getNode().getImmediateChild(n))}else return null}function Dk(t,e){return Js(t.visibleWrites,e)}function xk(t,e,n,s,i,r,o){let a;const l=cs(t.visibleWrites,e),c=Js(l,we());if(c!=null)a=c;else if(n!=null)a=xi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Mk(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Xu(t,e,n,s){return rE(t.writeTree,t.treePath,e,n,s)}function oE(t,e){return kk(t.writeTree,t.treePath,e)}function kg(t,e,n,s){return Nk(t.writeTree,t.treePath,e,n,s)}function Za(t,e){return Dk(t.writeTree,Qe(t.treePath,e))}function Lk(t,e,n,s,i,r){return xk(t.writeTree,t.treePath,e,n,s,i,r)}function Sd(t,e,n){return Ok(t.writeTree,t.treePath,e,n)}function aE(t,e){return lE(Qe(t.treePath,e),t.writeTree)}function lE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,wg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,dk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,hk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,wg(s,e.snapshotNode,i.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cE=new Fk;class bd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ks(this.viewCache_),r=Lk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Uk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Bk(t,e,n,s,i){const r=new Vk;let o,a;if(n.type===dn.OVERWRITE){const c=n;c.source.fromUser?o=Ju(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=el(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dn.MERGE){const c=n;c.source.fromUser?o=jk(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dn.ACK_USER_WRITE){const c=n;c.revert?o=qk(t,e,c.path,s,i,r):o=Hk(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dn.LISTEN_COMPLETE)o=Wk(t,e,n.path,s,r);else throw Qi("Unknown operation type: "+n.type);const l=r.getChanges();return $k(e,o,l),{viewCache:o,changes:l}}function $k(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(uk(Gu(e)))}}function uE(t,e,n,s,i,r){const o=e.eventCache;if(Za(s,n)!=null)return e;{let a,l;if(le(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ks(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=oE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xu(s,Ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ue(n);if(c===".priority"){x(fs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=kg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=kg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Sd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Nr(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function el(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ue(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const m=Pe(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,cE,null)}const h=tE(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),d=new bd(i,h,r);return uE(t,h,n,i,d,a)}function Ju(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new bd(i,e,r);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Nr(e,c,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Nr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Pe(n),f=a.getNode().getImmediateChild(h);let m;if(le(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Bv(d)===".priority"&&_.getChild(jv(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=ye.EMPTY_NODE}if(f.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Nr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ng(t,e){return t.eventCache.isCompleteForChild(e)}function jk(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Qe(n,l);Ng(e,ue(u))&&(a=Ju(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Qe(n,l);Ng(e,ue(u))||(a=Ju(t,a,u,c,i,r,o))}),a}function Og(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Og(t,f,d);l=el(t,l,new Oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),_=Og(t,m,d);l=el(t,l,new Oe(h),_,i,r,o,a)}}),l}function Hk(t,e,n,s,i,r,o){if(Za(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return el(t,e,n,l.getNode().getChild(n),i,r,a,o);if(le(n)){let c=new Se(null);return l.getNode().forEachChild(Ai,(u,h)=>{c=c.set(new Oe(u),h)}),Zu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,h)=>{const d=Qe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Zu(t,e,n,c,i,r,a,o)}}function Wk(t,e,n,s,i){const r=e.serverCache,o=tE(e,r.getNode(),r.isFullyInitialized()||le(n),r.isFiltered());return uE(t,o,n,s,cE,i)}function qk(t,e,n,s,i,r){let o;if(Za(s,n)!=null)return e;{const a=new bd(s,e,i),l=e.eventCache.getNode();let c;if(le(n)||ue(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xu(s,Ks(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=oE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ue(n);let h=Sd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,Pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xu(s,Ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Za(s,we())!=null,Nr(e,c,o,t.filter.filtersNodes())}}function Kk(t,e){const n=Ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Dg(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(x(Ks(t.viewCache_),"We should always have a full cache before handling merges"),x(Gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Bk(t.processor_,i,e,n,s);return Uk(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function zk(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ek(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg;function Gk(t){x(!xg,"__referenceConstructor has already been defined"),xg=t}function Pd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),Dg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dg(o,e,n,s));return r}}function kd(t,e){let n=null;for(const s of t.views.values())n=n||Kk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg;function Qk(t){x(!Mg,"__referenceConstructor has already been defined"),Mg=t}class Lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Mk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yk(t,e,n,s,i){return Ak(t.pendingWriteTree_,e,n,s,i),i?Hl(t,new qs(Xv(),e,n)):[]}function pi(t,e,n=!1){const s=Rk(t.pendingWriteTree_,e);if(Ck(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(we(),!0):Ht(s.children,o=>{r=r.set(new Oe(o),!0)}),Hl(t,new Ja(s.path,r,n))}else return[]}function jl(t,e,n){return Hl(t,new qs(Jv(),e,n))}function Xk(t,e,n){const s=Se.fromObject(n);return Hl(t,new Zr(Jv(),e,s))}function Jk(t,e,n,s){const i=pE(t,s);if(i!=null){const r=gE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=new qs(Zv(a),l,n);return mE(t,o,c)}else return[]}function Zk(t,e,n,s){const i=pE(t,s);if(i){const r=gE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=Se.fromObject(n),u=new Zr(Zv(a),l,c);return mE(t,o,u)}else return[]}function hE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),c=kd(a,l);if(c)return c});return rE(i,e,r,n,!0)}function Hl(t,e){return dE(e,t.syncPointTree_,null,sE(t.pendingWriteTree_,we()))}function dE(t,e,n,s){if(le(t.path))return fE(t,e,n,s);{const i=e.get(we());n==null&&i!=null&&(n=kd(i,we()));let r=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=aE(s,o);r=r.concat(dE(a,l,c,u))}return i&&(r=r.concat(Pd(i,t,s,n))),r}}function fE(t,e,n,s){const i=e.get(we());n==null&&i!=null&&(n=kd(i,we()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=aE(s,o),u=t.operationForChild(o);u&&(r=r.concat(fE(u,a,l,c)))}),i&&(r=r.concat(Pd(i,t,s,n))),r}function pE(t,e){return t.tagToQueryMap.get(e)}function gE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function mE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=sE(t.pendingWriteTree_,e);return Pd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nd(n)}node(){return this.node_}}class Od{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Od(this.syncTree_,n)}node(){return hE(this.syncTree_,this.path_)}}const eN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nN(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},nN=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sN=function(t,e,n,s){return Dd(e,new Od(n,t),s)},iN=function(t,e,n){return Dd(t,new Nd(e),n)};function Dd(t,e,n){const s=t.getPriority().val(),i=Vg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,ct(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ft,(a,l)=>{const c=Dd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Md(t,e){let n=e instanceof Oe?e:new Oe(e),s=t,i=ue(n);for(;i!==null;){const r=Ni(s.node.children,i)||{children:{},childCount:0};s=new xd(i,s,r),n=Pe(n),i=ue(n)}return s}function er(t){return t.node.value}function _E(t,e){t.node.value=e,eh(t)}function yE(t){return t.node.childCount>0}function rN(t){return er(t)===void 0&&!yE(t)}function Wl(t,e){Ht(t.node.children,(n,s)=>{e(new xd(n,t,s))})}function vE(t,e,n,s){n&&!s&&e(t),Wl(t,i=>{vE(i,e,!0,s)}),n&&s&&e(t)}function oN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function So(t){return new Oe(t.parent===null?t.name:So(t.parent)+"/"+t.name)}function eh(t){t.parent!==null&&aN(t.parent,t.name,t)}function aN(t,e,n){const s=rN(n),i=Wn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=/[\[\].#$\/\u0000-\u001F\u007F]/,cN=/[\[\].#$\u0000-\u001F\u007F]/,Gc=10*1024*1024,EE=function(t){return typeof t=="string"&&t.length!==0&&!lN.test(t)},uN=function(t){return typeof t=="string"&&t.length!==0&&!cN.test(t)},hN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uN(t)},TE=function(t,e,n){const s=n instanceof Oe?new WP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Cs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Cs(s)+" with contents = "+e.toString());if(Ev(e))throw new Error(t+"contains "+e.toString()+" "+Cs(s));if(typeof e=="string"&&e.length>Gc/3&&Vl(e)>Gc)throw new Error(t+"contains a string greater than "+Gc+" utf8 bytes "+Cs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!EE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Cs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qP(s,o),TE(t,a,s),KP(s)}),i&&r)throw new Error(t+' contains ".value" child '+Cs(s)+" in addition to actual children.")}},dN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!EE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hN(n))throw new Error(cR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Hv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zs(t,e,n){pN(t,n),gN(t,s=>Qt(s,e)||Qt(e,s))}function gN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(mN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Us&&lt("event: "+n.toString()),Ro(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="repo_interrupt",yN=25;class vN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xa(),this.transactionQueueTree_=new xd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EN(t,e,n){if(t.stats_=Td(t.repoInfo_),t.forceRestClient_||pP())t.server_=new Ya(t.repoInfo_,(s,i,r,o)=>{Fg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ug(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(s,i,r,o)=>{Fg(t,s,i,r,o)},s=>{Ug(t,s)},s=>{IN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=EP(t.repoInfo_,()=>new vk(t.stats_,t.server_)),t.infoData_=new pk,t.infoSyncTree_=new Lg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=jl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ld(t,"connected",!1),t.serverSyncTree_=new Lg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Zs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function TN(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function IE(t){return eN({timestamp:TN(t)})}function Fg(t,e,n,s,i){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Fa(n,c=>ct(c));o=Zk(t.serverSyncTree_,r,l,i)}else{const l=ct(n);o=Jk(t.serverSyncTree_,r,l,i)}else if(s){const l=Fa(n,c=>ct(c));o=Xk(t.serverSyncTree_,r,l)}else{const l=ct(n);o=jl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fd(t,r)),Zs(t.eventQueue_,a,o)}function Ug(t,e){Ld(t,"connected",e),e===!1&&AN(t)}function IN(t,e){Ht(e,(n,s)=>{Ld(t,n,s)})}function Ld(t,e,n){const s=new Oe("/.info/"+e),i=ct(n);t.infoData_.updateSnapshot(s,i);const r=jl(t.infoSyncTree_,s,i);Zs(t.eventQueue_,s,r)}function wN(t){return t.nextWriteId_++}function AN(t){wE(t,"onDisconnectEvents");const e=IE(t),n=Xa();zu(t.onDisconnect_,we(),(i,r)=>{const o=sN(i,r,t.serverSyncTree_,e);Yv(n,i,o)});let s=[];zu(n,we(),(i,r)=>{s=s.concat(jl(t.serverSyncTree_,i,r));const o=bN(t,i);Fd(t,o)}),t.onDisconnect_=Xa(),Zs(t.eventQueue_,we(),s)}function RN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_N)}function wE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function AE(t,e,n){return hE(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Vd(t,e=t.transactionQueueTree_){if(e||ql(t,e),er(e)){const n=CE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CN(t,So(e),n)}else yE(e)&&Wl(e,n=>{Vd(t,n)})}function CN(t,e,n){const s=n.map(c=>c.currentWriteId),i=AE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{wE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(pi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ql(t,Md(t.transactionQueueTree_,e)),Vd(t,t.transactionQueueTree_),Zs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ro(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Fd(t,e)}},o)}function Fd(t,e){const n=RE(t,e),s=So(n),i=CE(t,n);return SN(t,i,s),s}function SN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ut(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(pi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yN)u=!0,h="maxretry",i=i.concat(pi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=AE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){TE("transaction failed: Data returned ",f,l.path);let m=ct(f);typeof f=="object"&&f!=null&&Wn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,T=IE(t),R=iN(m,d,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=R,l.currentWriteId=wN(t),o.splice(o.indexOf(v),1),i=i.concat(Yk(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),i=i.concat(pi(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(pi(t.serverSyncTree_,l.currentWriteId,!0))}Zs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ql(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ro(s[a]);Vd(t,t.transactionQueueTree_)}function RE(t,e){let n,s=t.transactionQueueTree_;for(n=ue(e);n!==null&&er(s)===void 0;)s=Md(s,n),e=Pe(e),n=ue(e);return s}function CE(t,e){const n=[];return SE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function SE(t,e,n){const s=er(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Wl(e,i=>{SE(t,i,n)})}function ql(t,e){const n=er(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_E(e,n.length>0?n:void 0)}Wl(e,s=>{ql(t,s)})}function bN(t,e){const n=So(RE(t,e)),s=Md(t.transactionQueueTree_,e);return oN(s,i=>{Qc(t,i)}),Qc(t,s),vE(s,i=>{Qc(t,i)}),n}function Qc(t,e){const n=er(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(pi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_E(e,void 0):n.length=r+1,Zs(t.eventQueue_,So(e),i);for(let o=0;o<s.length;o++)Ro(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bg=function(t,e){const n=NN(t),s=n.namespace;n.domain==="firebase.com"&&Hs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Hs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _P(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Oe(n.pathString)}},NN=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=PN(t.substring(u,h)));const d=kN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return le(this._path)?null:Bv(this._path)}get ref(){return new tr(this._repo,this._path)}get _queryIdentifier(){const e=Rg(this._queryParams),n=vd(e);return n==="{}"?"default":n}get _queryObject(){return Rg(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Ud))return!1;const n=this._repo===e._repo,s=Hv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+HP(this._path)}}class tr extends Ud{constructor(e,n){super(e,n,new Rd,!1)}get parent(){const e=jv(this._path);return e===null?null:new tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Gk(tr);Qk(tr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="FIREBASE_DATABASE_EMULATOR_HOST",th={};let DN=!1;function xN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Hs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ON]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Bg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Wu(Wu.OWNER):new mP(t.name,t.options,e);dN("Invalid Firebase Database URL",o),le(o.path)||Hs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LN(a,t,u,new gP(t.name,n));return new VN(h,t)}function MN(t,e){const n=th[e];(!n||n[t.key]!==t)&&Hs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RN(t),delete n[t.key]}function LN(t,e,n,s){let i=th[e.name];i||(i={},th[e.name]=i);let r=i[t.toURLString()];return r&&Hs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vN(t,DN,n,s),i[t.toURLString()]=r,r}class VN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tr(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function FN(t){tP(_s),En(new Zt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(ag,lg,t),Dt(ag,lg,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FN();var UN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Bd=Bd||{},X=UN||self;function Kl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BN(t){return Object.prototype.hasOwnProperty.call(t,Yc)&&t[Yc]||(t[Yc]=++$N)}var Yc="closure_uid_"+(1e9*Math.random()>>>0),$N=0;function jN(t,e,n){return t.call.apply(t.bind,arguments)}function HN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=jN:pt=HN,pt.apply(null,arguments)}function ra(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ys(){this.s=this.s,this.o=this.o}var WN=0;ys.prototype.s=!1;ys.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WN!=0)&&BN(this)};ys.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $d(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function $g(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var qN=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",()=>{},e),X.removeEventListener("test",()=>{},e)}catch{}return t}();function eo(t){return/^[\s\xa0]*$/.test(t)}function zl(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return zl().indexOf(t)!=-1}function jd(t){return jd[" "](t),t}jd[" "]=function(){};function KN(t,e){var n=FO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var zN=cn("Opera"),Mi=cn("Trident")||cn("MSIE"),PE=cn("Edge"),nh=PE||Mi,kE=cn("Gecko")&&!(zl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),GN=zl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function NE(){var t=X.document;return t?t.documentMode:void 0}var sh;e:{var Xc="",Jc=function(){var t=zl();if(kE)return/rv:([^\);]+)(\)|;)/.exec(t);if(PE)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GN)return/WebKit\/(\S+)/.exec(t);if(zN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jc&&(Xc=Jc?Jc[1]:""),Mi){var Zc=NE();if(Zc!=null&&Zc>parseFloat(Xc)){sh=String(Zc);break e}}sh=Xc}var ih;if(X.document&&Mi){var jg=NE();ih=jg||parseInt(sh,10)||void 0}else ih=void 0;var QN=ih;function to(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kE){e:{try{jd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.$.h.call(this)}}Xe(to,gt);var YN={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Po="closure_listenable_"+(1e6*Math.random()|0),XN=0;function JN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++XN,this.fa=this.ia=!1}function Gl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ZN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function OE(t){const e={};for(const n in t)e[n]=t[n];return e}const Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function DE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hg.length;r++)n=Hg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ql(t){this.src=t,this.g={},this.h=0}Ql.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=oh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JN(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function rh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=bE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Wd="closure_lm_"+(1e6*Math.random()|0),eu={};function xE(t,e,n,s,i){if(s&&s.once)return LE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xE(t,e[r],n,s,i);return null}return n=zd(n),t&&t[Po]?t.O(e,n,bo(s)?!!s.capture:!!s,i):ME(t,e,n,!1,s,i)}function ME(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bo(i)?!!i.capture:!!i,a=Kd(t);if(a||(t[Wd]=a=new Ql(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=eO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(FE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eO(){function t(n){return e.call(t.src,t.listener,n)}const e=tO;return t}function LE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)LE(t,e[r],n,s,i);return null}return n=zd(n),t&&t[Po]?t.P(e,n,bo(s)?!!s.capture:!!s,i):ME(t,e,n,!0,s,i)}function VE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)VE(t,e[r],n,s,i);else s=bo(s)?!!s.capture:!!s,n=zd(n),t&&t[Po]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=oh(r,n,s,i),-1<n&&(Gl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,s,i)),(n=-1<t?e[t]:null)&&qd(n))}function qd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Po])rh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(FE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Kd(e))?(rh(n,t),n.h==0&&(n.src=null,e[Wd]=null)):Gl(t)}}}function FE(t){return t in eu?eu[t]:eu[t]="on"+t}function tO(t,e){if(t.fa)t=!0;else{e=new to(e,this);var n=t.listener,s=t.la||t.src;t.ia&&qd(t),t=n.call(s,e)}return t}function Kd(t){return t=t[Wd],t instanceof Ql?t:null}var tu="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(t){return typeof t=="function"?t:(t[tu]||(t[tu]=function(e){return t.handleEvent(e)}),t[tu])}function Ye(){ys.call(this),this.i=new Ql(this),this.S=this,this.J=null}Xe(Ye,ys);Ye.prototype[Po]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){VE(this,t,e,n,s)};function st(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var i=e;e=new gt(s,t),DE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=oa(o,s,!0,e)&&i}if(o=e.g=t,i=oa(o,s,!0,e)&&i,i=oa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=oa(o,s,!1,e)&&i}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Gl(n[s]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function oa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Gd=X.JSON.stringify;class nO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sO(){var t=Qd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iO{constructor(){this.h=this.g=null}add(e,n){const s=UE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var UE=new nO(()=>new rO,t=>t.reset());class rO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aO(t){X.setTimeout(()=>{throw t},0)}let no,so=!1,Qd=new iO,BE=()=>{const t=X.Promise.resolve(void 0);no=()=>{t.then(lO)}};var lO=()=>{for(var t;t=sO();){try{t.h.call(t.g)}catch(n){aO(n)}var e=UE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1};function Yl(t,e){Ye.call(this),this.h=t||1,this.g=e||X,this.j=pt(this.qb,this),this.l=Date.now()}Xe(Yl,Ye);M=Yl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(Yd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Yl.$.N.call(this),Yd(this),delete this.g};function Xd(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function $E(t){t.g=Xd(()=>{t.g=null,t.i&&(t.i=!1,$E(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cO extends ys{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$E(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){ys.call(this),this.h=t,this.g={}}Xe(io,ys);var Wg=[];function jE(t,e,n,s){Array.isArray(n)||(n&&(Wg[0]=n.toString()),n=Wg);for(var i=0;i<n.length;i++){var r=xE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function HE(t){Hd(t.g,function(e,n){this.g.hasOwnProperty(n)&&qd(e)},t),t.g={}}io.prototype.N=function(){io.$.N.call(this),HE(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xl(){this.g=!0}Xl.prototype.Ea=function(){this.g=!1};function uO(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function hO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function gi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fO(t,n)+(s?" "+s:"")})}function dO(t,e){t.info(function(){return"TIMEOUT: "+e})}Xl.prototype.info=function(){};function fO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Gd(n)}catch{return e}}var ei={},qg=null;function Jl(){return qg=qg||new Ye}ei.Ta="serverreachability";function WE(t){gt.call(this,ei.Ta,t)}Xe(WE,gt);function ro(t){const e=Jl();st(e,new WE(e))}ei.STAT_EVENT="statevent";function qE(t,e){gt.call(this,ei.STAT_EVENT,t),this.stat=e}Xe(qE,gt);function It(t){const e=Jl();st(e,new qE(e,t))}ei.Ua="timingevent";function KE(t,e){gt.call(this,ei.Ua,t),this.size=e}Xe(KE,gt);function ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Zl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Jd(){}Jd.prototype.h=null;function Kg(t){return t.h||(t.h=t.i())}function GE(){}var No={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zd(){gt.call(this,"d")}Xe(Zd,gt);function ef(){gt.call(this,"c")}Xe(ef,gt);var ah;function ec(){}Xe(ec,Jd);ec.prototype.g=function(){return new XMLHttpRequest};ec.prototype.i=function(){return{}};ah=new ec;function Oo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new io(this),this.P=pO,t=nh?125:void 0,this.V=new Yl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new QE}function QE(){this.i=null,this.g="",this.h=!1}var pO=45e3,lh={},tl={};M=Oo.prototype;M.setTimeout=function(t){this.P=t};function ch(t,e,n){t.L=1,t.v=nc(Un(e)),t.s=n,t.S=!0,YE(t,null)}function YE(t,e){t.G=Date.now(),Do(t),t.A=Un(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),iT(n.i,"t",s),t.C=0,n=t.l.J,t.h=new QE,t.g=RT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cO(pt(t.Pa,t,t.g),t.O)),jE(t.U,t.g,"readystatechange",t.nb),e=t.I?OE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ro(),uO(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||nh||this.g&&(this.h.h||this.g.ja()||Yg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ro(3):ro(2)),tc(this);var n=this.g.da();this.ca=n;t:if(XE(this)){var s=Yg(this.g);t="";var i=s.length,r=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ds(this),Dr(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eo(a)){var c=a;break t}}c=null}if(n=c)gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uh(this,n);else{this.i=!1,this.o=3,It(12),Ds(this),Dr(this);break e}}this.S?(JE(this,u,o),nh&&this.i&&u==3&&(jE(this.U,this.V,"tick",this.mb),this.V.start())):(gi(this.j,this.m,o,null),uh(this,o)),u==4&&Ds(this),this.i&&!this.J&&(u==4?TT(this.l,this):(this.i=!1,Do(this)))}else MO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Ds(this),Dr(this)}}}catch{}finally{}};function XE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function JE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=gO(t,n),i==tl){e==4&&(t.o=4,It(14),s=!1),gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lh){t.o=4,It(15),gi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gi(t.j,t.m,i,null),uh(t,i);XE(t)&&i!=tl&&i!=lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),af(e),e.M=!0,It(11))):(gi(t.j,t.m,n,"[Invalid Chunked Response]"),Ds(t),Dr(t))}M.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.C<e.length&&(tc(this),JE(this,t,e),this.i&&t!=4&&Do(this))}};function gO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?tl:(n=Number(e.substring(n,s)),isNaN(n)?lh:(s+=1,s+n>e.length?tl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Ds(this)};function Do(t){t.Y=Date.now()+t.P,ZE(t,t.P)}function ZE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ko(pt(t.lb,t),e)}function tc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(dO(this.j,this.A),this.L!=2&&(ro(),It(17)),Ds(this),this.o=2,Dr(this)):ZE(this,this.Y-t)};function Dr(t){t.l.H==0||t.J||TT(t.l,t)}function Ds(t){tc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Yd(t.V),HE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hh(n.i,t))){if(!t.K&&hh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)il(n),rc(n);else break e;of(n),It(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ko(pt(n.ib,n),6e3));if(1>=aT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xs(n,11)}else if((t.K||n.g==t)&&il(n),!eo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(tf(r,r.h),r.h=null))}if(s.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,ke(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=AT(s,s.J?s.pa:null,s.Y),o.K){lT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(tc(a),Do(a)),s.g=o}else vT(s);0<n.j.length&&oc(n)}else c[0]!="stop"&&c[0]!="close"||xs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?xs(n,7):rf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ro(4)}catch{}}function mO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _O(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function eT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_O(t),s=mO(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var tT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bs){this.h=t.h,nl(this,t.j),this.s=t.s,this.g=t.g,sl(this,t.m),this.l=t.l;var e=t.i,n=new oo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zg(this,n),this.o=t.o}else t&&(e=String(t).match(tT))?(this.h=!1,nl(this,e[1]||"",!0),this.s=Er(e[2]||""),this.g=Er(e[3]||"",!0),sl(this,e[4]),this.l=Er(e[5]||"",!0),zg(this,e[6]||"",!0),this.o=Er(e[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}Bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tr(e,Gg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tr(e,Gg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Tr(n,n.charAt(0)=="/"?TO:EO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tr(n,wO)),t.join("")};function Un(t){return new Bs(t)}function nl(t,e,n){t.j=n?Er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zg(t,e,n){e instanceof oo?(t.i=e,AO(t.i,t.h)):(n||(e=Tr(e,IO)),t.i=new oo(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function nc(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gg=/[#\/\?@]/g,EO=/[#\?:]/g,TO=/[#\?]/g,IO=/[#\?@]/g,wO=/#/g;function oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vs(t){t.g||(t.g=new Map,t.h=0,t.i&&yO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=oo.prototype;M.add=function(t,e){vs(this),this.i=null,t=nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nT(t,e){vs(t),e=nr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sT(t,e){return vs(t),e=nr(t,e),t.g.has(e)}M.forEach=function(t,e){vs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){vs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){vs(this);let e=[];if(typeof t=="string")sT(this,t)&&(e=e.concat(this.g.get(nr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return vs(this),this.i=null,t=nr(this,t),sT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function iT(t,e,n){nT(t,e),0<n.length&&(t.i=null,t.g.set(nr(t,e),$d(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AO(t,e){e&&!t.j&&(vs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(nT(this,s),iT(this,i,n))},t)),t.j=e}var RO=class{constructor(t,e){this.g=t,this.map=e}};function rT(t){this.l=t||CO,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CO=10;function oT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function aT(t){return t.h?1:t.g?t.g.size:0}function hh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tf(t,e){t.g?t.g.add(e):t.h=e}function lT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rT.prototype.cancel=function(){if(this.i=cT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $d(t.i)}var SO=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function bO(){this.g=new SO}function PO(t,e,n){const s=n||"";try{eT(t,function(i,r){let o=i;bo(i)&&(o=Gd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function kO(t,e){const n=new Xl;if(X.Image){const s=new Image;s.onload=ra(aa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ra(aa,n,s,"TestLoadImage: error",!1,e),s.onabort=ra(aa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ra(aa,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function aa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function xo(t){this.l=t.fc||null,this.j=t.ob||!1}Xe(xo,Jd);xo.prototype.g=function(){return new sc(this.l,this.j)};xo.prototype.i=function(t){return function(){return t}}({});function sc(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(sc,Ye);var nf=0;M=sc.prototype;M.open=function(t,e){if(this.readyState!=nf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ao(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=nf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mo(this):ao(this),this.readyState==3&&uT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Mo(this))};M.Ya=function(t){this.g&&(this.response=t,Mo(this))};M.ka=function(){this.g&&Mo(this)};function Mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ao(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NO=X.JSON.parse;function Le(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hT,this.L=this.M=!1}Xe(Le,Ye);var hT="",OO=/^https?$/i,DO=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?Kg(this.u):Kg(ah),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Qg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=bE(DO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pT(this),0<this.B&&((this.L=xO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Xd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qg(this,r)}};function xO(t){return Mi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Bd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Qg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dT(t),ic(t)}function dT(t){t.F||(t.F=!0,st(t,"complete"),st(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),ic(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ic(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?fT(this):this.kb())};M.kb=function(){fT(this)};function fT(t){if(t.h&&typeof Bd<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)Xd(t.La,0,t);else if(st(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(tT)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),s=!OO.test(i?i.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var r=2<fn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",dT(t)}}finally{ic(t)}}}}function ic(t,e){if(t.g){pT(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function pT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NO(e)}};function Yg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case hT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MO(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(eo(t[s]))continue;var n=oO(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}ZN(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gT(t){let e="";return Hd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function sf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mT(t){this.Ga=0,this.j=[],this.l=new Xl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fr("baseRetryDelayMs",5e3,t),this.hb=fr("retryDelaySeedMs",1e4,t),this.eb=fr("forwardChannelMaxRetries",2,t),this.xa=fr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new rT(t&&t.concurrentRequestLimit),this.Ja=new bO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=mT.prototype;M.ra=8;M.H=1;function rf(t){if(_T(t),t.H==3){var e=t.W++,n=Un(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Lo(t,n),e=new Oo(t,t.l,e),e.L=2,e.v=nc(Un(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=RT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Do(e)}wT(t)}function rc(t){t.g&&(af(t),t.g.cancel(),t.g=null)}function _T(t){rc(t),t.u&&(X.clearTimeout(t.u),t.u=null),il(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function oc(t){if(!oT(t.i)&&!t.m){t.m=!0;var e=t.Na;no||BE(),so||(no(),so=!0),Qd.add(e,t),t.C=0}}function LO(t,e){return aT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ko(pt(t.Na,t,e),IT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=OE(r),DE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yT(this,i,e),n=Un(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Lo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(gT(r)))+"&"+e:this.o&&sf(n,this.o,r)),tf(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,ch(i,n,null)):ch(i,n,e),this.H=2}}else this.H==3&&(t?Xg(this,t):this.j.length==0||oT(this.i)||Xg(this))};function Xg(t,e){var n;e?n=e.m:n=t.W++;const s=Un(t.I);ke(s,"SID",t.K),ke(s,"RID",n),ke(s,"AID",t.V),Lo(t,s),t.o&&t.s&&sf(s,t.o,t.s),n=new Oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=yT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),tf(t.i,n),ch(n,s,e)}function Lo(t,e){t.na&&Hd(t.na,function(n,s){ke(e,s,n)}),t.h&&eT({},function(n,s){ke(e,s,n)})}function yT(t,e,n){n=Math.min(t.j.length,n);var s=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{PO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function vT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;no||BE(),so||(no(),so=!0),Qd.add(e,t),t.A=0}}function of(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ko(pt(t.Ma,t),IT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,ET(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ko(pt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),rc(this),ET(this))};function af(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function ET(t){t.g=new Oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Un(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Lo(t,e),t.o&&t.s&&sf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nc(Un(e)),n.s=null,n.S=!0,YE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,rc(this),of(this),It(19))};function il(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function TT(t,e){var n=null;if(t.g==e){il(t),af(t),t.g=null;var s=2}else if(hh(t.i,e))n=e.F,lT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Jl(),st(s,new KE(s,n)),oc(t)}else vT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&LO(t,e)||s==2&&of(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:xs(t,5);break;case 4:xs(t,10);break;case 3:xs(t,6);break;default:xs(t,2)}}}function IT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function xs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=pt(t.pb,t);n||(n=new Bs("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||nl(n,"https"),nc(n)),kO(n.toString(),s)}else It(2);t.H=0,t.h&&t.h.za(e),wT(t),_T(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function wT(t){if(t.H=0,t.ma=[],t.h){const e=cT(t.i);(e.length!=0||t.j.length!=0)&&($g(t.ma,e),$g(t.ma,t.j),t.i.i.length=0,$d(t.j),t.j.length=0),t.h.ya()}}function AT(t,e,n){var s=n instanceof Bs?Un(n):new Bs(n);if(s.g!="")e&&(s.g=e+"."+s.g),sl(s,s.m);else{var i=X.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Bs(null);s&&nl(r,s),e&&(r.g=e),i&&sl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ke(s,n,e),ke(s,"VER",t.ra),Lo(t,s),s}function RT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new xo({ob:!0})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function CT(){}M=CT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function rl(){if(Mi&&!(10<=Number(QN)))throw Error("Environmental error: no available transport.")}rl.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Ye.call(this),this.g=new mT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new sr(this)}Xe(Mt,Ye);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=AT(t,null,t.Y),oc(t)};Mt.prototype.close=function(){rf(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gd(t),t=n);e.j.push(new RO(e.fb++,t)),e.H==3&&oc(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,rf(this.g),delete this.g,Mt.$.N.call(this)};function ST(t){Zd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(ST,Zd);function bT(){ef.call(this),this.status=1}Xe(bT,ef);function sr(t){this.g=t}Xe(sr,CT);sr.prototype.Ba=function(){st(this.g,"a")};sr.prototype.Aa=function(t){st(this.g,new ST(t))};sr.prototype.za=function(t){st(this.g,new bT)};sr.prototype.ya=function(){st(this.g,"b")};function VO(){this.blockSize=-1}function tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(tn,VO);tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)nu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){nu(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){nu(this,s),i=0;break}}this.h=i,this.i+=e};tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var FO={};function lf(t){return-128<=t&&128>t?KN(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return Ri;if(0>t)return Ze(pn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=dh;return new Te(e,0)}function PT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(PT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),s=Ri,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=pn(Math.pow(e,r)),s=s.R(r).add(pn(o))):(s=s.R(n),s=s.add(pn(o)))}return s}var dh=4294967296,Ri=lf(0),fh=lf(1),Jg=lf(16777216);M=Te.prototype;M.ea=function(){if(Ft(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:dh+s)*e,e*=dh}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xn(this))return"0";if(Ft(this))return"-"+Ze(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,s="";;){var i=al(n,e).g;n=ol(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,xn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}M.X=function(t){return t=ol(this,t),Ft(t)?-1:xn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(fh)}M.abs=function(){return Ft(this)?Ze(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function ol(t,e){return t.add(Ze(e))}M.R=function(t){if(xn(this)||xn(t))return Ri;if(Ft(this))return Ft(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Ft(t))return Ze(this.R(Ze(t)));if(0>this.X(Jg)&&0>t.X(Jg))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,la(n,2*s+2*i),n[2*s+2*i+1]+=r*l,la(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,la(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,la(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function la(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function pr(t,e){this.g=t,this.h=e}function al(t,e){if(xn(e))throw Error("division by zero");if(xn(t))return new pr(Ri,Ri);if(Ft(t))return e=al(Ze(t),e),new pr(Ze(e.g),Ze(e.h));if(Ft(e))return e=al(t,Ze(e)),new pr(Ze(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fh,s=e;0>=s.X(t);)n=Zg(n),s=Zg(s);var i=li(n,1),r=li(s,1);for(s=li(s,2),n=li(n,2);!xn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=li(s,1),n=li(n,1)}return e=ol(t,i.R(e)),new pr(i,e)}for(i=Ri;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=pn(n),o=r.R(e);Ft(o)||0<o.X(t);)n-=s,r=pn(n),o=r.R(e);xn(r)&&(r=fh),i=i.add(r),t=ol(t,o)}return new pr(i,t)}M.gb=function(t){return al(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function Zg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function li(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(i,t.h)}rl.prototype.createWebChannel=rl.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Zl.NO_ERROR=0;Zl.TIMEOUT=8;Zl.HTTP_ERROR=6;zE.COMPLETE="complete";GE.EventType=No;No.OPEN="a";No.CLOSE="b";No.ERROR="c";No.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;tn.prototype.digest=tn.prototype.l;tn.prototype.reset=tn.prototype.reset;tn.prototype.update=tn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=pn;Te.fromString=PT;var UO=function(){return new rl},BO=function(){return Jl()},su=Zl,$O=zE,jO=ei,em={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},HO=xo,ca=GE,WO=Le,qO=tn,Ci=Te;const tm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new _o("@firebase/firestore");function nm(){return zs.logLevel}function $(t,...e){if(zs.logLevel<=fe.DEBUG){const n=e.map(cf);zs.debug(`Firestore (${ir}): ${t}`,...n)}}function Bn(t,...e){if(zs.logLevel<=fe.ERROR){const n=e.map(cf);zs.error(`Firestore (${ir}): ${t}`,...n)}}function Li(t,...e){if(zs.logLevel<=fe.WARN){const n=e.map(cf);zs.warn(`Firestore (${ir}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function Ne(t,e){t||Y()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class zO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GO{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new kT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new ot(e)}}class QO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new QO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new XO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=ZO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Vi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new je(0,0))}static max(){return new Z(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends lo{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const eD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends lo{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return eD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(xe.fromString(e))}static fromName(e){return new Q(xe.fromString(e).popFirst(5))}static empty(){return new Q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new xe(e.slice()))}}function tD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new ps(i,Q.empty(),e)}function nD(t){return new ps(t.readTime,t.key,-1)}class ps{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ps(Z.min(),Q.empty(),-1)}static max(){return new ps(Z.max(),Q.empty(),-1)}}function sD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==iD)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}uf.ae=-1;function ac(t){return t==null}function ll(t){return t===0&&1/t==-1/0}function oD(t){return typeof t=="number"&&Number.isInteger(t)&&!ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ua(this.root,e,this.comparator,!0)}}class ua{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Je.RED,this.left=i??Je.EMPTY,this.right=r??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new im(this.data.getIterator())}getIteratorFrom(e){return new im(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class im{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new mt(dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class DT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new DT("Invalid base64 string: "+r):r}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const aD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gs(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=aD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function co(t){const e=gs(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:cD(t)?9007199254740991:10:Y()}function In(t,e){if(t===e)return!0;const n=Qs(t);if(n!==Qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=gs(i.timestampValue),a=gs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Gs(i.bytesValue).isEqual(Gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return $e(i.geoPointValue.latitude)===$e(r.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return $e(i.integerValue)===$e(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=$e(i.doubleValue),a=$e(r.doubleValue);return o===a?ll(o)===ll(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Vi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(sm(o)!==sm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!In(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function ho(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Qs(t),s=Qs(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=$e(r.integerValue||r.doubleValue),l=$e(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return rm(t.timestampValue,e.timestampValue);case 4:return rm(co(t),co(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Gs(r),l=Gs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ge($e(r.latitude),$e(o.latitude));return a!==0?a:ge($e(r.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Fi(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===ha.mapValue&&o===ha.mapValue)return 0;if(r===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const f=Fi(a[l[h]],c[u[h]]);if(f!==0)return f}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function rm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=gs(t),s=gs(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function Ui(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=gs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ph(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ph(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function gh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function om(t){return!!t&&"nullValue"in t}function am(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ti(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=xr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xr(n)}setAll(e){let n=dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=xr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ti(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ct(xr(this.value))}}function xT(t){const e=[];return ti(t.fields,(n,s)=>{const i=new dt([n]);if(Ra(s)){const r=xT(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Z.min(),Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,i){return new ut(e,1,n,Z.min(),s,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Z.min(),Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Z.min(),Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function lm(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Fi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function cm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mr{constructor(e,n="asc"){this.field=e,this.dir=n}}function uD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class MT{}class qe extends MT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new dD(e,n,s):n==="array-contains"?new gD(e,s):n==="in"?new mD(e,s):n==="not-in"?new _D(e,s):n==="array-contains-any"?new yD(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new fD(e,s):new pD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&Qs(this.value)===Qs(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends MT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new wn(e,n)}matches(e){return LT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function LT(t){return t.op==="and"}function VT(t){return hD(t)&&LT(t)}function hD(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function mh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(VT(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(n=>mh(n)).join(",");return`${t.op}(${e})`}}function FT(t,e){return t instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&In(s.value,i.value)}(t,e):t instanceof wn?function(s,i){return i instanceof wn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&FT(o,i.filters[a]),!0):!1}(t,e):void Y()}function UT(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(UT).join(" ,")+"}"}(t):"Filter"}class dD extends qe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class fD extends qe{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pD extends qe{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class gD extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&ho(n.arrayValue,this.value)}}class mD extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class _D extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class yD extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ho(this.value.arrayValue,s))}}/**
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
 */class vD{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function um(t,e=null,n=[],s=[],i=null,r=null,o=null){return new vD(t,e,n,s,i,r,o)}function pf(t){const e=ne(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>mh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ui(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ui(s)).join(",")),e.he=n}return e.he}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cm(t.startAt,e.startAt)&&cm(t.endAt,e.endAt)}function _h(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ED(t,e,n,s,i,r,o,a){return new lc(t,e,n,s,i,r,o,a)}function cc(t){return new lc(t)}function hm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ID(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wD(t){return t.collectionGroup!==null}function Si(t){const e=ne(t);if(e.Pe===null){e.Pe=[];const n=ID(e),s=TD(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new Mr(n)),e.Pe.push(new Mr(dt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Mr(dt.keyField(),r))}}}return e.Pe}function $n(t){const e=ne(t);if(!e.Ie)if(e.limitType==="F")e.Ie=um(e.path,e.collectionGroup,Si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Si(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Mr(r.field,o))}const s=e.endAt?new cl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cl(e.startAt.position,e.startAt.inclusive):null;e.Ie=um(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function yh(t,e,n){return new lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return gf($n(t),$n(e))&&t.limitType===e.limitType}function $T(t){return`${pf($n(t))}|lt:${t.limitType}`}function vh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>UT(i)).join(", ")}]`),ac(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ui(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ui(i)).join(",")),`Target(${s})`}($n(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):Q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Si(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=lm(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Si(s),i)||s.endAt&&!function(o,a,l){const c=lm(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Si(s),i))}(t,e)}function AD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jT(t){return(e,n)=>{let s=!1;for(const i of Si(t)){const r=RD(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function RD(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Fi(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new Me(Q.comparator);function jn(){return CD}const HT=new Me(Q.comparator);function Ir(...t){let e=HT;for(const n of t)e=e.insert(n.key,n);return e}function WT(t){let e=HT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ms(){return Lr()}function qT(){return Lr()}function Lr(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const SD=new Me(Q.comparator),bD=new mt(Q.comparator);function ae(...t){let e=bD;for(const n of t)e=e.add(n);return e}const PD=new mt(ge);function kD(){return PD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function zT(t){return{integerValue:""+t}}function ND(t,e){return oD(e)?zT(e):KT(t,e)}/**
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
 */class dc{constructor(){this._=void 0}}function OD(t,e,n){return t instanceof ul?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&hf(r)&&(r=df(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Bi?QT(t,e):t instanceof fo?YT(t,e):function(i,r){const o=GT(i,r),a=dm(o)+dm(i.Te);return gh(o)&&gh(i.Te)?zT(a):KT(i.serializer,a)}(t,e)}function DD(t,e,n){return t instanceof Bi?QT(t,e):t instanceof fo?YT(t,e):n}function GT(t,e){return t instanceof hl?function(s){return gh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class ul extends dc{}class Bi extends dc{constructor(e){super(),this.elements=e}}function QT(t,e){const n=XT(e);for(const s of t.elements)n.some(i=>In(i,s))||n.push(s);return{arrayValue:{values:n}}}class fo extends dc{constructor(e){super(),this.elements=e}}function YT(t,e){let n=XT(e);for(const s of t.elements)n=n.filter(i=>!In(i,s));return{arrayValue:{values:n}}}class hl extends dc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function dm(t){return $e(t.integerValue||t.doubleValue)}function XT(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.field=e,this.transform=n}}function MD(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Bi&&i instanceof Bi||s instanceof fo&&i instanceof fo?Vi(s.elements,i.elements,In):s instanceof hl&&i instanceof hl?In(s.Te,i.Te):s instanceof ul&&i instanceof ul}(t.transform,e.transform)}class LD{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function JT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eI(t.key,_n.none()):new Uo(t.key,t.data,_n.none());{const n=t.data,s=Ct.empty();let i=new mt(dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Es(t.key,s,new Nt(i.toArray()),_n.none())}}function VD(t,e,n){t instanceof Uo?function(i,r,o){const a=i.value.clone(),l=pm(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(i,r,o){if(!Ca(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=pm(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(ZT(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vr(t,e,n,s){return t instanceof Uo?function(r,o,a,l){if(!Ca(r.precondition,o))return a;const c=r.value.clone(),u=gm(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Es?function(r,o,a,l){if(!Ca(r.precondition,o))return a;const c=gm(r.fieldTransforms,l,o),u=o.data;return u.setAll(ZT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Ca(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function FD(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=GT(s.transform,i||null);r!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,r))}return n||null}function fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Vi(s,i,(r,o)=>MD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends fc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Es extends fc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ZT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pm(t,e,n){const s=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,DD(o,a,n[i]))}return s}function gm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,OD(r,o,e))}return s}class eI extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UD extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&VD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=qT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=JT(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(n,s)=>fm(n,s))&&Vi(this.baseMutations,e.baseMutations,(n,s)=>fm(n,s))}}class mf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ne(e.mutations.length===s.length);let i=function(){return SD}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new mf(e,n,s,i)}}/**
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
 */class $D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ce;function HD(t){switch(t){default:return Y();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function tI(t){if(t===void 0)return Bn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Be.OK:return C.OK;case Be.CANCELLED:return C.CANCELLED;case Be.UNKNOWN:return C.UNKNOWN;case Be.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Be.INTERNAL:return C.INTERNAL;case Be.UNAVAILABLE:return C.UNAVAILABLE;case Be.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Be.NOT_FOUND:return C.NOT_FOUND;case Be.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Be.ABORTED:return C.ABORTED;case Be.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Be.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(ce=Be||(Be={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _f{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return da}static getOrCreateInstance(){return da===null&&(da=new _f),da}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let da=null;/**
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
 */function WD(){return new TextEncoder}/**
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
 */const qD=new Ci([4294967295,4294967295],0);function mm(t){const e=WD().encode(t),n=new qO;return n.update(e),new Uint8Array(n.digest())}function _m(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ci([n,s],0),new Ci([i,r],0)]}class yf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wr(`Invalid padding: ${n}`);if(s<0)throw new wr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new wr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ci.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(Ci.fromNumber(s)));return i.compare(qD)===1&&(i=new Ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=mm(e),[s,i]=_m(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new yf(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=mm(e),[s,i]=_m(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new pc(Z.min(),i,new Me(ge),jn(),ae())}}class Bo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Bo(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class nI{constructor(e,n){this.targetId=e,this.pe=n}}class sI{constructor(e,n,s=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ym{constructor(){this.ye=0,this.we=Em(),this.Se=vt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ae(),n=ae(),s=ae();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Bo(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=Em()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class KD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=jn(),this.$e=vm(),this.Ue=new Me(ge)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(_h(a))if(r===0){const l=new Q(a.path);this.ze(i,l,ut.newNoDocument(l,Z.min()))}else Ne(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=_f.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var _,v,T,R,S,w;const B={localCacheCount:f,existenceFilterCount:m.count},j=m.unchangedNames;return j&&(B.bloomFilter={applied:h===0,hashCount:(_=j==null?void 0:j.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(R=(T=(v=j==null?void 0:j.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&R!==void 0?R:0,padding:(w=(S=j==null?void 0:j.bits)===null||S===void 0?void 0:S.padding)!==null&&w!==void 0?w:0},d&&(B.bloomFilter.mightContain=d)),B}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Gs(r).toUint8Array()}catch(h){if(h instanceof DT)return Li("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new yf(l,o,a)}catch(h){return Li(h instanceof wr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&_h(a.target)){const l=new Q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,ut.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=ae();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new pc(e,n,this.Ue,this.Ke,s);return this.Ke=jn(),this.$e=vm(),this.Ue=new Me(ge),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new ym,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new mt(ge),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new ym),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function vm(){return new Me(Q.comparator)}function Em(){return new Me(Q.comparator)}const zD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),GD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),QD=(()=>({and:"AND",or:"OR"}))();class YD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eh(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XD(t,e){return dl(t,e.toTimestamp())}function yn(t){return Ne(!!t),Z.fromTimestamp(function(n){const s=gs(n);return new je(s.seconds,s.nanos)}(t))}function vf(t,e){return function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function rI(t){const e=xe.fromString(t);return Ne(cI(e)),e}function Th(t,e){return vf(t.databaseId,e.path)}function iu(t,e){const n=rI(e);if(n.get(1)!==t.databaseId.projectId)throw new W(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(oI(n))}function Ih(t,e){return vf(t.databaseId,e)}function JD(t){const e=rI(t);return e.length===4?xe.emptyPath():oI(e)}function wh(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oI(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tm(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function ZD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?C.UNKNOWN:tI(c.code);return new W(u,c.message||"")}(o);n=new sI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=iu(t,s.document.name),r=yn(s.document.updateTime),o=s.document.createTime?yn(s.document.createTime):Z.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=ut.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Sa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=iu(t,s.document),r=s.readTime?yn(s.readTime):Z.min(),o=ut.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=iu(t,s.document),r=s.removedTargetIds||[];n=new Sa([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new jD(i,r),a=s.targetId;n=new nI(a,o)}}return n}function e1(t,e){let n;if(e instanceof Uo)n={update:Tm(t,e.key,e.value)};else if(e instanceof eI)n={delete:Th(t,e.key)};else if(e instanceof Es)n={update:Tm(t,e.key,e.data),updateMask:c1(e.fieldMask)};else{if(!(e instanceof UD))return Y();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof ul)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:XD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function t1(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?yn(i.updateTime):yn(r);return o.isEqual(Z.min())&&(o=yn(r)),new LD(o,i.transformResults||[])}(n,e))):[]}function n1(t,e){return{documents:[Ih(t,e.path)]}}function s1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ih(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ih(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return lI(wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ui(h.field),direction:o1(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Eh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function i1(t){let e=JD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=aI(h);return d instanceof wn&&VT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Mr(hi(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ac(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new cl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new cl(f,d)}(n.endAt)),ED(e,i,o,r,a,"F",l,c)}function r1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=hi(n.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hi(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(s=>aI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function o1(t){return zD[t]}function a1(t){return GD[t]}function l1(t){return QD[t]}function ui(t){return{fieldPath:t.canonicalString()}}function hi(t){return dt.fromServerFormat(t.fieldPath)}function lI(t){return t instanceof qe?function(n){if(n.op==="=="){if(am(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(om(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(am(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(om(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:a1(n.op),value:n.value}}}(t):t instanceof wn?function(n){const s=n.getFilters().map(i=>lI(i));return s.length===1?s[0]:{compositeFilter:{op:l1(n.op),filters:s}}}(t):Y()}function c1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,s,i,r=Z.min(),o=Z.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.ct=e}}function h1(t){const e=i1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yh(e,e.limit,"L"):e}/**
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
 */class d1{constructor(){this.sn=new f1}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ps.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ps.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class f1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new mt(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new mt(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new $i(0)}static On(){return new $i(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class g1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Vr(s.mutation,i,Nt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=Ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ir();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=jn();const o=Lr(),a=function(){return Lr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Es)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Vr(u.mutation,c,u.mutation.getFieldMask(),je.now())):o.set(c.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new g1(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Lr();let i=new Me((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Nt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ae()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=qT();u.forEach(d=>{if(!r.has(d)){const f=JT(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Ms());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:WT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Ir();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ir();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,h){return new lc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ut.newInvalidDocument(c)))});let o=Ir();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Vr(c.mutation,l,Nt.empty(),je.now()),hc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:h1(i.bundledQuery),readTime:yn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class y1{constructor(){this.overlays=new Me(Q.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ms();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Ms(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ms(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ms(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $D(n,s));let r=this.cr.get(n);r===void 0&&(r=ae(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.lr=new mt(ze.hr),this.Pr=new mt(ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new ze(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1);let r=ae();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||ge(e.mr,n.mr)}static Ir(e,n){return ge(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new mt(ze.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BD(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new mt(ge);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),k.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new ze(new Q(r),0);let a=new mt(ge);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return k.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new ze(n,0),i=this.pr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.Dr=e,this.docs=function(){return new Me(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=jn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ut.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=jn();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sD(nD(u),s)<=0||(i.has(u.key)||hc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new T1(this)}getSize(e){return k.resolve(this.size)}}class T1 extends p1{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.persistence=e,this.Cr=new rr(n=>pf(n),gf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Ef,this.targetCount=0,this.Or=$i.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new $i(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.Nr={},this.overlays={},this.Br=new uf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new I1(this),this.indexManager=new d1,this.remoteDocumentCache=function(i){return new E1(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new u1(n),this.Qr=new _1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new v1(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new A1(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class A1 extends rD{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Wr=new Ef,this.Gr=null}static zr(e){return new Tf(e)}get jr(){if(this.Gr)return this.Gr;throw Y()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,s=>{const i=Q.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,Z.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new If(e,n.fromCache,s,i)}}/**
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
 */class R1{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(hm(n))return k.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yh(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,yh(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return hm(n)||i.isEqual(Z.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(nm()<=fe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vh(n)),this.ji(e,o,n,tD(i,-1)))})}Gi(e,n){let s=new mt(jT(e));return n.forEach((i,r)=>{hc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return nm()<=fe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",vh(n)),this.Ki.getDocumentsMatchingQuery(e,n,ps.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(ge),this.Yi=new rr(r=>pf(r),gf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function S1(t,e,n,s){return new C1(t,e,n,s)}async function uI(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ae();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function b1(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(_=>{const v=c.docVersions.get(m);Ne(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function hI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function P1(t,e){const n=ne(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(vt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(_,v,T){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=jn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(k1(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(Z.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function k1(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=jn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function N1(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function O1(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new ss(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Ah(t,e,n){const s=ne(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Im(t,e,n){const s=ne(t);let i=Z.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ne(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?r:ae())).next(a=>(D1(s,AD(e),a),{documents:a,ss:r})))}function D1(t,e,n){let s=t.Zi.get(e)||Z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class wm{constructor(){this.activeTargetIds=kD()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x1{constructor(){this.Hs=new wm,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new wm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M1{Ys(e){}shutdown(){}}/**
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
 */class Am{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function ru(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class F1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=ru(),l=this.mo(n,s);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Li("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ir}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=L1[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=ru();return new Promise((o,a)=>{const l=new WO;l.setWithCredentials(!0),l.listenOnce($O.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case su.NO_ERROR:const u=l.getResponseJson();$(rt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case su.TIMEOUT:$(rt,`RPC '${e}' ${r} timed out`),a(new W(C.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const h=l.getStatus();if($(rt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(T)>=0?T:C.UNKNOWN}(f.status);a(new W(m,f.message))}else a(new W(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(rt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(rt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=ru(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UO(),a=BO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new HO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");$(rt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new V1({so:v=>{f?$(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||($(rt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),$(rt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,T,R)=>{v.listen(T,S=>{try{R(S)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,ca.EventType.OPEN,()=>{f||$(rt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ca.EventType.CLOSE,()=>{f||(f=!0,$(rt,`RPC '${e}' stream ${i} transport closed`),m.Po())}),_(h,ca.EventType.ERROR,v=>{f||(f=!0,Li(rt,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new W(C.UNAVAILABLE,"The operation could not be completed")))}),_(h,ca.EventType.MESSAGE,v=>{var T;if(!f){const R=v.data[0];Ne(!!R);const S=R,w=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(w){$(rt,`RPC '${e}' stream ${i} received error:`,w);const B=w.status;let j=function(ie){const re=Be[ie];if(re!==void 0)return tI(re)}(B),te=w.message;j===void 0&&(j=C.INTERNAL,te="Unknown error status: "+B+" with message "+w.message),f=!0,m.Po(new W(j,te)),h.close()}else $(rt,`RPC '${e}' stream ${i} received:`,R),m.Io(R)}}),_(a,jO.STAT_EVENT,v=>{v.stat===em.PROXY?$(rt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===em.NOPROXY&&$(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function ou(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new YD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new dI(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new W(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U1 extends fI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=ZD(this.serializer,e),s=function(r){if(!("targetChange"in r))return Z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?yn(o.readTime):Z.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=wh(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=_h(l)?{documents:n1(r,l)}:{query:s1(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iI(r,o.resumeToken);const c=Eh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=dl(r,o.snapshotVersion.toTimestamp());const c=Eh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=r1(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=wh(this.serializer),n.removeTarget=e,this.Ho(n)}}class B1 extends fI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=t1(e.writeResults,e.commitTime),s=yn(e.commitTime);return this.listener.u_(s,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=wh(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>e1(this.serializer,s))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new W(C.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(C.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(C.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class j1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Bn(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{ni(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.y_.add(4),await $o(c),c.b_.set("Unknown"),c.y_.delete(4),await mc(c)}(this))})}),this.b_=new j1(s,i)}}async function mc(t){if(ni(t))for(const e of t.w_)await e(!0)}async function $o(t){for(const e of t.w_)await e(!1)}function pI(t,e){const n=ne(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Rf(n)?Af(n):or(n).Uo()&&wf(n,e))}function gI(t,e){const n=ne(t),s=or(n);n.p_.delete(e),s.Uo()&&mI(n,e),n.p_.size===0&&(s.Uo()?s.zo():ni(n)&&n.b_.set("Unknown"))}function wf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}or(t).i_(e)}function mI(t,e){t.D_.Be(e),or(t).s_(e)}function Af(t){t.D_=new KD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),or(t).start(),t.b_.A_()}function Rf(t){return ni(t)&&!or(t).$o()&&t.p_.size>0}function ni(t){return ne(t).y_.size===0}function _I(t){t.D_=void 0}async function W1(t){t.p_.forEach((e,n)=>{wf(t,e)})}async function q1(t,e){_I(t),Rf(t)?(t.b_.m_(e),Af(t)):t.b_.set("Unknown")}async function K1(t,e,n){if(t.b_.set("Online"),e instanceof sI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fl(t,s)}else if(e instanceof Sa?t.D_.We(e):e instanceof nI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Z.min()))try{const s=await hI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(vt.EMPTY_BYTE_STRING,u.snapshotVersion)),mI(r,l);const h=new ss(u.target,l,c,u.sequenceNumber);wf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await fl(t,s)}}async function fl(t,e,n){if(!Fo(e))throw e;t.y_.add(1),await $o(t),t.b_.set("Offline"),n||(n=()=>hI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await mc(t)})}function yI(t,e){return e().catch(n=>fl(t,n,e))}async function _c(t){const e=ne(t),n=ms(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;z1(e);)try{const i=await N1(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,G1(e,i)}catch(i){await fl(e,i)}vI(e)&&EI(e)}function z1(t){return ni(t)&&t.g_.length<10}function G1(t,e){t.g_.push(e);const n=ms(t);n.Uo()&&n.__&&n.a_(e.mutations)}function vI(t){return ni(t)&&!ms(t).$o()&&t.g_.length>0}function EI(t){ms(t).start()}async function Q1(t){ms(t).l_()}async function Y1(t){const e=ms(t);for(const n of t.g_)e.a_(n.mutations)}async function X1(t,e,n){const s=t.g_.shift(),i=mf.from(s,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _c(t)}async function J1(t,e){e&&ms(t).__&&await async function(s,i){if(function(o){return HD(o)&&o!==C.ABORTED}(i.code)){const r=s.g_.shift();ms(s).Go(),await yI(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await _c(s)}}(t,e),vI(t)&&EI(t)}async function Rm(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ni(n);n.y_.add(3),await $o(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await mc(n)}async function Z1(t,e){const n=ne(t);e?(n.y_.delete(2),await mc(n)):e||(n.y_.add(2),await $o(n),n.b_.set("Unknown"))}function or(t){return t.v_||(t.v_=function(n,s,i){const r=ne(n);return r.P_(),new U1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:W1.bind(null,t),uo:q1.bind(null,t),r_:K1.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Rf(t)?Af(t):t.b_.set("Unknown")):(await t.v_.stop(),_I(t))})),t.v_}function ms(t){return t.C_||(t.C_=function(n,s,i){const r=ne(n);return r.P_(),new B1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:Q1.bind(null,t),uo:J1.bind(null,t),c_:Y1.bind(null,t),u_:X1.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await _c(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Cf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Fo(t))return new W(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=Ir(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new bi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.F_=new Me(Q.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):Y():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class ji{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ji(e,n,bi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.x_=void 0,this.listeners=[]}}class tx{constructor(){this.queries=new rr(e=>$T(e),uc),this.onlineState="Unknown",this.O_=new Set}}async function bf(t,e){const n=ne(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ex),i)try{r.x_=await n.onListen(s)}catch(o){const a=Sf(o,`Initialization of query '${vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&kf(n)}async function Pf(t,e){const n=ne(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function nx(t,e){const n=ne(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&kf(n)}function sx(t,e,n){const s=ne(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function kf(t){t.O_.forEach(e=>{e.next()})}class Nf{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ji(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.key=e}}class II{constructor(e){this.key=e}}class ix{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ae(),this.mutatedKeys=ae(),this.na=jT(e),this.ra=new bi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new Cm,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=hc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new ji(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Cm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ae(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new II(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new TI(s))}),n}ha(e){this.X_=e.ss,this.ta=ae();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return ji.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class rx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ox{constructor(e){this.key=e,this.Ia=!1}}class ax{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new rr(a=>$T(a),uc),this.da=new Map,this.Aa=new Set,this.Ra=new Me(Q.comparator),this.Va=new Map,this.ma=new Ef,this.fa={},this.ga=new Map,this.pa=$i.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function lx(t,e){const n=yx(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await O1(n.localStore,$n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await cx(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&pI(n.remoteStore,o)}return i}async function cx(t,e,n,s,i){t.wa=(h,d,f)=>async function(_,v,T,R){let S=v.view.sa(T);S.zi&&(S=await Im(_.localStore,v.query,!1).then(({documents:j})=>v.view.sa(j,S)));const w=R&&R.targetChanges.get(v.targetId),B=v.view.applyChanges(S,_.isPrimaryClient,w);return bm(_,v.targetId,B.ca),B.snapshot}(t,h,d,f);const r=await Im(t.localStore,e,!0),o=new ix(e,r.ss),a=o.sa(r.documents),l=Bo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);bm(t,n,c.ca);const u=new rx(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function ux(t,e){const n=ne(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!uc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ah(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gI(n.remoteStore,s.targetId),Rh(n,s.targetId)}).catch(Vo)):(Rh(n,s.targetId),await Ah(n.localStore,s.targetId,!0))}async function hx(t,e,n){const s=vx(t);try{const i=await function(o,a){const l=ne(o),c=je.now(),u=a.reduce((f,m)=>f.add(m.key),ae());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=jn(),_=ae();return l.Xi.getEntries(f,u).next(v=>{m=v,m.forEach((T,R)=>{R.isValidDocument()||(_=_.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const T=[];for(const R of a){const S=FD(R,h.get(R.key).overlayedDocument);S!=null&&T.push(new Es(R.key,S,xT(S.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:WT(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Me(ge)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await jo(s,i.changes),await _c(s.remoteStore)}catch(i){const r=Sf(i,"Failed to persist write");n.reject(r)}}async function wI(t,e){const n=ne(t);try{const s=await P1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Ne(o.Ia):i.removedDocuments.size>0&&(Ne(o.Ia),o.Ia=!1))}),await jo(n,s,e)}catch(s){await Vo(s)}}function Sm(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&kf(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dx(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Me(Q.comparator);o=o.insert(r,ut.newNoDocument(r,Z.min()));const a=ae().add(r),l=new pc(Z.min(),new Map,new Me(ge),o,a);await wI(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),Of(s)}else await Ah(s.localStore,e,!1).then(()=>Rh(s,e,n)).catch(Vo)}async function fx(t,e){const n=ne(t),s=e.batch.batchId;try{const i=await b1(n.localStore,e);RI(n,s,null),AI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jo(n,i)}catch(i){await Vo(i)}}async function px(t,e,n){const s=ne(t);try{const i=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);RI(s,e,n),AI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await jo(s,i)}catch(i){await Vo(i)}}function AI(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function RI(t,e,n){const s=ne(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function Rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||CI(t,s)})}function CI(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(gI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Of(t))}function bm(t,e,n){for(const s of n)s instanceof TI?(t.ma.addReference(s.key,e),gx(t,s)):s instanceof II?($("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||CI(t,s.key)):Y()}function gx(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(s),Of(t))}function Of(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new Q(xe.fromString(e)),s=t.pa.next();t.Va.set(s,new ox(n)),t.Ra=t.Ra.insert(n,s),pI(t.remoteStore,new ss($n(cc(n.path)),s,"TargetPurposeLimboResolution",uf.ae))}}async function jo(t,e,n){const s=ne(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=If.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Fo(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,_)}}}(s.localStore,r))}async function mx(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await uI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new W(C.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jo(n,s.ts)}}function _x(t,e){const n=ne(t),s=n.Va.get(e);if(s&&s.Ia)return ae().add(s.key);{let i=ae();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function yx(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_x.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dx.bind(null,e),e.Ta.r_=nx.bind(null,e.eventManager),e.Ta.Sa=sx.bind(null,e.eventManager),e}function vx(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=px.bind(null,e),e}class Pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return S1(this.persistence,new R1,e.initialUser,this.serializer)}createPersistence(e){return new w1(Tf.zr,this.serializer)}createSharedClientState(e){return new x1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ex{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mx.bind(null,this.syncEngine),await Z1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tx}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),s=function(r){return new F1(r)}(e.databaseInfo);return function(r,o,a,l){return new $1(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new H1(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Sm(this.syncEngine,n,0),function(){return Am.v()?new Am:new M1}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new ax(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ne(n);$("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await $o(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=NT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function au(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await uI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wx(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Rm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Rm(e.remoteStore,r)),t._onlineComponents=e}function Ix(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await au(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ix(n))throw n;Li("Error using user provided cache. Falling back to memory cache: "+n),await au(t,new Pm)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await au(t,new Pm);return t._offlineComponents}async function SI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await km(t,new Ex))),t._onlineComponents}function Ax(t){return SI(t).then(e=>e.syncEngine)}async function pl(t){const e=await SI(t),n=e.eventManager;return n.onListen=lx.bind(null,e.syncEngine),n.onUnlisten=ux.bind(null,e.syncEngine),n}function Rx(t,e,n={}){const s=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Df({next:d=>{o.enqueueAndForget(()=>Pf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(C.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Nf(cc(a.path),u,{includeMetadataChanges:!0,W_:!0});return bf(r,h)}(await pl(t),t.asyncQueue,e,n,s)),s.promise}function Cx(t,e,n={}){const s=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Df({next:d=>{o.enqueueAndForget(()=>Pf(r,h)),d.fromCache&&l.source==="server"?c.reject(new W(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Nf(a,u,{includeMetadataChanges:!0,W_:!0});return bf(r,h)}(await pl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function bI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e,n){if(!n)throw new W(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sx(t,e,n,s){if(e===!0&&s===!0)throw new W(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Om(t){if(!Q.isDocumentKey(t))throw new W(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(Q.isDocumentKey(t))throw new W(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xf(t);throw new W(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new W(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new KO;switch(s.type){case"firstParty":return new YO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Nm.get(n);s&&($("ComponentProvider","Removing Datastore"),Nm.delete(n),s.terminate())}(this),Promise.resolve()}}function bx(t,e,n,s={}){var i;const r=(t=jt(t,yc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ot.MOCK_USER;else{a=Y0(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(c)}t._authCredentials=new zO(new kT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ho(this.firestore,e,this._query)}}class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class us extends Ho{constructor(e,n,s){super(e,n,cc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Q(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function rV(t,e,...n){if(t=yt(t),PI("collection","path",e),t instanceof yc){const s=xe.fromString(e,...n);return Dm(s),new us(t,null,s)}{if(!(t instanceof wt||t instanceof us))throw new W(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Dm(s),new us(t.firestore,null,s)}}function oV(t,e,...n){if(t=yt(t),arguments.length===1&&(e=NT.V()),PI("doc","path",e),t instanceof yc){const s=xe.fromString(e,...n);return Om(s),new wt(t,null,new Q(s))}{if(!(t instanceof wt||t instanceof us))throw new W(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Om(s),new wt(t.firestore,t instanceof us?t.converter:null,new Q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new dI(this,"async_queue_retry"),this.Xa=()=>{const n=ou();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Ln;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Fo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Bn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&Y()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Mm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ys extends yc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new Px}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kI(this),this._firestoreClient.terminate()}}function kx(t,e){const n=typeof t=="object"?t:ld(),s=typeof t=="string"?t:e||"(default)",i=ad(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Q0("firestore");r&&bx(i,...r)}return i}function vc(t){return t._firestoreClient||kI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new lD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,bI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Tx(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(vt.fromBase64String(e))}catch(n){throw new W(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=/^__.*__$/;class Ox{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class NI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class wc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return gl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(OI(this.uu)&&Nx.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class Dx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gc(e)}Ru(e,n,s,i=!1){return new wc({uu:e,methodName:n,Au:s,path:dt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DI(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new Dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xx(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);Mf("Data must be an object, but it was:",o,s);const a=xI(s,o);let l,c;if(r.merge)l=new Nt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ch(e,h,n);if(!o.contains(d))throw new W(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);LI(u,d)||u.push(d)}l=new Nt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Ox(new Ct(a),l,c)}class Ac extends Tc{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function Mx(t,e,n){return new wc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lx extends Tc{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=Mx(this,e,!0),s=this.Vu.map(r=>Wo(r,n)),i=new Bi(s);return new xD(e.path,i)}isEqual(e){return this===e}}function Vx(t,e,n,s){const i=t.Ru(1,e,n);Mf("Data must be an object, but it was:",i,s);const r=[],o=Ct.empty();ti(s,(l,c)=>{const u=Lf(e,l,n);c=yt(c);const h=i.Iu(u);if(c instanceof Ac)r.push(u);else{const d=Wo(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Nt(r);return new NI(o,a,i.fieldTransforms)}function Fx(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[Ch(e,s,n)],l=[i];if(r.length%2!=0)throw new W(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ch(e,r[d])),l.push(r[d+1]);const c=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!LI(c,a[d])){const f=a[d];let m=l[d];m=yt(m);const _=o.Iu(f);if(m instanceof Ac)c.push(f);else{const v=Wo(m,_);v!=null&&(c.push(f),u.set(f,v))}}const h=new Nt(c);return new NI(u,h,o.fieldTransforms)}function Wo(t,e){if(MI(t=yt(t)))return Mf("Unsupported field value:",e,t),xI(t,e);if(t instanceof Tc)return function(s,i){if(!OI(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Wo(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ND(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=je.fromDate(s);return{timestampValue:dl(i.serializer,r)}}if(s instanceof je){const r=new je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:dl(i.serializer,r)}}if(s instanceof Ic)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hi)return{bytesValue:iI(i.serializer,s._byteString)};if(s instanceof wt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vf(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${xf(s)}`)}(t,e)}function xI(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(t,(s,i)=>{const r=Wo(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function MI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Ic||t instanceof Hi||t instanceof wt||t instanceof Tc)}function Mf(t,e,n){if(!MI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=xf(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function Ch(t,e,n){if((e=yt(e))instanceof Ec)return e._internalPath;if(typeof e=="string")return Lf(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ux=new RegExp("[~\\*/\\[\\]]");function Lf(t,e,n){if(e.search(Ux)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new W(C.INVALID_ARGUMENT,a+t+l)}function LI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(FI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bx extends VI{data(){return super.data()}}function FI(t,e){return typeof e=="string"?Lf(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $x{convertValue(e,n="none"){switch(Qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ti(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ic($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=df(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=gs(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);Ne(cI(s));const i=new uo(s.get(1),s.get(3)),r=new Q(s.popFirst(5));return i.isEqual(n)||Bn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BI extends VI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(FI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ba extends BI{data(e={}){return super.data(e)}}class $I{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ar(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ba(this._firestore,this._userDataWriter,s.key,s,new Ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ar(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ar(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Hx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Hx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){t=jt(t,wt);const e=jt(t.firestore,Ys);return Rx(vc(e),t._key).then(n=>WI(e,t,n))}class Vf extends $x{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Wx(t){t=jt(t,Ho);const e=jt(t.firestore,Ys),n=vc(e),s=new Vf(e);return UI(t._query),Cx(n,t._query).then(i=>new $I(e,s,t,i))}function aV(t,e,n){t=jt(t,wt);const s=jt(t.firestore,Ys),i=jx(t.converter,e,n);return HI(s,[xx(DI(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function lV(t,e,n,...s){t=jt(t,wt);const i=jt(t.firestore,Ys),r=DI(i);let o;return o=typeof(e=yt(e))=="string"||e instanceof Ec?Fx(r,"updateDoc",t._key,e,n,s):Vx(r,"updateDoc",t._key,e),HI(i,[o.toMutation(t._key,_n.exists(!0))])}function Ff(t,...e){var n,s,i;t=yt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof wt)c=jt(t.firestore,Ys),u=cc(t._key.path),l={next:h=>{e[o]&&e[o](WI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,Ho);c=jt(h.firestore,Ys),u=h._query;const d=new Vf(c);l={next:f=>{e[o]&&e[o](new $I(c,d,h,f))},error:e[o+1],complete:e[o+2]},UI(t._query)}return function(d,f,m,_){const v=new Df(_),T=new Nf(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>bf(await pl(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Pf(await pl(d),T))}}(vc(c),u,a,l)}function HI(t,e){return function(s,i){const r=new Ln;return s.asyncQueue.enqueueAndForget(async()=>hx(await Ax(s),i,r)),r.promise}(vc(t),e)}function WI(t,e,n){const s=n.docs.get(e._key),i=new Vf(t);return new BI(t,i,e._key,s,new Ar(n.hasPendingWrites,n.fromCache),e.converter)}function cV(...t){return new Lx("arrayUnion",t)}(function(e,n=!0){(function(i){ir=i})(_s),En(new Zt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ys(new GO(s.getProvider("auth-internal")),new JO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Dt(tm,"4.1.0",e),Dt(tm,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebasestorage.googleapis.com",qx="storageBucket",Kx=2*60*1e3,zx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Rn{constructor(e,n,s=0){super(lu(e),`Firebase Storage: ${n} (${lu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function lu(t){return"storage/"+t}function Gx(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(An.UNKNOWN,t)}function Qx(){return new Cn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yx(){return new Cn(An.CANCELED,"User canceled the upload/download.")}function Xx(t){return new Cn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function Jx(t){return new Cn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lm(t){return new Cn(An.INVALID_ARGUMENT,t)}function KI(){return new Cn(An.APP_DELETED,"The Firebase app was deleted.")}function Zx(t){return new Cn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(s.path==="")return s;throw Jx(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===qI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${i}/${v}`,"i"),S=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<S.length;w++){const B=S[w],j=B.regex.exec(e);if(j){const te=j[B.indices.bucket];let F=j[B.indices.path];F||(F=""),s=new Yt(te,F),B.postModify(s);break}}if(s==null)throw Xx(e);return s}}class eM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let m=!1;function _(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function nM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t){return t!==void 0}function Vm(t,e,n,s){if(s<e)throw Lm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Lm(`Invalid value for '${t}'. Expected ${n} or less.`)}function iM(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ml;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ml||(ml={}));/**
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
 */function rM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new pa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ml.NO_ERROR,l=r.getStatus();if(!a||rM(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ml.ABORT;s(!1,new pa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new pa(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sM(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Gx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?KI():Yx();o(l)}else{const l=Qx();o(l)}};this.canceled_?n(!1,new pa(!1,null,!0)):this.backoffId_=tM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function aM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hM(t,e,n,s,i,r,o=!0){const a=iM(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return cM(c,e),aM(c,n),lM(c,r),uM(c,s),new oM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _l{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _l(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fM(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new _l(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Zx(e)}}function Fm(t,e){const n=e==null?void 0:e[qx];return n==null?null:Yt.makeFromBucketSpec(n,t)}class pM{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=qI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kx,this._maxUploadRetryTime=zx,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=Fm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Fm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _l(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new eM(KI());{const o=hM(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Um="@firebase/storage",Bm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="storage";function mM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pM(n,s,i,e,_s)}function _M(){En(new Zt(gM,mM,"PUBLIC").setMultipleInstances(!0)),Dt(Um,Bm,""),Dt(Um,Bm,"esm2017")}_M();const cu=new WeakMap;function zI(t,e){return cu.has(e)||cu.set(e,t||{f:{},r:{},s:{},u:{}}),cu.get(e)}function yM(t,e,n,s){if(!t)return n;const[i,r]=GI(t);if(!i)return n;const o=zI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function vM(t,e,n,s){if(!t)return;const[i,r]=GI(t);if(!i)return;const o=zI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(un),a}function GI(t){return Wb(t)||qb(t)?["f",t.path]:Kb(t)?["r",t.toString()]:zb(t)?["s",t.toString()]:[]}const uu=new WeakMap;function EM(t,e,n){const s=Io();uu.has(s)||uu.set(s,new Map);const i=uu.get(s),r=vM(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):un}const TM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Sh(t,e,n,s){if(!jb(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof je||m instanceof Ic)h[f]=m;else if(yd(m)){const _=c+f;h[f]=_ in n?l[f]:m.path,d[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[f][_]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Xs(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Uf={reset:!1,wait:!0,maxRefDepth:2,converter:TM,snapshotOptions:{serverTimestamps:"estimate"}};function yl(t){for(const e in t)t[e].unsub()}function bh(t,e,n,s,i,r,o,a,l){const[c,u]=Sh(s.data(t.snapshotOptions),_d(e,n),i,t);r.set(e,n,c),Ph(t,e,n,i,u,r,o,a,l)}function IM({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=un;return a.once?jI(t).then(u=>{u.exists()?bh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Ff(t,u=>{u.exists()?bh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),yl(l)}}function Ph(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const v=s[_],T=i[_],R=`${n}.${_}`;if(f[R]=!0,v)if(v.path!==T.path)v.unsub();else return;s[_]={data:()=>_d(e,R),unsub:IM({ref:T,target:e,path:R,depth:o,ops:r,resolve:m.bind(null,R),reject:l},t),path:T.path}})}function wM(t,e,n,s,i,r){const o=Object.assign({},Uf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=rs(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,_=un;const v=[],T={added:({newIndex:S,doc:w})=>{v.splice(S,0,Object.create(null));const B=v[S],[j,te]=Sh(w.data(l),void 0,B,o);n.add(at(d),S,j),Ph(o,d,`${h}.${S}`,B,te,n,0,s.bind(null,w),i)},modified:({oldIndex:S,newIndex:w,doc:B})=>{const j=at(d),te=v[S],F=j[S],[ie,re]=Sh(B.data(l),F,te,o);v.splice(w,0,te),n.remove(j,S),n.add(j,w,ie),Ph(o,d,`${h}.${w}`,te,re,n,0,s,i)},removed:({oldIndex:S})=>{const w=at(d);n.remove(w,S),yl(v.splice(S,1)[0])}};function R(S){const w=S.docChanges(a);if(!m&&w.length){m=!0;let B=0;const j=w.length,te=Object.create(null);for(let F=0;F<j;F++)te[w[F].doc.id]=!0;s=F=>{F&&F.id in te&&++B>=j&&(c&&(n.set(t,h,at(d)),d=t),f(at(d)),s=un)}}w.forEach(B=>{T[B.type](B)}),w.length||(c&&(n.set(t,h,at(d)),d=t),s(at(d)))}return u?Wx(e).then(R).catch(i):_=Ff(e,R,i),S=>{if(_(),S){const w=typeof S=="function"?S():[];n.set(t,h,w)}v.forEach(yl)}}function AM(t,e,n,s,i,r){const o=Object.assign({},Uf,r),a="value",l=Object.create(null);s=Gb(s,()=>_d(t,a));let c=un;function u(h){h.exists()?bh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?jI(e).then(u).catch(i):c=Ff(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}yl(l)}}const $m=Symbol();function RM(t,e){let n=un;const s=Object.assign({},Uf,e),i=at(t),r=s.target||rs();Yb()&&(s.once=!0);const o=yM(i,s.ssrKey,$m,Io()),a=o!==$m;a&&(r.value=o);let l=!a;const c=rs(!1),u=rs(),h=k_(),d=p_();let f=un;function m(){let T=at(t);const R=new Promise((S,w)=>{if(n(s.reset),!T)return n=un,S(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(yd(T)?AM:wM)(r,T,CM,S,w,s)}).catch(S=>(h.value===R&&(u.value=S),Promise.reject(S))).finally(()=>{h.value===R&&(c.value=!1)});h.value=R}let _=un;tt(t)&&(_=Ei(t,m)),m(),i&&(f=EM(h.value,i,s.ssrKey)),td()&&G_(()=>h.value),d&&Rw(v);function v(T=s.reset){_(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const CM={set:(t,e,n)=>Bb(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function uV(t,e){return RM(t,{target:rs([]),...e})}function SM(t){return(e,n)=>{const s=Xb(e,n).run(()=>rs(t));gv.set(e,s),eP(s,e)}}function hV(t){return Ub?hv(Io(t)):null}function bM(t,{firebaseApp:e,modules:n=[]}){t.provide(pv,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const PM=Symbol();var jm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jm||(jm={}));function kM(){const t=f_(!0),e=t.run(()=>rs({}));let n=[],s=[];const i=qh({install(r){i._a=r,r.provide(PM,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!db?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const QI=Cy({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),dV=kx(QI);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const di=typeof window<"u";function NM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function hu(t,e){const n={};for(const s in e){const i=e[s];n[s]=nn(i)?i.map(t):t(i)}return n}const Fr=()=>{},nn=Array.isArray,OM=/\/$/,DM=t=>t.replace(OM,"");function du(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=VM(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function xM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function MM(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Wi(e.matched[s],n.matched[i])&&YI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function YI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LM(t[n],e[n]))return!1;return!0}function LM(t,e){return nn(t)?Wm(t,e):nn(e)?Wm(e,t):t===e}function Wm(t,e){return nn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function VM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function FM(t){if(!t)if(di){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DM(t)}const UM=/^[^#]+#/;function BM(t,e){return t.replace(UM,"#")+e}function $M(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Rc=()=>({left:window.pageXOffset,top:window.pageYOffset});function jM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$M(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qm(t,e){return(history.state?history.state.position-e:-1)+t}const kh=new Map;function HM(t,e){kh.set(t,e)}function WM(t){const e=kh.get(t);return kh.delete(t),e}let qM=()=>location.protocol+"//"+location.host;function XI(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Hm(l,"")}return Hm(n,t)+s+i}function KM(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=XI(t,location),m=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=_?d.position-_.position:0}else s(f);i.forEach(T=>{T(n.value,m,{delta:v,type:po.pop,direction:v?v>0?Ur.forward:Ur.back:Ur.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Rc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Km(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Rc():null}}function zM(t){const{history:e,location:n}=window,s={value:XI(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:qM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,Km(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,e.state,{forward:l,scroll:Rc()});r(u.current,u,!0);const h=Ee({},Km(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function GM(t){t=FM(t);const e=zM(t),n=KM(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:t,go:s,createHref:BM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function QM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),GM(t)}function YM(t){return typeof t=="string"||t&&typeof t=="object"}function JI(t){return typeof t=="string"||typeof t=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ZI=Symbol("");var zm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zm||(zm={}));function qi(t,e){return Ee(new Error,{type:t,[ZI]:!0},e)}function Pn(t,e){return t instanceof Error&&ZI in t&&(e==null||!!(t.type&e))}const Gm="[^/]+?",XM={sensitive:!1,strict:!1,start:!0,end:!0},JM=/[.+*?^${}()[\]/\\]/g;function ZM(t,e){const n=Ee({},XM,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(JM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:_,optional:v,regexp:T}=d;r.push({name:m,repeatable:_,optional:v});const R=T||Gm;if(R!==Gm){f+=10;try{new RegExp(`(${R})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+w.message)}}let S=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(S=v&&c.length<2?`(?:/${S})`:"/"+S),v&&(S+="?"),i+=S,f+=20,v&&(f+=-8),_&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:v}=f,T=m in c?c[m]:"";if(nn(T)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=nn(T)?T.join("/"):T;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function eL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tL(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=eL(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Qm(s))return 1;if(Qm(i))return-1}return i.length-s.length}function Qm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nL={type:0,value:""},sL=/[a-zA-Z0-9_]/;function iL(t){if(!t)return[[]];if(t==="/")return[[nL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:sL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function rL(t,e,n){const s=ZM(iL(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function oL(t,e){const n=[],s=new Map;e=Jm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=aL(u);m.aliasOf=d&&d.record;const _=Jm(e,u),v=[m];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of S)v.push(Ee({},m,{components:d?d.record.components:m.components,path:w,aliasOf:d?d.record:m}))}let T,R;for(const S of v){const{path:w}=S;if(h&&w[0]!=="/"){const B=h.record.path,j=B[B.length-1]==="/"?"":"/";S.path=h.record.path+(w&&j+w)}if(T=rL(S,h,_),d?d.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),f&&u.name&&!Xm(T)&&o(u.name)),m.children){const B=m.children;for(let j=0;j<B.length;j++)r(B[j],T,d&&d.children[j])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return R?()=>{o(R)}:Fr}function o(u){if(JI(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ew(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw qi(1,{location:u});_=d.record.name,f=Ee(Ym(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Ym(u.params,d.keys.map(R=>R.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(R=>R.re.test(m)),d&&(f=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw qi(1,{location:u,currentLocation:h});_=d.record.name,f=Ee({},h.params,u.params),m=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:m,params:f,matched:v,meta:cL(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ym(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cL(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Jm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ew(t,e){return e.children.some(n=>n===t||ew(t,n))}const tw=/#/g,uL=/&/g,hL=/\//g,dL=/=/g,fL=/\?/g,nw=/\+/g,pL=/%5B/g,gL=/%5D/g,sw=/%5E/g,mL=/%60/g,iw=/%7B/g,_L=/%7C/g,rw=/%7D/g,yL=/%20/g;function Bf(t){return encodeURI(""+t).replace(_L,"|").replace(pL,"[").replace(gL,"]")}function vL(t){return Bf(t).replace(iw,"{").replace(rw,"}").replace(sw,"^")}function Nh(t){return Bf(t).replace(nw,"%2B").replace(yL,"+").replace(tw,"%23").replace(uL,"%26").replace(mL,"`").replace(iw,"{").replace(rw,"}").replace(sw,"^")}function EL(t){return Nh(t).replace(dL,"%3D")}function TL(t){return Bf(t).replace(tw,"%23").replace(fL,"%3F")}function IL(t){return t==null?"":TL(t).replace(hL,"%2F")}function vl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nw," "),o=r.indexOf("="),a=vl(o<0?r:r.slice(0,o)),l=o<0?null:vl(r.slice(o+1));if(a in e){let c=e[a];nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zm(t){let e="";for(let n in t){const s=t[n];if(n=EL(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(s)?s.map(r=>r&&Nh(r)):[s&&Nh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const RL=Symbol(""),e_=Symbol(""),Cc=Symbol(""),$f=Symbol(""),Oh=Symbol("");function gr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(qi(4,{from:n,to:e})):h instanceof Error?a(h):YM(h)?a(qi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function fu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(CL(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Jn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=NM(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Jn(d,n,s,r,o)()}))}}return i}function CL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function t_(t){const e=Ot(Cc),n=Ot($f),s=Kt(()=>e.resolve(at(t.to))),i=Kt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Wi.bind(null,u));if(d>-1)return d;const f=n_(l[c-2]);return c>1&&n_(u)===f&&h[h.length-1].path!==f?h.findIndex(Wi.bind(null,l[c-2])):d}),r=Kt(()=>i.value>-1&&kL(n.params,s.value.params)),o=Kt(()=>i.value>-1&&i.value===n.matched.length-1&&YI(n.params,s.value.params));function a(l={}){return PL(l)?e[at(t.replace)?"replace":"push"](at(t.to)).catch(Fr):Promise.resolve()}return{route:s,href:Kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const SL=kl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:t_,setup(t,{slots:e}){const n=Cl(t_(t)),{options:s}=Ot(Cc),i=Kt(()=>({[s_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[s_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:sd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),bL=SL;function PL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kL(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function n_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const s_=(t,e,n)=>t??e??n,NL=kl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(Oh),i=Kt(()=>t.route||s.value),r=Ot(e_,0),o=Kt(()=>{let c=at(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kt(()=>i.value.matched[o.value]);_a(e_,Kt(()=>o.value+1)),_a(RL,a),_a(Oh,i);const l=rs();return Ei(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Wi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return i_(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=sd(d,Ee({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return i_(n.default,{Component:v,route:c})||v}}});function i_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ow=NL;function OL(t){const e=oL(t.routes,t),n=t.parseQuery||wL,s=t.stringifyQuery||Zm,i=t.history,r=gr(),o=gr(),a=gr(),l=k_(Yn);let c=Yn;di&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hu.bind(null,I=>""+I),h=hu.bind(null,IL),d=hu.bind(null,vl);function f(I,V){let D,q;return JI(I)?(D=e.getRecordMatcher(I),q=V):q=I,e.addRoute(q,D)}function m(I){const V=e.getRecordMatcher(I);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function T(I,V){if(V=Ee({},V||l.value),typeof I=="string"){const y=du(n,I,V.path),E=e.resolve({path:y.path},V),A=i.createHref(y.fullPath);return Ee(y,E,{params:d(E.params),hash:vl(y.hash),redirectedFrom:void 0,href:A})}let D;if("path"in I)D=Ee({},I,{path:du(n,I.path,V.path).path});else{const y=Ee({},I.params);for(const E in y)y[E]==null&&delete y[E];D=Ee({},I,{params:h(y)}),V.params=h(V.params)}const q=e.resolve(D,V),_e=I.hash||"";q.params=u(d(q.params));const p=xM(s,Ee({},I,{hash:vL(_e),path:q.path})),g=i.createHref(p);return Ee({fullPath:p,hash:_e,query:s===Zm?AL(I.query):I.query||{}},q,{redirectedFrom:void 0,href:g})}function R(I){return typeof I=="string"?du(n,I,l.value.path):Ee({},I)}function S(I,V){if(c!==I)return qi(8,{from:V,to:I})}function w(I){return te(I)}function B(I){return w(Ee(R(I),{replace:!0}))}function j(I){const V=I.matched[I.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let q=typeof D=="function"?D(I):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=R(q):{path:q},q.params={}),Ee({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function te(I,V){const D=c=T(I),q=l.value,_e=I.state,p=I.force,g=I.replace===!0,y=j(D);if(y)return te(Ee(R(y),{state:typeof y=="object"?Ee({},_e,y.state):_e,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let A;return!p&&MM(s,q,D)&&(A=qi(16,{to:E,from:q}),sn(q,q,!0,!1)),(A?Promise.resolve(A):re(E,q)).catch(b=>Pn(b)?Pn(b,2)?b:qn(b):me(b,E,q)).then(b=>{if(b){if(Pn(b,2))return te(Ee({replace:g},R(b.to),{state:typeof b.to=="object"?Ee({},_e,b.to.state):_e,force:p}),V||E)}else b=H(E,q,!0,g,_e);return De(E,q,b),b})}function F(I,V){const D=S(I,V);return D?Promise.reject(D):Promise.resolve()}function ie(I){const V=ii.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(I):I()}function re(I,V){let D;const[q,_e,p]=DL(I,V);D=fu(q.reverse(),"beforeRouteLeave",I,V);for(const y of q)y.leaveGuards.forEach(E=>{D.push(Jn(E,I,V))});const g=F.bind(null,I,V);return D.push(g),it(D).then(()=>{D=[];for(const y of r.list())D.push(Jn(y,I,V));return D.push(g),it(D)}).then(()=>{D=fu(_e,"beforeRouteUpdate",I,V);for(const y of _e)y.updateGuards.forEach(E=>{D.push(Jn(E,I,V))});return D.push(g),it(D)}).then(()=>{D=[];for(const y of p)if(y.beforeEnter)if(nn(y.beforeEnter))for(const E of y.beforeEnter)D.push(Jn(E,I,V));else D.push(Jn(y.beforeEnter,I,V));return D.push(g),it(D)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),D=fu(p,"beforeRouteEnter",I,V),D.push(g),it(D))).then(()=>{D=[];for(const y of o.list())D.push(Jn(y,I,V));return D.push(g),it(D)}).catch(y=>Pn(y,8)?y:Promise.reject(y))}function De(I,V,D){a.list().forEach(q=>ie(()=>q(I,V,D)))}function H(I,V,D,q,_e){const p=S(I,V);if(p)return p;const g=V===Yn,y=di?history.state:{};D&&(q||g?i.replace(I.fullPath,Ee({scroll:g&&y&&y.scroll},_e)):i.push(I.fullPath,_e)),l.value=I,sn(I,V,D,g),qn()}let ve;function Et(){ve||(ve=i.listen((I,V,D)=>{if(!qo.listening)return;const q=T(I),_e=j(q);if(_e){te(Ee(_e,{replace:!0}),q).catch(Fr);return}c=q;const p=l.value;di&&HM(qm(p.fullPath,D.delta),Rc()),re(q,p).catch(g=>Pn(g,12)?g:Pn(g,2)?(te(g.to,q).then(y=>{Pn(y,20)&&!D.delta&&D.type===po.pop&&i.go(-1,!1)}).catch(Fr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),me(g,q,p))).then(g=>{g=g||H(q,p,!1),g&&(D.delta&&!Pn(g,8)?i.go(-D.delta,!1):D.type===po.pop&&Pn(g,20)&&i.go(-1,!1)),De(q,p,g)}).catch(Fr)}))}let Sn=gr(),Ve=gr(),Ae;function me(I,V,D){qn(I);const q=Ve.list();return q.length?q.forEach(_e=>_e(I,V,D)):console.error(I),Promise.reject(I)}function bn(){return Ae&&l.value!==Yn?Promise.resolve():new Promise((I,V)=>{Sn.add([I,V])})}function qn(I){return Ae||(Ae=!I,Et(),Sn.list().forEach(([V,D])=>I?D(I):V()),Sn.reset()),I}function sn(I,V,D,q){const{scrollBehavior:_e}=t;if(!di||!_e)return Promise.resolve();const p=!D&&WM(qm(I.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return x_().then(()=>_e(I,V,p)).then(g=>g&&jM(g)).catch(g=>me(g,I,V))}const At=I=>i.go(I);let si;const ii=new Set,qo={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:_,resolve:T,options:t,push:w,replace:B,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:bn,install(I){const V=this;I.component("RouterLink",bL),I.component("RouterView",ow),I.config.globalProperties.$router=V,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>at(l)}),di&&!si&&l.value===Yn&&(si=!0,w(i.location).catch(_e=>{}));const D={};for(const _e in Yn)Object.defineProperty(D,_e,{get:()=>l.value[_e],enumerable:!0});I.provide(Cc,V),I.provide($f,R_(D)),I.provide(Oh,l);const q=I.unmount;ii.add(I),I.unmount=function(){ii.delete(I),ii.size<1&&(c=Yn,ve&&ve(),ve=null,l.value=Yn,si=!1,Ae=!1),q()}}};function it(I){return I.reduce((V,D)=>V.then(()=>ie(D)),Promise.resolve())}return qo}function DL(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wi(c,l))||i.push(l))}return[n,s,i]}function xL(){return Ot(Cc)}function ML(){return Ot($f)}const LL=kl({__name:"App",setup(t){const e=Jb(),n=xL(),s=ML();return Ei(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(mo(),Jh(at(ow)))}}),VL="modulepreload",FL=function(t){return"/"+t},r_={},pu=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=FL(r),r in r_)return;r_[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":VL,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const aw=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},UL={},BL={class:"card"};function $L(t,e){return mo(),oy("div",BL,[OA(t.$slots,"title",{},void 0,!0)])}const gu=aw(UL,[["render",$L],["__scopeId","data-v-52aa979e"]]),jL=t=>(lA("data-v-bf674ff6"),t=t(),cA(),t),HL=jL(()=>Zh("h1",null,"Fonti Paintball",-1)),WL=kl({__name:"HomeView",setup(t){return(e,n)=>{const s=PA("RouterLink");return mo(),oy("main",null,[HL,We(s,{to:"/rules"},{default:ci(()=>[We(gu,null,{title:ci(()=>[va(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),We(s,{to:"/availability"},{default:ci(()=>[We(gu,null,{title:ci(()=>[va(" Inserisci disponibilità ")]),_:1})]),_:1}),We(gu,null,{title:ci(()=>[va(" Statistiche giocatori (prossimamente...) ")]),_:1})])}}});const qL=aw(WL,[["__scopeId","data-v-bf674ff6"]]),lw=OL({history:QM("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:qL},{path:"/login",name:"login",component:()=>pu(()=>import("./LoginView-c2859ba3.js"),["assets/LoginView-c2859ba3.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>pu(()=>import("./AvailabilityView-9eede132.js"),["assets/AvailabilityView-9eede132.js","assets/AvailabilityView-17d6dec8.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>pu(()=>import("./RulesView-823506f6.js"),["assets/RulesView-823506f6.js","assets/RulesView-af284cb9.css"])}]});lw.beforeEach(async t=>{if(t.meta.requiresAuth&&!await Zb())return{path:"/login",query:{redirect:t.fullPath}}});const Sc=U0(LL);Sc.use(kM());Sc.use(lw);Sc.use(bM,{firebaseApp:QI,modules:[SM()]});Sc.mount("#app");export{GL as A,Fh as B,Vh as C,rs as D,rV as E,Vt as F,es as G,uV as H,dV as I,QL as J,oV as K,jI as L,lV as M,cV as N,aV as O,hy as T,aw as _,Jb as a,mo as b,oy as c,kl as d,at as e,YL as f,eV as g,Zh as h,We as i,cA as j,zL as k,JL as l,Jh as m,OA as n,q_ as o,lA as p,va as q,PA as r,ZL as s,KL as t,hV as u,XL as v,ci as w,Cl as x,Kt as y,Ei as z};
